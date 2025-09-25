import { defineConfig } from '@pandacss/dev'

import { globalCss, semanticTokens, tokens } from './src/styles'

export default defineConfig({
  conditions: {
    extend: {
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
    tokens,
  },
})
