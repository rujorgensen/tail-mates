/**
 * Run with Bun:
 *  `bun run ./dist/apps/frontend/server/server.mjs`
 */
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { isMainModule } from '@angular/ssr/node';
import packageJson from '../../../package.json';

const version = packageJson.version;
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app: Elysia = new Elysia();
const angularApp: AngularAppEngine = new AngularAppEngine();

app
	// Serve static files from the /browser dist folder
	// ! NB During development, the output is not there and this will fail
	.use(
		staticPlugin({
			prefix: '',
			assets: browserDistFolder,
			alwaysStatic: true,
			headers: {
				maxAge: '1y',
				// index: false,
				// redirect: false,
			},
		}),
	)

	// Catch-all route that proxies to Angular SSR
	.all('/*', async ({ request }) => {
		// const res = await reqHandler(request);
		// return res ?? new Response('Not found', { status: 404 });

		console.log(`ℹ️  ${request.method} ${request.url} will be handled by Angular`);

		return angularApp
			.handle(request, {
				'x-server': 'elysia', // 'server' may be overridden by the proxy
			});
	});

// * Log the requests
app
	.state('requestStart', Date.now())

	.onRequest(({ request }) => {
		console.log(`➡️  ${request.method} ${request.url}`);
	})

	.onAfterHandle(({ store, set, request }) => {
		const ms = Date.now() - store.requestStart;

		console.log(`⬅️  ${request.method} ${request.url} -> ${set.status} (${ms}ms)`);
	})
	;

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
	const port = process.env['PORT'] || 4000;

	app.listen(port, ({ url }) => {
		console.info(`ℹ️ Serving static assets from '${browserDistFolder}'`);
		console.log(`🚀🦊 Elysia SSR server (${version}) running on ${url.href}`);
	});
}

/**
 * This is a request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(app.fetch);
