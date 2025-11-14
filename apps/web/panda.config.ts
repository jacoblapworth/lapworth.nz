import { defineConfig } from '@pandacss/dev'

import { globalCss, semanticTokens, textStyles, tokens } from './src/styles'

export default defineConfig({
  conditions: {
    extend: {
      activeItem: '&[data-active-item]',
      enter: '&[data-enter]',
      exit: '&[data-exit]',
    },
  },
  exclude: [],
  globalCss,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: '.styled',
  outExtension: 'js',
  preflight: true,
  shorthands: false,
  strictTokens: false,
  theme: {
    semanticTokens,
    textStyles,
    tokens,
  },
})
