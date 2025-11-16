import { SelectArrow, SelectProvider, SelectValue } from '@ariakit/react'
import { expect } from 'vitest'
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

export const OpenAndSelect = meta.story({
  args: {},
  play: async ({ canvas, userEvent }) => {
    const select = await canvas.findByRole('combobox')
    await userEvent.click(select)
    const option = await canvas.findByRole('option', { name: 'Other' })
    await userEvent.click(option)
  },
})

export const Keyboard = meta.story({
  args: {},
  play: async ({ canvas, userEvent }) => {
    await userEvent.tab()
    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{Enter}')
    const select = await canvas.findByRole('combobox')
    // await expect(select).toHaveValue('Female')
  },
})
