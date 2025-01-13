import url from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginImportX from 'eslint-plugin-import-x'
import pluginPromise from 'eslint-plugin-promise'
import pluginReact from 'eslint-plugin-react'
import pluginReactCompiler from 'eslint-plugin-react-compiler'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const compat = new FlatCompat({ baseDirectory: __dirname })

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser, ...globals.node },
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        // projectService: true,
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      'react-compiler': pluginReactCompiler,
    },

    settings: {
      'import-x/parsers': {
        '@typescript-eslint/parser': ['**/*.ts', '**/*.tsx'],
      },

      'import-x/resolver': {
        typescript: true,
        node: true,
      },

      react: {
        version: 'detect',
      },
    },
  },
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.typescript,
  pluginJs.configs.recommended, // https://github.com/eslint/eslint
  ...tseslint.configs.strict, // https://github.com/typescript-eslint/typescript-eslint
  ...tseslint.configs.stylistic,
  pluginPromise.configs['flat/recommended'], // https://github.com/eslint-community/eslint-plugin-promise
  pluginReact.configs.flat.recommended, // https://github.com/jsx-eslint/eslint-plugin-react
  pluginReact.configs.flat['jsx-runtime'], // https://github.com/jsx-eslint/eslint-plugin-react
  eslintConfigPrettier, // https://github.com/prettier/eslint-config-prettier
  ...compat.extends('next'),
  {
    rules: {
      'react/prop-types': 'off',
      'newline-before-return': 'error',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowTernary: true,
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],
      '@typescript-eslint/no-empty-function': 'warn',
      'react-compiler/react-compiler': 'warn',
      'import-x/no-named-as-default': 'error',
      'import-x/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'styled/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
    },
  },
  // ! ===================== DISCLAIMER =====================
  // ! There is no official solution available for new ESLint 9 flat config structure for NextJS
  // ! The solution is taken from the community and may not be the best practice, use it at your own risk
  // ? Ref: https://github.com/vercel/next.js/discussions/49337?sort=top#discussioncomment-5998603
  // ! ======================================================
  // {
  //   plugins: {
  //     '@next/next': pluginNext,
  //   },
  //   rules: {
  //     ...pluginNext.configs.recommended.rules,
  //     ...pluginNext.configs['core-web-vitals'].rules,
  //   },
  // },
  // {
  //   ignores: ['.next/*'],
  // },
]
