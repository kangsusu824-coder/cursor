import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const base = process.env.VITE_BASE ?? '/'
export default defineConfig({
  // 默认根路径；如需 GitHub Pages 可在 CI 中设置 VITE_BASE=/cursor/
  base,
  plugins: [react()],
})
