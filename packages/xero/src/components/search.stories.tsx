import type { ChangeEvent, ComponentProps } from 'react'
import { useArgs } from 'storybook/internal/preview-api'
import { expect, fn } from 'storybook/test'
import preview from '@/storybook/preview'
import { Search } from './search'

const meta = preview.meta({
  args: {
    label: 'Search',
    onChange: fn(),
    onClear: fn(),
  },
  component: Search,
  render: () => {
    const [args, updateArgs] = useArgs<ComponentProps<typeof Search>>()

    function onClear() {
      console.log('CLEAR')
      updateArgs({ value: ' ' })
      console.log(args)
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      updateArgs({ value: e.target.value })
    }

    return <Search {...args} onChange={onChange} onClear={onClear} />
  },
  title: 'Components/Search',
})

export const Primary = meta.story({
  args: {},
})

export const Type = meta.story({
  args: {},
  play: async ({ canvas, userEvent }) => {
    const input = await canvas.findByRole('searchbox')
    await userEvent.type(input, 'Hello, world!')
    expect(input).toHaveValue('Hello, world!')
  },
})

export const Clear = meta.story({
  args: {
    value: 'Hello, world!',
  },
  play: async ({ canvas, userEvent }) => {
    const input = await canvas.findByRole('searchbox')
    expect(input).toHaveValue('Hello, world!')
    const button = await canvas.findByRole('button')
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
  tags: ['skip'],
})
