import type { MDXComponents } from 'mdx/types'
import { Anchor } from './Anchor'
import { Blockquote } from './Blockquote'
import { Code } from './Code'
import { Divider } from './Divider'
import { Figure } from './Figure'
import { h1, h2, h3 } from './Heading'
import { Image } from './Image'
import { ListItem, OrderedList, UnorderedList } from './List'
import { Paragraph } from './Paragraph'
import { Pre } from './Pre'
import { Table, Td, Th, Tr } from './Table'
import { Video } from './Video'
import { Wrapper } from './Wrapper'

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
  // summary: Summary,
  table: Table,
  td: Td,
  th: Th,
  tr: Tr,
  ul: UnorderedList,
  Video,
  wrapper: Wrapper,
}
