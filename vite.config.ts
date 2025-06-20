import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { copyFileSync, mkdirSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    {
      name: 'copy-type-declarations',
      closeBundle() {
        // dist/types 폴더 생성
        mkdirSync(resolve(__dirname, 'dist/types'), { recursive: true });
        // 타입 선언 파일 복사
        copyFileSync(
          resolve(__dirname, 'src/types/hb-design-ui-modules.d.ts'),
          resolve(__dirname, 'dist/types/hb-design-ui-modules.d.ts')
        );
      },
    },
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
