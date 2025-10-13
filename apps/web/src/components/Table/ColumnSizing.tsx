'use client'

import { VisuallyHidden } from '@ariakit/react'
import type { Header, RowData, Table } from '@tanstack/react-table'
import {
  type CSSProperties,
  createContext,
  type ReactNode,
  useContext,
  useMemo,
} from 'react'

import { HTMLStyledProps, styled } from '@/styled/jsx'

type SizeMap = Map<string, number>

interface ColumnSizeContextValue {
  columns: SizeMap
  headers: SizeMap
}

const ColumnSizeContext = createContext<ColumnSizeContextValue>({
  columns: new Map(),
  headers: new Map(),
})

interface ColumnSizeProviderProps<TData extends RowData> {
  children: ReactNode
  table: Table<TData>
}

export function useColumnSizes<TData extends RowData>(table: Table<TData>) {
  const { columnSizingInfo, columnSizing } = table.getState()
  const sizes = useMemo(() => {
    const columns = new Map<string, number>()
    const headers = new Map<string, number>()
    const flatHeaders = table.getFlatHeaders()

    const vars = flatHeaders.map((header) => {
      headers.set(header.id, header.getSize())
      columns.set(header.column.id, header.column.getSize())

      return [
        `--column-${header.column.id}-size`,
        `${header.column.getSize()}px`,
      ]
    })

    const style: CSSProperties = Object.fromEntries(vars)

    return { columns, headers, style, vars }
  }, [table])

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
      backgroundColor: 'xero.action',
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
      backgroundColor: 'xero.action',
      opacity: 1,
    },
    backgroundColor: 'xero.border.subtle',
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

interface HeaderResizeHandleProps<TData extends RowData> {
  header: Header<TData, unknown>
}

export function HeaderResizeHandle<TData extends RowData>({
  header,
}: HeaderResizeHandleProps<TData>) {
  if (!header.column.getCanResize()) return

  return (
    <Handle
      // position={header.column.getIsPinned() || undefined}
      aria-orientation="vertical"
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      role="separator"
      touchAction="none"
      userSelect="none"
    >
      <VisuallyHidden>Resize column</VisuallyHidden>
    </Handle>
  )
}
