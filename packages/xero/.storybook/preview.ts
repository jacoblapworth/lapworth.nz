import { definePreview } from '@storybook/nextjs-vite'
import '../src/index.css'
import nextIntl from './next-intl'

export default definePreview({
  addons: [],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    nextIntl,
  },
  tags: ['autodocs'],
})
