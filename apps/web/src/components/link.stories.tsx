import preview from '@/storybook/preview'
import { Link as Component } from './link'

const meta = preview.meta({
  argTypes: {
    sameTab: {
      control: 'boolean',
    },
  },
  component: Component,
  title: 'Components/Link',
})

export const Default = meta.story({
  args: {
    children: 'Example Link',
    href: 'https://example.com',
  },
})

export const SameTab = meta.story({
  args: {
    children: 'Same Tab Link',
    href: '/about',
    sameTab: true,
  },
})

export const NewTab = meta.story({
  args: {
    children: 'New Tab Link',
    href: 'https://example.com',
    sameTab: false,
  },
})
