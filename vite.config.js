import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => ({
  root: '.',
  server: {
    open: true,
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '/src')
      },
      {
        find: '@images',
        replacement: path.resolve(__dirname, '/src/resources/images'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, '/src/components'),
      },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/tests/setup.js',
  },
}));
