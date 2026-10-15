'use client'

import {
  type Column,
  flexRender,
  type Header,
  type ReactTable,
  type RowData,
} from '@tanstack/react-table'
import { ArrowDownUpIcon, Columns2Icon } from 'lucide-react'
import { useState } from 'react'
import { SortIcon } from '../data-grid/sort-icon'
import {
  Menu,
  MenuButton,
  MenuItemCheckbox,
  MenuItemRadio,
  MenuProvider,
  MenuSeparator,
} from '../menu'
import type { TableFeatures } from './table'

export interface SortOption {
  id: string
  label: string
  dir: 'asc' | 'desc'
  dirLabels: {
    asc: string
    desc: string
  }
}

export type SortOptions = SortOption[]

interface ColumnsSortMenuProps<TData extends RowData> {
  headers: Header<TableFeatures, TData, unknown>[]
  table: ReactTable<TableFeatures, TData>
}

export function ColumnsSortMenu<TData extends RowData>({
  headers,
  table,
}: ColumnsSortMenuProps<TData>) {
  const sorting = table.state.sorting[0]!

  return (
    <MenuProvider values={{ ...sorting }}>
      <MenuButton size="sm" variant="secondary">
        <ArrowDownUpIcon size={16} />
        Sort
      </MenuButton>
      <Menu portal>
        {headers.map(({ column, getContext }) => {
          if (!column.getCanSort()) return null

          return (
            <MenuItemRadio
              key={column.id}
              name="id"
              onClick={() => column.toggleSorting(sorting?.desc === true)}
              value={column.id}
            >
              {flexRender(column.columnDef.header, getContext())}
            </MenuItemRadio>
          )
        })}
        <MenuSeparator />
        <MenuItemRadio
          name="dir"
          onClick={() =>
            table.setSorting(() => [{ desc: false, id: sorting.id }])
          }
          value="asc"
        >
          <SortIcon sort="asc" />
          Ascending
        </MenuItemRadio>
        <MenuItemRadio
          name="dir"
          onClick={() =>
            table.setSorting(() => [{ desc: true, id: sorting.id }])
          }
          value="desc"
        >
          <SortIcon sort="desc" />
          Descending
        </MenuItemRadio>
      </Menu>
    </MenuProvider>
  )
}

interface Props<TData extends RowData> {
  columns: Column<TableFeatures, TData, unknown>[]
  headers: Header<TableFeatures, TData, unknown>[]
}

export function ColumnsMenu<TData extends RowData>({
  columns,
  headers,
}: Props<TData>) {
  const initialValues = columns
    .filter((column) => column.getIsVisible())
    .map((column) => column.id)

  const [values, setValues] = useState({ columns: initialValues })
  const context = headers[0]?.getContext()

  if (!context) return null

  return (
    <MenuProvider
      setValues={(e: typeof values) => {
        setValues(e)
      }}
      values={values}
    >
      <MenuButton size="sm" variant="secondary">
        <Columns2Icon size={16} />
        Columns
      </MenuButton>
      <Menu portal>
        {columns.map((column) => {
          if (!column.accessorFn) return null

          return (
            <MenuItemCheckbox
              disabled={!column.getCanHide()}
              key={column.id}
              name={'columns'}
              onChange={column.getToggleVisibilityHandler()}
              value={column.id}
            >
              {flexRender(column.columnDef.header, context)}
            </MenuItemCheckbox>
          )
        })}
      </Menu>
    </MenuProvider>
  )
}
