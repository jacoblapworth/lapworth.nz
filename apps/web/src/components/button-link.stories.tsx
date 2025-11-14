import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LinkButton as Component } from './button'

const meta = {
  component: Component,
  title: 'Components/LinkButton',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const LinkButton: Story = {
  args: {
    children: 'Link Button',
    href: '/example',
  },
}
