// eslint.config.js — Flat Config (CJS)
const js = require('@eslint/js');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const importPlugin = require('eslint-plugin-import');

module.exports = [
  // Ignore build artifacts and dependencies
  {
    ignores: ['dist/', 'node_modules/'], // adjust as needed
  },

  // Base ESLint recommended rules
  js.configs.recommended,

  // Disable rules that conflict with Prettier
  prettierConfig,

  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',       // or lock to 2023 for a fixed feature set
      sourceType: 'module',        // flip to 'commonjs' if the source is not ESM
      globals: {
        browser: true,
        node: true,
        console: true,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      // Enforce Prettier formatting
      'prettier/prettier': 'warn',

      // Import order rules from your old config
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external', 'internal']],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Ignore unused vars starting with "_"
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
