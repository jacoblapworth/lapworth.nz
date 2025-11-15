import addonDocs from '@storybook/addon-docs'
import addonLinks from '@storybook/addon-links'
import addonThemes from '@storybook/addon-themes'
import { definePreview } from '@storybook/nextjs-vite'
import * as storybookNextIntl from 'storybook-next-intl/preview'
import '../src/index.css'
import nextIntl from './next-intl'

export default definePreview({
  addons: [addonDocs(), addonLinks(), addonThemes()],
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
