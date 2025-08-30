import { ThemeProvider as Provider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import type { ReactNode } from 'react'

export const themeConfig: ThemeProviderProps = {
  enableSystem: true,
  enableColorScheme: true,
  defaultTheme: 'system',
  themes: ['light', 'dark'],
  attribute: 'class',
}

interface Props {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  return <Provider {...themeConfig}>{children}</Provider>
}
