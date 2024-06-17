import vue from 'eslint-plugin-vue';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      vue,
    },

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
      },
      globals: {
        uni: true,
      },
    },
  },
  {
    files: ['**/*.js', '**/*.vue'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
        },
      ],

      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
];
