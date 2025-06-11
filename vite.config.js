import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.', // use project root
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html'), // <-- this tells Vite where to start
    },
  },
})

