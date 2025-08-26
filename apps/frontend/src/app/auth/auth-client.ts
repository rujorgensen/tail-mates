import { isDevMode } from '@angular/core';
import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
	/** The base URL of the server (optional if you're using the same domain) */
	baseURL: isDevMode() ? 'http://localhost:3100' : undefined,
});
