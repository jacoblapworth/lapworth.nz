import preview from '@/storybook/preview'
import { Button as Component } from './button'

const meta = preview.meta({
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Button',
})

export const Default = meta.story({
  args: {
    children: 'Button',
  },
})

export const Small = meta.story({
  args: {
    children: 'Small Button',
    size: 'sm',
  },
})

export const Medium = meta.story({
  args: {
    children: 'Medium Button',
    size: 'md',
  },
})

export const Primary = meta.story({
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
})

export const Secondary = meta.story({
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
})

export const PrimarySmall = meta.story({
  args: {
    children: 'Primary Small',
    size: 'sm',
    variant: 'primary',
  },
})
