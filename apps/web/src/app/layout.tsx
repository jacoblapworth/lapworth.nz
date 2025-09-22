import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { VercelToolbar } from '@vercel/toolbar/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { ServerThemeProvider, ThemeProvider } from 'next-themes'
import { type ReactNode, useId } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Navigation } from '@/components/Nav'
import { Skiplink } from '@/components/Skiplink'
import { themeConfig } from '@/components/Theme'
import { css } from '@/styled/css'
import { token } from '@/styled/tokens'

const sectraFont = localFont({
  display: 'swap',
  preload: true,
  src: './fonts/sectra/regular.woff',
  variable: '--fonts-serif',
  weight: '400',
})

const baseUrl = new URL('https://lapworth.nz')

export const metadata: Metadata = {
  description:
    'A digital product designer, from Tāmaki Makaurau, Aotearoa — Auckland, New Zealand. Currently looking for work in London.',
  metadataBase: baseUrl,
  openGraph: {
    images: [
      {
        alt: 'Jacob Lapworth',
        url: `/static/og-image.png`,
      },
    ],
    locale: 'en_NZ',
    siteName: 'Jacob Lapworth — Product designer',
    type: 'website',
    url: baseUrl,
  },
  title: {
    default: 'Jacob Lapworth',
    template: '%s — Jacob Lapworth',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jacoblapworth',
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  themeColor: [
    {
      color: token('colors.black.100'),
      media: '(prefers-color-scheme: dark)',
    },
    {
      color: token('colors.white.10'),
      media: '(prefers-color-scheme: light)',
    },
  ],
  width: 'device-width',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const id = useId()
  const shouldInjectToolbar = process.env.NODE_ENV === 'development'

  return (
    <ServerThemeProvider {...themeConfig}>
      <html
        className={sectraFont.variable}
        lang="en"
        suppressHydrationWarning={true}
      >
        <body
          className={css({
            backgroundColor: 'background',
            display: 'grid',
            gridTemplateAreas: '"header" "nav" "content" "footer"',
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto auto 1fr auto',
            // minHeight: '-webkit-fill-available',
            marginLeft: 'env(safe-area-inset-left)',
            marginRight: 'env(safe-area-inset-right)',
            maxWidth: '100%',
            minHeight: 'calc(100vh - env(safe-area-inset-bottom))',
            overflowX: 'hidden',
          })}
          key="body"
        >
          <ThemeProvider {...themeConfig}>
            <NextIntlClientProvider>
            <Skiplink data-testid="skip-link" href={`#${id}`} tabIndex={0}>
              Skip to main content
            </Skiplink>
            <Header />
            <Navigation />
            <Main id={id}>{children}</Main>
            <Footer />
            <Analytics />
            <SpeedInsights />
            </NextIntlClientProvider>
          </ThemeProvider>
          {shouldInjectToolbar && <VercelToolbar />}
        </body>
      </html>
    </ServerThemeProvider>
  )
}
