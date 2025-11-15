import { fn } from 'storybook/test'
import preview from '@/storybook/preview'
import { Button } from './button'

const meta = preview.meta({
  args: {
    children: 'Button',
    isLoading: false,
    onClick: fn(),
  },
  component: Button,
})

export const Primary = meta.story({
  args: {
    variant: 'primary',
  },
})

export const Secondary = meta.story({
  args: {
    variant: 'secondary',
  },
})

export const Tertiary = meta.story({
  args: {
    variant: 'tertiary',
  },
})

export const Medium = meta.story({
  args: {
    size: 'md',
  },
})

export const Small = meta.story({
  args: {
    size: 'sm',
  },
})

export const XSmall = meta.story({
  args: {
    size: 'xs',
  },
})

export const Loading = meta.story({
  args: {
    isLoading: true,
    variant: 'primary',
  },
})

export const Disabled = meta.story({
  args: {
    disabled: true,
  },
})
