import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		path: '**',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'sign-up',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'sign-in',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'terms-and-conditions',
		renderMode: RenderMode.Prerender,
	},
	{
		path: 'privacy-policy',
		renderMode: RenderMode.Prerender,
	},
];
