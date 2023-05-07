import { makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import remarkMdxImages from 'remark-mdx-images'

import { Recipe } from './content/definitions/recipe'
import { Work } from './content/definitions/work'

export default makeSource({
  contentDirPath: './content',
  contentDirInclude: [
    'recipes',
    // 'work'
  ],
  documentTypes: [Recipe, Work],
  mdx: {
    esbuildOptions(options) {
      options.target = 'esnext'
      // https://github.com/contentlayerdev/contentlayer/issues/334
      options.tsconfig = `${process.env.PWD}/tsconfig.mdx.json`

      // options.outdir = './public/images'

      // options.loader = {
      //   ...options.loader,
      //   '.png': 'file',
      // }

      options.loader = {
        ...options.loader,
        '.png': 'dataurl',
        '.jpg': 'dataurl',
      }

      return options
    },
    remarkPlugins: [remarkGfm, remarkMdxImages],
    rehypePlugins: [rehypeSlug],
  },
})
