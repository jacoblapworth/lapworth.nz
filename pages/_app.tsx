import type { GetStaticProps as NextGetStaticProps } from 'next'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import Page from '@/components/Page'
import { Head } from '@/lib/head'
import { darkTheme, lightTheme } from '@/styles/stitches.config'

import { useWelcomeLog } from '../components/Hooks/useWelcomeLog'

interface PageProps {
  hideNav?: boolean
  hideHeader?: boolean
  title?: string
}

export type GetStaticProps<T = {}> = NextGetStaticProps<PageProps & T>

export const App = ({
  Component,
  pageProps: { hideNav, title, ...pageProps },
}: AppProps<PageProps>) => {
  useWelcomeLog()

  return (
    <ThemeProvider
      enableSystem={true}
      enableColorScheme={true}
      defaultTheme="system"
      themes={['light', 'dark']}
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
