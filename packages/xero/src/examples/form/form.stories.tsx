import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FormExample as Component } from './form'

const meta = {
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
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
