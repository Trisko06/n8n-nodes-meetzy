import { createHmac, timingSafeEqual } from 'node:crypto';
import type {
	IDataObject,
	IHookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionTypes } from 'n8n-workflow';

import { meetzyApiRequest } from '../Meetzy/GenericFunctions';
import { EVENT_OPTIONS } from '../Meetzy/generated';

/** A delivery older than this (in seconds) is refused, like a replayed one */
const MAX_AGE_SECONDS = 5 * 60;

interface HookStaticData extends IDataObject {
	hookId?: string;
	hookSecret?: string;
}

export class MeetzyTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Meetzy Trigger',
		name: 'meetzyTrigger',
		icon: { light: 'file:meetzy.svg', dark: 'file:meetzy.dark.svg' },
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["events"].join(", ")}}',
		description:
			'Starts the workflow on Meetzy events: new leads, replies, website visits, deals won, tasks, quotes, form submissions…',
		defaults: {
			name: 'Meetzy Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'meetzyApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				required: true,
				options: [{ name: 'All Events', value: '*' }, ...EVENT_OPTIONS],
				default: [],
				description:
					'The Meetzy events that start the workflow. Pick All Events to receive every contact, deal, company, task, quote, sequence and email event.',
			},
			{
				displayName: 'Simplify',
				name: 'simple',
				type: 'boolean',
				default: true,
				description:
					'Whether to return a simplified version of the response instead of the raw data',
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const data = this.getWorkflowStaticData('node') as HookStaticData;
				if (!data.hookId || !data.hookSecret) return false;
				const webhookUrl = this.getNodeWebhookUrl('default');
				try {
					const response = await meetzyApiRequest.call(this, 'GET', '/webhooks');
					const hooks = (response.webhooks as IDataObject[] | undefined) ?? [];
					const hook = hooks.find((h) => h.id === data.hookId);
					if (hook && hook.active !== false && hook.url === webhookUrl) return true;
				} catch (error) {
					this.logger.warn(
						`Meetzy Trigger: could not list the webhooks (${(error as Error).message})`,
					);
					throw new NodeApiError(this.getNode(), error as JsonObject);
				}
				delete data.hookId;
				delete data.hookSecret;
				return false;
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const chosen = this.getNodeParameter('events', []) as string[];
				const events = !chosen.length || chosen.includes('*') ? ['*'] : chosen;
				const response = await meetzyApiRequest.call(this, 'POST', '/hooks', {
					target_url: webhookUrl,
					events,
					description: 'n8n workflow',
				});
				const data = this.getWorkflowStaticData('node') as HookStaticData;
				data.hookId = response.id as string;
				data.hookSecret = response.secret as string;
				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const data = this.getWorkflowStaticData('node') as HookStaticData;
				if (data.hookId) {
					try {
						await meetzyApiRequest.call(
							this,
							'DELETE',
							`/hooks/${encodeURIComponent(data.hookId)}`,
						);
					} catch (error) {
						// A hook deleted on the Meetzy side is already gone: nothing to clean up
						if ((error as NodeApiError).httpCode !== '404') {
							this.logger.warn(
								`Meetzy Trigger: could not delete the webhook (${(error as Error).message})`,
							);
							throw new NodeApiError(this.getNode(), error as JsonObject);
						}
					}
				}
				delete data.hookId;
				delete data.hookSecret;
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject() as unknown as { rawBody?: Buffer | string };
		const res = this.getResponseObject();
		const headers = this.getHeaderData() as IDataObject;
		const body = this.getBodyData() as IDataObject;
		const data = this.getWorkflowStaticData('node') as HookStaticData;

		// Every delivery is signed: sha256=HMAC_SHA256(secret, timestamp + "." + raw body)
		const secret = data.hookSecret;
		if (secret) {
			const signature = String(headers['x-meetzy-signature'] ?? '');
			const timestamp = String(headers['x-meetzy-timestamp'] ?? '');
			const raw =
				req.rawBody !== undefined && req.rawBody !== null
					? req.rawBody.toString()
					: JSON.stringify(body);
			const expected = `sha256=${createHmac('sha256', secret).update(`${timestamp}.${raw}`).digest('hex')}`;
			const given = Buffer.from(signature);
			const wanted = Buffer.from(expected);
			// X-Meetzy-Timestamp is in seconds
			const fresh =
				/^\d+$/.test(timestamp) &&
				Math.abs(Date.now() / 1000 - Number(timestamp)) < MAX_AGE_SECONDS;
			if (
				!signature ||
				given.length !== wanted.length ||
				!timingSafeEqual(given, wanted) ||
				!fresh
			) {
				res.status(401).json({ error: 'Invalid Meetzy signature' });
				return { noWebhookResponse: true };
			}
		}

		const simple = this.getNodeParameter('simple', true) as boolean;
		let output: IDataObject = body;
		if (simple) {
			const payload = (body.data as IDataObject | undefined) ?? {};
			const { record, ...extra } = payload;
			output = {
				event: body.type,
				type: body.type,
				created_at: body.created_at,
				...extra,
				...((record as IDataObject | undefined) ?? {}),
			};
		}

		return {
			workflowData: [this.helpers.returnJsonArray(output)],
		};
	}
}
