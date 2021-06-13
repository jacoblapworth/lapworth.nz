import { defaultSEO } from '@/config/seo'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function SEO() {
  const router = useRouter()

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
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
        />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <meta
          name="theme-color"
          content="#fff"
          // media="(prefers-color-scheme: light)"
        />
        {/* <meta
          name="theme-color"
          content="#0b3e05"
          media="(prefers-color-scheme: dark)"
        /> */}
      </Head>
    </>
  )
}
