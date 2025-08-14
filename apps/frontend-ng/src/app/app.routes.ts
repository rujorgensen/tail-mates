import { Route } from '@angular/router';

export const appRoutes: Route[] = [

	{
		path: '',
		loadComponent: () =>
			import('./app.component').then((m) => m.AppComponent),
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./_pages/main/main.component').then(
						(m) => m.MainComponent,
					),
			},
		],
	},

	{
		path: 'sign-in',
		loadComponent: () =>
			import('./_pages/sign-in-secret/sign-in-secret.component').then(
				(m) => m.SignInSecretComponent,
			),
	},

	{
		path: 'sign-up',
		loadComponent: () =>
			import('./_pages/sign-up/sign-up.component').then(
				(m) => m.SignUpComponent,
			),
	},

	{
		path: 'terms-and-conditions',
		loadComponent: () =>
			import(
				'./_pages/terms-and-conditions/terms-and-conditions.component'
			).then((m) => m.TermsAndConditionsComponent),
	},

	{
		path: 'privacy-policy',
		loadComponent: () =>
			import('./_pages/privacy-policy/privacy-policy.component').then(
				(m) => m.PrivacyPolicyComponent,
			),
	},

	// Otherwise redirect to home
	{
		path: '**',
		redirectTo: '',
	},
];
