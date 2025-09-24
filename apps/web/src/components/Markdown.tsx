import type { MDXComponents } from 'mdx/types'
import { a } from './mdx/A'
import { Blockquote } from './mdx/Blockquote'
import { Figure } from './mdx/Figure'
import { h1, h2, h3 } from './mdx/Heading'
import { Image } from './mdx/Image'
import { Li } from './mdx/Li'
import { Ol } from './mdx/Ol'
import { P } from './mdx/P'
import { Pre } from './mdx/Pre'
import { Ul } from './mdx/Ul'
import { Wrapper } from './mdx/Wrapper'

export const components: MDXComponents = {
  a,
  blockquote: Blockquote,
  figure: Figure,
  h1,
  h2,
  h3,
  Image,
  img: Image,
  li: Li,
  ol: Ol,
  p: P,
  pre: Pre,
  ul: Ul,
  wrapper: Wrapper,
}
