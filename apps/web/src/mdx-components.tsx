import { components, Image, Li, Ol, P, Ul } from '@/components/Markdown'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(): MDXComponents {
  return {
    li: Li,
    ul: Ul,
    ol: Ol,
    p: P,
    Image,
    ...components,
  }
}
