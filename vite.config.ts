import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

import { dependencies } from './package.json';

function renderChunks(deps: Record<string, string>) {
  const chunks = {};

  Object.keys(deps).forEach((key) => {
    if (['react', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@store', replacement: path.resolve(__dirname, 'src/store/index.ts') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types/index.ts') },
      { find: '@app', replacement: path.resolve(__dirname, 'src/app/index.ts') },
      { find: '@widgets', replacement: path.resolve(__dirname, 'src/widgets/index.ts') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features/index.ts') },
      { find: '@entities', replacement: path.resolve(__dirname, 'src/entities/index.ts') },
      { find: '@shared/ui', replacement: path.resolve(__dirname, 'src/shared/ui/index.ts') },
      { find: '@shared/icons', replacement: path.resolve(__dirname, 'src/shared/icons/index.ts') },
      { find: '@shared/fonts', replacement: path.resolve(__dirname, 'src/shared/fonts') },
      { find: '@shared/utils', replacement: path.resolve(__dirname, 'src/shared/utils/index.ts') },
    ],
  },
  build: {
    rollupOptions: {
      external: ['**/*.test.*', '**/__mocks__/*', '**/__tests__/*'],
      output: {
        entryFileNames: '[name].js',
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  server: {
    host: true,
    port: 4173,
    watch: {
      usePolling: true,
    },
  },
});
