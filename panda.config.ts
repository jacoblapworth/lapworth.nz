import { defineConfig } from '@pandacss/dev'

import { semanticTokens, tokens, layerStyles, textStyles } from './styles'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './{app,components}/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',

  theme: {
    tokens,
    semanticTokens,
    textStyles,
    layerStyles,
  },
})
