import { defineConfig } from '@pandacss/dev'

import { globalCss, semanticTokens, textStyles, tokens } from './src/styles'

export default defineConfig({
  conditions: {
    extend: {
      active: '&:not(:disabled):is(:active, [data-active])',
      activeItem: '&[data-active-item]',
      checked: ':is(:checked, [data-checked], [aria-checked=true]) &',
      disabled: '&[aria-disabled]',
      enter: '&[data-enter]',
      exit: '&[data-exit]',
      focus: '&:not(:disabled):is(:focus, [data-focus])',
      focusWithin: '&:not(:disabled):focus-within',
      hover: '&:not(:disabled):is(:hover, [data-hover])',
      marker: '&::marker, &::-webkit-details-marker',
    },
  },
  exclude: [],
  globalCss,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: '.styled',
  outExtension: 'js',
  preflight: true,
  strictTokens: false,
  theme: {
    semanticTokens,
    textStyles,
    tokens,
  },
})
