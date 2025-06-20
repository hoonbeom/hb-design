import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      copyDtsFiles: true,
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*', 'src/**/*.spec.*'],
      beforeWriteFile: (filePath, content) => {
        // Ensure proper exports in main index.d.ts
        if (
          filePath.endsWith('index.d.ts') &&
          filePath.includes('dist/index.d.ts')
        ) {
          return {
            filePath,
            content: `// Utils
                      export { cn } from './lib/utils';

                      // UI Components
                      import * as display from './ui/display';
                      import * as input from './ui/input';
                      import * as feedback from './ui/feedback';
                      import * as navigation from './ui/navigation';

                      export const UI: {
                        readonly display: typeof display;
                        readonly input: typeof input;
                        readonly feedback: typeof feedback;
                        readonly navigation: typeof navigation;
                      };

                      // Re-export for direct access
                      export { display, input, feedback, navigation };

                      ${content}`,
          };
        }
        return { filePath, content };
      },
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'ui/index': resolve(__dirname, 'src/ui/index.ts'),
        'ui/input/index': resolve(__dirname, 'src/ui/input/index.ts'),
        'ui/feedback/index': resolve(__dirname, 'src/ui/feedback/index.ts'),
        'ui/display/index': resolve(__dirname, 'src/ui/display/index.ts'),
        'ui/navigation/index': resolve(__dirname, 'src/ui/navigation/index.ts'),
      },
      name: 'hb-design',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        `${entryName}.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
