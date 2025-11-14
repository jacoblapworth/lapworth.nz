import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { fn } from 'storybook/test'

import { Button as Component } from './button'

const meta = {
  args: {
    children: 'Button',
    isLoading: false,
    onClick: fn(),
  },
  component: Component,
  title: 'Components/Button',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const XSmall: Story = {
  args: {
    size: 'xs',
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
    variant: 'primary',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
