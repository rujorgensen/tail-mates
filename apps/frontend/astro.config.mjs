// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false
	},
	output: 'server',
	outDir: '../../dist/apps/frontend',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [
		svelte(),
	],
	site: 'https://tail-mates.dk',
	// Add Vite configuration with proxy settings
	vite: {
		server: {
			proxy: {
				'/auth': {
					target: 'http://172.29.149.175:9191',
					changeOrigin: true,
					secure: false,
				},
				'/api': {
					target: 'http://172.29.149.175:9191',
					changeOrigin: true,
					secure: false,
				},
			},
		},
	},
});
