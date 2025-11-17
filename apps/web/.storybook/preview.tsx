import addonA11y from '@storybook/addon-a11y'
import addonDocs from '@storybook/addon-docs'
import addonLinks from '@storybook/addon-links'
import addonThemes, { withThemeByClassName } from '@storybook/addon-themes'
import { definePreview } from '@storybook/nextjs-vite'
import { token } from '@/styled/tokens'
import '../src/app/index.css'

export default definePreview({
  addons: [addonDocs(), addonLinks(), addonThemes(), addonA11y()],
  decorators: [
    withThemeByClassName({
      defaultTheme: 'Light',
      themes: {
        Dark: 'dark',
        Light: 'light',
      },
    }),
  ],
  initialGlobals: {
    backgrounds: {
      value: 'default',
    },
    locale: 'en',
    locales: {
      en: 'English',
    },
  },
  parameters: {
    backgrounds: {
      default: 'default',
      options: {
        default: {
          name: 'Default',
          value: token('colors.background'),
        },
      },
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
