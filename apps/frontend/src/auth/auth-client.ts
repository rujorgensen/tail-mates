import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
	/** The base URL of the server (optional if you're using the same domain) */
	baseURL: import.meta.env.PROD ? undefined : 'http://localhost:3101',
});
