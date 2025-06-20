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
        'display/index': resolve(__dirname, 'src/ui/display/index.ts'),
        'inputs/index': resolve(__dirname, 'src/ui/inputs/index.ts'),
        'feedback/index': resolve(__dirname, 'src/ui/feedback/index.ts'),
        'navigation/index': resolve(__dirname, 'src/ui/navigation/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        return `${entryName}.${format === 'es' ? 'mjs' : 'js'}`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // preserveModules: true,
        // preserveModulesRoot: 'src',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
