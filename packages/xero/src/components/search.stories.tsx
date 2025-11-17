import { expect, fn } from 'storybook/test'
import preview from '@/storybook/preview'
import { Search } from './search'

const meta = preview.meta({
  args: {
    label: 'Search',
    onChange: fn(),
    onClear: fn(),
    placeholder: 'Search...',
    size: 'md',
    value: '',
  },
  component: Search,

  title: 'Components/Search',
})

export const Primary = meta.story({
  args: {
    label: 'Search',
    onChange: fn(),
    onClear: fn(),
    value: '',
  },
})

export const Clear = meta.story({
  args: {
    label: 'Search',
    onChange: fn(),
    onClear: fn(),
    value: 'Hello, world!',
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = await canvas.findByRole('button', { name: /clear/i })
    await userEvent.click(button)
    await expect(args.onClear).toHaveBeenCalled()
  },
})
