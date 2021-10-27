import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import Nav from '@/components/Nav'
import Page from '@/components/Page'
import Providers from '@/components/Providers'

import { useWelcomeLog } from '../components/Hooks/useWelcomeLog'

export default function App({
  Component,
  pageProps: { hideNav, title, ...pageProps },
}: AppProps) {
  useWelcomeLog()

  return (
    <Providers>
      <Page title={title}>
        {!hideNav && <Nav />}
        <Component {...pageProps} />
      </Page>
    </Providers>
  )
}
