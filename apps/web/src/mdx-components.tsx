import type { MDXComponents } from 'mdx/types'
import { components, Image, Li, Ol, P, Ul } from '@/components/Markdown'

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
