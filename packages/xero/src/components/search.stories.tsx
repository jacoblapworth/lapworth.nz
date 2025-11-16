import type { ChangeEvent } from 'react'

import { useArgs } from 'storybook/preview-api'
import { expect, fn, waitFor } from 'storybook/test'
import preview from '@/storybook/preview'
import { Search } from './search'

const meta = preview.meta({
  args: {
    label: 'Search',
    onChange: fn(),
    onClear: fn(),
    value: '',
  },
  component: Search,
  decorators: [
    (story, context) => {
      const [_, updateArgs] = useArgs()
      return story({ ...context, updateArgs })
    },
  ],
  title: 'Components/Search',
})

export const Primary = meta.story({
  args: {},
})

export const Type = meta.story({
  args: {
    value: '',
  },
  play: async ({ canvas, userEvent }) => {
    const input = await canvas.findByRole('searchbox')
    await userEvent.type(input, 'Hello, world!')
    expect(input).toHaveValue('Hello, world!')
  },
  render: function Render(args, { updateArgs }) {
    function onClear() {
      args.onClear?.()
      updateArgs({ value: '' })
      console.log('CLEAR', args)
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      args.onChange?.(e)
      updateArgs({ value: e.target.value })
    }

    return <Search {...args} onChange={onChange} onClear={onClear} />
  },
})

export const Clear = meta.story({
  args: {
    onClear: fn(),
    value: 'Hello, world!',
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = await canvas.findByRole('button', { name: /clear/i })
    await userEvent.click(button)
    await expect(args.onClear).toHaveBeenCalled()
  },
})

export const TypeAndClear = Type.extend({
  args: {},
  play: async ({ context }) => {
    await Type.play(context)
    // await Clear.play(context)
  },
  tags: ['skip'],
})
