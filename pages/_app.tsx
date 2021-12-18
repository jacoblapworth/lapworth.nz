import type { GetStaticProps as NextGetStaticProps } from 'next'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import { useWelcomeLog } from '@/components/Hooks/useWelcomeLog'
import Page from '@/components/Page'
import { Head } from '@/lib/head'
import { darkTheme, lightTheme } from '@/styles'

interface PageProps {
  hideNav?: boolean
  hideHeader?: boolean
  title?: string
  theme?: string
}

export type GetStaticProps<T = {}> = NextGetStaticProps<PageProps & T>

export const App = ({
  Component,
  pageProps: { hideNav, title, theme, ...pageProps },
}: AppProps<PageProps>) => {
  useWelcomeLog()

  return (
    <ThemeProvider
      enableSystem={true}
      enableColorScheme={true}
      defaultTheme="system"
      themes={['light', 'dark']}
      forcedTheme={theme || null}
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <Head />
      <Page title={title} hideNav={hideNav}>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}

export default App
