import type { MDXComponents } from 'mdx/types'
import { Suspense } from 'react'
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

export const components: MDXComponents = {
  a: Anchor,
  blockquote: Blockquote,
  code: Code,
  // details: Details,
  figure: Figure,
  Grid,
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
  Suspense,
  section: Section,
  Text,
  // summary: Summary,
  table: Table,
  td: Td,
  th: Th,
  tr: Tr,
  ul: UnorderedList,
  Video,
  wrapper: Wrapper,
}
