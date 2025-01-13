import './index.css'

import { ReactNode } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { ServerThemeProvider } from 'next-themes'

import { css } from 'styled/css'
import { token } from 'styled/tokens'

import { Page } from '@/components/Page'
import { themeConfig } from '@/components/Theme'

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
  
return (
    <ServerThemeProvider {...themeConfig}>
      <html className={sectraFont.variable} suppressHydrationWarning={true}>
        <head>
          <link
            rel="icon"
            type="image/svg+xml"
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
          />
        </head>
        <body className={css({ bg: 'background' })}>
          <Page>{children}</Page>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ServerThemeProvider>
  )
}
