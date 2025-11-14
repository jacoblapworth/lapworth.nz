import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { ComponentProps } from 'react'
import { useArgs } from 'storybook/internal/preview-api'
import { fn } from 'storybook/test'
import { Checkbox as Component } from './Checkbox'

const meta = {
  args: {
    checked: false,
    disabled: false,
    onChange: fn(),
  },
  component: Component,
  render: () => {
    const [args, updateArgs] = useArgs<ComponentProps<typeof Component>>()

    return (
      <Component
        {...args}
        onChange={(e) => updateArgs({ checked: e.target.checked })}
      />
    )
  },
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
