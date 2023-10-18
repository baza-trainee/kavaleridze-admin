import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
      port: 5174,
      host: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '#root': resolve(__dirname),
      },
    },
  };

  if (command !== 'serve') {
    config.base = '/kavaleridze-admin/';
  }

  return config;
});
