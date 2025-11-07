import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button, LinkButton } from './button'

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
}

export const PrimarySmall: Story = {
  args: {
    children: 'Primary Small',
    size: 'sm',
    variant: 'primary',
  },
}

const linkMeta = {
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/LinkButton',
} satisfies Meta<typeof LinkButton>

export const LinkButtonStory: StoryObj<typeof linkMeta> = {
  args: {
    children: 'Link Button',
    href: '/example',
  },
}
