import { expect, fn, userEvent, within } from 'storybook/test'
import preview from '@/storybook/preview'
import { Search } from './search'

const meta = preview.meta({
  args: {
    label: 'Search',
    onChange: fn(),
    onClear: fn(),
  },
  component: Search,
  title: 'Components/Search',
})

export const Primary = meta.story({
  args: {},
})

export const TypeAndClear = meta.story({
  args: {},
})
