import { ThemeProviderProps } from 'next-themes/dist/types'

export const themeConfig: ThemeProviderProps = {
  enableSystem: true,
  enableColorScheme: true,
  defaultTheme: 'system',
  themes: ['light', 'dark'],
  attribute: 'class',
}
