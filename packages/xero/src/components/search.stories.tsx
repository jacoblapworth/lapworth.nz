import { fn } from 'storybook/test'
import preview from '@/storybook/preview'
import { Search } from './search'

const meta = preview.meta({
  args: {},
  component: Search,
  title: 'Components/Search',
})

export const Primary = meta.story({
  args: {
    label: 'Search',
    onChange: fn(),
    onClear: fn(),
  },
})
