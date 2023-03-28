import { ThemeProviderProps } from 'next-themes/dist/types'

import { lightTheme, darkTheme } from '@/styles'

export const themeConfig: ThemeProviderProps = {
  enableSystem: true,
  enableColorScheme: true,
  defaultTheme: 'system',
  themes: ['light', 'dark'],
  attribute: 'class',
  value: {
    light: lightTheme.className,
    dark: darkTheme.className,
  },
}
