import { createAuthClient } from 'better-auth/svelte';

const baseURL = import.meta.env.PROD
    ? undefined // or ?? 'https://tail-mates.dk'
    : 'http://localhost:3101';

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL,
});