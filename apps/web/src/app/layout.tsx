import './index.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
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
  src: './fonts/sectra/regular.woff',
  variable: '--fonts-serif',
  preload: true,
  weight: '400',
  display: 'swap',
})

const baseUrl = new URL('https://lapworth.nz')

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: 'Jacob Lapworth',
    template: '%s — Jacob Lapworth',
  },
  description:
    'A digital product designer, living in Tāmaki Makaurau, Aotearoa — Auckland, New Zealand. Currently scaling the design system at Xero.',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: baseUrl,
    siteName: 'Jacob Lapworth — Product designer',
    images: [
      {
        url: `/static/og-image.png`,
        alt: 'Jacob Lapworth',
      },
    ],
  },
  twitter: {
    site: '@jacoblapworth',
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    {
      media: '(prefers-color-scheme: dark)',
      color: token('colors.black.100'),
    },
    {
      media: '(prefers-color-scheme: light)',
      color: token('colors.white.10'),
    },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const emoji = '🌈'
  const id = useId()

  return (
    <ServerThemeProvider {...themeConfig}>
      <html
        className={sectraFont.variable}
        suppressHydrationWarning={true}
        lang="en"
      >
        <head>
          <link
            rel="icon"
            type="image/svg+xml"
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
          />
        </head>
        <body
          className={css({
            backgroundColor: 'background',
            display: 'grid',
            gridTemplateAreas: '"header" "nav" "content" "footer"',
            gridTemplateRows: 'auto auto 1fr auto',
            gridTemplateColumns: 'auto',
            minHeight: 'calc(100vh - env(safe-area-inset-bottom))',
            // minHeight: '-webkit-fill-available',
            marginLeft: 'env(safe-area-inset-left)',
            marginRight: 'env(safe-area-inset-right)',
            maxWidth: '100%',
            overflowX: 'hidden',
          })}
        >
          <ThemeProvider {...themeConfig}>
            <Skiplink href={`#${id}`} tabIndex={0} data-testid="skip-link">
              Skip to main content
            </Skiplink>
            <Header />
            <Navigation />
            <Main id={id}>{children}</Main>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
