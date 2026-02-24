// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mirsmog.github.io',
  base: '/zwine.sh',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});