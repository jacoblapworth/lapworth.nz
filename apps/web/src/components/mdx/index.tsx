import type { MDXComponents } from 'mdx/types'
import ResponsivePreview from '../Preview'
import { Anchor } from './anchor'
import { Blockquote } from './blockquote'
import { Code } from './code'
import { Divider } from './divider'
import { Figure } from './figure'
import { h1, h2, h3 } from './heading'
import { Image } from './image'
import { ListItem, OrderedList, UnorderedList } from './list'
import { Paragraph } from './paragraph'
import { Pre } from './pre'
import { Table, Td, Th, Tr } from './table'
import { Video } from './video'
import { Wrapper } from './wrapper'

export const components: MDXComponents = {
  a: Anchor,
  blockquote: Blockquote,
  code: Code,
  // details: Details,
  figure: Figure,
  h1,
  h2,
  h3,
  hr: Divider,
  Image,
  img: Image,
  li: ListItem,
  ol: OrderedList,
  p: Paragraph,
  pre: Pre,
  ResponsivePreview,
  // summary: Summary,
  table: Table,
  td: Td,
  th: Th,
  tr: Tr,
  ul: UnorderedList,
  Video,
  wrapper: Wrapper,
}
