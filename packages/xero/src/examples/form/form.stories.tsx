import preview from '@/storybook/preview'
import { FormExample as Component } from './form'

const meta = preview.meta({
  args: {
    identifyFieldsWith: 'optional',
    optionalLabel: '(optional)',
    requiredLabel: '(required)',
  },
  argTypes: {
    identifyFieldsWith: {
      control: { type: 'radio' },
      options: ['optional', 'required'],
    },
  },
  component: Component,
  title: 'Examples/Form',
})

export const Primary = meta.story({
  args: {},
})
