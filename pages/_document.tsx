import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
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
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default Document
