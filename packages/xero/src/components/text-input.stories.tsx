import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { TextInput as Component } from './TextInput'

const meta = {
  args: {
    label: 'Text input',
    name: 'name',
  },
  component: Component,
  title: 'Components/TextInput',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Text input',
    name: 'name',
  },
}
