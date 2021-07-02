import Providers from '@components/Providers'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import { useWelcomeLog } from '../components/Hooks/useWelcomeLog'

export default function App({ Component, pageProps }: AppProps) {
  useWelcomeLog()

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
