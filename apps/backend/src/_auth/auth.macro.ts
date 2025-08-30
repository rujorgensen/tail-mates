import { auth } from '@backend/auth';
import { Elysia } from 'elysia';

/**
 * Macro for attaching the user object.
 */
export const betterAuthMacro = new Elysia({
    name: 'better-auth',
})
    .macro({
        auth: {
            async resolve({ status, request: { headers } }) {
                const session = await auth.api.getSession({
                    headers,
                });

                if (!session) {
                    return status(401);
                }

                return {
                    user: session.user,
                };
            },
        },
    });
