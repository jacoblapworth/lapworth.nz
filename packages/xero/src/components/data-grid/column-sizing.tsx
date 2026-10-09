'use client'

import { VisuallyHidden } from '@ariakit/react'
import type {
  CellData,
  Header,
  ReactTable,
  RowData,
} from '@tanstack/react-table'
import {
  type CSSProperties,
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
} from 'react'

import { styled } from '@/styled/jsx'
import type { TableFeatures } from '../data-table/table'

type SizeMap = Map<string, number>

interface ColumnSizeContextValue {
  columns: SizeMap
  headers: SizeMap
}

const ColumnSizeContext = createContext<ColumnSizeContextValue>({
  columns: new Map(),
  headers: new Map(),
})

export function useColumnSizes<TData extends RowData>(
  table: ReactTable<TableFeatures, TData>,
) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: requires deep comparison
  const sizes = useMemo(() => {
    const columns = new Map<string, number>()
    const headers = new Map<string, number>()
    const flatHeaders = table.getFlatHeaders()

    const vars = flatHeaders.map((header) => {
      headers.set(header.id, header.getSize())
      columns.set(header.column.id, header.column.getSize())

      return [`--column-${header.column.id}-size`, header.column.getSize()]
    })

    const style: CSSProperties = Object.fromEntries(vars)

    return { columns, headers, style, vars }
  }, [table.state.columnSizing])

  return sizes
}

export function useColumnSize(id: string) {
  const { columns } = useContext(ColumnSizeContext)

  return columns.get(id)
}

export function useHeaderSize(id: string) {
  const { headers } = useContext(ColumnSizeContext)

  return headers.get(id)
}

const Handle = styled('button', {
  base: {
    _active: {
      backgroundColor: 'action',
      opacity: 1,
    },

    _focusVisible: {
      opacity: 1,
      outlineColor: 'focus.outline',
      outlineOffset: 1,
      outlineStyle: 'solid',
      outlineWidth: 3,
    },

    _hover: {
      opacity: 1,
    },

    _selected: {
      backgroundColor: 'action',
      opacity: 1,
    },
    backgroundColor: 'border.subtle',
    border: 'none',
    borderRadius: 999,
    bottom: 4,
    cursor: 'col-resize',
    margin: 0,
    opacity: 0,
    outline: 'none',
    padding: 0,
    position: 'absolute',
    right: 1,
    top: 4,
    transition: 'opacity 0.1s ease-in-out',
    translate: 'auto',
    translateX: '5px',
    width: 7,
    zIndex: 100,
  },

  variants: {
    position: {
      left: {},
      right: {
        left: 1,
        right: undefined,
      },
    },
  },
})

interface HeaderResizeHandleProps<
  TData extends RowData,
  TValue extends CellData = CellData,
> {
  table: ReactTable<TableFeatures, TData>
  header: Header<TableFeatures, TData, TValue>
  label: string
}

export function DataGridColumnResizeHandleImpl<
  TData extends RowData,
  TValue extends CellData = CellData,
>({ table, header, label }: HeaderResizeHandleProps<TData, TValue>) {
  const defaultColumnDef = table.getDefaultColumnDef()
  const onDoubleClick = useCallback(() => {
    header.column.resetSize()
  }, [header.column])

  if (!header.column.getCanResize()) return

  return (
    <Handle
      aria-orientation="vertical"
      aria-valuemax={defaultColumnDef.maxSize}
      aria-valuemin={defaultColumnDef.minSize}
      aria-valuenow={header.column.getSize()}
      onDoubleClick={onDoubleClick}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      role="separator"
      touchAction="none"
      userSelect="none"
    >
      <VisuallyHidden>Resize {label} column</VisuallyHidden>
    </Handle>
  )
}

export const DataGridColumnResizeHandle = memo(
  DataGridColumnResizeHandleImpl,
  (prev, next) => {
    const prevColumn = prev.header.column
    const nextColumn = next.header.column

    if (
      prevColumn.getIsResizing() !== nextColumn.getIsResizing() ||
      prevColumn.getSize() !== nextColumn.getSize()
    ) {
      return false
    }

    if (prev.label !== next.label) return false

    return true
  },
) as typeof DataGridColumnResizeHandleImpl
