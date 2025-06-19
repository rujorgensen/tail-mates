// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
      output: 'server',
      outDir: '../../dist/apps/frontend',
      adapter: node({
            mode: 'standalone',
      }),
      site: 'https://tail-mates.dk',
      // Add Vite configuration with proxy settings
      vite: {
            server: {
                  proxy: {
                        '/auth': {
                              target: 'http://localhost:3100',
                              changeOrigin: true,
                              secure: false,
                        },
                        '/api': {
                              target: 'http://localhost:3100',
                              changeOrigin: true,
                              secure: false
                        }
                  },
            },
      }
});