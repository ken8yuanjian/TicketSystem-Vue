import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vue_setup_extend from "vite-plugin-vue-setup-extend" //<script name=xxx> 支持

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vue_setup_extend(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
