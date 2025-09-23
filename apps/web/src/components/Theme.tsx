import { ThemeProvider as Provider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import type { ReactNode } from 'react'

export const themeConfig: ThemeProviderProps = {
  attribute: 'class',
  defaultTheme: 'system',
  enableColorScheme: true,
  enableSystem: true,
  themes: ['light', 'dark'],
}

interface Props {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  return <Provider {...themeConfig}>{children}</Provider>
}
