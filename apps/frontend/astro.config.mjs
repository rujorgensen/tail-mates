// @ts-check
import { defineConfig } from 'astro/config';
import proxy from './proxy.conf.json' assert { type: 'json' };
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
                  proxy,
            }
      }
});
