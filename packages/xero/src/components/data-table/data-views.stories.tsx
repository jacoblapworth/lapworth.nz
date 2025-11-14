import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { ComponentProps } from 'react'
import { useArgs } from 'storybook/internal/preview-api'
import { fn } from 'storybook/test'
import { Views as Component } from './data-views'

const meta = {
  args: {
    onChange: fn(),
    selectedId: '1',
    views: [
      { id: '1', label: 'All items' },
      { id: '2', label: 'My items' },
      { id: '3', label: 'Completed items' },
    ],
  },
  component: Component,
  render: () => {
    const [args, updateArgs] = useArgs<ComponentProps<typeof Component>>()

    return (
      <Component {...args} onChange={(id) => updateArgs({ selectedId: id })} />
    )
  },
  title: 'Components/DataTable/Views',
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
