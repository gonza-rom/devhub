import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://devhub.com.ar',
  output: 'static',
  integrations: [tailwind(), sitemap(), react()],
  
  // Mejoras de SEO
  compressHTML: true,
  
  // Vite config para optimización
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});