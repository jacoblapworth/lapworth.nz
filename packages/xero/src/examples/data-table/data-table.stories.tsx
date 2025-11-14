import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DataTableExample as Component } from './data-table'

const meta = {
  args: {},
  component: Component,
  title: 'Examples/DataTable',
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
