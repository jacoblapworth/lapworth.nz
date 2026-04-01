import type { MDXComponents } from 'mdx/types'
import { type ComponentProps, Suspense } from 'react'
import ResponsivePreview from '../preview'
import { Text } from '../text'
import { Anchor } from './anchor'
import { Blockquote } from './blockquote'
import { Code } from './code'
import { Divider } from './divider'
import { Figure } from './figure'
import { Grid } from './grid'
import { h1, h2, h3 } from './heading'
import { Image } from './image'
import { ListItem, OrderedList, UnorderedList } from './list'
import { Paragraph } from './paragraph'
import { Pre } from './pre'
import { Section } from './section'
import { Table, Td, Th, Tr } from './table'
import { Video } from './video'
import { Wrapper } from './wrapper'

export const components = {
  a: Anchor,
  blockquote: (props) => <Blockquote {...props} />,
  code: (props) => <Code {...props} />,
  // details: Details,
  figure: (props) => <Figure {...props} />,
  Grid,
  h1,
  h2,
  h3,
  hr: Divider,
  Image,
  img: (props) => <Image {...props as ComponentProps<typeof Image>} />,
  li: ListItem,
  ol: OrderedList,
  p: (props) => <Paragraph {...props} />,
  pre: (props) => <Pre {...props} />,
  ResponsivePreview,
  Suspense: (props) => <Suspense {...props} />,
  section: (props) => <Section {...props} />,
  Text,
  // summary: Summary,
  table: Table,
  td: Td,
  th: Th,
  tr: Tr,
  ul: UnorderedList,
  Video: (props) => <Video {...props} />,
  wrapper: Wrapper,
} satisfies MDXComponents
