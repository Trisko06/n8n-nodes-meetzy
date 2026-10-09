import type {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';

import { PROPERTIES, ROUTES, type Route, type RouteField } from './generated';
import { loadDynamicOptions, meetzyApiRequest } from './GenericFunctions';

/** How many records one page asks for when "Return All" is on */
const PAGE_SIZE = 100;
/** Hard stop for "Return All", so a runaway list cannot loop forever */
const MAX_RECORDS = 50000;

function parseJson(
	value: unknown,
	label: string,
	node: IExecuteFunctions,
	itemIndex: number,
): unknown {
	if (typeof value !== 'string') return value;
	const text = value.trim();
	if (!text) return undefined;
	try {
		return JSON.parse(text);
	} catch {
		throw new NodeOperationError(node.getNode(), `"${label}" is not valid JSON`, { itemIndex });
	}
}

/** Turns a node parameter value into what the API expects for this field */
function convert(
	field: RouteField,
	value: unknown,
	ctx: IExecuteFunctions,
	itemIndex: number,
): unknown {
	if (value === undefined || value === null || value === '') return undefined;
	switch (field.kind) {
		case 'list':
			if (Array.isArray(value)) return value;
			return String(value)
				.split(',')
				.map((s) => s.trim())
				.filter(Boolean);
		case 'json':
			return parseJson(value, field.name, ctx, itemIndex);
		case 'date':
			return String(value).slice(0, 10);
		case 'number':
			return typeof value === 'number' ? value : Number(value);
		case 'boolean':
			return Boolean(value);
		default:
			return value;
	}
}

/** Builds path, query and body of one call from the node parameters */
function buildRequest(
	ctx: IExecuteFunctions,
	route: Route,
	itemIndex: number,
): { path: string; qs: IDataObject; body: IDataObject } {
	let path = route.path;
	const qs: IDataObject = {};
	const body: IDataObject = {};
	const collections: Record<string, IDataObject> = {};

	for (const field of route.fields) {
		let raw: unknown;
		if (field.collection) {
			if (!collections[field.collection]) {
				collections[field.collection] = ctx.getNodeParameter(
					field.collection,
					itemIndex,
					{},
				) as IDataObject;
			}
			raw = collections[field.collection][field.name];
		} else {
			raw = ctx.getNodeParameter(field.name, itemIndex);
		}
		const value = convert(field, raw, ctx, itemIndex);
		if (value === undefined) continue;
		if (field.in === 'path') {
			path = path.replace(`:${field.name}`, encodeURIComponent(String(value)));
		} else if (field.in === 'query') {
			qs[field.name] = value as IDataObject[string];
		} else {
			body[field.name] = value as IDataObject[string];
		}
	}
	return { path, qs, body };
}

export class Meetzy implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Meetzy',
		name: 'meetzy',
		icon: { light: 'file:meetzy.svg', dark: 'file:meetzy.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description:
			'Sales CRM with B2B prospect finder, WhatsApp & LinkedIn messaging, email sequences, ERP sales analytics and AI copilot',
		defaults: {
			name: 'Meetzy',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'meetzyApi',
				required: true,
			},
		],
		properties: PROPERTIES,
	};

	methods = {
		loadOptions: {
			async getPipelines(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return await loadDynamicOptions.call(this, 'pipelines');
			},
			async getPipelineStages(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return await loadDynamicOptions.call(this, 'pipelineStages');
			},
			async getMembers(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return await loadDynamicOptions.call(this, 'members');
			},
			async getCycles(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return await loadDynamicOptions.call(this, 'cycles');
			},
			async getCycleStages(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return await loadDynamicOptions.call(this, 'cycleStages');
			},
			async getSequences(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return await loadDynamicOptions.call(this, 'sequences');
			},
			async getTemplates(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return await loadDynamicOptions.call(this, 'templates');
			},
			async getWorkflows(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return await loadDynamicOptions.call(this, 'workflows');
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const operation = this.getNodeParameter('operation', i) as string;
				const route = ROUTES[operation];
				if (!route) {
					throw new NodeOperationError(this.getNode(), `Unknown operation "${operation}"`, {
						itemIndex: i,
					});
				}

				let output: IDataObject | IDataObject[];

				if (route.kind === 'custom') {
					// Custom API Request: any endpoint of https://meetzy.me/api/v1
					const method = this.getNodeParameter('method', i) as IHttpRequestMethods;
					const rawPath = (this.getNodeParameter('path', i) as string).trim();
					const path = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
					const qs = (parseJson(
						this.getNodeParameter('query', i, '{}'),
						'Query Parameters',
						this,
						i,
					) ?? {}) as IDataObject;
					const body =
						method === 'GET' || method === 'DELETE'
							? undefined
							: ((parseJson(this.getNodeParameter('body', i, '{}'), 'Body', this, i) ??
									{}) as IDataObject);
					output = await meetzyApiRequest.call(this, method, path, body, qs);
				} else if (route.kind === 'search') {
					const { path, qs, body } = buildRequest(this, route, i);
					const params = route.limitIn === 'body' ? body : qs;
					const returnAll = route.paging
						? (this.getNodeParameter('returnAll', i, false) as boolean)
						: false;
					const records: IDataObject[] = [];

					if (returnAll) {
						let offset = 0;
						for (;;) {
							params.limit = PAGE_SIZE;
							params.offset = offset;
							const page = await meetzyApiRequest.call(this, route.method, path, body, qs);
							const rows = (page[route.list as string] as IDataObject[] | undefined) ?? [];
							records.push(...rows);
							offset += rows.length;
							const total = typeof page.total === 'number' ? page.total : undefined;
							if (rows.length < PAGE_SIZE || records.length >= MAX_RECORDS) break;
							if (total !== undefined && offset >= total) break;
						}
					} else {
						if (route.limitIn) params.limit = this.getNodeParameter('limit', i, 50) as number;
						const page = await meetzyApiRequest.call(this, route.method, path, body, qs);
						const rows = page[route.list as string];
						records.push(...((Array.isArray(rows) ? rows : []) as IDataObject[]));
					}
					output = records;
				} else {
					const { path, qs, body } = buildRequest(this, route, i);
					const response = await meetzyApiRequest.call(this, route.method, path, body, qs);
					output = route.output === 'none' ? { success: true, ...response } : response;
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(output),
					{ itemData: { item: i } },
				);
				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error).message },
						pairedItem: { item: i },
					});
					continue;
				}
				if (error instanceof NodeOperationError) {
					throw new NodeOperationError(this.getNode(), error.message, { itemIndex: i });
				}
				throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex: i });
			}
		}

		return [returnData];
	}
}
