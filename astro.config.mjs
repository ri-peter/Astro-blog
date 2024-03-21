import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
const isProd = import.meta.env.PROD;
const baseUrl = isProd ? "/Astro-blog" : "";

// https://astro.build/config
export default defineConfig({
  site: 'https://ri-peter.github.io/',
  base: baseUrl,
  integrations: [preact()]
});