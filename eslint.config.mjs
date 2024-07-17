import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';
import pluginImport from 'eslint-plugin-import';
import pluginUnicorn from 'eslint-plugin-unicorn';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  prettierConfig, // Disable ESLint rules that conflict with Prettier
  {
    plugins: {
      import: pluginImport,
      prettier: prettierPlugin,
      'sort-keys-fix': sortKeysFix,
      unicorn: pluginUnicorn,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          // Ignore variables starting with underscore
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_', // Ignore arguments starting with underscore
        },
      ],
      camelcase: [
        'error',
        {
          ignoreDestructuring: false,
          ignoreGlobals: true,
          ignoreImports: false,
          properties: 'always',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
      'react/jsx-closing-bracket-location': [
        'error',
        {
          nonEmpty: 'after-props',
          selfClosing: 'tag-aligned',
        },
      ],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: 3,
          when: 'always',
        },
      ],
      'sort-keys-fix/sort-keys-fix': 'warn',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
];
