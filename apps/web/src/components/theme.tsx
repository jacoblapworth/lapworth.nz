import type { ThemeProviderProps } from 'next-themes'

export const themeConfig: ThemeProviderProps = {
  attribute: 'class',
  defaultTheme: 'system',
  enableColorScheme: true,
  enableSystem: true,
  themes: ['light', 'dark'],
}
