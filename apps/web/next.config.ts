import withBundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import { withSentryConfig } from '@sentry/nextjs'
import createWithVercelToolbar from '@vercel/toolbar/plugins/next'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
<<<<<<< HEAD
import { withNextVideo } from 'next-video/process'
=======
import { env } from '@/lib/env'
>>>>>>> main

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
      ['rehype-pre-language', 'data-language'],
      ['rehype-mdx-code-props'],
    ],
    remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter'],
  },
})

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(
<<<<<<< HEAD
  withSentryConfig(
    withVercelToolbar(withNextIntl(withNextVideo(withMDX(config)))),
    {
      automaticVercelMonitors: true,
      disableLogger: true,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      silent: !process.env.CI,
      sourcemaps: {
        deleteSourcemapsAfterUpload: true,
      },
      tunnelRoute: '/monitoring',
      widenClientFileUpload: true,
    },
  ),
=======
  withSentryConfig(withVercelToolbar(withNextIntl(withMDX(config))), {
    automaticVercelMonitors: true,
    disableLogger: true,
    org: env.SENTRY_ORG,
    project: env.SENTRY_PROJECT,
    silent: !(process.env.CI && process.env.ACTIONS_RUNNER_DEBUG),
    sourcemaps: {
      deleteSourcemapsAfterUpload: true,
      disable: process.env.NODE_ENV !== 'production',
    },
    tunnelRoute: true,
    widenClientFileUpload: true,
  }),
>>>>>>> main
)
