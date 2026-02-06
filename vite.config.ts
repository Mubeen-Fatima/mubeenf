import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mubeenf/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
