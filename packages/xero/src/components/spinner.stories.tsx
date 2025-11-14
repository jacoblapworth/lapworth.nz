import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Spinner as Component } from './spinner'

const meta = {
  args: {},
  component: Component,
  title: 'Components/Spinner',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'black',
  },
}
