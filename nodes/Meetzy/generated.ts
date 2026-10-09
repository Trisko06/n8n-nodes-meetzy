// Generated from the Meetzy public API reference (https://meetzy.me/docs). Do not edit by hand.
// Do not edit by hand: run `npm run generate` in integrations/n8n instead.
//
// The operation lists are named constants rather than inline arrays: their
// `action` texts are sentence-cased but keep brand names and punctuation from
// the Meetzy catalog ("Send a WhatsApp message"), which the lint's generic
// sentence-case check would split into "whats app".

import type { INodeProperties, INodePropertyOptions } from 'n8n-workflow';

export const API_BASE = 'https://meetzy.me/api/v1';
export const DOCS_URL = 'https://www.meetzy.ai/docs';

export type FieldPlace = 'path' | 'query' | 'body';
export type FieldKind = 'string' | 'number' | 'boolean' | 'date' | 'datetime' | 'list' | 'json';
export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export interface RouteField {
	name: string;
	in: FieldPlace;
	kind: FieldKind;
	/** The collection parameter that holds this optional field */
	collection?: string;
}

export interface Route {
	resource: string;
	method: HttpMethod;
	path: string;
	kind: 'action' | 'search' | 'custom';
	/** Key of the array in the answer (searches) */
	list?: string;
	/** 'record' returns the answer, 'none' returns { success: true } */
	output?: 'record' | 'none';
	/** The endpoint accepts limit + offset: Return All pages through it */
	paging?: boolean;
	limitIn?: 'query' | 'body';
	maxLimit?: number;
	fields: RouteField[];
}

export interface DynamicSource {
	endpoint: string;
	list: string;
	label: string;
	value: string;
	/** Nested array to list (stages of the chosen parent) */
	nested?: string;
	/** Parameter holding the parent id */
	depends?: string;
}

