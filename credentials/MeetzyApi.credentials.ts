import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class MeetzyApi implements ICredentialType {
	name = 'meetzyApi';

	displayName = 'Meetzy API';

	documentationUrl = 'https://www.meetzy.ai/docs';

	icon: Icon = {
		light: 'file:../nodes/Meetzy/meetzy.svg',
		dark: 'file:../nodes/Meetzy/meetzy.dark.svg',
	};

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description:
				'In Meetzy: Apps & integrations → API keys → New key (scopes read, write, webhooks). The key starts with mz_live_.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://meetzy.me/api/v1',
			url: '/me',
			method: 'GET',
		},
	};
}
