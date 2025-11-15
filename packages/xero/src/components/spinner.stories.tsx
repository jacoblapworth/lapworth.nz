import preview from '@/storybook/preview'
import { Spinner } from './spinner'

const meta = preview.meta({
  args: {},
  component: Spinner,
  title: 'Components/Spinner',
})

export const Primary = meta.story({
  args: {
    color: 'black',
  },
})
