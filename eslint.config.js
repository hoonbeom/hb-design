import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [js.configs.recommended, tseslint.configs.recommended, reactHooks.configs['recommended-latest'], reactRefresh.configs.vite],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            import: importPlugin
        },
        rules: {
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                    pathGroups: [
                        { pattern: 'react', group: 'external', position: 'before' },
                        { pattern: '@/pages', group: 'internal', position: 'before' },
                        { pattern: '@/pages/**', group: 'internal', position: 'before' },
                        { pattern: '@/widgets', group: 'internal', position: 'before' },
                        { pattern: '@/widgets/**', group: 'internal', position: 'before' },
                        { pattern: '@/features', group: 'internal', position: 'before' },
                        { pattern: '@/features/**', group: 'internal', position: 'before' },
                        { pattern: '@/entities', group: 'internal', position: 'before' },
                        { pattern: '@/entities/**', group: 'internal', position: 'before' },
                        { pattern: '@/shared', group: 'internal', position: 'before' },
                        { pattern: '@/shared/**', group: 'internal', position: 'before' },
                        { pattern: '@/**', group: 'internal', position: 'after' }
                    ],
                    pathGroupsExcludedImportTypes: ['builtin']
                }
            ],
            'import/no-duplicates': 'error',
            'import/first': 'error'
        }
    }
]);
