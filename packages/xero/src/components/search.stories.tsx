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
  render: () => {
    const [args, updateArgs] = useArgs<ComponentProps<typeof Search>>()

    function onClear() {
      args.onClear?.()
      updateArgs({ value: ' ' })
      console.log('CLEAR', args)
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      args.onChange?.(e)
      updateArgs({ value: e.target.value })
    }

    return <Search {...args} onChange={onChange} onClear={onClear} />
  },
})

export const Clear = Type.extend({
  args: {
    onClear: fn(),
    value: 'Hello, world!',
  },
  play: async ({ args, canvas, userEvent }) => {
    const input = await canvas.findByRole('searchbox')
    expect(input).toHaveValue('Hello, world!')
    const button = await canvas.findByRole('button', { name: /clear/i })
    await userEvent.click(button)
    expect(args.onClear).toHaveBeenCalled()
    expect(input).toHaveValue('')
  },
})

export const TypeAndClear = Type.extend({
  args: {},
  play: async ({ context }) => {
    await Type.play(context)
    await Clear.play(context)
  },
  tags: ['skip'],
})
