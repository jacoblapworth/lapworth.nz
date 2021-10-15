import Providers from '@/components/Providers'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { useWelcomeLog } from '../components/Hooks/useWelcomeLog'
import Page from '@/components/Page'
import Nav from '@/components/Nav'

export default function App({
  Component,
  pageProps: { hideNav, ...pageProps },
}: AppProps) {
  useWelcomeLog()

  return (
    <Providers>
      <Page>
        {!hideNav && <Nav />}
        <Component {...pageProps} />
      </Page>
    </Providers>
  )
}
