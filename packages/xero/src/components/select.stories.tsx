import { SelectArrow, SelectProvider, SelectValue } from '@ariakit/react'
import preview from '@/storybook/preview'
import { RequiredOptionalIndicator } from './label'

import { Select, SelectItem, SelectLabel, SelectPopover } from './select'

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Non-binary', value: 'non-binary' },
  { label: 'Non-conforming', value: 'non-conforming' },
  { label: 'Other', value: 'other' },
]

const meta = preview.meta({
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
  component: SelectProvider,
  title: 'Components/Select',
})

export const Primary = meta.story({
  args: {},
})
