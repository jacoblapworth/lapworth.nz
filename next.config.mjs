import fs from 'fs'
import path from 'path'

import withBundleAnalyzer from '@next/bundle-analyzer'
import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
/** @type {import('rehype-pretty-code').Options}*/
const prettyCodeOptions = {
  // Use one of Shiki's packaged themes
  // theme: 'one-dark-pro',
  // Or your own JSON theme
  theme: JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), 'assets/moonlight-ii.json'),
      'utf-8',
    ),
  ),

  // Keep the background or use a custom background color?
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ['word']
  },
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
  experimental: {},
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
