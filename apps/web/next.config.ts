import withBundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import { withSentryConfig } from '@sentry/nextjs'
import createWithVercelToolbar from '@vercel/toolbar/plugins/next'
import type { NextConfig } from 'next'

const withVercelToolbar = createWithVercelToolbar()

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.mzstatic.com',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'oku.ams3.cdn.digitaloceanspaces.com',
        pathname: '/covers/**',
      },
      {
        protocol: 'https',
        hostname: 'i.gr-assets.com',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    reactCompiler: false,
  },
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
  withSentryConfig(withVercelToolbar(withMDX(config)), {
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    silent: !process.env.CI,
    widenClientFileUpload: true,
    tunnelRoute: '/monitoring',
    disableLogger: true,
    automaticVercelMonitors: true,
    sourcemaps: {
      deleteSourcemapsAfterUpload: true,
    },
  }),
)
