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
    a,
    blockquote,
    h1,
    h2,
    h3,
    Image,
    img: Image,
    li: Li,
    ol: Ol,
    p: P,
    ul: Ul,
    wrapper: Wrapper,
    ...components,
  }
}
