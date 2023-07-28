import type { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'

import { styled } from '@/styled-system/jsx'

const Image = styled(NextImage, {
  base: {
    maxWidth: '100%',
    height: 'auto',
  },
})

//TODO: fix
// Image.defaultProps = {
//   placeholder: 'blur',
// }

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    Image,
    ...components,
  }
}
