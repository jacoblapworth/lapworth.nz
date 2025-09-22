import type { MDXComponents } from 'mdx/types'
import {
  a,
  blockquote,
  components,
  h1,
  h2,
  h3,
  Image,
  Li,
  Ol,
  P,
  Ul,
  Wrapper,
} from '@/components/Markdown'

export function useMDXComponents(): MDXComponents {
  return {
    wrapper: Wrapper,
    h1,
    h2: h2,
    h3,
    a,
    p: P,
    ul: Ul,
    ol: Ol,
    li: Li,
    Image,
    img: Image,
    blockquote,
    ...components,
  }
}
