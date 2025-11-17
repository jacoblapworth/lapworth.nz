import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

const theme = create({
  base: 'light',
  brandTitle: '@lapworth/xero',
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
})

addons.setConfig({
  theme,
})
