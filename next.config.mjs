import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig}*/
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-NZ'],
    defaultLocale: 'en-NZ',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.mzstatic.com',
        pathname: '/image/**',
      },
    ],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    newNextLinkBehavior: true,
  },
  async rewrites() {
    return [
      {
        source: '/work/:path*',
        destination: '/work/coming-soon',
      },
    ]
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/work',
  //       destination: '/work/coming-soon',
  //       permanent: false,
  //     },
  //   ]
  // },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX(config)
