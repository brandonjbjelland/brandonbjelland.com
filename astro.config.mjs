// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import llmsTxtCheck from './scripts/llms-txt-check.mjs';

export default defineConfig({
  site: 'https://brandonbjelland.com',
  integrations: [mdx(), sitemap(), llmsTxtCheck()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
