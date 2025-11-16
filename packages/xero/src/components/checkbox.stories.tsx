import type { ComponentProps } from 'react'
import { useArgs } from 'storybook/internal/preview-api'
import { expect, fn, waitFor } from 'storybook/test'
import preview from '@/storybook/preview'
import { Checkbox } from './checkbox'

const meta = preview.meta({
  args: {
    'aria-label': 'Checkbox',
    checked: false,
    disabled: false,
    onChange: fn(),
  },
  component: Checkbox,
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs<ComponentProps<typeof Checkbox>>()

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => updateArgs({ checked: e.target.checked })}
      />
    )
  },
  title: 'Components/Checkbox',
})

export const Unchecked = meta.story({
  args: {},
})

export const Checked = meta.story({
  args: {
    checked: true,
  },
})

export const Indeterminate = meta.story({
  args: {
    checked: 'mixed',
  },
})

export const Disabled = meta.story({
  args: {
    checked: true,
    disabled: true,
  },
})

export const Interaction = meta.story({
  args: {},
  play: async ({ canvas, userEvent }) => {
    const checkbox = await canvas.findByRole('checkbox')
    await expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    await waitFor(() => expect(checkbox).toBeChecked())
  },
})
