import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
})
