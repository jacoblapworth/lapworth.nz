import './index.css'

import { Metadata } from 'next'
import localFont from 'next/font/local'
import { ServerThemeProvider } from 'next-themes'

import { Page } from '@/components/Page'
import { themeConfig } from '@/components/Theme'
import { darkTheme, lightTheme } from '@/styles'

import { StitchesRegistry } from './style'

const sectraFont = localFont({
  src: './fonts/sectra/regular.woff',
  variable: '--j-fonts-serif',
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
  themeColor: [
    {
      media: '(prefers-color-scheme: dark)',
      color: darkTheme.colors.background.value,
    },
    {
      media: '(prefers-color-scheme: light)',
      color: lightTheme.colors.background.value,
    },
  ],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const emoji = '🌈'
  return (
    <ServerThemeProvider {...themeConfig}>
      <html className={sectraFont.variable}>
        <head>
          <link
            rel="icon"
            type="image/svg+xml"
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
          />
        </head>
        <body
          style={{
            backgroundColor: lightTheme.colors.background.computedValue,
          }}
        >
          <StitchesRegistry>
            <Page>{children}</Page>
          </StitchesRegistry>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
