import addonA11y from '@storybook/addon-a11y'
import addonDocs from '@storybook/addon-docs'
import addonLinks from '@storybook/addon-links'
import addonThemes, { withThemeByClassName } from '@storybook/addon-themes'
import { definePreview } from '@storybook/nextjs-vite'
import storybookNextIntl from 'storybook-next-intl/preview'
import nextIntl from './next-intl'
import '../src/index.css'
import { token } from '@/styled/tokens'

export default definePreview({
  addons: [
    addonDocs(),
    addonLinks(),
    addonThemes(),
    storybookNextIntl,
    addonA11y(),
  ],
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
  },
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
    backgrounds: {
      default: 'default',
      options: {
        default: {
          name: 'Default',
          value: token('colors.background.primary'),
        },
      },
    },
    controls: {
      exclude: /^_.+/,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextIntl,
  },
  tags: ['autodocs'],
})
