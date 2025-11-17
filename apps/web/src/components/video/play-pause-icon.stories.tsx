import preview from '@/storybook/preview'
import { PlayPauseIcon as Component } from './play-pause-icon'

const meta = preview.meta({
  component: Component,
  title: 'Components/Video/PlayPauseIcon',
})

export const PlayPauseIcon = meta.story({
  args: {
    isPlaying: false,
  },
})
