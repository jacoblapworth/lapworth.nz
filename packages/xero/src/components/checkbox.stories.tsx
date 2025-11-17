import { expect, fn } from 'storybook/test'
import preview from '@/storybook/preview'
import { Checkbox } from './checkbox'

const meta = preview.meta({
  args: {
    'aria-label': 'Checkbox',
    onChange: fn(),
  },
  component: Checkbox,
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
  play: async ({ args, canvas, userEvent }) => {
    const checkbox = await canvas.findByRole('checkbox')
    await expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
    expect(args.onChange).toHaveBeenCalledTimes(1)
  },
})
