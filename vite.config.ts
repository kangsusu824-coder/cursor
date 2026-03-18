import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 部署到 /<repo>/ 路径下
  base: '/cursor/',
  plugins: [react()],
})
