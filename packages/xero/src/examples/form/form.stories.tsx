import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FormExample as Component } from './form'

const meta = {
  args: {},
  component: Component,
  title: 'Examples/Form',
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
