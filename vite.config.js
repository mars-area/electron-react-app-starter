import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'build',
    rollupOptions: {
      input: resolve(__dirname, 'index.html')
    }
  }
})
