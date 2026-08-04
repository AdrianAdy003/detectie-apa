import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { SITE_URL } from './src/config';

// Site static, pregătit pentru Cloudflare Pages: `npm run build` -> folderul `dist`.
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/multumim/'),
    }),
    mdx(),
  ],
});
