'use client'

import '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    alignment?: 'start' | 'center' | 'end'
    isNumeric?: boolean
    isEditable?: boolean
  }
}

// import { useTableNav } from '@table-nav/react'
import {
  type Cell,
  flexRender,
  type Header,
  type HeaderGroup,
  type Table as ReactTable,
  type Row,
  type RowData,
} from '@tanstack/react-table'
import { ArrowDownWideNarrowIcon, ArrowUpNarrowWideIcon } from 'lucide-react'
import { motion, useTransform } from 'motion/react'
import { memo, useEffect, useId } from 'react'
import { cva, cx } from '@/styled/css'
import { HStack, styled } from '@/styled/jsx'
import { Button } from './Button'
import { HeaderResizeHandle, useColumnSizes } from './ColumnSizing'
import { DataCell } from './DataCell'
import { Heading } from './Heading'
import { type TableHeadDropdownProps, TableHeadMenu } from './HeadMenu'
import { TableScrollContainer, useTableScroll } from './ScrollContainer'
import { SrOnly } from './SrOnly'

interface TableProps<TData extends RowData> {
  table: ReactTable<TData>
}

export function DataGrid<TData extends RowData>({ table }: TableProps<TData>) {
  // const { listeners, tableNav } = useTableNav({ debug: true })
  const { style } = useColumnSizes(table)

  // useEffect(() => {
  //   tableNav.enable()
  // }, [tableNav])

  const MemoizedTableBody = memo(
    TableBody,
    (prev, next) => prev.table.options.data === next.table.options.data,
  ) as typeof TableBody

  return (
    <TableScrollContainer>
      <TableElement
        style={{
          ...style,
          width: table.getTotalSize(),
        }}
        // {...listeners}
      >
        <TableHead headerGroups={table.getHeaderGroups()} />
        {table.getState().columnSizingInfo.isResizingColumn ? (
          <MemoizedTableBody table={table} />
        ) : (
          <TableBody table={table} />
        )}
        <TableFooter footerGroups={table.getFooterGroups()} />
      </TableElement>
    </TableScrollContainer>
  )
}

export const TableStyles = cva({
  base: {
    /* box-shadow and borders will not work with `position: sticky` otherwise */
    borderCollapse: 'separate',
    borderSpacing: 0,
    color: 'text',
    fontSize: 13,
    lineHeight: '20px',
    marginBottom: 1,
    minWidth: '100%',
    // height: 1,
    paddingBlockEnd: 16,
    tableLayout: 'fixed',
  },
})

export const TableElement = styled('table', TableStyles, {
  defaultProps: {
    role: 'grid',
  },
})

// MARK: - Header

export const THead = styled(
  'thead',
  {
    base: {},
  },
  {
    defaultProps: {
      role: 'rowgroup',
    },
  },
)

export const THeadRow = styled(
  'tr',
  {
    base: {},
  },
  {
    defaultProps: {
      role: 'row',
    },
  },
)

export const TH = styled(
  'th',
  {
    base: {
      _first: {
        borderInlineStartWidth: 0,
      },
      borderInlineStartColor: 'border.subtle',
      borderInlineStartStyle: 'solid',
      borderInlineStartWidth: 1,
      color: 'text',
      fontSize: 12,
      fontWeight: 600,
      height: 32,
      lineHeight: '16px',
      position: 'relative',
      textAlign: 'left',
    },
    compoundVariants: [
      {
        css: {
          backgroundColor: 'background.primary',
          position: 'sticky',
          zIndex: 100,
        },
        isPinned: ['left', 'right'],
      },
    ],
    variants: {
      // isLastLeftPinnedColumn: {
      isEnd: {
        true: {
          // paddingInlineEnd: 0,
        },
      },
      isPinned: {
        left: {
          left: 0,
        },
        right: {
          right: 0,
        },
      },
      isStart: {
        true: {
          // paddingInlineStart: 0,
        },
      },
    },
  },
  {
    defaultProps: {
      role: 'columnheader',
      scope: 'col',
    },
  },
)

export const TR = styled(
  'tr',
  {
    base: {
      _focusWithin: {
        // backgroundColor: 'background.secondary',
      },

      _hover: {
        backgroundColor: 'background.secondary',
      },
    },

    variants: {
      isSelected: {
        true: {
          backgroundColor: 'rgba(240, 249, 254, 1)',
        },
      },
    },
  },
  {
    defaultProps: {
      className: 'group',
      role: 'row',
    },
  },
)

export function TableHead<TData extends RowData>({
  headerGroups,
}: {
  headerGroups: HeaderGroup<TData>[]
}) {
  return (
    <THead>
      {headerGroups.map(({ id, headers }) => (
        <TableHeadRow headers={headers} key={id} />
      ))}
    </THead>
  )
}

