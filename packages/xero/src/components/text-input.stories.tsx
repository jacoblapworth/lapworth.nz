import preview from '@/storybook/preview'

import { TextInput } from './text-input'

const meta = preview.meta({
  args: {
    label: 'Label',
    name: 'name',
    placeholder: 'Placeholder',
    size: 'md',
  },
  component: TextInput,
  title: 'Components/TextInput',
})

export const Primary = meta.story({
  args: {
    label: 'Label',
    name: 'name',
  },
})

export const Small = meta.story({
  args: {
    label: 'Label',
    name: 'name',
    size: 'sm',
  },
})
