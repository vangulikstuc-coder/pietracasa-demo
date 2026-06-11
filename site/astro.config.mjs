// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// [CONFIRM: definitieve domeinnaam] — zie open-questions.md.
// Tot die tijd: Cloudflare Pages preview-domein.
export default defineConfig({
  site: 'https://stucq.pages.dev',
  integrations: [sitemap()],
  // Oude slugs -> SEO-routes uit context/sitemap.md (polish-slugs).
  redirects: {
    '/offerte': '/offerte-aanvragen',
    '/faq': '/veelgestelde-vragen',
    '/gevelwerk': '/diensten/gevelwerk-buitenafwerking',
    '/binnenafwerking': '/diensten/binnenafwerking-renovatie',
    '/microcement': '/diensten/microcement-vloeren',
  },
});
