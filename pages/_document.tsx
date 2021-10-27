import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { gtagUrl, renderSnippet } from '@/lib/analytics'
import { getCssText, globalStyles } from '@/styles'

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
            href="/fonts/canela/thin.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/canela/thin.woff2"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/canela/regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/canela/regular.woff2"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/canela/bold.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/canela/bold.woff2"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <script async src={gtagUrl} />
          <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default Document
