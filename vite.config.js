import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite config
  define: {
    'process.env.VITE_REACT_APP_SANITY_TOKEN': JSON.stringify(process.env.VITE_REACT_APP_SANITY_TOKEN),
  },
})
