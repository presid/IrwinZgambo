import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://irwinzgambo.com',
      exclude: ['/admin', '/dashboard'], // Exclude private pages
    })
  ],
  resolve:{
    alias:[{find: "@", replacement: path.resolve(__dirname, "src")}]
  },
})




