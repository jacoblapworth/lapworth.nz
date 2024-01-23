import withBundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
/** @type {import('rehype-pretty-code').Options}*/
const prettyCodeOptions = {
  theme: 'github-dark',
  keepBackground: true,
}

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
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
    providerImportSource: '@mdx-js/react',
  },
})

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(
  withMDX(config),
)
