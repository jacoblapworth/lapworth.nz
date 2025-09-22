import * as runtime from 'react/jsx-runtime'

import {
  Blockquote,
  h1,
  h2,
  h3,
  Image,
  Li,
  Ol,
  P,
  components as sharedComponents,
  Ul,
} from './Markdown'

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
        h1,
        h2,
        h3,
        li: Li,
        ul: Ul,
        ol: Ol,
        p: P,
        blockquote: Blockquote,
        Image,
        ...sharedComponents,
        ...components,
      }}
    />
  )
}
