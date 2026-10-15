import { defineConfig } from '@pandacss/dev'
import basePreset from '@pandacss/preset-base'
import pandaPreset from '@pandacss/preset-panda'
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
  jsxStyleProps: 'all',
  outdir: '.styled',
  outExtension: 'js',
  preflight: true,
  presets: [basePreset, pandaPreset],
  shorthands: false,
  strictTokens: false,
  theme: {
    semanticTokens,
    textStyles,
    tokens,
  },
})
