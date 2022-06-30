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
  },
  experimental: {
    newNextLinkBehavior: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.mzstatic.com',
          pathname: '/image/**',
        },
      ],
    },
  },
}

module.exports = config
