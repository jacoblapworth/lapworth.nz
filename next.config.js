module.exports = {
  i18n: {
    locales: ['en-NZ'],
    defaultLocale: 'en-NZ',
  },
  images: {
    domains: ['lapworth.nz'],
  },
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.mzstatic.com',
          port: '',
          pathname: '/image/**',
        },
      ],
    },
  },
}
