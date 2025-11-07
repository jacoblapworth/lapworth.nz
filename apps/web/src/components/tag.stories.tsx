import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Tag as Component } from './tag'

const meta = {
  component: Component,
  title: 'Components/Tag',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Tag',
  },
}

export const Positive: Story = {
  args: {
    children: 'Positive Tag',
    sentiment: 'positive',
  },
}

export const Negative: Story = {
  args: {
    children: 'Negative Tag',
    sentiment: 'negative',
  },
}

export const Warning: Story = {
  args: {
    children: 'Warning Tag',
    sentiment: 'warning',
  },
}
