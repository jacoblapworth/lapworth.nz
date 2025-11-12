import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { JSX } from 'react/jsx-runtime'
import { Form } from './Form'
import { Label as Component } from './Label'

function withFormWrapper(Story: () => JSX.Element) {
  return (
    <Form identifyFieldsWith="required" requiredLabel="(required)">
      <Story />
    </Form>
  )
}

const meta = {
  args: {
    children: 'Label',
  },
  component: Component,
  decorators: [withFormWrapper],
  title: 'Components/Label',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Label',
  },
}

export const Required: Story = {
  args: {
    children: 'Label',
    required: true,
  },
}
