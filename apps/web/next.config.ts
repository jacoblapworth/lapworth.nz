import { NextConfig } from 'next'

import withBundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import { withSentryConfig } from '@sentry/nextjs'
import { Options } from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

import theme from './src/assets/moonlight-ii.json'

const prettyCodeOptions: Options = {
  theme: theme as unknown as Options['theme'],
  keepBackground: true,
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
}

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
    reactCompiler: true,
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    // rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
    providerImportSource: '@mdx-js/react',
  },
})

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(
  withSentryConfig(withMDX(config), {
    org: 'jacoblapworth',
    project: 'lapworth',

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: '/monitoring',

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    sourcemaps: {
      deleteSourcemapsAfterUpload: true,
    },
  }),
)
