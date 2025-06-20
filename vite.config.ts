import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      copyDtsFiles: true,
      include: ['src/**/*'],
      exclude: [
        'src/**/*.test.*',
        'src/**/*.spec.*',
        'src/App.tsx',
        'src/main.tsx',
        'src/styles.css',
      ],
    }),
  ],
  build: {
    lib: {
      entry: {
        // index: resolve(__dirname, 'src/index.ts'),
        'ui/index': resolve(__dirname, 'src/ui/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
