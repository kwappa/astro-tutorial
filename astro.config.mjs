import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// Import /static for a static site
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
  // Must be 'static' or 'hybrid'
  output: 'static',
  adapter: vercelStatic(),

});

