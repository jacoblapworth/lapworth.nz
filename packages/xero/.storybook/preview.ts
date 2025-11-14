import type { Preview } from '@storybook/nextjs-vite'
import '../src/index.css'
import nextIntl from './next-intl'

const preview: Preview = {
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
}

export default preview
