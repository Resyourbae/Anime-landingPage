import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1:4040',
      '8b5b6cb5fc05.ngrok-free.app' // 🔥 ganti sesuai URL ngrok kamu
      // Atau gunakan 'all' kalau nggak mau ganti tiap kali restart ngrok:
      // 'all'
    ]
  }
})
