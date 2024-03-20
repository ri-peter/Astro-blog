import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://ri-peter.github.io',
  base: '/Astro-blog',
  integrations: [preact()]
});