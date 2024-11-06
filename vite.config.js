import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/skillzinho-web/',
  build: {
    outDir: 'build' // Altere para 'build' se for esse o nome desejado
  }
})
