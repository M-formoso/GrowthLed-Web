import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 importante: usar el nombre exacto de tu repo
export default defineConfig({
  plugins: [react()],
  base: '/GrowthLed-Web/', 
})
