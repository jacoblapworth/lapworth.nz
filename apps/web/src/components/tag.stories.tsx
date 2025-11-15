import preview from '@/storybook/preview'
import { Tag as Component } from './tag'

const meta = preview.meta({
  component: Component,
  title: 'Components/Tag',
})

export const Default = meta.story({
  args: {
    children: 'Default Tag',
  },
})

export const Positive = meta.story({
  args: {
    children: 'Positive Tag',
    sentiment: 'positive',
  },
})

export const Negative = meta.story({
  args: {
    children: 'Negative Tag',
    sentiment: 'negative',
  },
})

export const Warning = meta.story({
  args: {
    children: 'Warning Tag',
    sentiment: 'warning',
  },
})
