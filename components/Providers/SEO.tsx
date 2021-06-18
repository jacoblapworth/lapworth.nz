import { defaultSEO } from '@config/seo'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTheme } from './ThemeColor'

export default function SEO() {
  const router = useRouter()
  const { color } = useTheme()

  let emoji = '🌈'
  if (router.route.indexOf('/about') === 0) emoji = '👋'
  if (router.route.indexOf('/writing') === 0) emoji = '💭'
  if (router.route.indexOf('/bookmarks') === 0) emoji = '📖'
  if (router.route.indexOf('/listening') === 0) emoji = '🎧'

  return (
    <>
      <NextSeo {...defaultSEO} />
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
        />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <meta
          name="theme-color"
          content={color}
          // TODO: wait for <meta media> type support
          // media="(prefers-color-scheme: light)"
        />
      </Head>
    </>
  )
}
