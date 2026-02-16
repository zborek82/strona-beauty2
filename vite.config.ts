import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Konfiguracja pod Vercel - naprawia błąd czarnego ekranu
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // Na Vercel "base" musi być '/' (folder główny)
    base: '/', 
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      // Przekazywanie klucza API do Twojego kodu
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        // Pozwala na używanie skrótu '@' w importach plików
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
