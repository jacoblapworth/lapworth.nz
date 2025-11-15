import type { ComponentProps } from 'react'
import { useArgs } from 'storybook/internal/preview-api'
import { expect, fn, within } from 'storybook/test'
import preview from '@/storybook/preview'
import { Search } from './search'

const meta = preview.meta({
  args: {
    label: 'Search',
    onChange: fn(),
    onClear: fn(),
  },
  component: Search,
  render: (args) => {
    const [{ value }, updateArgs] = useArgs<ComponentProps<typeof Search>>()
    return (
      <Search
        {...args}
        onChange={(e) => updateArgs({ value: e.target.value })}
        onClear={() => updateArgs({ value: '' })}
        value={value}
      />
    )
  },
  title: 'Components/Search',
})

export const Primary = meta.story({
  args: {},
})

export const Type = meta.story({
  args: {},
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('searchbox')
    await userEvent.type(input, 'Hello, world!')
    expect(input).toHaveValue('Hello, world!')
  },
})

export const Clear = meta.story({
  args: {
    value: 'Hello, world!',
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('searchbox')
    expect(input).toHaveValue('Hello, world!')
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    expect(input).toHaveValue('')
  },
})

export const TypeAndClear = meta.story({
  args: {},
  play: async ({ context }) => {
    await Type.play(context)
    await Clear.play(context)
  },
})
