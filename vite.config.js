import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  publicPath: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
  plugins: [vue()],
})
