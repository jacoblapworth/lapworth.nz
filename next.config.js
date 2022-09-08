/**
 * @type {import('next').NextConfig}
 */
const config = {
  i18n: {
    locales: ['en-NZ'],
    defaultLocale: 'en-NZ',
  },
  images: {
    domains: ['lapworth.nz'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.mzstatic.com',
        pathname: '/image/**',
      },
    ],
  },
  experimental: {
    newNextLinkBehavior: true,
  },
}

module.exports = config
