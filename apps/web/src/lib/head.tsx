import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo, type NextSeoProps } from 'next-seo'
import type { FC } from 'react'

export const baseUrl = 'https://lapworth.nz'
export const email = 'jacob@lapworth.nz'

export const defaultSEO: NextSeoProps = {
  defaultTitle: 'Jacob Lapworth — Product designer',
  description:
    'A digital product designer, living in Tāmaki Makaurau, Aotearoa — Auckland, New Zealand. Currently scaling the design system at Xero.',
  openGraph: {
    images: [
      {
        alt: 'Jacob Lapworth',
        url: `${baseUrl}/static/og-image.png`,
      },
    ],
    locale: 'en_NZ',
    site_name: 'Jacob Lapworth — Product designer',
    type: 'website',
    url: baseUrl,
  },
  titleTemplate: '%s — Jacob Lapworth — Product designer',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@jacoblapworth',
    site: '@jacoblapworth',
  },
}

export const useRouteEmoji = () => {
  const router = useRouter()

  let emoji = '🌈'

  if (router.route.startsWith('/about')) emoji = '👋'
  if (router.route.startsWith('/writing')) emoji = '💭'
  if (router.route.startsWith('/bookmarks')) emoji = '📖'
  if (router.route.startsWith('/listening')) emoji = '🎧'

  return emoji
}

export const Head: FC = () => {
  const emoji = useRouteEmoji()

  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <NextHead>
        <meta
          content="initial-scale=1, viewport-fit=cover width=device-width"
          name="viewport"
        />
        <link
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
          rel="icon"
          type="image/svg+xml"
        />
      </NextHead>
    </>
  )
}
