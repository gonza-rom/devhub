import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://devhub.com.ar',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap()
  ],
  
  // Mejoras de SEO
  compressHTML: true,
  
  // Vite config para optimización
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
