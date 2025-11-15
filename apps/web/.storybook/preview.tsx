import addonDocs from '@storybook/addon-docs'
import addonLinks from '@storybook/addon-links'
import addonThemes, { withThemeByClassName } from '@storybook/addon-themes'
import type { ReactRenderer } from '@storybook/nextjs-vite'
import { definePreview } from '@storybook/nextjs-vite'

import { token } from '../.styled/tokens'
import '../src/app/index.css'

export default definePreview({
  addons: [addonDocs(), addonLinks(), addonThemes()],
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: 'light',
      themes: {
        dark: 'dark',
        light: 'light',
      },
    }),
  ],

  initialGlobals: {
    backgrounds: {
      value: 'light',
    },
    locale: 'en',
    locales: {
      en: 'English',
    },
  },

  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: token('colors.background'),
        },
        {
          name: 'dark',
          value: token('colors.background'),
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs'],
})
