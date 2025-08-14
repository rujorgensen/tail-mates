/**
 * Run with Bun:
 *  `bun run ./dist/apps/frontend-ng/server/server.mjs`
 */
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { isMainModule } from '@angular/ssr/node';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app: Elysia = new Elysia();
const angularApp: AngularAppEngine = new AngularAppEngine();

app
  // Serve static files from the /browser dist folder
  // ! NB During development, the output is not there and this will fail
 //  .use(staticPlugin({
 //    prefix: '',
 //    assets: browserDistFolder,
 //    alwaysStatic: true,
 //    headers: {
 //      maxAge: '1y',
 //      // index: false,
 //      // redirect: false,
 //    },
 //  }))

  // Catch-all route that proxies to Angular SSR
  .all('/*', async ({ request }) => {
    // const res = await reqHandler(request);
    // return res ?? new Response('Not found', { status: 404 });


    return angularApp
      .handle(request, { server: 'elysia' });
  });

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;

  app.listen(port, ({ url }) => {
    console.log(`🚀🦊 Elysia SSR server running on ${url.href}`);
  });
}

/**
 * This is a request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(app.fetch);