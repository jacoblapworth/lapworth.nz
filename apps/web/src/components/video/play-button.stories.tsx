import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MediaProvider } from 'media-chrome/react/media-store'
import { fn } from 'storybook/test'
import { PlayButton as Component } from './play-button'

const meta = {
  args: {
    onClick: fn(),
  },
  component: Component,
  decorators: [
    (Story) => (
      <MediaProvider>
        <Story />
      </MediaProvider>
    ),
  ],
  title: 'Components/Video/PlayButton',
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Paused: Story = {
  args: {
    isPlaying: false,
  },
}

export const Playing: Story = {
  args: {
    isPlaying: true,
  },
}
