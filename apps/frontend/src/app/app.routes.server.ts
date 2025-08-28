import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	{
		path: '**',
		renderMode: RenderMode.Server,
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
