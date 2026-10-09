import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ILoadOptionsFunctions,
	INodePropertyOptions,
	IWebhookFunctions,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

import { API_BASE, DYNAMIC_SOURCES } from './generated';

type MeetzyContext = IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions | IWebhookFunctions;

const HTTP_HINTS: Record<string, string> = {
	'401':
		'The API key is wrong or revoked. Create a new one in Meetzy: Apps & integrations → API keys.',
	'402': 'Not enough credits in the Meetzy workspace for this call.',
	'403': 'The API key lacks the scope for this call (read, write or webhooks).',
	'404': 'The record does not exist (or belongs to another workspace).',
	'409': 'The record already exists.',
	'429': 'Rate limit reached. Try again after the Retry-After delay.',
};

/** Pulls the `{ "error": "message" }` the Meetzy API answers with, if any. */
function apiErrorMessage(error: JsonObject): string | undefined {
	const candidates: unknown[] = [
		(error.cause as JsonObject | undefined)?.response,
		error.response,
		error.error,
	];
	for (const c of candidates) {
		if (!c || typeof c !== 'object') continue;
		const data = (c as JsonObject).data ?? (c as JsonObject).body ?? c;
		if (data && typeof data === 'object' && typeof (data as JsonObject).error === 'string') {
			return (data as JsonObject).error as string;
		}
	}
	return undefined;
}

/**
 * One call to the Meetzy REST API with the node's credentials.
 * Errors come back as NodeApiError with the API's own message.
 */
export async function meetzyApiRequest(
	this: MeetzyContext,
	method: IHttpRequestMethods,
	endpoint: string,
	body?: IDataObject,
	qs?: IDataObject,
): Promise<IDataObject> {
	const options: IHttpRequestOptions = {
		method,
		baseURL: API_BASE,
		url: endpoint,
		headers: { Accept: 'application/json' },
		json: true,
	};
	if (qs && Object.keys(qs).length) options.qs = qs;
	if (body && Object.keys(body).length) options.body = body;

	try {
		const response = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'meetzyApi',
			options,
		);
		return (response ?? {}) as IDataObject;
	} catch (error) {
		const err = error as JsonObject;
		const httpCode = String(
			err.httpCode ??
				(err.response as JsonObject | undefined)?.status ??
				(err.cause as JsonObject | undefined)?.status ??
				'',
		);
		const message = apiErrorMessage(err);
		throw new NodeApiError(this.getNode(), err, {
			message: message ? `Meetzy: ${message}` : undefined,
			description: HTTP_HINTS[httpCode],
			httpCode: httpCode || undefined,
		});
	}
}

/** Reads a parameter the dynamic dropdown depends on, wherever it lives in the node. */
function dependencyValue(ctx: ILoadOptionsFunctions, name: string): string {
	for (const path of [
		name,
		`additionalFields.${name}`,
		`updateFields.${name}`,
		`filters.${name}`,
	]) {
		try {
			const value = ctx.getCurrentNodeParameter(path);
			if (typeof value === 'string' && value) return value;
		} catch {
			// not where the parameter lives for this operation: try the next place
		}
	}
	return '';
}

/** Lists the options of a dynamic dropdown declared in the manifest (DYNAMIC). */
export async function loadDynamicOptions(
	this: ILoadOptionsFunctions,
	sourceKey: string,
): Promise<INodePropertyOptions[]> {
	const source = DYNAMIC_SOURCES[sourceKey];
	const response = await meetzyApiRequest.call(this, 'GET', source.endpoint);
	let rows = (response[source.list] as IDataObject[] | undefined) ?? [];
	if (source.nested) {
		const parent = source.depends ? dependencyValue(this, source.depends) : '';
		rows = rows
			.filter((row) => !parent || row.id === parent)
			.flatMap((row) => (row[source.nested as string] as IDataObject[] | undefined) ?? []);
	}
	return rows
		.filter((row) => row[source.value] !== undefined && row[source.value] !== null)
		.map((row) => ({
			name: String(row[source.label] ?? row[source.value]),
			value: row[source.value] as string,
		}));
}