export function TableHeadRow<TData extends RowData>({
  headers,
}: {
  headers: Header<TData, unknown>[]
}) {
  return (
    <THeadRow>
      {headers.map((header) => (
        <TableHeadCell header={header} key={header.id} />
      ))}
    </THeadRow>
  )
}

export function TableHeadCell<TData extends RowData, TValue>({
  header,
}: {
  header: Header<TData, TValue>
}) {
  const { column, getContext } = header
  // const width = useColumnSize(column.id)
  const isPinned = column.getIsPinned() || undefined
  const isLastLeftPinnedColumn =
    isPinned === 'left' && column.getIsLastColumn('left')
  const isLastRightPinnedColumn =
    isPinned === 'right' && column.getIsLastColumn('right')
  const showOverflow = isLastLeftPinnedColumn || isLastRightPinnedColumn
  const id = useId()
  const isDisplay = !column.accessorFn
  const children = flexRender(column.columnDef.header, getContext())
  const canResize = column.getCanResize()

  return (
    <TH
      aria-labelledby={id}
      className="group"
      id={header.id}
      isPinned={isPinned}
      style={{
        left: isPinned === 'left' ? column.getStart('left') : undefined,
        right: isPinned === 'right' ? column.getStart('right') : undefined,
        width: `var(--column-${column.id}-size)`,
      }}
    >
      <DataCell
        alignment={column.columnDef.meta?.alignment}
        variant={isDisplay ? 'display' : 'accessor'}
      >
        {isDisplay ? (
          children
        ) : (
          <TableHeadMenu header={header}>{children}</TableHeadMenu>
        )}
      </DataCell>
      {canResize && <HeaderResizeHandle header={header} />}
      {showOverflow && <ColumnOverflowIndicator position={isPinned} />}
    </TH>
  )
}

export function HeaderColumnActions<TData, TValue>({
  children,
  header,
}: TableHeadDropdownProps<TData, TValue>) {
  const sort = header.column.getIsSorted()
  return (
    <HStack gap="3xsmall" justifyContent="stretch">
      {sort && (
        <Button
          onClick={() => header.column.getToggleSortingHandler()}
          variant="tertiary"
        >
          {sort === 'asc' ? (
            <ArrowDownWideNarrowIcon size={16} />
          ) : (
            <ArrowUpNarrowWideIcon size={16} />
          )}

          <SrOnly>Sort</SrOnly>
        </Button>
      )}
      {header.column.getCanSort() && (
        <TableHeadMenu header={header}>{children}</TableHeadMenu>
      )}
    </HStack>
  )
}

// MARK: - Body

export const TBody = styled('tbody', {
  base: {},
})

export function TableBody<TData extends RowData>({
  table,
}: {
  table: ReactTable<TData>
}) {
  return (
    <TBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id} row={row} />
      ))}
    </TBody>
  )
}

export function TableRow<TData extends RowData>({ row }: { row: Row<TData> }) {
  const isSelected = row.getIsSelected()

  return (
    <TR isSelected={isSelected}>
      {row.getVisibleCells().map((cell) => (
        <TableCell cell={cell} key={cell.id} />
      ))}
    </TR>
  )
}

export const TdStyles = cva({
  base: {
    _first: {
      borderInlineStartWidth: 0,
    },
    _groupFocusVisible: {
      backgroundColor: 'background.secondary',
    },
    _groupHover: {
      backgroundColor: 'background.secondary',
    },

    // _last: {
    //   borderInlineEndWidth: 1,
    // },

    '& a': {
      _hover: {
        color: 'action',
        textDecoration: 'underline',
      },
      color: 'text',
      cursor: 'pointer',
    },

    borderBlockColor: 'border.subtle',
    borderBlockStartWidth: 1,
    borderInlineColor: 'border.subtle',
    borderInlineStartWidth: 1,
    borderStyle: 'solid',
    boxSizing: 'content-box',
    height: 32,
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
    width: 32,
  },
  compoundVariants: [
    {
      css: {
        backgroundColor: 'background.primary',
        position: 'sticky',
        zIndex: 100,
      },
      isPinned: ['left', 'right'],
    },
    {
      css: {
        backgroundColor: 'rgba(240, 249, 254, 1)',
      },
      isPinned: ['left', 'right'],
      isSelected: true,
    },
  ],
  variants: {
    isEnd: {
      true: {
        // paddingInlineEnd: 0,
      },
    },
    isPinned: {
      left: {
        left: 0,
      },
      right: {
        right: 0,
      },
    },
    isSelected: {
      true: {
        _groupHover: {
          backgroundColor: 'rgba(240, 249, 254, 1)',
        },
        backgroundColor: 'rgba(240, 249, 254, 1)',
      },
    },
    isStart: {
      true: {
        // paddingInlineStart: 0,
      },
    },
  },
})

