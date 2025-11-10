import './index.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { VercelToolbar } from '@vercel/toolbar/next'
import type { Metadata, Viewport } from 'next'
import { Google_Sans_Code, Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { type ReactNode, Suspense, useId } from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/nav/header'
import { Navigation } from '@/components/nav/nav'
import { Skiplink } from '@/components/skiplink'
import { themeConfig } from '@/components/theme'
import { css, cx } from '@/styled/css'
import { token } from '@/styled/tokens'

const inter = Inter({
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  subsets: ['latin-ext'],
  variable: '--fonts-sans',
})

const sectraFont = localFont({
  display: 'swap',
  preload: true,
  src: './fonts/sectra/regular.woff',
  variable: '--fonts-serif',
  weight: '400',
})

const monoFont = Google_Sans_Code({
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'monospace'],
  preload: false,
  subsets: ['latin-ext', 'math', 'symbols'],
  variable: '--fonts-mono',
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
        url: 'og-image.png',
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
    <html
      className={cx(inter.variable, sectraFont.variable, monoFont.variable)}
      lang="en"
      suppressHydrationWarning
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
        <NuqsAdapter>
          <ThemeProvider {...themeConfig}>
            <NextIntlClientProvider>
              <Skiplink data-testid="skip-link" href={`#${id}`} tabIndex={0}>
                Skip to main content
              </Skiplink>
              <Header />
              <Suspense>
                <Navigation />
              </Suspense>
              <main
                className={css({
                  gridArea: 'content',
                  margin: 'md',
                  maxWidth: 'calc(100vw - token(spacing.md) * 2)',
                })}
                id={id}
                tabIndex={-1}
              >
                {children}
              </main>
              <Suspense>
                <Footer />
              </Suspense>
              <Analytics />
              <SpeedInsights />
            </NextIntlClientProvider>
          </ThemeProvider>
        </NuqsAdapter>
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  )
}
