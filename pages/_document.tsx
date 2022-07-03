import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { gtagUrl, renderSnippet } from '@/lib/analytics'
import { getCssText, globalStyles } from '@/styles/stitches.config'

class Document extends NextDocument {
  render() {
    globalStyles()
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            rel="preload"
            href="/fonts/sectra/Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <script async src={gtagUrl} />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
        </Head>
        <body style={{ backgroundColor: 'var(--j-colors-background)' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
