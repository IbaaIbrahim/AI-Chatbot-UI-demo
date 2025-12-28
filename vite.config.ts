import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@flowdit/chatbot-library'], // Exclude from pre-bundling to pick up changes
    esbuildOptions: {
      // Treat CommonJS modules as ES modules
      mainFields: ['module', 'main'],
    },
  },
  resolve: {
    // Ensure Vite can resolve the library
    dedupe: ['react', 'react-dom'],
  },
  server: {
    allowedHosts: [
      "chat.v2202503187605326384.powersrv.de"
    ],
    watch: {
      // Watch the linked library for changes (including CSS)
      ignored: ['!**/node_modules/@flowdit/**'],
      usePolling: true, // Set to true if file changes aren't detected
    },
  },
  css: {
    devSourcemap: true, // Enable source maps for CSS debugging
  },
})

