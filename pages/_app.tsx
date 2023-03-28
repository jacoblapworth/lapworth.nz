import { Analytics } from '@vercel/analytics/react'
import type { GetStaticProps as NextGetStaticProps } from 'next'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'

import { useWelcomeLog } from '@/components/Hooks/useWelcomeLog'
import { MarkdownProvider } from '@/components/Markdown'
import { Page } from '@/components/Page'
// import { Head } from '@/lib/head'
import { darkTheme, lightTheme } from '@/styles'

interface PageProps {
  hideNav?: boolean
  hideHeader?: boolean
  title?: string
  theme?: string
}

export type GetStaticProps<T = Record<string, string>> = NextGetStaticProps<
  PageProps & T
>

export const App = ({
  Component,
  pageProps: { hideNav, theme, ...pageProps },
}: AppProps<PageProps>) => {
  useWelcomeLog()

  return (
    <ThemeProvider
      enableSystem={true}
      enableColorScheme={true}
      defaultTheme="system"
      themes={['light', 'dark']}
      forcedTheme={theme}
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <MarkdownProvider>
        {/* <Head /> */}
        <Analytics />
        <Page title={pageProps.title} hideNav={hideNav}>
          <Component {...pageProps} />
        </Page>
      </MarkdownProvider>
    </ThemeProvider>
  )
}

export default App
