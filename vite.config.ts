import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    solid(), 
    tailwindcss(),
  ],
  base: '/',
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: ['lucide-solid'],
  },
  ssr: {
    noExternal: ['lucide-solid'],
  },
})
