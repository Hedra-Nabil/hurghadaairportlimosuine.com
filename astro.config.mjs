import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hurghadaairportlimousine.com',
  // Directory output serves these pages at slash-terminated paths. Keep
  // generated URLs, canonicals, and the sitemap aligned with that format.
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname.replace(/\/$/, '') || '/';
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/transfers/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/airports/') || path.startsWith('/fleet/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/services/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});
