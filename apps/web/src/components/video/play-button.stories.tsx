import { MediaProvider } from 'media-chrome/react/media-store'
import { fn } from 'storybook/test'
import preview from '@/storybook/preview'
import { PlayButton as Component } from './play-button'

const meta = preview.meta({
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
})

export const Paused = meta.story({
  args: {
    isPlaying: false,
  },
})

export const Playing = meta.story({
  args: {
    isPlaying: true,
  },
})
