module.exports = {
  webpack5: true,
  // productionBrowserSourceMaps: true,
  i18n: {
    locales: ['en-NZ'],
    defaultLocale: 'en-NZ',
  },
  github: {
    // https://vercel.com/docs/configuration#git/github-silent
    // When set to true, Vercel for GitHub will stop commenting on pull requests and commits.
    silent: true,
  },
}
