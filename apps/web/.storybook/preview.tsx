import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/nextjs-vite'

import { token } from '../.styled/tokens'
import '../src/app/index.css'

const preview: Preview = {
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
}

export default preview
