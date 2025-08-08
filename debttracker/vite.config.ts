import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,   // 👈 fixed dev server port
    strictPort: true // 👈 fail if port is taken instead of auto-incrementing
  }
})
