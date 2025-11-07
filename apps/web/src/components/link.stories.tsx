import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Link as Component } from './link'

const meta = {
  argTypes: {
    sameTab: {
      control: 'boolean',
    },
  },
  component: Component,
  title: 'Components/Link',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Example Link',
    href: 'https://example.com',
  },
}

export const SameTab: Story = {
  args: {
    children: 'Same Tab Link',
    href: '/about',
    sameTab: true,
  },
}

export const NewTab: Story = {
  args: {
    children: 'New Tab Link',
    href: 'https://example.com',
    sameTab: false,
  },
}
