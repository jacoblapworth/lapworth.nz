import '@/styles/globals.css'
// import 'sanitize.css'
// import 'sanitize.css/typography.css'
// import 'sanitize.css/forms.css'

import localFont from 'next/font/local'
import { ServerThemeProvider } from 'next-themes'

import { Page } from '@/components/Page'
import { themeConfig } from '@/components/Theme'
import { gtagUrl, renderSnippet } from '@/lib/analytics'
import { lightTheme, darkTheme } from '@/styles'

import { ServerStylesheet } from './style'

const sectraFont = localFont({
  src: '../public/fonts/sectra/regular.woff',
  variable: '--j-fonts-serif',
  preload: true,
  weight: '400',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const emoji = '🌈'

  // const { resolvedTheme = 'light' } = useTheme()

  // type Theme = keyof typeof themes
  // const themeColor = themes[resolvedTheme as Theme].colors.background.value

  return (
    <ServerThemeProvider {...themeConfig}>
      <html className={sectraFont.variable}>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1, viewport-fit=cover width=device-width"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
          />
          {/* <meta name="theme-color" content={themeColor} />  */}
        </head>
        <body
          style={{
            backgroundColor: lightTheme.colors.background.computedValue,
          }}
        >
          <ServerStylesheet>
            <Page>{children}</Page>
          </ServerStylesheet>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
