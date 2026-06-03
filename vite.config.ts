import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
// `base: './'` keeps any asset URLs relative, and `viteSingleFile` inlines all
// CSS/JS into a single index.html so the built site works when opened directly
// or hosted from any path (root or subfolder) with no extra files.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  server: {
    host: true,
    port: 5173,
  },
})
