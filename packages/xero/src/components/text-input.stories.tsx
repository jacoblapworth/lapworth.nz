import preview from '@/storybook/preview'

import { TextInput } from './text-input'

const meta = preview.meta({
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Placeholder',
  },
  component: TextInput,
  title: 'Components/TextInput',
})

export const Primary = meta.story({
  args: {},
})

export const Small = meta.story({
  args: {
    size: 'sm',
  },
})
