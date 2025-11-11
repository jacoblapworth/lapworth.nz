import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MediaProvider } from 'media-chrome/react/media-store'
import { PlayButton as Component } from './play-button'

const meta = {
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

export const PlayButton: Story = {
  args: {},
}
