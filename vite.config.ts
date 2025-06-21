import { defineConfig, loadEnv } from 'vite';
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'import.meta.env': {
        VITE_BASE_URL: JSON.stringify(env.VITE_BASE_URL),
      }
    }
  };
});