export const Td = styled('td', TdStyles, {
  defaultProps: {
    role: 'gridcell',
  },
})

export function TableCell<TData extends RowData, TValue>({
  cell,
}: {
  cell: Cell<TData, TValue>
}) {
  const isPinned = cell.column.getIsPinned() || undefined
  const isLastLeftPinnedColumn =
    isPinned === 'left' && cell.column.getIsLastColumn('left')
  const isLastRightPinnedColumn =
    isPinned === 'right' && cell.column.getIsLastColumn('right')
  const showOverflow = isLastLeftPinnedColumn || isLastRightPinnedColumn
  const isDisplay = !cell.column.accessorFn
  const isSelected = cell.row.getIsSelected()

  return (
    <Td
      isPinned={isPinned}
      isSelected={isSelected}
      style={{
        left: isPinned === 'left' ? cell.column.getStart('left') : undefined,
        right: isPinned === 'right' ? cell.column.getStart('right') : undefined,
        width: `var(--column-${cell.column.id}-size)`,
        // width: cell.column.getSize(),
      }}
    >
      <DataCell
        alignment={cell.column.columnDef.meta?.alignment}
        variant={isDisplay ? 'display' : 'accessor'}
      >
        {cell.getIsAggregated()
          ? flexRender(cell.column.columnDef.aggregatedCell, cell.getContext())
          : flexRender(cell.column.columnDef.cell, cell.getContext())}
      </DataCell>
      {showOverflow && <ColumnOverflowIndicator position={isPinned} />}
    </Td>
  )
}

function useScrollOpacity() {
  const { scrollXProgress, scrollX } = useTableScroll()
  const startOpacity = useTransform<number, number>(
    [scrollXProgress, scrollX],
    ([progress = 0, x = 0]) => {
      return progress > 0 && progress <= 1 && x > 0 ? 1 : 0
    },
  )

  const endOpacity = useTransform(scrollXProgress, (progress) => {
    return progress >= 0 && progress < 1 ? 1 : 0
  })

  return { endOpacity, startOpacity }
}

interface ColumnOverflowIndicatorProps {
  position: 'left' | 'right'
}

export function ColumnOverflowIndicator({
  position,
}: ColumnOverflowIndicatorProps) {
  const { startOpacity, endOpacity } = useScrollOpacity()
  const opacity = position === 'left' ? startOpacity : endOpacity

  return (
    <motion.span
      className={TableCellOverflowStyles({ position })}
      style={{ opacity }}
      transition={{ duration: 2, ease: 'linear' }}
    />
  )
}

export const TableCellOverflowStyles = cva({
  base: {
    bottom: 0,
    display: 'block',
    height: '100%',
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    width: 8,
  },

  variants: {
    position: {
      left: {
        boxShadow: 'overflow.left',
        right: 0,
      },
      right: {
        boxShadow: 'overflow.right',
        left: 0,
      },
    },
  },
})

export const TableCellOverflow = styled('span', TableCellOverflowStyles)

// MARK: - Footer

export const TableFoot = styled('tfoot', {
  base: {},
})

export function TableFooter<TData>({
  footerGroups,
}: {
  footerGroups: HeaderGroup<TData>[]
}) {
  return (
    <TableFoot>
      {footerGroups.map(({ id, headers }) => (
        <TableFootRow headers={headers} key={id} />
      ))}
    </TableFoot>
  )
}

export function TableFootRow<TData extends RowData>({
  headers,
}: {
  headers: Header<TData, unknown>[]
}) {
  return (
    <THeadRow>
      {headers.map((header) => (
        <TableFootCell header={header} key={header.id} />
      ))}
    </THeadRow>
  )
}
export function TableFootCell<TData extends RowData, TValue>({
  header,
}: {
  header: Header<TData, TValue>
}) {
  const isPinned = header.column.getIsPinned() || undefined
  const isLastLeftPinnedColumn =
    isPinned === 'left' && header.column.getIsLastColumn('left')
  const isLastRightPinnedColumn =
    isPinned === 'right' && header.column.getIsLastColumn('right')
  const showOverflow = isLastLeftPinnedColumn || isLastRightPinnedColumn

  return (
    <Td
      borderTopColor="border.regular"
      isPinned={isPinned}
      style={{
        left: isPinned === 'left' ? header.column.getStart('left') : undefined,
        right:
          isPinned === 'right' ? header.column.getStart('right') : undefined,
        width: `var(--column-${header.column.id}-size)`,
      }}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.footer, header.getContext())}
      {showOverflow && <ColumnOverflowIndicator position={isPinned} />}
    </Td>
  )
}
