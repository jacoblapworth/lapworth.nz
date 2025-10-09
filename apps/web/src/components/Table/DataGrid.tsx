'use client'

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

export const tableStyles = cva({
  base: {
    /* box-shadow and borders will not work with positon: sticky otherwise */
    borderCollapse: 'separate',
    borderSpacing: 0,
    color: 'xero.text',
    fontSize: 13,
    lineHeight: '20px',
    // height: 1,
    marginBottom: 1,
    tableLayout: 'fixed',
  },
})

export const TableElement = styled('table', tableStyles, {
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
    base: {
      // borderBlockStart: 'divider',
      // backgroundColor: 'background.tertiary',
    },
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
      borderInlineStartColor: 'xero.border.subtle',
      borderInlineStartStyle: 'solid',
      borderInlineStartWidth: 1,
      color: 'xero.text',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: '16px',
      paddingBlock: 2,
      paddingInlineEnd: 2,
      paddingInlineStart: 2,
      position: 'relative',
      textAlign: 'left',
    },
    variants: {
      isEnd: {
        true: {
          // paddingInlineEnd: 0,
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
        backgroundColor: 'xero.background.secondary',
      },

      _hover: {
        backgroundColor: 'xero.background.secondary',
      },
      borderBlockStartColor: 'xero.border.subtle',
      borderBlockStartStyle: 'solid',
      borderBlockStartWidth: 1,
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
      className={cx(
        'group',
        columnStyles({ isPinned: column.getIsPinned() || undefined }),
      )}
      id={header.id}
      style={{
        left: isPinned === 'left' ? column.getStart('left') : undefined,
        right: isPinned === 'right' ? column.getStart('right') : undefined,
        width: `var(--column-${column.id}-size)`,
      }}
    >
      {isDisplay ? (
        children
      ) : (
        <TableHeadMenu header={header}>
          <Heading id={id} size="small">
            {children}
          </Heading>
        </TableHeadMenu>
      )}

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

export const tdStyles = cva({
  base: {
    _first: {
      borderInlineStartWidth: 0,
    },
    _groupFocusWithin: {
      backgroundColor: 'xero.background.secondary',
    },
    _groupHover: {
      backgroundColor: 'xero.background.secondary',
    },

    // _last: {
    //   borderInlineEndWidth: 1,
    // },

    '& a': {
      _hover: {
        color: 'xero.action',
        textDecoration: 'underline',
      },
      color: 'xero.text',
      cursor: 'pointer',
    },
    borderBlockColor: 'xero.border.subtle',
    borderBlockStartWidth: 1,
    borderBlockStyle: 'solid',

    borderInlineColor: 'xero.border.subtle',
    borderInlineStartWidth: 1,
    borderInlineStyle: 'solid',
    boxSizing: 'content-box',
    height: 32,
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
    width: 32,
  },
  compoundVariants: [
    {
      css: {
        backgroundColor: 'xero.background.primary',
        position: 'sticky',
        zIndex: 'responsiveoverlay',
      },
      isPinned: ['left', 'right'],
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
    isStart: {
      true: {
        // paddingInlineStart: 0,
      },
    },
  },
})

export const Td = styled('td', tdStyles, {
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

  return (
    <Td
      isPinned={isPinned}
      style={{
        left: isPinned === 'left' ? cell.column.getStart('left') : undefined,
        right: isPinned === 'right' ? cell.column.getStart('right') : undefined,
        width: `var(--column-${cell.column.id}-size)`,
        // width: cell.column.getSize(),
      }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
      {showOverflow && <ColumnOverflowIndicator position={isPinned} />}
    </Td>
  )
}

function useScrollOpacity() {
  const { scrollXProgress, scrollX } = useTableScroll()
  const startOpacity = useTransform<number, number>(
    [scrollXProgress, scrollX],
    ([progress, x]) => {
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
      className={tableCellOverflowStyles({ position })}
      style={{ opacity }}
      transition={{ duration: 2, ease: 'linear' }}
    />
  )
}

const columnStyles = cva({
  base: {
    _groupHover: {
      backgroundColor: 'xero.background.secondary',
    },
    backgroundColor: 'xero.background.primary',
    position: 'relative',
  },
  variants: {
    isPinned: {
      left: {
        left: 0,
        position: 'sticky',
        zIndex: 200,
      },
      right: {
        position: 'sticky',
        right: 0,
        zIndex: 200,
      },
    },
  },
})

export const tableCellOverflowStyles = cva({
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
        boxShadow: 'xero.overflow.left',
        right: 0,
      },
      right: {
        boxShadow: 'xero.overflow.right',
        left: 0,
      },
    },
  },
})

export const TableCellOverflow = styled('span', tableCellOverflowStyles)

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
  return (
    <td>
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.footer, header.getContext())}
    </td>
  )
}
