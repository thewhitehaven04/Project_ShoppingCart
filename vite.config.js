/// <reference types="vitest" />
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
        replacement: path.resolve(__dirname, '/src'),
      },
      {
        find: '@images',
        replacement: path.resolve(__dirname, '/src/resources/images'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, '/src/components'),
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, '/src/styles'),
      },
      {
        find: '@reducers',
        replacement: path.resolve(__dirname, '/src/reducers'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, '/src/pages'),
      },
      {
        find: '@providers',
        replacement: path.resolve(__dirname, '/src/providers'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, '/src/utils'),
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, '/src/styles')
      }
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.spec.jsx', '**/*.test.jsx'],
    setupFiles: ['/src/testSetup.js'],
  },
}));
