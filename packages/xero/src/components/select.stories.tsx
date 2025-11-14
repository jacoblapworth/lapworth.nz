import {
  SelectProvider as Component,
  SelectArrow,
  SelectValue,
} from '@ariakit/react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { RequiredOptionalIndicator } from './label'

import { Select, SelectItem, SelectLabel, SelectPopover } from './select'

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Non-binary', value: 'non-binary' },
  { label: 'Non-conforming', value: 'non-conforming' },
  { label: 'Other', value: 'other' },
]

const meta = {
  args: {
    children: (
      <>
        <SelectLabel>
          Gender
          <RequiredOptionalIndicator ignoreError />
        </SelectLabel>
        <Select>
          <SelectValue fallback="Choose one">
            {(v) => genderOptions.find(({ value }) => value === v)?.label}
          </SelectValue>
          <SelectArrow />
        </Select>
        <SelectPopover>
          {genderOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectPopover>
      </>
    ),
  },
  component: Component,
  title: 'Components/Select',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
