import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://is53.com.br', // substitua pelo domínio do seu site
      dynamicRoutes: [
        '/',
        '/login',
        '/atualizar-senha',
        "/dashboard",
      ],
    }),
  ],
})
