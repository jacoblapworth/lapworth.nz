import { defineConfig } from '@pandacss/dev'

import {
  semanticTokens,
  tokens,
  layerStyles,
  textStyles,
  globalCss,
} from './styles'

export default defineConfig({
  jsxFramework: 'react',
  preflight: true,
  strictTokens: false,
  include: [
    './{app,components}/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  outdir: '.styled',
  globalCss,
  theme: {
    tokens,
    semanticTokens,
    textStyles,
    layerStyles,
  },
})
