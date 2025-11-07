import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

const theme = create({
  base: 'dark',
  brandTitle: 'Lapworth.nz Storybook',
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
})

addons.setConfig({
  theme,
})
