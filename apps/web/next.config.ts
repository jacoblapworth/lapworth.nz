import withBundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import { withSentryConfig } from '@sentry/nextjs'
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers'
import createWithVercelToolbar from '@vercel/toolbar/plugins/next'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import rehypeMdxImportMedia from 'rehype-mdx-import-media'
import { rehypePrettyCode } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { env } from '@/lib/env'

const withVercelToolbar = createWithVercelToolbar()
const withNextIntl = createNextIntlPlugin()

const config: NextConfig = {
  images: {
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    dangerouslyAllowSVG: true,
    qualities: [75, 100],
    remotePatterns: [
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
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactCompiler: false,
  reactStrictMode: true,
  typedRoutes: true,
}

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
      [
        'rehype-pretty-code',
        {
          defaultColor: false,
          theme: {
            dark: 'github-dark-dimmed',
            light: 'github-light',
          },
          //     transformers: [
          //       transformerNotationDiff({ matchAlgorithm: 'v3' }),
          //       transformerNotationHighlight({ matchAlgorithm: 'v3' }),
          //       transformerNotationFocus({ matchAlgorithm: 'v3' }),
          //       transformerNotationErrorLevel({ matchAlgorithm: 'v3' }),
          //     ],
        },
      ],
    ],
    remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter'],
  },
})

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(
  withSentryConfig(withVercelToolbar(withNextIntl(withMDX(config))), {
    automaticVercelMonitors: true,
    disableLogger: true,
    org: env.SENTRY_ORG,
    project: env.SENTRY_PROJECT,
    silent: !process.env.CI,
    sourcemaps: {
      deleteSourcemapsAfterUpload: true,
    },
    tunnelRoute: true,
    widenClientFileUpload: true,
  }),
)
