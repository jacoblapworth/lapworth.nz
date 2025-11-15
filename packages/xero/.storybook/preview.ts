import addonDocs from '@storybook/addon-docs'
import addonLinks from '@storybook/addon-links'
import addonThemes from '@storybook/addon-themes'
import { definePreview } from '@storybook/nextjs-vite'
import storybookNextIntl from 'storybook-next-intl/preview'
import nextIntl from './next-intl'
import '../src/index.css'

export default definePreview({
  addons: [addonDocs(), addonLinks(), addonThemes(), storybookNextIntl],
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
