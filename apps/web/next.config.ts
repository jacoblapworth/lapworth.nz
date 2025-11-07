import createBundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import createWithVercelToolbar from '@vercel/toolbar/plugins/next'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import { withNextVideo } from 'next-video/process'

const config: NextConfig = {
  cacheComponents: true,
  images: {
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    dangerouslyAllowSVG: true,
    qualities: [75, 100],
    remotePatterns: [
      {
        hostname: 'books.google.com',
        pathname: '/books/content/**',
        protocol: 'https',
      },
      {
        hostname: '*.mzstatic.com',
        pathname: '/image/**',
        protocol: 'https',
      },
      {
        hostname: 'oku.ams3.cdn.digitaloceanspaces.com',
        pathname: '/covers/**',
        protocol: 'https',
      },
      {
        hostname: 'i.gr-assets.com',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactCompiler: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: '/work/xero/advanced-tables',
        permanent: true,
        source: '/work/xero/tables',
      },
      {
        destination: '/work/xero/advanced-tables',
        permanent: true,
        source: '/work/xero-advanced-tables',
      },
      {
        destination: '/work/lamarzocco',
        permanent: true,
        source: '/work/lamarzocco-widget',
      },
    ]
  },
  typedRoutes: true,
}

const withVercelToolbar = createWithVercelToolbar()
const withNextIntl = createNextIntlPlugin()
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      ['rehype-unwrap-images'],
      ['rehype-mdx-import-media'],
      ['rehype-slug'],
      [
        'rehype-autolink-headings',
        {
          behavior: 'wrap',
          properties: {
            ariaLabel: 'Link to section',
          },
        },
      ],
      ['rehype-pre-language', 'data-language'],
      ['rehype-mdx-code-props'],
    ],
    remarkPlugins: [
      'remark-frontmatter',
      'remark-mdx-frontmatter',
      'remark-gfm',
    ],
  },
})
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(
  withVercelToolbar(withNextIntl(withNextVideo(withMDX(config)))),
)
