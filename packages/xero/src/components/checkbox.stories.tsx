import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { fn } from 'storybook/test'

import { Checkbox as Component } from './Checkbox'

const meta = {
  args: {
    checked: false,
    disabled: false,
    onChange: fn(),
  },
  component: Component,
  title: 'Components/Checkbox',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    checked: 'mixed',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}
