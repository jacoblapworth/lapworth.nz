import preview from '@/storybook/preview'
import { DataTableExample as Component } from './data-table'

const meta = preview.meta({
  args: {},
  component: Component,
  title: 'Examples/DataTable',
})

export const Primary = meta.story({
  args: {},
})
