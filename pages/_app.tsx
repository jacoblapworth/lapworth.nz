import { NextSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import NextApp from 'next/app'

import Page from '@/components/Page'
import { defaultSEO, useRouteEmoji } from '@/lib/seo'
import { darkTheme, lightTheme } from '@/styles'

import { useWelcomeLog } from '../components/Hooks/useWelcomeLog'

interface PageProps {
  hideNav?: boolean
  hideHeader?: boolean
  title?: string
}

export const App = ({
  Component,
  pageProps: { hideNav, title, ...pageProps },
}: AppProps<PageProps>) => {
  useWelcomeLog()
  const emoji = useRouteEmoji()

  return (
    <ThemeProvider
      enableSystem={true}
      enableColorScheme={true}
      defaultTheme="system"
      // themes={['light', 'dark']}
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <NextSeo
        {...defaultSEO}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'initial-scale=1, viewport-fit=cover',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/svg+xml',
            href: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`,
          },
        ]}
      />

      <Page title={title} hideNav={hideNav}>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}
