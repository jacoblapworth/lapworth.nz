import { defineConfig } from '@pandacss/dev'

import { globalCss, semanticTokens, tokens } from './src/styles'

export default defineConfig({
  jsxFramework: 'react',
  preflight: true,
  strictTokens: false,
  outExtension: 'js',
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  outdir: '.styled',
  globalCss,
  theme: {
    tokens,
    semanticTokens,
    // textStyles,
    // layerStyles,
  },
})
