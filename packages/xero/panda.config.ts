import { defineConfig } from '@pandacss/dev'
import { theme } from '@/theme'
import { globalCss } from '@/theme/global'

export default defineConfig({
  conditions: {
    extend: {
      active: '&:not(:disabled):is(:active, [data-active])',
      activeItem: '&[data-active-item]',
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
  prefix: 'x',
  preflight: true,
  shorthands: false,
  theme,
})
