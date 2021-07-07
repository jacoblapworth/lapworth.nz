module.exports = {
  webpack5: true,
  // productionBrowserSourceMaps: true,
  i18n: {
    locales: ['en-NZ'],
    defaultLocale: 'en-NZ',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: 'glslify-loader',
      type: 'asset/source',
    })

    return config
  },
}