export const ROUTES: Record<string, Route> = {
	createLead: {
		resource: 'contact',
		method: 'POST',
		path: '/contacts',
		kind: 'action',
		fields: [
			{
				name: 'email',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'first_name',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'last_name',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'display_name',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'phone',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'title',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'company',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'company_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'company_website',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'lifecycle_stage',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'pipeline_stage',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'sales_cycle_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'lead_status',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'lead_score',
				in: 'body',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'assigned_to',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'country',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'city',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'region',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'headline',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'linkedin_profile_url',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'tags',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
			{
				name: 'custom_properties',
				in: 'body',
				kind: 'json',
				collection: 'additionalFields',
			},
			{
				name: 'do_not_contact',
				in: 'body',
				kind: 'boolean',
				collection: 'additionalFields',
			},
			{
				name: 'reminder_date',
				in: 'body',
				kind: 'date',
				collection: 'additionalFields',
			},
			{
				name: 'reminder_note',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'reminder_assigned_to',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'label_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'notes',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'secondary_emails',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
			{
				name: 'instagram_username',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'facebook_username',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'twitter_username',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'tiktok_username',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'threads_username',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'source',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'associate_company',
				in: 'body',
				kind: 'boolean',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	upsertLead: {
		resource: 'contact',
		method: 'POST',
		path: '/contacts/upsert',
		kind: 'action',
		fields: [
			{
				name: 'email',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'first_name',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'last_name',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'display_name',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'phone',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'title',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'company',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'company_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'company_website',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'lifecycle_stage',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'pipeline_stage',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'sales_cycle_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'lead_status',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'lead_score',
				in: 'body',
				kind: 'number',
				collection: 'updateFields',
			},
			{
				name: 'assigned_to',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'country',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'city',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'region',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'headline',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'linkedin_profile_url',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'tags',
				in: 'body',
				kind: 'list',
				collection: 'updateFields',
			},
			{
				name: 'custom_properties',
				in: 'body',
				kind: 'json',
				collection: 'updateFields',
			},
			{
				name: 'do_not_contact',
				in: 'body',
				kind: 'boolean',
				collection: 'updateFields',
			},
			{
				name: 'reminder_date',
				in: 'body',
				kind: 'date',
				collection: 'updateFields',
			},
			{
				name: 'reminder_note',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'reminder_assigned_to',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'label_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'notes',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'secondary_emails',
				in: 'body',
				kind: 'list',
				collection: 'updateFields',
			},
			{
				name: 'instagram_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'facebook_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'twitter_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'tiktok_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'threads_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
		],
		output: 'record',
	},
	updateLead: {
		resource: 'contact',
		method: 'PATCH',
		path: '/contacts/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'first_name',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'last_name',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'display_name',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'phone',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'title',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'company',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'company_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'company_website',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'lifecycle_stage',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'pipeline_stage',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'sales_cycle_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'lead_status',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'lead_score',
				in: 'body',
				kind: 'number',
				collection: 'updateFields',
			},
			{
				name: 'assigned_to',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'country',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'city',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'region',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'headline',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'linkedin_profile_url',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'tags',
				in: 'body',
				kind: 'list',
				collection: 'updateFields',
			},
			{
				name: 'custom_properties',
				in: 'body',
				kind: 'json',
				collection: 'updateFields',
			},
			{
				name: 'do_not_contact',
				in: 'body',
				kind: 'boolean',
				collection: 'updateFields',
			},
			{
				name: 'reminder_date',
				in: 'body',
				kind: 'date',
				collection: 'updateFields',
			},
			{
				name: 'reminder_note',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'reminder_assigned_to',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'label_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'notes',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'secondary_emails',
				in: 'body',
				kind: 'list',
				collection: 'updateFields',
			},
			{
				name: 'instagram_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'facebook_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'twitter_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'tiktok_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'threads_username',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
		],
		output: 'record',
	},
	getLead: {
		resource: 'contact',
		method: 'GET',
		path: '/contacts/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
		],
		output: 'record',
	},
	deleteLead: {
		resource: 'contact',
		method: 'DELETE',
		path: '/contacts/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
		],
		output: 'none',
	},
	findLeads: {
		resource: 'contact',
		method: 'GET',
		path: '/contacts',
		kind: 'search',
		fields: [
			{
				name: 'q',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'company_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'owner',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'stage',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'lifecycle_stage',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'min_score',
				in: 'query',
				kind: 'number',
				collection: 'filters',
			},
			{
				name: 'updated_since',
				in: 'query',
				kind: 'datetime',
				collection: 'filters',
			},
			{
				name: 'sort',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'order',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'contacts',
		limitIn: 'query',
		maxLimit: 1000,
		paging: true,
	},
	addNote: {
		resource: 'contact',
		method: 'POST',
		path: '/contacts/:id/notes',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'content',
				in: 'body',
				kind: 'string',
			},
		],
		output: 'record',
	},
	moveLeadStage: {
		resource: 'contact',
		method: 'POST',
		path: '/contacts/bulk/move',
		kind: 'action',
		fields: [
			{
				name: 'contact_ids',
				in: 'body',
				kind: 'list',
			},
			{
				name: 'cycle_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'stage_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
		],
		output: 'record',
	},
	setFollowUp: {
		resource: 'contact',
		method: 'PATCH',
		path: '/contacts/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'reminder_date',
				in: 'body',
				kind: 'date',
			},
			{
				name: 'reminder_note',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'reminder_assigned_to',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
		],
		output: 'record',
	},
	assignLead: {
		resource: 'contact',
		method: 'PATCH',
		path: '/contacts/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'assigned_to',
				in: 'body',
				kind: 'string',
			},
		],
		output: 'record',
	},
	nextBestAction: {
		resource: 'contact',
		method: 'GET',
		path: '/contacts/:id/copilot',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
		],
		output: 'record',
	},
	leadInteractions: {
		resource: 'contact',
		method: 'GET',
		path: '/contacts/:id/interactions',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'social',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	createCompany: {
		resource: 'company',
		method: 'POST',
		path: '/companies',
		kind: 'action',
		fields: [
			{
				name: 'name',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'domain',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'website',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'industry',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'employees',
				in: 'body',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'annual_revenue',
				in: 'body',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'country',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'city',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'address',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'phone',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'linkedin_url',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'description',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'logo_url',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'owner_email',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'lifecycle_stage',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'company_type',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'tier',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'health_score',
				in: 'body',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'tags',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
			{
				name: 'custom',
				in: 'body',
				kind: 'json',
				collection: 'additionalFields',
			},
			{
				name: 'parent_company_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	updateCompany: {
		resource: 'company',
		method: 'PATCH',
		path: '/companies/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'name',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'domain',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'website',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'industry',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'employees',
				in: 'body',
				kind: 'number',
				collection: 'updateFields',
			},
			{
				name: 'annual_revenue',
				in: 'body',
				kind: 'number',
				collection: 'updateFields',
			},
			{
				name: 'country',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'city',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'address',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'phone',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'linkedin_url',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'description',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'logo_url',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'owner_email',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'lifecycle_stage',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'company_type',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'tier',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'health_score',
				in: 'body',
				kind: 'number',
				collection: 'updateFields',
			},
			{
				name: 'tags',
				in: 'body',
				kind: 'list',
				collection: 'updateFields',
			},
			{
				name: 'custom',
				in: 'body',
				kind: 'json',
				collection: 'updateFields',
			},
			{
				name: 'parent_company_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
		],
		output: 'record',
	},
	getCompany: {
		resource: 'company',
		method: 'GET',
		path: '/companies/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
		],
		output: 'record',
	},
	findCompanies: {
		resource: 'company',
		method: 'GET',
		path: '/companies',
		kind: 'search',
		fields: [
			{
				name: 'q',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'owner',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'lifecycle_stage',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'company_type',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'tier',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'sort',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'order',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'companies',
		limitIn: 'query',
		maxLimit: 1000,
		paging: true,
	},
	companySales: {
		resource: 'company',
		method: 'GET',
		path: '/companies/:id/sales',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
		],
		output: 'record',
	},
	createDeal: {
		resource: 'deal',
		method: 'POST',
		path: '/deals',
		kind: 'action',
		fields: [
			{
				name: 'name',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'amount',
				in: 'body',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'currency',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'pipeline_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'stage_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'status',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'probability',
				in: 'body',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'close_date',
				in: 'body',
				kind: 'date',
				collection: 'additionalFields',
			},
			{
				name: 'owner_email',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'company_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'primary_lead_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'priority',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'deal_type',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'source',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'recurring',
				in: 'body',
				kind: 'boolean',
				collection: 'additionalFields',
			},
			{
				name: 'mrr',
				in: 'body',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'next_step',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'next_step_date',
				in: 'body',
				kind: 'date',
				collection: 'additionalFields',
			},
			{
				name: 'description',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'lost_reason',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'won_reason',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'competitors',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
			{
				name: 'tags',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
			{
				name: 'custom',
				in: 'body',
				kind: 'json',
				collection: 'additionalFields',
			},
			{
				name: 'contact_ids',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
			{
				name: 'line_items',
				in: 'body',
				kind: 'json',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	updateDeal: {
		resource: 'deal',
		method: 'PATCH',
		path: '/deals/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'name',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'amount',
				in: 'body',
				kind: 'number',
				collection: 'updateFields',
			},
			{
				name: 'currency',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'pipeline_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'stage_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'status',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'probability',
				in: 'body',
				kind: 'number',
				collection: 'updateFields',
			},
			{
				name: 'close_date',
				in: 'body',
				kind: 'date',
				collection: 'updateFields',
			},
			{
				name: 'owner_email',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'company_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'primary_lead_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'priority',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'deal_type',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'source',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'recurring',
				in: 'body',
				kind: 'boolean',
				collection: 'updateFields',
			},
			{
				name: 'mrr',
				in: 'body',
				kind: 'number',
				collection: 'updateFields',
			},
			{
				name: 'next_step',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'next_step_date',
				in: 'body',
				kind: 'date',
				collection: 'updateFields',
			},
			{
				name: 'description',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'lost_reason',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'won_reason',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'competitors',
				in: 'body',
				kind: 'list',
				collection: 'updateFields',
			},
			{
				name: 'tags',
				in: 'body',
				kind: 'list',
				collection: 'updateFields',
			},
			{
				name: 'custom',
				in: 'body',
				kind: 'json',
				collection: 'updateFields',
			},
		],
		output: 'record',
	},
	getDeal: {
		resource: 'deal',
		method: 'GET',
		path: '/deals/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
		],
		output: 'record',
	},
	findDeals: {
		resource: 'deal',
		method: 'GET',
		path: '/deals',
		kind: 'search',
		fields: [
			{
				name: 'pipeline_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'status',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'stage_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'owner',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'company_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'lead_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'priority',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'close_from',
				in: 'query',
				kind: 'date',
				collection: 'filters',
			},
			{
				name: 'close_to',
				in: 'query',
				kind: 'date',
				collection: 'filters',
			},
			{
				name: 'q',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'sort',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'order',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'deals',
		limitIn: 'query',
		maxLimit: 1000,
		paging: true,
	},
	listPipelines: {
		resource: 'deal',
		method: 'GET',
		path: '/pipelines',
		kind: 'search',
		fields: [],
		list: 'pipelines',
	},
	createTask: {
		resource: 'task',
		method: 'POST',
		path: '/tasks',
		kind: 'action',
		fields: [
			{
				name: 'title',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'description',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'type',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'priority',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'status',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'due_at',
				in: 'body',
				kind: 'datetime',
				collection: 'additionalFields',
			},
			{
				name: 'owner_email',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'lead_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'deal_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'company_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'source',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	completeTask: {
		resource: 'task',
		method: 'PATCH',
		path: '/tasks/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'title',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'description',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'type',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'priority',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'status',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'due_at',
				in: 'body',
				kind: 'datetime',
				collection: 'updateFields',
			},
			{
				name: 'owner_email',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'lead_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'deal_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'company_id',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'source',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'outcome',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
			{
				name: 'completion_note',
				in: 'body',
				kind: 'string',
				collection: 'updateFields',
			},
		],
		output: 'record',
	},
	findTasks: {
		resource: 'task',
		method: 'GET',
		path: '/tasks',
		kind: 'search',
		fields: [
			{
				name: 'status',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'owner',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'due',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'type',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'lead_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'deal_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'company_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'tasks',
		limitIn: 'query',
		maxLimit: 1000,
		paging: true,
	},
	logActivity: {
		resource: 'task',
		method: 'POST',
		path: '/activities',
		kind: 'action',
		fields: [
			{
				name: 'type',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'subject',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'body',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'outcome',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'direction',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'duration_sec',
				in: 'body',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'occurred_at',
				in: 'body',
				kind: 'datetime',
				collection: 'additionalFields',
			},
			{
				name: 'actor_email',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'lead_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'deal_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'company_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'metadata',
				in: 'body',
				kind: 'json',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	findActivities: {
		resource: 'task',
		method: 'GET',
		path: '/activities',
		kind: 'search',
		fields: [
			{
				name: 'lead_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'deal_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'company_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'type',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'actor',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'since',
				in: 'query',
				kind: 'datetime',
				collection: 'filters',
			},
			{
				name: 'include_crm',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'activities',
		limitIn: 'query',
		maxLimit: 1000,
		paging: false,
	},
	sendWhatsapp: {
		resource: 'message',
		method: 'POST',
		path: '/whatsapp/messages',
		kind: 'action',
		fields: [
			{
				name: 'message',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'contact_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'chat_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'phone',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	whatsappMessages: {
		resource: 'message',
		method: 'GET',
		path: '/whatsapp/messages',
		kind: 'search',
		fields: [
			{
				name: 'contact_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'chat_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'phone',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'messages',
		limitIn: 'query',
		maxLimit: 100,
		paging: false,
	},
	whatsappInbox: {
		resource: 'message',
		method: 'GET',
		path: '/whatsapp/inbox',
		kind: 'action',
		fields: [
			{
				name: 'q',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'max_chats',
				in: 'query',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'follow_up_days',
				in: 'query',
				kind: 'number',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	sendLinkedin: {
		resource: 'message',
		method: 'POST',
		path: '/linkedin/messages',
		kind: 'action',
		fields: [
			{
				name: 'contact_id',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'message',
				in: 'body',
				kind: 'string',
			},
		],
		output: 'record',
	},
	linkedinInvite: {
		resource: 'message',
		method: 'POST',
		path: '/linkedin/invitations',
		kind: 'action',
		fields: [
			{
				name: 'contact_id',
				in: 'body',
				kind: 'string',
			},
		],
		output: 'record',
	},
	linkedinStatus: {
		resource: 'message',
		method: 'GET',
		path: '/linkedin/status',
		kind: 'action',
		fields: [
			{
				name: 'contact_id',
				in: 'query',
				kind: 'string',
			},
		],
		output: 'record',
	},
	linkedinMessages: {
		resource: 'message',
		method: 'GET',
		path: '/linkedin/messages',
		kind: 'search',
		fields: [
			{
				name: 'contact_id',
				in: 'query',
				kind: 'string',
			},
		],
		list: 'messages',
		limitIn: 'query',
		maxLimit: 100,
		paging: false,
	},
	sendEmailToLead: {
		resource: 'message',
		method: 'POST',
		path: '/contacts/:id/email',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'subject',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'body',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'template_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'deal_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'track',
				in: 'body',
				kind: 'boolean',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	sendEmail: {
		resource: 'message',
		method: 'POST',
		path: '/mailbox/emails',
		kind: 'action',
		fields: [
			{
				name: 'to',
				in: 'body',
				kind: 'list',
			},
			{
				name: 'subject',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'body',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'cc',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
			{
				name: 'bcc',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
			{
				name: 'in_reply_to',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'tracking',
				in: 'body',
				kind: 'boolean',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	draftEmailAi: {
		resource: 'message',
		method: 'POST',
		path: '/email/ai-draft',
		kind: 'action',
		fields: [
			{
				name: 'goal',
				in: 'body',
				kind: 'string',
			},
			{
				name: 'tone',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'language',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'length',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	quickSend: {
		resource: 'message',
		method: 'POST',
		path: '/email/quick-send',
		kind: 'action',
		fields: [
			{
				name: 'contact_ids',
				in: 'body',
				kind: 'list',
			},
			{
				name: 'template_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'subject',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'body',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'name',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'send_at',
				in: 'body',
				kind: 'datetime',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	findProspects: {
		resource: 'prospect',
		method: 'POST',
		path: '/finder/search',
		kind: 'search',
		fields: [
			{
				name: 'mode',
				in: 'body',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'person_titles',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'person_seniorities',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'person_departments',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'person_locations',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'person_name',
				in: 'body',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'keywords',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'email_status',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'organization_name',
				in: 'body',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'organization_domains',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'organization_locations',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'organization_employee_ranges',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'organization_keyword_tags',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'funding_stages',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'revenue_min',
				in: 'body',
				kind: 'number',
				collection: 'filters',
			},
			{
				name: 'currently_using_any_of_technology_uids',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'organization_job_titles',
				in: 'body',
				kind: 'list',
				collection: 'filters',
			},
			{
				name: 'founded_year_min',
				in: 'body',
				kind: 'number',
				collection: 'filters',
			},
			{
				name: 'latest_funding_amount_min',
				in: 'body',
				kind: 'number',
				collection: 'filters',
			},
		],
		list: 'results',
		limitIn: 'body',
		maxLimit: 100,
		paging: false,
	},
	enrichProspects: {
		resource: 'prospect',
		method: 'POST',
		path: '/finder/enrich',
		kind: 'action',
		fields: [
			{
				name: 'prospects',
				in: 'body',
				kind: 'json',
			},
			{
				name: 'add_to_leads',
				in: 'body',
				kind: 'boolean',
				collection: 'additionalFields',
			},
			{
				name: 'target_criteria',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	finderCredits: {
		resource: 'prospect',
		method: 'GET',
		path: '/finder/credits',
		kind: 'action',
		fields: [],
		output: 'record',
	},
	findVisitors: {
		resource: 'prospect',
		method: 'GET',
		path: '/website/visitors',
		kind: 'search',
		fields: [
			{
				name: 'tracking_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'q',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'identified',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'visitors',
		limitIn: 'query',
		maxLimit: 500,
		paging: true,
	},
	pushVisitors: {
		resource: 'prospect',
		method: 'POST',
		path: '/website/push-to-crm',
		kind: 'action',
		fields: [
			{
				name: 'visitor_ids',
				in: 'body',
				kind: 'list',
			},
		],
		output: 'record',
	},
	enrollSequence: {
		resource: 'sequence',
		method: 'POST',
		path: '/sequences/:id/enroll',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'contact_ids',
				in: 'body',
				kind: 'list',
			},
		],
		output: 'record',
	},
	unenrollSequence: {
		resource: 'sequence',
		method: 'POST',
		path: '/sequences/:id/unenroll',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'contact_ids',
				in: 'body',
				kind: 'list',
			},
		],
		output: 'record',
	},
	listSequences: {
		resource: 'sequence',
		method: 'GET',
		path: '/sequences',
		kind: 'search',
		fields: [],
		list: 'sequences',
	},
	runWorkflow: {
		resource: 'sequence',
		method: 'POST',
		path: '/automations/:id/run',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
			{
				name: 'contact_ids',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
			{
				name: 'deal_ids',
				in: 'body',
				kind: 'list',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	createQuote: {
		resource: 'quote',
		method: 'POST',
		path: '/quotes',
		kind: 'action',
		fields: [
			{
				name: 'deal_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'company_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'lead_id',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'title',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'line_items',
				in: 'body',
				kind: 'json',
				collection: 'additionalFields',
			},
			{
				name: 'currency',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'valid_days',
				in: 'body',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'valid_until',
				in: 'body',
				kind: 'date',
				collection: 'additionalFields',
			},
			{
				name: 'terms',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'notes',
				in: 'body',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	findQuotes: {
		resource: 'quote',
		method: 'GET',
		path: '/quotes',
		kind: 'search',
		fields: [
			{
				name: 'status',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'deal_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'quotes',
		limitIn: 'query',
		maxLimit: 1000,
		paging: false,
	},
	findProducts: {
		resource: 'quote',
		method: 'GET',
		path: '/products',
		kind: 'search',
		fields: [
			{
				name: 'q',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'active',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'source',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'products',
		limitIn: 'query',
		maxLimit: 1000,
		paging: true,
	},
	findDocuments: {
		resource: 'erp',
		method: 'GET',
		path: '/documents',
		kind: 'search',
		fields: [
			{
				name: 'type',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'status',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'company_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'contact_id',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'owner',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'source',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'from',
				in: 'query',
				kind: 'date',
				collection: 'filters',
			},
			{
				name: 'to',
				in: 'query',
				kind: 'date',
				collection: 'filters',
			},
			{
				name: 'number',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
			{
				name: 'past_due',
				in: 'query',
				kind: 'boolean',
				collection: 'filters',
			},
			{
				name: 'updated_since',
				in: 'query',
				kind: 'datetime',
				collection: 'filters',
			},
			{
				name: 'order',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'documents',
		limitIn: 'query',
		maxLimit: 500,
		paging: true,
	},
	getDocument: {
		resource: 'erp',
		method: 'GET',
		path: '/documents/:id',
		kind: 'action',
		fields: [
			{
				name: 'id',
				in: 'path',
				kind: 'string',
			},
		],
		output: 'record',
	},
	salesForecast: {
		resource: 'erp',
		method: 'GET',
		path: '/analytics/forecast',
		kind: 'action',
		fields: [
			{
				name: 'months',
				in: 'query',
				kind: 'number',
				collection: 'additionalFields',
			},
			{
				name: 'basis',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	salesAnalytics: {
		resource: 'erp',
		method: 'GET',
		path: '/analytics/sales',
		kind: 'action',
		fields: [
			{
				name: 'period',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'from',
				in: 'query',
				kind: 'date',
				collection: 'additionalFields',
			},
			{
				name: 'to',
				in: 'query',
				kind: 'date',
				collection: 'additionalFields',
			},
			{
				name: 'compare',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'basis',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'group',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'scope',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	pipelineReport: {
		resource: 'erp',
		method: 'GET',
		path: '/reports/summary',
		kind: 'action',
		fields: [
			{
				name: 'period',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'pipeline_id',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
			{
				name: 'owner',
				in: 'query',
				kind: 'string',
				collection: 'additionalFields',
			},
		],
		output: 'record',
	},
	searchEverything: {
		resource: 'workspace',
		method: 'GET',
		path: '/search',
		kind: 'action',
		fields: [
			{
				name: 'q',
				in: 'query',
				kind: 'string',
			},
		],
		output: 'record',
	},
	getCredits: {
		resource: 'workspace',
		method: 'GET',
		path: '/credits',
		kind: 'action',
		fields: [],
		output: 'record',
	},
	listTeam: {
		resource: 'workspace',
		method: 'GET',
		path: '/team',
		kind: 'action',
		fields: [],
		output: 'record',
	},
	eventLog: {
		resource: 'workspace',
		method: 'GET',
		path: '/events',
		kind: 'search',
		fields: [
			{
				name: 'type',
				in: 'query',
				kind: 'string',
				collection: 'filters',
			},
		],
		list: 'events',
		limitIn: 'query',
		maxLimit: 500,
		paging: false,
	},
	apiCall: {
		resource: 'workspace',
		method: 'GET',
		path: '/',
		kind: 'custom',
		fields: [],
	},
};

export const DYNAMIC_SOURCES: Record<string, DynamicSource> = {
	pipelines: {
		endpoint: '/pipelines',
		list: 'pipelines',
		label: 'name',
		value: 'id',
	},
	pipelineStages: {
		endpoint: '/pipelines',
		list: 'pipelines',
		label: 'name',
		value: 'id',
		nested: 'stages',
		depends: 'pipeline_id',
	},
	members: {
		endpoint: '/team',
		list: 'members',
		label: 'name',
		value: 'email',
	},
	cycles: {
		endpoint: '/crm/cycles',
		list: 'cycles',
		label: 'name',
		value: 'id',
	},
	cycleStages: {
		endpoint: '/crm/cycles',
		list: 'cycles',
		label: 'name',
		value: 'id',
		nested: 'stages',
		depends: 'sales_cycle_id',
	},
	sequences: {
		endpoint: '/sequences',
		list: 'sequences',
		label: 'name',
		value: 'id',
	},
	templates: {
		endpoint: '/email/templates',
		list: 'templates',
		label: 'name',
		value: 'id',
	},
	workflows: {
		endpoint: '/automations',
		list: 'automations',
		label: 'name',
		value: 'id',
	},
};

/** Meetzy event types, for the trigger and the event log */
export const EVENT_OPTIONS: INodePropertyOptions[] = [
	{
		name: 'Companies · Company Created',
		value: 'company.created',
	},
	{
		name: 'Companies · Company Lifecycle Changed',
		value: 'company.lifecycle_changed',
	},
	{
		name: 'Contacts · Contact Created',
		value: 'contact.created',
	},
	{
		name: 'Contacts · Contact Deleted',
		value: 'contact.deleted',
	},
	{
		name: 'Contacts · Contact Owner Changed',
		value: 'contact.owner_changed',
	},
	{
		name: 'Contacts · Contact Pipeline Stage Changed',
		value: 'contact.stage_changed',
	},
	{
		name: 'Contacts · Contact Property Changed',
		value: 'contact.property_changed',
	},
	{
		name: 'Contacts · Contact Replied (Email, LinkedIn, WhatsApp)',
		value: 'contact.replied',
	},
	{
		name: 'Contacts · Contact Status Changed',
		value: 'contact.status_changed',
	},
	{
		name: 'Contacts · Email Link Clicked',
		value: 'contact.email_clicked',
	},
	{
		name: 'Contacts · Email Opened',
		value: 'contact.email_opened',
	},
	{
		name: 'Contacts · Labels / Tags Changed',
		value: 'contact.tags_changed',
	},
	{
		name: 'Contacts · Lead Score Changed',
		value: 'contact.score_changed',
	},
	{
		name: 'Contacts · Lifecycle Stage Changed',
		value: 'contact.lifecycle_changed',
	},
	{
		name: 'Contacts · LinkedIn Invitation Accepted',
		value: 'contact.linkedin_connected',
	},
	{
		name: 'Contacts · Meeting Booked',
		value: 'contact.meeting_booked',
	},
	{
		name: 'Contacts · Note Added',
		value: 'contact.note_added',
	},
	{
		name: 'Contacts · The Contact Emailed You (Any Mailbox)',
		value: 'contact.email_received',
	},
	{
		name: 'Contacts · Visited The Website',
		value: 'contact.website_visit',
	},
	{
		name: 'Contacts · WhatsApp / LinkedIn Message Received',
		value: 'contact.message_received',
	},
	{
		name: 'Contacts · You Emailed The Contact (Any Mailbox: Outlook, Gmail…)',
		value: 'contact.email_sent',
	},
	{
		name: 'Contacts · You Sent a WhatsApp / LinkedIn Message (Any Device)',
		value: 'contact.message_sent',
	},
	{
		name: 'Deals · Deal Amount Changed',
		value: 'deal.amount_changed',
	},
	{
		name: 'Deals · Deal Created',
		value: 'deal.created',
	},
	{
		name: 'Deals · Deal Lost',
		value: 'deal.lost',
	},
	{
		name: 'Deals · Deal Owner Changed',
		value: 'deal.owner_changed',
	},
	{
		name: 'Deals · Deal Past Its Close Date',
		value: 'deal.overdue',
	},
	{
		name: 'Deals · Deal Property Changed',
		value: 'deal.property_changed',
	},
	{
		name: 'Deals · Deal Reopened',
		value: 'deal.reopened',
	},
	{
		name: 'Deals · Deal Stage Changed',
		value: 'deal.stage_changed',
	},
	{
		name: 'Deals · Deal Stuck in Stage Too Long',
		value: 'deal.rotting',
	},
	{
		name: 'Deals · Deal Won',
		value: 'deal.won',
	},
	{
		name: 'Email · Contact Unsubscribed',
		value: 'contact.unsubscribed',
	},
	{
		name: 'Email · Email Could Not Be Sent',
		value: 'email.failed',
	},
	{
		name: 'Email · Email Opened',
		value: 'email.opened',
	},
	{
		name: 'Email · Email Sent (Campaign or Workflow)',
		value: 'email.sent',
	},
	{
		name: 'Email · Link Clicked in an Email',
		value: 'email.clicked',
	},
	{
		name: 'External · Enrolled Manually (CRM, Another Workflow, API, Claude)',
		value: 'workflow.enrolled',
	},
	{
		name: 'External · Form Submitted',
		value: 'form.submitted',
	},
	{
		name: 'External · Inbound Webhook (N8n, Zapier, Forms…)',
		value: 'webhook.received',
	},
	{
		name: 'Quotes · Quote Accepted',
		value: 'quote.accepted',
	},
	{
		name: 'Quotes · Quote Declined',
		value: 'quote.declined',
	},
	{
		name: 'Quotes · Quote Sent',
		value: 'quote.sent',
	},
	{
		name: 'Quotes · Quote Viewed',
		value: 'quote.viewed',
	},
	{
		name: 'Sequences · Enrolled in Sequence',
		value: 'sequence.enrolled',
	},
	{
		name: 'Sequences · Exited Sequence',
		value: 'sequence.exited',
	},
	{
		name: 'Sequences · Sequence Completed',
		value: 'sequence.completed',
	},
	{
		name: 'Tasks · Task Completed',
		value: 'task.completed',
	},
	{
		name: 'Tasks · Task Created',
		value: 'task.created',
	},
	{
		name: 'Tasks · Task Overdue',
		value: 'task.overdue',
	},
];

const contactOperations: INodePropertyOptions[] = [
	{
		name: 'Add a Note to a Lead',
		value: 'addNote',
		description: 'Writes a timestamped note on the contact’s timeline',
		action: 'Add a note to a lead',
	},
	{
		name: 'Assign a Lead to a Teammate',
		value: 'assignLead',
		description: 'Gives the lead an owner (or clears it)',
		action: 'Assign a lead to a teammate',
	},
	{
		name: 'Create a Lead / Contact',
		value: 'createLead',
		description:
			'Adds a lead to the Meetzy CRM and links it to its company (found by email domain or name). An existing email returns the existing contact.',
		action: 'Create a lead / contact',
	},
	{
		name: 'Create or Update a Lead (by Email)',
		value: 'upsertLead',
		description:
			'The safest way to sync from another tool: creates the contact, or updates the fields you send on the one with the same email',
		action: 'Create or update a lead (by email)',
	},
	{
		name: 'Delete a Lead / Contact',
		value: 'deleteLead',
		description: 'Removes the contact and its timeline. Cannot be undone.',
		action: 'Delete a lead / contact',
	},
	{
		name: 'Get a Lead / Contact (360° View)',
		value: 'getLead',
		description:
			'Everything about one person: record, engagement, LinkedIn status, company with what it buys (ERP), deals, tasks, timeline, notes and sequences',
		action: 'Get a lead / contact (360° view)',
	},
	{
		name: 'Get a Lead’s Interactions (Timeline)',
		value: 'leadInteractions',
		description:
			'Everything that happened with a contact: website visits, email opens and clicks, LinkedIn and WhatsApp messages, meetings, sequences, stage changes, deals, quotes',
		action: 'Get a lead’s interactions (timeline)',
	},
	{
		name: 'Get Next Best Action (AI Sales Copilot)',
		value: 'nextBestAction',
		description:
			'What to do next with a lead, from every conversation (email, WhatsApp, LinkedIn), the sales cycle and the ERP: one next step, the other suggestions, the signals and a priority score',
		action: 'Get next best action (AI sales copilot)',
	},
	{
		name: 'Move a Lead to a Sales Cycle Stage',
		value: 'moveLeadStage',
		description:
			'Moves one or several leads to a stage of a sales cycle (CRM board); their open deals follow',
		action: 'Move a lead to a sales cycle stage',
	},
	{
		name: 'Search Leads / Contacts',
		value: 'findLeads',
		description:
			'Finds contacts by text, company, owner, stage, lifecycle, minimum score or last update — sorted by lead score',
		action: 'Search leads / contacts',
	},
	{
		name: 'Set a Follow-up Reminder',
		value: 'setFollowUp',
		description:
			'Sets the date and note of the next follow-up on a lead (shown in Today and the work queue)',
		action: 'Set a follow-up reminder',
	},
	{
		name: 'Update a Lead / Contact',
		value: 'updateLead',
		description:
			'Changes the fields you send: stage, owner, temperature, score, tags, follow-up date, custom properties…',
		action: 'Update a lead / contact',
	},
];

const companyOperations: INodePropertyOptions[] = [
	{
		name: 'Create a Company (Account)',
		value: 'createCompany',
		description:
			'Creates a company. With a domain that already exists, the existing company is returned.',
		action: 'Create a company (account)',
	},
	{
		name: 'Get a Company (Account View)',
		value: 'getCompany',
		description:
			'The company with its contacts, deals, tasks, timeline and what it buys from your ERP',
		action: 'Get a company (account view)',
	},
	{
		name: 'Get a Company’s Sales (ERP)',
		value: 'companySales',
		description:
			'What one customer buys from your ERP or shop: this year vs last year, every year, products, brands, receivables',
		action: 'Get a company’s sales (ERP)',
	},
	{
		name: 'Search Companies',
		value: 'findCompanies',
		description:
			'Finds companies by words in name, domain, industry, city, country or ERP code, with contact, deal and revenue roll-ups',
		action: 'Search companies',
	},
	{
		name: 'Update a Company',
		value: 'updateCompany',
		description:
			'Changes the fields you send: owner, lifecycle stage, type, tier, tags, custom properties…',
		action: 'Update a company',
	},
];

const dealOperations: INodePropertyOptions[] = [
	{
		name: 'Create a Deal',
		value: 'createDeal',
		description:
			'Creates a deal in a pipeline with its contact, company, amount, close date and line items',
		action: 'Create a deal',
	},
	{
		name: 'Get a Deal',
		value: 'getDeal',
		description:
			'The deal with its pipeline, company, contacts, line items, tasks, timeline and quotes',
		action: 'Get a deal',
	},
	{
		name: 'List Pipelines & Stages',
		value: 'listPipelines',
		description: 'Every deal pipeline with its stages (IDs, probabilities)',
		action: 'List pipelines & stages',
	},
	{
		name: 'Search Deals',
		value: 'findDeals',
		description:
			'Finds deals by pipeline, status (open, won, lost), stage, owner, company, contact, close date or name',
		action: 'Search deals',
	},
	{
		name: 'Update a Deal (Move, Win, Lose)',
		value: 'updateDeal',
		description:
			'Moves a deal, wins or loses it, changes its amount, owner, close date… Winning makes its contacts and company customers',
		action: 'Update a deal (move, win, lose)',
	},
];

const taskOperations: INodePropertyOptions[] = [
	{
		name: 'Complete or Update a Task',
		value: 'completeTask',
		description: 'Marks a task done (an activity is logged with the outcome) or changes it',
		action: 'Complete or update a task',
	},
	{
		name: 'Create a Task',
		value: 'createTask',
		description:
			'Creates a task (to-do, call, email, meeting, LinkedIn, follow-up) for a teammate, on a contact, deal or company',
		action: 'Create a task',
	},
	{
		name: 'Log a Call, Meeting or Activity',
		value: 'logActivity',
		description:
			'Writes a call, meeting, email, WhatsApp, LinkedIn message or note on the timeline of a contact, deal or company — and updates “last contacted”',
		action: 'Log a call, meeting or activity',
	},
	{
		name: 'Search Activities (Timeline)',
		value: 'findActivities',
		description:
			'Timeline entries, newest first: calls, meetings, emails, messages, notes, stage moves',
		action: 'Search activities (timeline)',
	},
	{
		name: 'Search Tasks',
		value: 'findTasks',
		description:
			'Open tasks by default, soonest first — by owner, due (overdue, today, upcoming), type, contact, deal or company',
		action: 'Search tasks',
	},
];

const messageOperations: INodePropertyOptions[] = [
	{
		name: 'Draft an Email with AI',
		value: 'draftEmailAi',
		description:
			'Writes a subject and body from a goal, in the tone and language you want, with merge tags. Uses AI credits.',
		action: 'Draft an email with AI',
	},
	{
		name: 'Get LinkedIn Connection Status',
		value: 'linkedinStatus',
		description:
			'Connected, invitation pending or not connected with a contact, with their LinkedIn profile',
		action: 'Get LinkedIn connection status',
	},
	{
		name: 'Get LinkedIn Conversation',
		value: 'linkedinMessages',
		description: 'Recent LinkedIn messages with a contact, oldest first',
		action: 'Get LinkedIn conversation',
	},
	{
		name: 'Get WhatsApp Conversation',
		value: 'whatsappMessages',
		description: 'Recent WhatsApp messages with a contact, a phone number or a chat, oldest first',
		action: 'Get WhatsApp conversation',
	},
	{
		name: 'Get WhatsApp Inbox (Who to Answer)',
		value: 'whatsappInbox',
		description:
			'Conversations where you need to reply, where a follow-up is due, and where you are waiting — matched to CRM contacts',
		action: 'Get WhatsApp inbox (who to answer)',
	},
	{
		name: 'Send a LinkedIn Invitation',
		value: 'linkedinInvite',
		description: 'Sends a LinkedIn connection request to a contact from your own account',
		action: 'Send a LinkedIn invitation',
	},
	{
		name: 'Send a LinkedIn Message',
		value: 'sendLinkedin',
		description:
			'Sends a LinkedIn message from your own account to a contact (1st-degree connections)',
		action: 'Send a LinkedIn message',
	},
	{
		name: 'Send a WhatsApp Message',
		value: 'sendWhatsapp',
		description:
			'Sends a WhatsApp message from your own number to a CRM contact, a known chat or any phone number — no prior conversation needed',
		action: 'Send a WhatsApp message',
	},
	{
		name: 'Send an Email Campaign to Contacts',
		value: 'quickSend',
		description:
			'Emails a list of contacts now (or later) with a template or a subject and body — unsubscribe link added automatically',
		action: 'Send an email campaign to contacts',
	},
	{
		name: 'Send an Email From Your Mailbox',
		value: 'sendEmail',
		description: 'Sends an email to any addresses from your connected mailbox, with your signature',
		action: 'Send an email from your mailbox',
	},
	{
		name: 'Send an Email to a Lead (Tracked)',
		value: 'sendEmailToLead',
		description:
			'Sends one email now from your connected mailbox (Gmail, Outlook…) with open and click tracking, logged on the timeline. Merge tags like {{contact.first_name}} work.',
		action: 'Send an email to a lead (tracked)',
	},
];

const prospectOperations: INodePropertyOptions[] = [
	{
		name: 'Add Website Visitors to The CRM',
		value: 'pushVisitors',
		description: 'Creates or updates a contact for each identified visitor, tagged website',
		action: 'Add website visitors to the CRM',
	},
	{
		name: 'Find B2B Prospects (People & Companies)',
		value: 'findProspects',
		description:
			'Searches 270M+ professional contacts and companies by job title, seniority, industry, size, location, technologies or keywords. People search is free; company search costs 1 credit per page.',
		action: 'Find B2B prospects (people & companies)',
	},
	{
		name: 'Get Prospect Finder Credits',
		value: 'finderCredits',
		description: 'Credits left this month and what each kind of search costs',
		action: 'Get prospect finder credits',
	},
	{
		name: 'Reveal Email & Phone, Add to CRM',
		value: 'enrichProspects',
		description:
			'Reveals the email, phone and employment of prospects from a search and adds them to the CRM (1 credit per prospect, failed reveals refunded)',
		action: 'Reveal email & phone, add to CRM',
	},
	{
		name: 'Search Website Visitors',
		value: 'findVisitors',
		description:
			'Identified visitors of your website (name, company, pages, score), most recent first',
		action: 'Search website visitors',
	},
];

const sequenceOperations: INodePropertyOptions[] = [
	{
		name: 'Enroll a Lead in a Sequence',
		value: 'enrollSequence',
		description:
			'Starts a multichannel sequence (email, LinkedIn, calls, tasks) for one or several contacts',
		action: 'Enroll a lead in a sequence',
	},
	{
		name: 'List Sequences',
		value: 'listSequences',
		description: 'Your sequences with their stats (enrolled, replied, meetings)',
		action: 'List sequences',
	},
	{
		name: 'Remove a Lead From a Sequence',
		value: 'unenrollSequence',
		description: 'Stops the sequence for these contacts',
		action: 'Remove a lead from a sequence',
	},
	{
		name: 'Run a Meetzy Workflow on Leads',
		value: 'runWorkflow',
		description:
			'Enrolls contacts or deals in a Meetzy workflow right away, ignoring its trigger and conditions',
		action: 'Run a Meetzy workflow on leads',
	},
];

const quoteOperations: INodePropertyOptions[] = [
	{
		name: 'Create a Quote',
		value: 'createQuote',
		description:
			'Creates a numbered quote from a deal (its line items) or from lines you give, for a company and contact',
		action: 'Create a quote',
	},
	{
		name: 'Search Products (Catalog)',
		value: 'findProducts',
		description:
			'Products by name or SKU, from your catalog or the one synced from your ERP or shop',
		action: 'Search products (catalog)',
	},
	{
		name: 'Search Quotes',
		value: 'findQuotes',
		description: 'Quotes by status (draft, sent, viewed, accepted, declined) or deal',
		action: 'Search quotes',
	},
];

const erpOperations: INodePropertyOptions[] = [
	{
		name: 'Get an Invoice or Order with Its Lines',
		value: 'getDocument',
		description:
			'One ERP document with its customer and lines (SKU, name, quantity, prices, brand)',
		action: 'Get an invoice or order with its lines',
	},
	{
		name: 'Get Pipeline Report & Forecast',
		value: 'pipelineReport',
		description:
			'Pipeline value, weighted pipeline, won, win rate, average deal, sales cycle and activity for a period',
		action: 'Get pipeline report & forecast',
	},
	{
		name: 'Get Sales Analytics (ERP)',
		value: 'salesAnalytics',
		description:
			'Sales KPIs for a period against the previous one or last year: revenue, documents, customers, average, timeline, breakdowns',
		action: 'Get sales analytics (ERP)',
	},
	{
		name: 'Get Sales Forecast (Next Months)',
		value: 'salesForecast',
		description:
			'The next months of sales, month by month, by customer, brand and salesperson, from what your ERP synced — with the model’s accuracy',
		action: 'Get sales forecast (next months)',
	},
	{
		name: 'Search Invoices, Orders & Quotes (ERP)',
		value: 'findDocuments',
		description:
			'Documents synced from your ERP or shop — invoices, orders, quotes, credit notes — by customer, type, status, date, past due',
		action: 'Search invoices, orders & quotes (ERP)',
	},
];

const workspaceOperations: INodePropertyOptions[] = [
	{
		name: 'Custom API Request',
		value: 'apiCall',
		description:
			'Any call to the Meetzy REST API (https://meetzy.me/api/v1) with your connection — for everything not covered by a module. See https://www.meetzy.ai/docs.',
		action: 'Make a custom API request',
	},
	{
		name: 'Get Credits Balance',
		value: 'getCredits',
		description: 'Monthly AI and data credits: total, used, remaining, reset date',
		action: 'Get credits balance',
	},
	{
		name: 'Get Team',
		value: 'listTeam',
		description: 'Plan, seats and members of the workspace',
		action: 'Get team',
	},
	{
		name: 'Search Everything',
		value: 'searchEverything',
		description:
			'Contacts, companies, deals, tasks, quotes, order forms and ERP documents matching a text',
		action: 'Search everything',
	},
	{
		name: 'Search The Event Log',
		value: 'eventLog',
		description:
			'The latest events of the workspace (contact created, deal won, email opened…), newest first',
		action: 'Search the event log',
	},
];

export const PROPERTIES: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Company',
				value: 'company',
			},
			{
				name: 'Contact / Lead',
				value: 'contact',
			},
			{
				name: 'Deal',
				value: 'deal',
			},
			{
				name: 'ERP Sales Analytics & Forecast',
				value: 'erp',
			},
			{
				name: 'Prospect Finder',
				value: 'prospect',
			},
			{
				name: 'Quote & Product',
				value: 'quote',
			},
			{
				name: 'Sequence & Workflow',
				value: 'sequence',
			},
			{
				name: 'Task & Activity',
				value: 'task',
			},
			{
				name: 'WhatsApp, LinkedIn & Email',
				value: 'message',
			},
			{
				name: 'Workspace',
				value: 'workspace',
			},
		],
		default: 'contact',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contact'],
			},
		},
		options: contactOperations,
		default: 'addNote',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		placeholder: 'name@email.com',
		description: 'Email address. Also accepted as primary_email.',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['createLead'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['createLead'],
			},
		},
		options: [
			{
				displayName: 'Assigned To Name or ID',
				name: 'assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Owner — email of a teammate. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Associate Company',
				name: 'associate_company',
				type: 'boolean',
				default: true,
				description: 'Whether to link to a company automatically. Default true.',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				default: '',
				description:
					'Company name as written on the contact. Meetzy links the contact to its company when it is clear (email domain of one company, else exactly the same name) unless associate_company is false.',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Link to an existing company',
			},
			{
				displayName: 'Company Website',
				name: 'company_website',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'Company website, used to find the company by domain',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Properties',
				name: 'custom_properties',
				type: 'json',
				default: '{}',
				description:
					'Values of your custom properties, keyed by property key (see Properties). A JSON object.',
			},
			{
				displayName: 'Display Name',
				name: 'display_name',
				type: 'string',
				default: '',
				description: 'Full name as shown in the app. Built from first and last name when omitted.',
			},
			{
				displayName: 'Do Not Contact',
				name: 'do_not_contact',
				type: 'boolean',
				default: false,
				description:
					'Whether to never email or message this person (sequences and campaigns skip them)',
			},
			{
				displayName: 'Facebook Username',
				name: 'facebook_username',
				type: 'string',
				default: '',
				description: 'Facebook handle',
			},
			{
				displayName: 'First Name',
				name: 'first_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Headline',
				name: 'headline',
				type: 'string',
				default: '',
				description: 'Professional headline (LinkedIn)',
			},
			{
				displayName: 'Instagram Username',
				name: 'instagram_username',
				type: 'string',
				default: '',
				description: 'Instagram handle',
			},
			{
				displayName: 'Label ID',
				name: 'label_id',
				type: 'string',
				default: '',
				description: 'CRM board label',
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Lead Score',
				name: 'lead_score',
				type: 'number',
				default: 0,
				description: 'Score from 0 to 100. Usually moved by scoring and workflows.',
			},
			{
				displayName: 'Lead Status',
				name: 'lead_status',
				type: 'options',
				options: [
					{
						name: 'Cold',
						value: 'cold',
					},
					{
						name: 'Hot',
						value: 'hot',
					},
					{
						name: 'Warm',
						value: 'warm',
					},
				],
				default: 'hot',
				description:
					'Temperature: hot, warm or cold. Default cold. Setting it by hand stops the automatic temperature.',
			},
			{
				displayName: 'Lifecycle Stage',
				name: 'lifecycle_stage',
				type: 'options',
				options: [
					{
						name: 'Churned',
						value: 'churned',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Evangelist',
						value: 'evangelist',
					},
					{
						name: 'Lead',
						value: 'lead',
					},
					{
						name: 'MQL',
						value: 'mql',
					},
					{
						name: 'Opportunity',
						value: 'opportunity',
					},
					{
						name: 'Other',
						value: 'other',
					},
					{
						name: 'SQL',
						value: 'sql',
					},
					{
						name: 'Subscriber',
						value: 'subscriber',
					},
				],
				default: 'subscriber',
				description:
					'Where the person is in the funnel: subscriber, lead, mql, sql, opportunity, customer, evangelist, churned, other. Default lead.',
			},
			{
				displayName: 'LinkedIn Profile Url',
				name: 'linkedin_profile_url',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'LinkedIn profile URL — needed for LinkedIn steps',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Free text notes field (for timestamped notes use POST /contacts/{ID}/notes)',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number, ideally in international format (+33612345678)',
			},
			{
				displayName: 'Pipeline Stage Name or ID',
				name: 'pipeline_stage',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCycleStages',
					loadOptionsDependsOn: ['additionalFields.sales_cycle_id'],
				},
				default: '',
				description:
					'Stage on the CRM board of their sales cycle (see Sales cycles). Default new_leads. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Region',
				name: 'region',
				type: 'string',
				default: '',
				description: 'Region or state',
			},
			{
				displayName: 'Reminder Assigned To Name or ID',
				name: 'reminder_assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Teammate who should do the follow-up (email). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Reminder Date',
				name: 'reminder_date',
				type: 'dateTime',
				default: '',
				description: 'Follow-up date (YYYY-MM-DD) shown in Follow-ups',
			},
			{
				displayName: 'Reminder Note',
				name: 'reminder_note',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'What the follow-up is about',
			},
			{
				displayName: 'Sales Cycle Name or ID',
				name: 'sales_cycle_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCycles',
				},
				default: '',
				description:
					'Sales cycle the contact belongs to (default or a cycle ID from GET /crm/cycles). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Secondary Emails',
				name: 'secondary_emails',
				type: 'string',
				default: '',
				description:
					'Other addresses of the same person — their emails are matched to this contact. Comma-separated.',
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				description: 'Where the contact comes from (website, event, import…). Default manual.',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Free labels, e.g. ["inbound", "webinar"]. Comma-separated.',
			},
			{
				displayName: 'Threads Username',
				name: 'threads_username',
				type: 'string',
				default: '',
				description: 'Threads handle',
			},
			{
				displayName: 'Tiktok Username',
				name: 'tiktok_username',
				type: 'string',
				default: '',
				description: 'TikTok handle',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Job title',
			},
			{
				displayName: 'Twitter Username',
				name: 'twitter_username',
				type: 'string',
				default: '',
				description: 'X / Twitter handle',
			},
		],
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		default: '',
		placeholder: 'name@email.com',
		description: 'Email address used to find the contact',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['upsertLead'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['upsertLead'],
			},
		},
		options: [
			{
				displayName: 'Assigned To Name or ID',
				name: 'assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Owner — email of a teammate. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				default: '',
				description:
					'Company name as written on the contact. Meetzy links the contact to its company when it is clear (email domain of one company, else exactly the same name) unless associate_company is false.',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Link to an existing company',
			},
			{
				displayName: 'Company Website',
				name: 'company_website',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'Company website, used to find the company by domain',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Properties',
				name: 'custom_properties',
				type: 'json',
				default: '{}',
				description:
					'Values of your custom properties, keyed by property key (see Properties). A JSON object.',
			},
			{
				displayName: 'Display Name',
				name: 'display_name',
				type: 'string',
				default: '',
				description: 'Full name as shown in the app. Built from first and last name when omitted.',
			},
			{
				displayName: 'Do Not Contact',
				name: 'do_not_contact',
				type: 'boolean',
				default: false,
				description:
					'Whether to never email or message this person (sequences and campaigns skip them)',
			},
			{
				displayName: 'Facebook Username',
				name: 'facebook_username',
				type: 'string',
				default: '',
				description: 'Facebook handle',
			},
			{
				displayName: 'First Name',
				name: 'first_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Headline',
				name: 'headline',
				type: 'string',
				default: '',
				description: 'Professional headline (LinkedIn)',
			},
			{
				displayName: 'Instagram Username',
				name: 'instagram_username',
				type: 'string',
				default: '',
				description: 'Instagram handle',
			},
			{
				displayName: 'Label ID',
				name: 'label_id',
				type: 'string',
				default: '',
				description: 'CRM board label',
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Lead Score',
				name: 'lead_score',
				type: 'number',
				default: 0,
				description: 'Score from 0 to 100. Usually moved by scoring and workflows.',
			},
			{
				displayName: 'Lead Status',
				name: 'lead_status',
				type: 'options',
				options: [
					{
						name: 'Cold',
						value: 'cold',
					},
					{
						name: 'Hot',
						value: 'hot',
					},
					{
						name: 'Warm',
						value: 'warm',
					},
				],
				default: 'hot',
				description:
					'Temperature: hot, warm or cold. Default cold. Setting it by hand stops the automatic temperature.',
			},
			{
				displayName: 'Lifecycle Stage',
				name: 'lifecycle_stage',
				type: 'options',
				options: [
					{
						name: 'Churned',
						value: 'churned',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Evangelist',
						value: 'evangelist',
					},
					{
						name: 'Lead',
						value: 'lead',
					},
					{
						name: 'MQL',
						value: 'mql',
					},
					{
						name: 'Opportunity',
						value: 'opportunity',
					},
					{
						name: 'Other',
						value: 'other',
					},
					{
						name: 'SQL',
						value: 'sql',
					},
					{
						name: 'Subscriber',
						value: 'subscriber',
					},
				],
				default: 'subscriber',
				description:
					'Where the person is in the funnel: subscriber, lead, mql, sql, opportunity, customer, evangelist, churned, other. Default lead.',
			},
			{
				displayName: 'LinkedIn Profile Url',
				name: 'linkedin_profile_url',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'LinkedIn profile URL — needed for LinkedIn steps',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Free text notes field (for timestamped notes use POST /contacts/{ID}/notes)',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number, ideally in international format (+33612345678)',
			},
			{
				displayName: 'Pipeline Stage Name or ID',
				name: 'pipeline_stage',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCycleStages',
					loadOptionsDependsOn: ['updateFields.sales_cycle_id'],
				},
				default: '',
				description:
					'Stage on the CRM board of their sales cycle (see Sales cycles). Default new_leads. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Region',
				name: 'region',
				type: 'string',
				default: '',
				description: 'Region or state',
			},
			{
				displayName: 'Reminder Assigned To Name or ID',
				name: 'reminder_assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Teammate who should do the follow-up (email). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Reminder Date',
				name: 'reminder_date',
				type: 'dateTime',
				default: '',
				description: 'Follow-up date (YYYY-MM-DD) shown in Follow-ups',
			},
			{
				displayName: 'Reminder Note',
				name: 'reminder_note',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'What the follow-up is about',
			},
			{
				displayName: 'Sales Cycle Name or ID',
				name: 'sales_cycle_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCycles',
				},
				default: '',
				description:
					'Sales cycle the contact belongs to (default or a cycle ID from GET /crm/cycles). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Secondary Emails',
				name: 'secondary_emails',
				type: 'string',
				default: '',
				description:
					'Other addresses of the same person — their emails are matched to this contact. Comma-separated.',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Free labels, e.g. ["inbound", "webinar"]. Comma-separated.',
			},
			{
				displayName: 'Threads Username',
				name: 'threads_username',
				type: 'string',
				default: '',
				description: 'Threads handle',
			},
			{
				displayName: 'Tiktok Username',
				name: 'tiktok_username',
				type: 'string',
				default: '',
				description: 'TikTok handle',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Job title',
			},
			{
				displayName: 'Twitter Username',
				name: 'twitter_username',
				type: 'string',
				default: '',
				description: 'X / Twitter handle',
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'string',
		default: '',
		description: 'The contact ID (from a trigger, a search or the URL of the contact in Meetzy)',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['updateLead'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['updateLead'],
			},
		},
		options: [
			{
				displayName: 'Assigned To Name or ID',
				name: 'assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Owner — email of a teammate. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				default: '',
				description:
					'Company name as written on the contact. Meetzy links the contact to its company when it is clear (email domain of one company, else exactly the same name) unless associate_company is false.',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Link to an existing company',
			},
			{
				displayName: 'Company Website',
				name: 'company_website',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'Company website, used to find the company by domain',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom Properties',
				name: 'custom_properties',
				type: 'json',
				default: '{}',
				description:
					'Values of your custom properties, keyed by property key (see Properties). A JSON object.',
			},
			{
				displayName: 'Display Name',
				name: 'display_name',
				type: 'string',
				default: '',
				description: 'Full name as shown in the app. Built from first and last name when omitted.',
			},
			{
				displayName: 'Do Not Contact',
				name: 'do_not_contact',
				type: 'boolean',
				default: false,
				description:
					'Whether to never email or message this person (sequences and campaigns skip them)',
			},
			{
				displayName: 'Facebook Username',
				name: 'facebook_username',
				type: 'string',
				default: '',
				description: 'Facebook handle',
			},
			{
				displayName: 'First Name',
				name: 'first_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Headline',
				name: 'headline',
				type: 'string',
				default: '',
				description: 'Professional headline (LinkedIn)',
			},
			{
				displayName: 'Instagram Username',
				name: 'instagram_username',
				type: 'string',
				default: '',
				description: 'Instagram handle',
			},
			{
				displayName: 'Label ID',
				name: 'label_id',
				type: 'string',
				default: '',
				description: 'CRM board label',
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Lead Score',
				name: 'lead_score',
				type: 'number',
				default: 0,
				description: 'Score from 0 to 100. Usually moved by scoring and workflows.',
			},
			{
				displayName: 'Lead Status',
				name: 'lead_status',
				type: 'options',
				options: [
					{
						name: 'Cold',
						value: 'cold',
					},
					{
						name: 'Hot',
						value: 'hot',
					},
					{
						name: 'Warm',
						value: 'warm',
					},
				],
				default: 'hot',
				description:
					'Temperature: hot, warm or cold. Default cold. Setting it by hand stops the automatic temperature.',
			},
			{
				displayName: 'Lifecycle Stage',
				name: 'lifecycle_stage',
				type: 'options',
				options: [
					{
						name: 'Churned',
						value: 'churned',
					},
					{
						name: 'Customer',
						value: 'customer',
					},
					{
						name: 'Evangelist',
						value: 'evangelist',
					},
					{
						name: 'Lead',
						value: 'lead',
					},
					{
						name: 'MQL',
						value: 'mql',
					},
					{
						name: 'Opportunity',
						value: 'opportunity',
					},
					{
						name: 'Other',
						value: 'other',
					},
					{
						name: 'SQL',
						value: 'sql',
					},
					{
						name: 'Subscriber',
						value: 'subscriber',
					},
				],
				default: 'subscriber',
				description:
					'Where the person is in the funnel: subscriber, lead, mql, sql, opportunity, customer, evangelist, churned, other. Default lead.',
			},
			{
				displayName: 'LinkedIn Profile Url',
				name: 'linkedin_profile_url',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'LinkedIn profile URL — needed for LinkedIn steps',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Free text notes field (for timestamped notes use POST /contacts/{ID}/notes)',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number, ideally in international format (+33612345678)',
			},
			{
				displayName: 'Pipeline Stage Name or ID',
				name: 'pipeline_stage',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCycleStages',
					loadOptionsDependsOn: ['updateFields.sales_cycle_id'],
				},
				default: '',
				description:
					'Stage on the CRM board of their sales cycle (see Sales cycles). Default new_leads. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Region',
				name: 'region',
				type: 'string',
				default: '',
				description: 'Region or state',
			},
			{
				displayName: 'Reminder Assigned To Name or ID',
				name: 'reminder_assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Teammate who should do the follow-up (email). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Reminder Date',
				name: 'reminder_date',
				type: 'dateTime',
				default: '',
				description: 'Follow-up date (YYYY-MM-DD) shown in Follow-ups',
			},
			{
				displayName: 'Reminder Note',
				name: 'reminder_note',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'What the follow-up is about',
			},
			{
				displayName: 'Sales Cycle Name or ID',
				name: 'sales_cycle_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCycles',
				},
				default: '',
				description:
					'Sales cycle the contact belongs to (default or a cycle ID from GET /crm/cycles). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Secondary Emails',
				name: 'secondary_emails',
				type: 'string',
				default: '',
				description:
					'Other addresses of the same person — their emails are matched to this contact. Comma-separated.',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Free labels, e.g. ["inbound", "webinar"]. Comma-separated.',
			},
			{
				displayName: 'Threads Username',
				name: 'threads_username',
				type: 'string',
				default: '',
				description: 'Threads handle',
			},
			{
				displayName: 'Tiktok Username',
				name: 'tiktok_username',
				type: 'string',
				default: '',
				description: 'TikTok handle',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Job title',
			},
			{
				displayName: 'Twitter Username',
				name: 'twitter_username',
				type: 'string',
				default: '',
				description: 'X / Twitter handle',
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['getLead'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['deleteLead'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['findLeads'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['findLeads'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['findLeads'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Only people of this company',
			},
			{
				displayName: 'Lifecycle Stage',
				name: 'lifecycle_stage',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Min Score',
				name: 'min_score',
				type: 'number',
				default: 0,
				description: 'Minimum lead score',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'string',
				default: '',
				description: 'Asc or desc (default)',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Owner email (assigned_to). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Search',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Search in name, email, company and job title',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: '',
				description:
					'Column to sort by (lead_score, created_at, updated_at, display_name…). Default lead_score.',
			},
			{
				displayName: 'Stage',
				name: 'stage',
				type: 'string',
				default: '',
				description: 'CRM board stage (pipeline_stage)',
			},
			{
				displayName: 'Updated Since',
				name: 'updated_since',
				type: 'dateTime',
				default: '',
				description: 'Only contacts changed since this ISO date — use it to sync incrementally',
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['addNote'],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		default: '',
		typeOptions: {
			rows: 4,
		},
		description: 'Text of the note. Also accepted as note.',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['addNote'],
			},
		},
	},
	{
		displayName: 'Contact IDs',
		name: 'contact_ids',
		type: 'string',
		default: '',
		description: 'One or several contact IDs. Comma-separated.',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['moveLeadStage'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['moveLeadStage'],
			},
		},
		options: [
			{
				displayName: 'Cycle Name or ID',
				name: 'cycle_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCycles',
				},
				default: '',
				description:
					'Target cycle. Default: the default cycle. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Stage Name or ID',
				name: 'stage_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCycleStages',
					loadOptionsDependsOn: ['updateFields.cycle_id'],
				},
				default: '',
				description:
					'Target stage. Default: the first stage. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['setFollowUp'],
			},
		},
	},
	{
		displayName: 'Reminder Date',
		name: 'reminder_date',
		type: 'dateTime',
		default: '',
		description: 'Follow-up date (YYYY-MM-DD) shown in Follow-ups',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['setFollowUp'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['setFollowUp'],
			},
		},
		options: [
			{
				displayName: 'Reminder Assigned To Name or ID',
				name: 'reminder_assigned_to',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Teammate who should do the follow-up (email). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Reminder Note',
				name: 'reminder_note',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'What the follow-up is about',
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['assignLead'],
			},
		},
	},
	{
		displayName: 'Assigned To Name or ID',
		name: 'assigned_to',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getMembers',
		},
		default: '',
		description:
			'Owner — email of a teammate. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['assignLead'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['nextBestAction'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['leadInteractions'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['contact'],
				operation: ['leadInteractions'],
			},
		},
		options: [
			{
				displayName: 'Social',
				name: 'social',
				type: 'string',
				default: '',
				description: '0 to skip reading LinkedIn and WhatsApp messages live (faster). Default on.',
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['company'],
			},
		},
		options: companyOperations,
		default: 'createCompany',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'Company name',
		required: true,
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['createCompany'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['createCompany'],
			},
		},
		options: [
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'Street address',
			},
			{
				displayName: 'Annual Revenue',
				name: 'annual_revenue',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Type',
				name: 'company_type',
				type: 'string',
				default: '',
				description:
					'Relationship, e.g. prospect, customer, partner, supplier, competitor. Winning a deal sets customer.',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom',
				name: 'custom',
				type: 'json',
				default: '{}',
				description:
					'Custom properties and ERP data (custom.erp.code, custom.erp.group… are filled by data sources). A JSON object.',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'What the company does',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description:
					'Website domain (payfit.com). Normalised: https://www.payfit.com/ becomes payfit.com. Used to match contacts by email domain.',
			},
			{
				displayName: 'Employees',
				name: 'employees',
				type: 'number',
				default: 0,
				description: 'Number of employees',
			},
			{
				displayName: 'Health Score',
				name: 'health_score',
				type: 'number',
				default: 0,
				description: 'Account health, 0–100',
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Lifecycle Stage',
				name: 'lifecycle_stage',
				type: 'string',
				default: '',
				description: 'Lifecycle stage of the account (same values as contacts)',
			},
			{
				displayName: 'LinkedIn Url',
				name: 'linkedin_url',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'LinkedIn company page',
			},
			{
				displayName: 'Logo Url',
				name: 'logo_url',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'Logo image URL',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner_email',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Account owner (teammate email). Defaults to the key’s user on create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Parent Company ID',
				name: 'parent_company_id',
				type: 'string',
				default: '',
				description: 'Parent company (group / subsidiaries)',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Main phone number',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Free labels. Comma-separated.',
			},
			{
				displayName: 'Tier',
				name: 'tier',
				type: 'string',
				default: '',
				description: 'Account tier for account-based selling, e.g. A, B, C',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'Website URL',
			},
		],
	},
	{
		displayName: 'Company ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['updateCompany'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['updateCompany'],
			},
		},
		options: [
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'Street address',
			},
			{
				displayName: 'Annual Revenue',
				name: 'annual_revenue',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company Type',
				name: 'company_type',
				type: 'string',
				default: '',
				description:
					'Relationship, e.g. prospect, customer, partner, supplier, competitor. Winning a deal sets customer.',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Custom',
				name: 'custom',
				type: 'json',
				default: '{}',
				description:
					'Custom properties and ERP data (custom.erp.code, custom.erp.group… are filled by data sources). A JSON object.',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'What the company does',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description:
					'Website domain (payfit.com). Normalised: https://www.payfit.com/ becomes payfit.com. Used to match contacts by email domain.',
			},
			{
				displayName: 'Employees',
				name: 'employees',
				type: 'number',
				default: 0,
				description: 'Number of employees',
			},
			{
				displayName: 'Health Score',
				name: 'health_score',
				type: 'number',
				default: 0,
				description: 'Account health, 0–100',
			},
			{
				displayName: 'Industry',
				name: 'industry',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Lifecycle Stage',
				name: 'lifecycle_stage',
				type: 'string',
				default: '',
				description: 'Lifecycle stage of the account (same values as contacts)',
			},
			{
				displayName: 'LinkedIn Url',
				name: 'linkedin_url',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'LinkedIn company page',
			},
			{
				displayName: 'Logo Url',
				name: 'logo_url',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'Logo image URL',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Company name',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner_email',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Account owner (teammate email). Defaults to the key’s user on create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Parent Company ID',
				name: 'parent_company_id',
				type: 'string',
				default: '',
				description: 'Parent company (group / subsidiaries)',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Main phone number',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Free labels. Comma-separated.',
			},
			{
				displayName: 'Tier',
				name: 'tier',
				type: 'string',
				default: '',
				description: 'Account tier for account-based selling, e.g. A, B, C',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
				placeholder: 'https://example.com',
				description: 'Website URL',
			},
		],
	},
	{
		displayName: 'Company ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['getCompany'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['findCompanies'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['findCompanies'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['findCompanies'],
			},
		},
		options: [
			{
				displayName: 'Company Type',
				name: 'company_type',
				type: 'string',
				default: '',
				description: 'Relationship type',
			},
			{
				displayName: 'Lifecycle Stage',
				name: 'lifecycle_stage',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'string',
				default: '',
				description: 'Asc or desc (default)',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Owner email. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Search',
				name: 'q',
				type: 'string',
				default: '',
				description:
					'Search by words in name, domain, industry, city, country and ERP code: every word must appear, in any order, accents and case ignored (fabre finds “Groupe Fabre”)',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: '',
				description: 'Column to sort by. Default updated_at.',
			},
			{
				displayName: 'Tier',
				name: 'tier',
				type: 'string',
				default: '',
			},
		],
	},
	{
		displayName: 'Company ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['company'],
				operation: ['companySales'],
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['deal'],
			},
		},
		options: dealOperations,
		default: 'createDeal',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'Deal name',
		required: true,
		displayOptions: {
			show: {
				resource: ['deal'],
				operation: ['createDeal'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['deal'],
				operation: ['createDeal'],
			},
		},
		options: [
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'number',
				default: 0,
				description:
					'Value of the deal. Computed from line_items when you send lines and no amount.',
			},
			{
				displayName: 'Close Date',
				name: 'close_date',
				type: 'dateTime',
				default: '',
				description: 'Expected close date (YYYY-MM-DD). Default: in 30 days.',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Company. Found from the primary contact when omitted.',
			},
			{
				displayName: 'Competitors',
				name: 'competitors',
				type: 'string',
				default: '',
				description: 'Competitors in the deal. Comma-separated.',
			},
			{
				displayName: 'Contact IDs',
				name: 'contact_ids',
				type: 'string',
				default: '',
				description: 'Other contacts to link. Comma-separated.',
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'ISO currency (EUR, USD…). Defaults to the pipeline currency.',
			},
			{
				displayName: 'Custom',
				name: 'custom',
				type: 'json',
				default: '{}',
				description: 'Custom properties. A JSON object.',
			},
			{
				displayName: 'Deal Type',
				name: 'deal_type',
				type: 'string',
				default: '',
				description: 'E.g. new_business, upsell, renewal.',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Notes about the deal',
			},
			{
				displayName: 'Line Items',
				name: 'line_items',
				type: 'json',
				default: '[]',
				description:
					'Products of the deal. Each line: name, quantity, unit_price, optional product_id, discount_pct, tax_pct, billing (one_time, monthly, yearly). A JSON array.',
			},
			{
				displayName: 'Lost Reason',
				name: 'lost_reason',
				type: 'string',
				default: '',
				description: 'Why it was lost (see lost_reasons in the reference)',
			},
			{
				displayName: 'MRR',
				name: 'mrr',
				type: 'number',
				default: 0,
				description: 'Monthly recurring revenue (computed from monthly / yearly line items)',
			},
			{
				displayName: 'Next Step',
				name: 'next_step',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Next Step Date',
				name: 'next_step_date',
				type: 'dateTime',
				default: '',
				description: 'When the next step is due',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner_email',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Owner. Default: the key’s user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Pipeline Name or ID',
				name: 'pipeline_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPipelines',
				},
				default: '',
				description:
					'Pipeline. Default: the contact’s sales cycle pipeline, else the default pipeline. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Primary Lead ID',
				name: 'primary_lead_id',
				type: 'string',
				default: '',
				description: 'Main contact of the deal',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{
						name: 'High',
						value: 'high',
					},
					{
						name: 'Low',
						value: 'low',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
				],
				default: 'low',
				description: 'Low, medium or high',
			},
			{
				displayName: 'Probability',
				name: 'probability',
				type: 'number',
				default: 0,
				description: 'Win probability override (0–100). Default: the stage probability.',
			},
			{
				displayName: 'Recurring',
				name: 'recurring',
				type: 'boolean',
				default: false,
				description: 'Whether to recurring revenue deal',
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				description: 'Where the deal came from',
			},
			{
				displayName: 'Stage Name or ID',
				name: 'stage_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPipelineStages',
					loadOptionsDependsOn: ['additionalFields.pipeline_id'],
				},
				default: '',
				description:
					'Stage ID in that pipeline (see GET /pipelines). Default: the first open stage. Moving to a won / lost stage sets status. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Lost',
						value: 'lost',
					},
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Won',
						value: 'won',
					},
				],
				default: 'open',
				description:
					'Open, won or lost. Setting it moves the deal to the matching stage. Winning a deal makes its contacts and company customers.',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Free labels. Comma-separated.',
			},
			{
				displayName: 'Won Reason',
				name: 'won_reason',
				type: 'string',
				default: '',
				description: 'Why it was won',
			},
		],
	},
	{
		displayName: 'Deal ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['deal'],
				operation: ['updateDeal'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['deal'],
				operation: ['updateDeal'],
			},
		},
		options: [
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'number',
				default: 0,
				description:
					'Value of the deal. Computed from line_items when you send lines and no amount.',
			},
			{
				displayName: 'Close Date',
				name: 'close_date',
				type: 'dateTime',
				default: '',
				description: 'Expected close date (YYYY-MM-DD). Default: in 30 days.',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Company. Found from the primary contact when omitted.',
			},
			{
				displayName: 'Competitors',
				name: 'competitors',
				type: 'string',
				default: '',
				description: 'Competitors in the deal. Comma-separated.',
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
				description: 'ISO currency (EUR, USD…). Defaults to the pipeline currency.',
			},
			{
				displayName: 'Custom',
				name: 'custom',
				type: 'json',
				default: '{}',
				description: 'Custom properties. A JSON object.',
			},
			{
				displayName: 'Deal Type',
				name: 'deal_type',
				type: 'string',
				default: '',
				description: 'E.g. new_business, upsell, renewal.',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Notes about the deal',
			},
			{
				displayName: 'Lost Reason',
				name: 'lost_reason',
				type: 'string',
				default: '',
				description: 'Why it was lost (see lost_reasons in the reference)',
			},
			{
				displayName: 'MRR',
				name: 'mrr',
				type: 'number',
				default: 0,
				description: 'Monthly recurring revenue (computed from monthly / yearly line items)',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Deal name',
			},
			{
				displayName: 'Next Step',
				name: 'next_step',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Next Step Date',
				name: 'next_step_date',
				type: 'dateTime',
				default: '',
				description: 'When the next step is due',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner_email',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Owner. Default: the key’s user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Pipeline Name or ID',
				name: 'pipeline_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPipelines',
				},
				default: '',
				description:
					'Pipeline. Default: the contact’s sales cycle pipeline, else the default pipeline. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Primary Lead ID',
				name: 'primary_lead_id',
				type: 'string',
				default: '',
				description: 'Main contact of the deal',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{
						name: 'High',
						value: 'high',
					},
					{
						name: 'Low',
						value: 'low',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
				],
				default: 'low',
				description: 'Low, medium or high',
			},
			{
				displayName: 'Probability',
				name: 'probability',
				type: 'number',
				default: 0,
				description: 'Win probability override (0–100). Default: the stage probability.',
			},
			{
				displayName: 'Recurring',
				name: 'recurring',
				type: 'boolean',
				default: false,
				description: 'Whether to recurring revenue deal',
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				description: 'Where the deal came from',
			},
			{
				displayName: 'Stage Name or ID',
				name: 'stage_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPipelineStages',
					loadOptionsDependsOn: ['updateFields.pipeline_id'],
				},
				default: '',
				description:
					'Stage ID in that pipeline (see GET /pipelines). Default: the first open stage. Moving to a won / lost stage sets status. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Lost',
						value: 'lost',
					},
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Won',
						value: 'won',
					},
				],
				default: 'open',
				description:
					'Open, won or lost. Setting it moves the deal to the matching stage. Winning a deal makes its contacts and company customers.',
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				default: '',
				description: 'Free labels. Comma-separated.',
			},
			{
				displayName: 'Won Reason',
				name: 'won_reason',
				type: 'string',
				default: '',
				description: 'Why it was won',
			},
		],
	},
	{
		displayName: 'Deal ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['deal'],
				operation: ['getDeal'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['deal'],
				operation: ['findDeals'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['deal'],
				operation: ['findDeals'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['deal'],
				operation: ['findDeals'],
			},
		},
		options: [
			{
				displayName: 'Close From',
				name: 'close_from',
				type: 'dateTime',
				default: '',
				description: 'Close date on or after',
			},
			{
				displayName: 'Close To',
				name: 'close_to',
				type: 'dateTime',
				default: '',
				description: 'Close date on or before',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Deals of a company',
			},
			{
				displayName: 'Lead ID',
				name: 'lead_id',
				type: 'string',
				default: '',
				description: 'Deals where this contact is primary or linked',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'string',
				default: '',
				description: 'Asc or desc (default)',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Owner email. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Pipeline Name or ID',
				name: 'pipeline_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPipelines',
				},
				default: '',
				description:
					'One pipeline, or several separated by commas. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Search',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Search in the deal name',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'string',
				default: '',
				description: 'Column to sort by. Default updated_at.',
			},
			{
				displayName: 'Stage Name or ID',
				name: 'stage_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPipelineStages',
					loadOptionsDependsOn: ['filters.pipeline_id'],
				},
				default: '',
				description:
					'Stage ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Lost',
						value: 'lost',
					},
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Won',
						value: 'won',
					},
				],
				default: 'open',
				description: 'Open, won, lost or all (default: all)',
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['task'],
			},
		},
		options: taskOperations,
		default: 'completeTask',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		description: 'What to do',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['createTask'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['createTask'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Company the task is about',
			},
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'string',
				default: '',
				description: 'Deal the task is about',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Details',
			},
			{
				displayName: 'Due At',
				name: 'due_at',
				type: 'dateTime',
				default: '',
				description: 'Due date and time (ISO 8601)',
			},
			{
				displayName: 'Lead ID',
				name: 'lead_id',
				type: 'string',
				default: '',
				description: 'Contact the task is about',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner_email',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Who does it. Default: the key’s user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{
						name: 'High',
						value: 'high',
					},
					{
						name: 'Low',
						value: 'low',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
				],
				default: 'low',
				description: 'Low, medium or high',
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				description: 'Where the task comes from (api, zapier…)',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Open or done',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Call',
						value: 'call',
					},
					{
						name: 'Email',
						value: 'email',
					},
					{
						name: 'Follow Up',
						value: 'follow_up',
					},
					{
						name: 'Linkedin',
						value: 'linkedin',
					},
					{
						name: 'Meeting',
						value: 'meeting',
					},
					{
						name: 'Todo',
						value: 'todo',
					},
				],
				default: 'todo',
				description: 'Todo, call, email, meeting, linkedin or follow_up',
			},
		],
	},
	{
		displayName: 'Task ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['completeTask'],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['completeTask'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Company the task is about',
			},
			{
				displayName: 'Completion Note',
				name: 'completion_note',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'When completing: what happened',
			},
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'string',
				default: '',
				description: 'Deal the task is about',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Details',
			},
			{
				displayName: 'Due At',
				name: 'due_at',
				type: 'dateTime',
				default: '',
				description: 'Due date and time (ISO 8601)',
			},
			{
				displayName: 'Lead ID',
				name: 'lead_id',
				type: 'string',
				default: '',
				description: 'Contact the task is about',
			},
			{
				displayName: 'Outcome',
				name: 'outcome',
				type: 'options',
				options: [
					{
						name: 'Busy',
						value: 'busy',
					},
					{
						name: 'Connected',
						value: 'connected',
					},
					{
						name: 'Negative',
						value: 'negative',
					},
					{
						name: 'No Answer',
						value: 'no_answer',
					},
					{
						name: 'Positive',
						value: 'positive',
					},
					{
						name: 'Scheduled',
						value: 'scheduled',
					},
					{
						name: 'Voicemail',
						value: 'voicemail',
					},
					{
						name: 'Wrong Number',
						value: 'wrong_number',
					},
				],
				default: 'connected',
				description:
					'When completing a call: connected, positive, negative, scheduled, no_answer, voicemail, busy, wrong_number',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner_email',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Who does it. Default: the key’s user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Priority',
				name: 'priority',
				type: 'options',
				options: [
					{
						name: 'High',
						value: 'high',
					},
					{
						name: 'Low',
						value: 'low',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
				],
				default: 'low',
				description: 'Low, medium or high',
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				description: 'Where the task comes from (api, zapier…)',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Open or done',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'What to do',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Call',
						value: 'call',
					},
					{
						name: 'Email',
						value: 'email',
					},
					{
						name: 'Follow Up',
						value: 'follow_up',
					},
					{
						name: 'Linkedin',
						value: 'linkedin',
					},
					{
						name: 'Meeting',
						value: 'meeting',
					},
					{
						name: 'Todo',
						value: 'todo',
					},
				],
				default: 'todo',
				description: 'Todo, call, email, meeting, linkedin or follow_up',
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['findTasks'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['findTasks'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['findTasks'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Tasks of a company',
			},
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'string',
				default: '',
				description: 'Tasks of a deal',
			},
			{
				displayName: 'Due',
				name: 'due',
				type: 'options',
				options: [
					{
						name: 'No Date',
						value: 'no_date',
					},
					{
						name: 'Overdue',
						value: 'overdue',
					},
					{
						name: 'Today',
						value: 'today',
					},
					{
						name: 'Upcoming',
						value: 'upcoming',
					},
				],
				default: 'overdue',
				description: 'Overdue, today, upcoming or no_date',
			},
			{
				displayName: 'Lead ID',
				name: 'lead_id',
				type: 'string',
				default: '',
				description: 'Tasks of a contact',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Me or a teammate’s email. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'Done',
						value: 'done',
					},
					{
						name: 'Open',
						value: 'open',
					},
				],
				default: 'open',
				description: 'Open (default), done or all',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				description: 'Task type',
			},
		],
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'Call',
				value: 'call',
			},
			{
				name: 'Email',
				value: 'email',
			},
			{
				name: 'Linkedin',
				value: 'linkedin',
			},
			{
				name: 'Meeting',
				value: 'meeting',
			},
			{
				name: 'Note',
				value: 'note',
			},
			{
				name: 'SMS',
				value: 'sms',
			},
			{
				name: 'System',
				value: 'system',
			},
			{
				name: 'Whatsapp',
				value: 'whatsapp',
			},
		],
		default: 'call',
		description: 'Activity type (see GET /activities)',
		required: true,
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['logActivity'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['logActivity'],
			},
		},
		options: [
			{
				displayName: 'Actor Name or ID',
				name: 'actor_email',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Who did it. Default: the key’s user. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Details',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Company',
			},
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'string',
				default: '',
				description: 'Deal',
			},
			{
				displayName: 'Direction',
				name: 'direction',
				type: 'string',
				default: '',
				description: 'Inbound or outbound',
			},
			{
				displayName: 'Duration Sec',
				name: 'duration_sec',
				type: 'number',
				default: 0,
				description: 'Duration in seconds',
			},
			{
				displayName: 'Lead ID',
				name: 'lead_id',
				type: 'string',
				default: '',
				description: 'Contact',
			},
			{
				displayName: 'Metadata',
				name: 'metadata',
				type: 'json',
				default: '{}',
				description: 'Anything else (recording URL, call ID…). A JSON object.',
			},
			{
				displayName: 'Occurred At',
				name: 'occurred_at',
				type: 'dateTime',
				default: '',
				description: 'When it happened. Default: now.',
			},
			{
				displayName: 'Outcome',
				name: 'outcome',
				type: 'string',
				default: '',
				description: 'Result (for calls, see task outcomes)',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				description: 'Title',
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['findActivities'],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['task'],
				operation: ['findActivities'],
			},
		},
		options: [
			{
				displayName: 'Actor',
				name: 'actor',
				type: 'string',
				default: '',
				description: 'Who logged it (email)',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Activities of a company',
			},
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'string',
				default: '',
				description: 'Activities of a deal',
			},
			{
				displayName: 'Include Crm',
				name: 'include_crm',
				type: 'string',
				default: '',
				description: 'False to leave out CRM board notes and moves',
			},
			{
				displayName: 'Lead ID',
				name: 'lead_id',
				type: 'string',
				default: '',
				description: 'Activities of a contact',
			},
			{
				displayName: 'Since',
				name: 'since',
				type: 'dateTime',
				default: '',
				description: 'Only activities after this date',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Call',
						value: 'call',
					},
					{
						name: 'Email',
						value: 'email',
					},
					{
						name: 'Linkedin',
						value: 'linkedin',
					},
					{
						name: 'Meeting',
						value: 'meeting',
					},
					{
						name: 'Note',
						value: 'note',
					},
					{
						name: 'Quote',
						value: 'quote',
					},
					{
						name: 'Stage Change',
						value: 'stage_change',
					},
					{
						name: 'System',
						value: 'system',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Whatsapp',
						value: 'whatsapp',
					},
				],
				default: 'note',
				description:
					'Note, call, meeting, email, linkedin, whatsapp, stage_change, task, quote or system',
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['message'],
			},
		},
		options: messageOperations,
		default: 'draftEmailAi',
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		default: '',
		typeOptions: {
			rows: 4,
		},
		description: 'Exact text to send',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendWhatsapp'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendWhatsapp'],
			},
		},
		options: [
			{
				displayName: 'Chat ID',
				name: 'chat_id',
				type: 'string',
				default: '',
				description: 'Existing chat',
			},
			{
				displayName: 'Contact ID',
				name: 'contact_id',
				type: 'string',
				default: '',
				description: 'CRM contact (preferred)',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'International number without +',
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['whatsappMessages'],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['whatsappMessages'],
			},
		},
		options: [
			{
				displayName: 'Chat ID',
				name: 'chat_id',
				type: 'string',
				default: '',
				description: 'A chat ID from the inbox or a search — the most reliable',
			},
			{
				displayName: 'Contact ID',
				name: 'contact_id',
				type: 'string',
				default: '',
				description: 'CRM contact (preferred)',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'International number without + (33612345678) for someone not in the CRM',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['whatsappInbox'],
			},
		},
		options: [
			{
				displayName: 'Follow up Days',
				name: 'follow_up_days',
				type: 'number',
				default: 0,
				description: 'Default 3',
			},
			{
				displayName: 'Max Chats',
				name: 'max_chats',
				type: 'number',
				default: 0,
				description: 'Per category. Default 30.',
			},
			{
				displayName: 'Search',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Only conversations whose name or number contains this text',
			},
		],
	},
	{
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'string',
		default: '',
		description: 'CRM contact (preferred)',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLinkedin'],
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		default: '',
		typeOptions: {
			rows: 4,
		},
		description: 'Exact text to send',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLinkedin'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'string',
		default: '',
		description: 'CRM contact (preferred)',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['linkedinInvite'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'string',
		default: '',
		description: 'CRM contact (preferred)',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['linkedinStatus'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'contact_id',
		type: 'string',
		default: '',
		description: 'CRM contact (preferred)',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['linkedinMessages'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['linkedinMessages'],
			},
		},
	},
	{
		displayName: 'Contact ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendEmailToLead'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendEmailToLead'],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Body, plain text or HTML. Required without template_id.',
			},
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'string',
				default: '',
				description: 'Deal the email is about — {{deal.*}} tags become available',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
				description: 'Subject. Required without template_id.',
			},
			{
				displayName: 'Template Name or ID',
				name: 'template_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getTemplates',
				},
				default: '',
				description:
					'Email template to use (its subject and body fill what you leave empty). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Track',
				name: 'track',
				type: 'boolean',
				default: true,
				description: 'Whether to track opens and clicks. Default true.',
			},
		],
	},
	{
		displayName: 'To',
		name: 'to',
		type: 'string',
		default: '',
		description: 'Recipients. Comma-separated.',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendEmail'],
			},
		},
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendEmail'],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		default: '',
		typeOptions: {
			rows: 4,
		},
		description: 'Body, HTML or plain text',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendEmail'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendEmail'],
			},
		},
		options: [
			{
				displayName: 'Bcc',
				name: 'bcc',
				type: 'string',
				default: '',
				description: 'Blind copy. Comma-separated.',
			},
			{
				displayName: 'Cc',
				name: 'cc',
				type: 'string',
				default: '',
				description: 'Copy. Comma-separated.',
			},
			{
				displayName: 'In Reply To',
				name: 'in_reply_to',
				type: 'string',
				default: '',
				description: 'Provider message ID of the email you answer (threading)',
			},
			{
				displayName: 'Tracking',
				name: 'tracking',
				type: 'boolean',
				default: false,
				description: 'Whether to provider open / click tracking. Default false.',
			},
		],
	},
	{
		displayName: 'Goal',
		name: 'goal',
		type: 'string',
		default: '',
		typeOptions: {
			rows: 4,
		},
		description: 'What the email should achieve',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['draftEmailAi'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['draftEmailAi'],
			},
		},
		options: [
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				default: '',
				description: 'Auto (same as the goal) or a language name',
			},
			{
				displayName: 'Length',
				name: 'length',
				type: 'options',
				options: [
					{
						name: 'Long',
						value: 'long',
					},
					{
						name: 'Medium',
						value: 'medium',
					},
					{
						name: 'Short',
						value: 'short',
					},
				],
				default: 'short',
				description: 'Short (default), medium, long',
			},
			{
				displayName: 'Tone',
				name: 'tone',
				type: 'string',
				default: '',
				description: 'E.g. friendly (default), formal, direct.',
			},
		],
	},
	{
		displayName: 'Contact IDs',
		name: 'contact_ids',
		type: 'string',
		default: '',
		description: 'Recipients. Comma-separated.',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['quickSend'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['quickSend'],
			},
		},
		options: [
			{
				displayName: 'Body',
				name: 'body',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Campaign name',
			},
			{
				displayName: 'Send At',
				name: 'send_at',
				type: 'dateTime',
				default: '',
				description: 'Send later instead of now',
			},
			{
				displayName: 'Subject',
				name: 'subject',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Template Name or ID',
				name: 'template_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getTemplates',
				},
				default: '',
				description:
					'Template (or subject + body). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['prospect'],
			},
		},
		options: prospectOperations,
		default: 'pushVisitors',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['prospect'],
				operation: ['findProspects'],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['prospect'],
				operation: ['findProspects'],
			},
		},
		options: [
			{
				displayName: 'Currently Using Any of Technology Uids',
				name: 'currently_using_any_of_technology_uids',
				type: 'string',
				default: '',
				description:
					'Technologies used (also …_all_of_…, currently_not_using_any_of_…). Comma-separated.',
			},
			{
				displayName: 'Email Status',
				name: 'email_status',
				type: 'string',
				default: '',
				description: 'Verified, guessed, unavailable. Comma-separated.',
			},
			{
				displayName: 'Founded Year Min',
				name: 'founded_year_min',
				type: 'number',
				default: 0,
				description: 'Founded after (founded_year_max too)',
			},
			{
				displayName: 'Funding Stages',
				name: 'funding_stages',
				type: 'string',
				default: '',
				description: 'Funding stages. Comma-separated.',
			},
			{
				displayName: 'Keywords',
				name: 'keywords',
				type: 'string',
				default: '',
				description: 'Keywords. Comma-separated.',
			},
			{
				displayName: 'Latest Funding Amount Min',
				name: 'latest_funding_amount_min',
				type: 'number',
				default: 0,
				description:
					'Funding filters: latest_funding_amount_min/max, total_funding_min/max, latest_funding_date_min/max',
			},
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'string',
				default: '',
				description: 'People (default, free) or companies (1 credit / page)',
			},
			{
				displayName: 'Organization Domains',
				name: 'organization_domains',
				type: 'string',
				default: '',
				description: 'Company domains. Comma-separated.',
			},
			{
				displayName: 'Organization Employee Ranges',
				name: 'organization_employee_ranges',
				type: 'string',
				default: '',
				description: 'Headcount ranges: "11,50", "51,200", "201,500"… Comma-separated',
			},
			{
				displayName: 'Organization Job Titles',
				name: 'organization_job_titles',
				type: 'string',
				default: '',
				description:
					'Companies hiring for these titles (with organization_job_locations, organization_num_jobs_range_min/max, organization_job_posted_at_range_min/max). Comma-separated.',
			},
			{
				displayName: 'Organization Keyword Tags',
				name: 'organization_keyword_tags',
				type: 'string',
				default: '',
				description: 'Industries / keywords: saas, fintech, retail… Comma-separated',
			},
			{
				displayName: 'Organization Locations',
				name: 'organization_locations',
				type: 'string',
				default: '',
				description: 'Company HQ locations. organization_not_locations excludes. Comma-separated.',
			},
			{
				displayName: 'Organization Name',
				name: 'organization_name',
				type: 'string',
				default: '',
				description: 'Company name',
			},
			{
				displayName: 'Person Departments',
				name: 'person_departments',
				type: 'string',
				default: '',
				description: 'Departments. Comma-separated.',
			},
			{
				displayName: 'Person Locations',
				name: 'person_locations',
				type: 'string',
				default: '',
				description:
					'Where people are (France, Paris, France). person_not_locations excludes. Comma-separated.',
			},
			{
				displayName: 'Person Name',
				name: 'person_name',
				type: 'string',
				default: '',
				description: 'A name',
			},
			{
				displayName: 'Person Seniorities',
				name: 'person_seniorities',
				type: 'string',
				default: '',
				description:
					'Owner, founder, c_suite, partner, vp, head, director, manager, senior, entry, intern. Comma-separated.',
			},
			{
				displayName: 'Person Titles',
				name: 'person_titles',
				type: 'string',
				default: '',
				description:
					'Job titles (Head of Sales). Similar titles included unless include_similar_titles: false. Comma-separated.',
			},
			{
				displayName: 'Revenue Min',
				name: 'revenue_min',
				type: 'number',
				default: 0,
				description: 'Minimum revenue (revenue_max too)',
			},
		],
	},
	{
		displayName: 'Prospects',
		name: 'prospects',
		type: 'json',
		default: '[]',
		description:
			'Each { ID, first_name, last_name, email?, linkedin_url?, organization_name?, domain?, type? } — ID from the search, type person (default) or company. Pass null for an unknown last name. A JSON array.',
		required: true,
		displayOptions: {
			show: {
				resource: ['prospect'],
				operation: ['enrichProspects'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['prospect'],
				operation: ['enrichProspects'],
			},
		},
		options: [
			{
				displayName: 'Add to Leads',
				name: 'add_to_leads',
				type: 'boolean',
				default: true,
				description: 'Whether to add them to the CRM. Default true.',
			},
			{
				displayName: 'Target Criteria',
				name: 'target_criteria',
				type: 'string',
				default: '',
				description: 'Your ideal prospect, for relevance scoring',
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['prospect'],
				operation: ['findVisitors'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['prospect'],
				operation: ['findVisitors'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['prospect'],
				operation: ['findVisitors'],
			},
		},
		options: [
			{
				displayName: 'Identified',
				name: 'identified',
				type: 'options',
				options: [
					{
						name: 'False',
						value: 'false',
					},
					{
						name: 'True',
						value: 'true',
					},
				],
				default: 'true',
				description: 'True (default): only visitors with an email; false: everyone',
			},
			{
				displayName: 'Search',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Search in email, name and company',
			},
			{
				displayName: 'Tracking ID',
				name: 'tracking_id',
				type: 'string',
				default: '',
				description: 'One site',
			},
		],
	},
	{
		displayName: 'Visitor IDs',
		name: 'visitor_ids',
		type: 'string',
		default: '',
		description: 'Visitors (up to 500). Comma-separated.',
		required: true,
		displayOptions: {
			show: {
				resource: ['prospect'],
				operation: ['pushVisitors'],
			},
		},
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sequence'],
			},
		},
		options: sequenceOperations,
		default: 'enrollSequence',
	},
	{
		displayName: 'Sequence Name or ID',
		name: 'id',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getSequences',
		},
		default: '',
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		required: true,
		displayOptions: {
			show: {
				resource: ['sequence'],
				operation: ['enrollSequence'],
			},
		},
	},
	{
		displayName: 'Contact IDs',
		name: 'contact_ids',
		type: 'string',
		default: '',
		description: 'Contacts to enroll. Also accepted as lead_ids. Comma-separated.',
		required: true,
		displayOptions: {
			show: {
				resource: ['sequence'],
				operation: ['enrollSequence'],
			},
		},
	},
	{
		displayName: 'Sequence Name or ID',
		name: 'id',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getSequences',
		},
		default: '',
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		required: true,
		displayOptions: {
			show: {
				resource: ['sequence'],
				operation: ['unenrollSequence'],
			},
		},
	},
	{
		displayName: 'Contact IDs',
		name: 'contact_ids',
		type: 'string',
		default: '',
		description: 'Contacts to remove. Comma-separated.',
		required: true,
		displayOptions: {
			show: {
				resource: ['sequence'],
				operation: ['unenrollSequence'],
			},
		},
	},
	{
		displayName: 'Workflow Name or ID',
		name: 'id',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getWorkflows',
		},
		default: '',
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		required: true,
		displayOptions: {
			show: {
				resource: ['sequence'],
				operation: ['runWorkflow'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['sequence'],
				operation: ['runWorkflow'],
			},
		},
		options: [
			{
				displayName: 'Contact IDs',
				name: 'contact_ids',
				type: 'string',
				default: '',
				description: 'Contacts to run it on. Comma-separated.',
			},
			{
				displayName: 'Deal IDs',
				name: 'deal_ids',
				type: 'string',
				default: '',
				description: 'Deals to run it on. Comma-separated.',
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['quote'],
			},
		},
		options: quoteOperations,
		default: 'createQuote',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['quote'],
				operation: ['createQuote'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Customer company',
			},
			{
				displayName: 'Currency',
				name: 'currency',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'string',
				default: '',
				description: 'Deal the quote is for',
			},
			{
				displayName: 'Lead ID',
				name: 'lead_id',
				type: 'string',
				default: '',
				description: 'Customer contact',
			},
			{
				displayName: 'Line Items',
				name: 'line_items',
				type: 'json',
				default: '[]',
				description: 'Lines (default: from the deal). A JSON array.',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				typeOptions: {
					rows: 4,
				},
				description: 'Notes shown on the quote',
			},
			{
				displayName: 'Terms',
				name: 'terms',
				type: 'string',
				default: '',
				description: 'Payment terms',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Title. Default Proposal.',
			},
			{
				displayName: 'Valid Days',
				name: 'valid_days',
				type: 'number',
				default: 0,
				description: 'Valid for N days. Default 30.',
			},
			{
				displayName: 'Valid Until',
				name: 'valid_until',
				type: 'dateTime',
				default: '',
				description: 'Or an explicit end date',
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['quote'],
				operation: ['findQuotes'],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['quote'],
				operation: ['findQuotes'],
			},
		},
		options: [
			{
				displayName: 'Deal ID',
				name: 'deal_id',
				type: 'string',
				default: '',
				description: 'Quotes of a deal',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Accepted',
						value: 'accepted',
					},
					{
						name: 'Declined',
						value: 'declined',
					},
					{
						name: 'Draft',
						value: 'draft',
					},
					{
						name: 'Sent',
						value: 'sent',
					},
					{
						name: 'Viewed',
						value: 'viewed',
					},
				],
				default: 'draft',
				description: 'Draft, sent, viewed, accepted or declined',
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['quote'],
				operation: ['findProducts'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['quote'],
				operation: ['findProducts'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['quote'],
				operation: ['findProducts'],
			},
		},
		options: [
			{
				displayName: 'Active',
				name: 'active',
				type: 'string',
				default: '',
				description: 'True or false',
			},
			{
				displayName: 'Search',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Search in name and SKU',
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				description:
					'Only products of a source (sap_b1, shopify, feed, custom:…), or manual for those made by hand',
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['erp'],
			},
		},
		options: erpOperations,
		default: 'getDocument',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['erp'],
				operation: ['findDocuments'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['erp'],
				operation: ['findDocuments'],
				returnAll: [false],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['erp'],
				operation: ['findDocuments'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'string',
				default: '',
				description: 'Documents of one customer',
			},
			{
				displayName: 'Contact ID',
				name: 'contact_id',
				type: 'string',
				default: '',
				description: 'Documents linked to one contact',
			},
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'Document date on or after (YYYY-MM-DD)',
			},
			{
				displayName: 'Number',
				name: 'number',
				type: 'string',
				default: '',
				description: 'Exact document number',
			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'options',
				options: [
					{
						name: 'Asc',
						value: 'asc',
					},
					{
						name: 'Desc',
						value: 'desc',
					},
				],
				default: 'desc',
				description: 'Desc (default) or asc by document date',
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Salesperson email, or me. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Past Due',
				name: 'past_due',
				type: 'boolean',
				default: false,
				description: 'Whether to true: open invoices past their due date',
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: '',
				description: 'Source (sap_b1, odoo, shopify, custom:sage-100, import…)',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
				description: 'Open, paid, closed, cancelled…',
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'Document date on or before',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Credit Note',
						value: 'credit_note',
					},
					{
						name: 'Delivery',
						value: 'delivery',
					},
					{
						name: 'Invoice',
						value: 'invoice',
					},
					{
						name: 'Order',
						value: 'order',
					},
					{
						name: 'Purchase Invoice',
						value: 'purchase_invoice',
					},
					{
						name: 'Purchase Order',
						value: 'purchase_order',
					},
					{
						name: 'Quote',
						value: 'quote',
					},
				],
				default: 'quote',
				description:
					'Quote, order, invoice, credit_note, delivery, purchase_order, purchase_invoice — one, or several separated by commas',
			},
			{
				displayName: 'Updated Since',
				name: 'updated_since',
				type: 'dateTime',
				default: '',
				description: 'Only documents synced since — for incremental exports',
			},
		],
	},
	{
		displayName: 'Document ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['erp'],
				operation: ['getDocument'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['erp'],
				operation: ['salesForecast'],
			},
		},
		options: [
			{
				displayName: 'Basis',
				name: 'basis',
				type: 'string',
				default: '',
				description: 'Invoiced (default when invoices exist) or ordered',
			},
			{
				displayName: 'Months',
				name: 'months',
				type: 'number',
				default: 0,
				description: 'How many months, 3 to 12. Default 6 (the current month first).',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['erp'],
				operation: ['salesAnalytics'],
			},
		},
		options: [
			{
				displayName: 'Basis',
				name: 'basis',
				type: 'string',
				default: '',
				description:
					'Invoiced (invoices minus credit notes, default when invoices exist) or ordered',
			},
			{
				displayName: 'Compare',
				name: 'compare',
				type: 'options',
				options: [
					{
						name: 'Last Year',
						value: 'last_year',
					},
					{
						name: 'None',
						value: 'none',
					},
					{
						name: 'Previous',
						value: 'previous',
					},
				],
				default: 'last_year',
				description: 'Last_year (default), previous or none',
			},
			{
				displayName: 'From',
				name: 'from',
				type: 'dateTime',
				default: '',
				description: 'Custom start YYYY-MM-DD (with to)',
			},
			{
				displayName: 'Group',
				name: 'group',
				type: 'options',
				options: [
					{
						name: 'Day',
						value: 'day',
					},
					{
						name: 'Month',
						value: 'month',
					},
					{
						name: 'Quarter',
						value: 'quarter',
					},
					{
						name: 'Week',
						value: 'week',
					},
					{
						name: 'Year',
						value: 'year',
					},
				],
				default: 'day',
				description:
					'Timeline step: day, week, month, quarter, year. Default: from the period length.',
			},
			{
				displayName: 'Period',
				name: 'period',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'D30',
						value: 'd30',
					},
					{
						name: 'D90',
						value: 'd90',
					},
					{
						name: 'Last Month',
						value: 'last_month',
					},
					{
						name: 'Last Quarter',
						value: 'last_quarter',
					},
					{
						name: 'Last Year',
						value: 'last_year',
					},
					{
						name: 'M12',
						value: 'm12',
					},
					{
						name: 'Month',
						value: 'month',
					},
					{
						name: 'Quarter',
						value: 'quarter',
					},
					{
						name: 'Week',
						value: 'week',
					},
					{
						name: 'Year',
						value: 'year',
					},
				],
				default: 'week',
				description:
					'Week, month, quarter, year, last_month, last_quarter, last_year, d30, d90, m12 (last 12 months) or all. Default year.',
			},
			{
				displayName: 'Scope',
				name: 'scope',
				type: 'string',
				default: '',
				description: 'Me — only the key user’s sales',
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'dateTime',
				default: '',
				description: 'Custom end (with from)',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['erp'],
				operation: ['pipelineReport'],
			},
		},
		options: [
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description:
					'Only one owner (email). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Period',
				name: 'period',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
					},
					{
						name: 'D30',
						value: 'd30',
					},
					{
						name: 'D90',
						value: 'd90',
					},
					{
						name: 'Last Month',
						value: 'last_month',
					},
					{
						name: 'Last Quarter',
						value: 'last_quarter',
					},
					{
						name: 'Last Year',
						value: 'last_year',
					},
					{
						name: 'M12',
						value: 'm12',
					},
					{
						name: 'Month',
						value: 'month',
					},
					{
						name: 'Quarter',
						value: 'quarter',
					},
					{
						name: 'Week',
						value: 'week',
					},
					{
						name: 'Year',
						value: 'year',
					},
				],
				default: 'week',
				description:
					'Week, month, quarter, year, last_month, last_quarter, last_year, d30, d90, m12 (last 12 months) or all. Default month. Changes are against the previous period of the same length.',
			},
			{
				displayName: 'Pipeline Name or ID',
				name: 'pipeline_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPipelines',
				},
				default: '',
				description:
					'Only one pipeline. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['workspace'],
			},
		},
		options: workspaceOperations,
		default: 'apiCall',
	},
	{
		displayName: 'Search',
		name: 'q',
		type: 'string',
		default: '',
		description: 'Text to find',
		required: true,
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['searchEverything'],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 50,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['eventLog'],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['eventLog'],
			},
		},
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Companies · Company Created',
						value: 'company.created',
					},
					{
						name: 'Companies · Company Lifecycle Changed',
						value: 'company.lifecycle_changed',
					},
					{
						name: 'Contacts · Contact Created',
						value: 'contact.created',
					},
					{
						name: 'Contacts · Contact Deleted',
						value: 'contact.deleted',
					},
					{
						name: 'Contacts · Contact Owner Changed',
						value: 'contact.owner_changed',
					},
					{
						name: 'Contacts · Contact Pipeline Stage Changed',
						value: 'contact.stage_changed',
					},
					{
						name: 'Contacts · Contact Property Changed',
						value: 'contact.property_changed',
					},
					{
						name: 'Contacts · Contact Replied (Email, LinkedIn, WhatsApp)',
						value: 'contact.replied',
					},
					{
						name: 'Contacts · Contact Status Changed',
						value: 'contact.status_changed',
					},
					{
						name: 'Contacts · Email Link Clicked',
						value: 'contact.email_clicked',
					},
					{
						name: 'Contacts · Email Opened',
						value: 'contact.email_opened',
					},
					{
						name: 'Contacts · Labels / Tags Changed',
						value: 'contact.tags_changed',
					},
					{
						name: 'Contacts · Lead Score Changed',
						value: 'contact.score_changed',
					},
					{
						name: 'Contacts · Lifecycle Stage Changed',
						value: 'contact.lifecycle_changed',
					},
					{
						name: 'Contacts · LinkedIn Invitation Accepted',
						value: 'contact.linkedin_connected',
					},
					{
						name: 'Contacts · Meeting Booked',
						value: 'contact.meeting_booked',
					},
					{
						name: 'Contacts · Note Added',
						value: 'contact.note_added',
					},
					{
						name: 'Contacts · The Contact Emailed You (Any Mailbox)',
						value: 'contact.email_received',
					},
					{
						name: 'Contacts · Visited The Website',
						value: 'contact.website_visit',
					},
					{
						name: 'Contacts · WhatsApp / LinkedIn Message Received',
						value: 'contact.message_received',
					},
					{
						name: 'Contacts · You Emailed The Contact (Any Mailbox: Outlook, Gmail…)',
						value: 'contact.email_sent',
					},
					{
						name: 'Contacts · You Sent a WhatsApp / LinkedIn Message (Any Device)',
						value: 'contact.message_sent',
					},
					{
						name: 'Deals · Deal Amount Changed',
						value: 'deal.amount_changed',
					},
					{
						name: 'Deals · Deal Created',
						value: 'deal.created',
					},
					{
						name: 'Deals · Deal Lost',
						value: 'deal.lost',
					},
					{
						name: 'Deals · Deal Owner Changed',
						value: 'deal.owner_changed',
					},
					{
						name: 'Deals · Deal Past Its Close Date',
						value: 'deal.overdue',
					},
					{
						name: 'Deals · Deal Property Changed',
						value: 'deal.property_changed',
					},
					{
						name: 'Deals · Deal Reopened',
						value: 'deal.reopened',
					},
					{
						name: 'Deals · Deal Stage Changed',
						value: 'deal.stage_changed',
					},
					{
						name: 'Deals · Deal Stuck in Stage Too Long',
						value: 'deal.rotting',
					},
					{
						name: 'Deals · Deal Won',
						value: 'deal.won',
					},
					{
						name: 'Email · Contact Unsubscribed',
						value: 'contact.unsubscribed',
					},
					{
						name: 'Email · Email Could Not Be Sent',
						value: 'email.failed',
					},
					{
						name: 'Email · Email Opened',
						value: 'email.opened',
					},
					{
						name: 'Email · Email Sent (Campaign or Workflow)',
						value: 'email.sent',
					},
					{
						name: 'Email · Link Clicked in an Email',
						value: 'email.clicked',
					},
					{
						name: 'External · Enrolled Manually (CRM, Another Workflow, API, Claude)',
						value: 'workflow.enrolled',
					},
					{
						name: 'External · Form Submitted',
						value: 'form.submitted',
					},
					{
						name: 'External · Inbound Webhook (N8n, Zapier, Forms…)',
						value: 'webhook.received',
					},
					{
						name: 'Quotes · Quote Accepted',
						value: 'quote.accepted',
					},
					{
						name: 'Quotes · Quote Declined',
						value: 'quote.declined',
					},
					{
						name: 'Quotes · Quote Sent',
						value: 'quote.sent',
					},
					{
						name: 'Quotes · Quote Viewed',
						value: 'quote.viewed',
					},
					{
						name: 'Sequences · Enrolled in Sequence',
						value: 'sequence.enrolled',
					},
					{
						name: 'Sequences · Exited Sequence',
						value: 'sequence.exited',
					},
					{
						name: 'Sequences · Sequence Completed',
						value: 'sequence.completed',
					},
					{
						name: 'Tasks · Task Completed',
						value: 'task.completed',
					},
					{
						name: 'Tasks · Task Created',
						value: 'task.created',
					},
					{
						name: 'Tasks · Task Overdue',
						value: 'task.overdue',
					},
				],
				default: 'company.created',
				description: 'One event type',
			},
		],
	},
	{
		displayName: 'Method',
		name: 'method',
		type: 'options',
		options: [
			{
				name: 'DELETE',
				value: 'DELETE',
			},
			{
				name: 'GET',
				value: 'GET',
			},
			{
				name: 'PATCH',
				value: 'PATCH',
			},
			{
				name: 'POST',
				value: 'POST',
			},
			{
				name: 'PUT',
				value: 'PUT',
			},
		],
		default: 'GET',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['apiCall'],
			},
		},
	},
	{
		displayName: 'Path',
		name: 'path',
		type: 'string',
		default: '',
		required: true,
		placeholder: '/contacts',
		description:
			'Path of the Meetzy REST API endpoint, relative to https://meetzy.me/api/v1 (reference: https://www.meetzy.ai/docs)',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['apiCall'],
			},
		},
	},
	{
		displayName: 'Query Parameters',
		name: 'query',
		type: 'json',
		default: '{}',
		description: 'Query string parameters as a JSON object',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['apiCall'],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'json',
		default: '{}',
		description: 'Request body as a JSON object',
		displayOptions: {
			show: {
				resource: ['workspace'],
				operation: ['apiCall'],
				method: ['PATCH', 'POST', 'PUT'],
			},
		},
	},
];
