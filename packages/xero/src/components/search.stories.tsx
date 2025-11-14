import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import { Search as Component } from './search'

const meta = {
  args: {},
  component: Component,
  title: 'Components/Search',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Search',
    onChange: fn(),
    onClear: fn(),
  },
}
