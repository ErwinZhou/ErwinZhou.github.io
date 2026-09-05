// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://erwinzhou.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    // Light Shiki theme: the default (github-dark) paints code/diagram text
    // in near-white, which is unreadable on the pale `bg-surface` code block.
    shikiConfig: { theme: 'github-light' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
