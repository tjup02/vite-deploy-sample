import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  // base: '/vite-deploy-sample/',
  // -告訴 Vite：這個網站不是掛在網域根目錄
  // -而是掛在 /vite-deploy-sample/ 底下
  base: '/vite-deploy-sample/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
