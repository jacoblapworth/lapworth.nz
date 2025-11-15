import preview from '@/storybook/preview'
import { LinkButton as Component } from './button'

const meta = preview.meta({
  component: Component,
  title: 'Components/LinkButton',
})

export const LinkButton = meta.story({
  args: {
    children: 'Link Button',
    href: '/example',
  },
})
