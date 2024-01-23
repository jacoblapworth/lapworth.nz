/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig}*/
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.mzstatic.com',
        pathname: '/image/**',
      },
      // https://oku.ams3.cdn.digitaloceanspaces.com/covers/2022/09
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
  swcMinify: true,
}

module.exports = withContentlayer(config)
