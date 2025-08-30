import { auth } from '@backend/auth';
import { type Context, Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import packageJson from '../../../package.json';

// The api routes
import { dogsController } from './api/dogs.controller';
import { usersController } from './api/users.controller';
import { eventsController } from './api/events.controller';

if (Bun.env.NODE_ENV !== 'production' && Bun.env.NODE_ENV !== 'development') {
	throw new Error('NODE_ENV has to be either "production" or "development"');
}

const version = packageJson.version;

// User middleware (compute user and session and pass to routes)
const betterAuth = new Elysia({
	name: 'better-auth',
})
	.all('/api/auth/*', (context: Context) => {
		if (
			[
				'POST',
				'GET',
			].includes(context.request.method)
		) {
			return auth.handler(context.request);
		}

		context.status(405);

		return undefined;
	});

const app = new Elysia()
	.use(betterAuth)

	.use(
		cors(
			Bun.env.NODE_ENV === 'production'
				? undefined
				: {
					origin: 'localhost:3101',
					methods: [
						'GET',
						'POST',
					],
				},
		),
	)

	.use(dogsController)

	.get('/', () => 'Hello Elysia')
	.listen(3100);

console.log(`🦊 Elysia API server (${version}) running at http://${app.server?.hostname}:${app.server?.port}`);

export type TApp = typeof app;
