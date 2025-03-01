import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // Makes describe, test, etc., global
    environment: 'jsdom', // Simulates DOM for React
  },
  resolve: {
    dedupe: ['react', 'react-dom'], // Forces Vite to use a single instance
  },
})
