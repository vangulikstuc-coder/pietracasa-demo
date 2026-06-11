// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// [CONFIRM: definitieve domeinnaam] — zie open-questions.md.
// Tot die tijd: Cloudflare Pages preview-domein.
export default defineConfig({
  site: 'https://stucq.pages.dev',
  integrations: [sitemap()],
});
