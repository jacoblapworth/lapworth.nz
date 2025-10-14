import { defineConfig } from '@pandacss/dev'
import { theme } from '@/theme'

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
  // eject: true,
  exclude: [],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: '.styled',
  outExtension: 'js',
  // presets: [],
  shorthands: false,
  theme,
})
