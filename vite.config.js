import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => ({
  root: path.resolve(__dirname, 'src'),
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/resources/images'),
    },
  },
}));
