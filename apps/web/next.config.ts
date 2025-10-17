import withBundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import { withSentryConfig } from '@sentry/nextjs'
import createWithVercelToolbar from '@vercel/toolbar/plugins/next'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withVercelToolbar = createWithVercelToolbar()
const withNextIntl = createNextIntlPlugin()

const config: NextConfig = {
  images: {
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    dangerouslyAllowSVG: true,
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
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    // rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
    // providerImportSource: '@mdx-js/react',
  },
})

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(
  withSentryConfig(withVercelToolbar(withNextIntl(withMDX(config))), {
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
  }),
)
