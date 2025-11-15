import type { JSX } from 'react/jsx-runtime'
import preview from '@/storybook/preview'
import { Form } from './form'
import { Label } from './label'

function withFormWrapper(Story: () => JSX.Element) {
  return (
    <Form identifyFieldsWith="required" requiredLabel="(required)">
      <Story />
    </Form>
  )
}

const meta = preview.meta({
  args: {
    children: 'Label',
  },
  component: Label,
  decorators: [withFormWrapper],
  title: 'Components/Label',
})

export const Primary = meta.story({
  args: {
    children: 'Label',
  },
})

export const Required = meta.story({
  args: {
    children: 'Label',
    required: true,
  },
})
