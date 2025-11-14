import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { PlayPauseIcon as Component } from './play-pause-icon'

const meta = {
  component: Component,
  title: 'Components/Video/PlayPauseIcon',
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const PlayPauseIcon: Story = {
  args: {
    isPlaying: false,
  },
}
