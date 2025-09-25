import type { MDXComponents } from 'mdx/types'
import { a } from './A'
import { Blockquote } from './Blockquote'
import { Figure } from './Figure'
import { h1, h2, h3 } from './Heading'
import { Image } from './Image'
import { Li } from './Li'
import { Ol } from './Ol'
import { P } from './P'
import { Pre } from './Pre'
import { Ul } from './Ul'
import { Video } from './Video'
import { Wrapper } from './Wrapper'

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
  Video,
  wrapper: Wrapper,
}
