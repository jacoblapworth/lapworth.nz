import { ThemeProvider } from 'next-themes'

import { darkTheme, theme } from '@/styles'

import { BgProvider } from './BgColor'
import SEO from './SEO'

interface Props {
  children?: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      value={{ light: theme.className, dark: darkTheme.className }}
    >
      <BgProvider>
        <SEO />
        {children}
      </BgProvider>
    </ThemeProvider>
  )
}
