import preview from '@/storybook/preview'

import { TextInput } from './text-input'

const meta = preview.meta({
  args: {
    label: 'Text input',
    name: 'name',
    placeholder: 'Placeholder',
  },
  component: TextInput,
  title: 'Components/TextInput',
})

export const Primary = meta.story({
  args: {
    label: 'Text input',
    name: 'name',
  },
})
