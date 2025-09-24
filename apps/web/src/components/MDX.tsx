'use client'

import * as runtime from 'react/jsx-runtime'

import { components as sharedComponents } from './Markdown'

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code)
  return (
    <Component
      components={{
        // blockquote: Blockquote,
        // figure: Figure,
        // h1,
        // h2,
        // h3,
        // Image,
        // li: Li,
        // ol: Ol,
        // p: P,
        // pre: Pre,
        // ul: Ul,
        // wrapper: Wrapper,
        ...sharedComponents,
        ...components,
      }}
    />
  )
}
