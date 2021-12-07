import { FC } from 'react'

import { DefaultSeo, NextSeoProps } from 'next-seo'
import { useTheme } from 'next-themes'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

import { themes } from '@/styles'

export const baseUrl = 'https://lapworth.nz'
export const email = 'jacob@lapworth.nz'

export const defaultSEO: NextSeoProps = {
  defaultTitle: 'Jacob Lapworth — Product designer',
  titleTemplate: '%s — Jacob Lapworth — Product designer',
  description:
    'A digital product designer, living in Tāmaki Makaurau, Aotearoa — Auckland, New Zealand. Currently scaling the design system at Xero.',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: baseUrl,
    site_name: 'Jacob Lapworth — Product designer',
    images: [
      {
        url: `${baseUrl}/static/og-image.png`,
        alt: 'Jacob Lapworth',
      },
    ],
  },
  twitter: {
    handle: '@jacoblapworth',
    site: '@jacoblapworth',
    cardType: 'summary_large_image',
  },
}

export const useRouteEmoji = () => {
  const router = useRouter()

  let emoji = '🌈'

  if (router.route.indexOf('/about') === 0) emoji = '👋'
  if (router.route.indexOf('/writing') === 0) emoji = '💭'
  if (router.route.indexOf('/bookmarks') === 0) emoji = '📖'
  if (router.route.indexOf('/listening') === 0) emoji = '🎧'

  return emoji
}

export const Head: FC = () => {
  const emoji = useRouteEmoji()
  const { resolvedTheme = 'light' } = useTheme()

  type Theme = keyof typeof themes
  const themeColor = themes[resolvedTheme as Theme].colors.background.value

  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <NextHead>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content={themeColor} />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
        />
      </NextHead>
    </>
  )
}
