// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || process.env.PUBLIC_SITE_URL || 'https://mendandbloomtherapy.com',

  env: {
    schema: {
      SITE_URL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
        default: 'https://mendandbloomtherapy.com',
      }),
      CALENDLY_URL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
        default: 'https://calendly.com/roxylcsw',
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
