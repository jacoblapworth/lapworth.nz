import type { ComponentProps } from 'react'
import { useArgs } from 'storybook/internal/preview-api'
import { fn } from 'storybook/test'
import preview from '@/storybook/preview'
import { Checkbox } from './checkbox'

const meta = preview.meta({
  args: {
    checked: false,
    disabled: false,
    onChange: fn(),
  },
  component: Checkbox,
  render: () => {
    const [args, updateArgs] = useArgs<ComponentProps<typeof Checkbox>>()

    return (
      <Checkbox
        {...args}
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
