// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://phanindrasai.space',
  base: '/',
  build: {
    assets: '_assets'
  },
  output: 'static',
});
