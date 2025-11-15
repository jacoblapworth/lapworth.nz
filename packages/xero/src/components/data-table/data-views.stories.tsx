import type { ComponentProps } from 'react'
import { useArgs } from 'storybook/internal/preview-api'
import { fn } from 'storybook/test'
import preview from '@/storybook/preview'
import { Views } from './data-views'

const meta = preview.meta({
  args: {
    onChange: fn(),
    selectedId: '1',
    views: [
      { id: '1', label: 'All items' },
      { id: '2', label: 'My items' },
      { id: '3', label: 'Completed items' },
    ],
  },
  component: Views,
  render: () => {
    const [args, updateArgs] = useArgs<ComponentProps<typeof Views>>()

    return <Views {...args} onChange={(id) => updateArgs({ selectedId: id })} />
  },
  title: 'Components/DataTable/Views',
})

export const Primary = meta.story({
  args: {},
})
