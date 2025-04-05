// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://phanindrasai27.github.io',
  base: '/phanindrasai07',
  build: {
    assets: '_assets'
  },
  output: 'static',
});
