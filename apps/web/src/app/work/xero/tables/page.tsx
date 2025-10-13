'use client'

import { CheckboxProvider } from '@ariakit/react'
import {
  type ColumnFiltersState,
  createColumnHelper,
} from '@tanstack/react-table'
import { CheckCircleIcon, TrashIcon } from 'lucide-react'
import { useState } from 'react'
import { Table, useTable } from '@/components/Table'
import { Checkbox } from '@/components/Table/Checkbox'
import { Tag } from '@/components/Table/Tag'
import { Box } from '@/styled/jsx'
import { initialData } from './data'
import { getInvoiceStatus, type InvoiceRow } from './model'

const columnHelper = createColumnHelper<InvoiceRow>()

const initialColumns = [
  columnHelper.display({
    cell: (ctx) => (
      <Box placeItems="center">
        <CheckboxProvider
          setValue={ctx.row.getToggleSelectedHandler()}
          value={ctx.row.getIsSelected()}
        >
          <Checkbox />
        </CheckboxProvider>
      </Box>
    ),
    enableGrouping: false,
    enableHiding: false,
    enablePinning: false,
    enableResizing: false,
    enableSorting: false,
    id: 'select',
    size: 32,
  }),
  columnHelper.accessor('contact.name', {
    // cell: (ctx) => {
    //   return (
    //     <PrimaryKeyCell href={`/a/sales/bills/${ctx.row.original.invoiceID}`}>
    //       {ctx.getValue<string>()}
    //     </PrimaryKeyCell>
    //   )
    // },
    enableHiding: false,
    header: 'From',
    id: 'contact',
    size: 150,
  }),
  columnHelper.accessor('status', {
    cell: (ctx) => {
      const value = ctx.cell.getValue()
      const { sentiment, label } = getInvoiceStatus(value)

      return <Tag variant={sentiment}>{label}</Tag>
    },
    filterFn: 'arrIncludesSome',
    header: 'Status',
    id: 'status',
  }),
  columnHelper.accessor('invoiceNumber', {
    // cell: (ctx) => <Cell>{ctx.getValue<string>()}</Cell>,
    header: 'Reference',
    id: 'invoiceNumber',
  }),
  columnHelper.accessor('date', {
    // cell: (ctx) => <DateCell ctx={ctx} />,
    header: 'Date',
    id: 'date',
    sortingFn: 'datetime',
  }),
  columnHelper.accessor('dueDate', {
    // cell: (ctx) => (
    //   <TextInputCell onChange={() => {}} value={ctx.getValue<string>()} />
    // ),
    header: 'Due',
    id: 'dueDate',
    sortingFn: 'datetime',
  }),
  columnHelper.accessor('amountPaid', {
    aggregationFn: 'sum',
    // cell: (ctx) => (
    //   <Cell textAlign={'end'}>{ctx.cell.getValue<number>().toFixed(2)}</Cell>
    // ),
    // footer: (ctx) => {
    //   // console.log(ctx.column.columnDef.aggregatedCell)

    //   return (
    //     // <Cell textAlign={'end'}>
    //     // ctx.column.columnDef.aggregatedCell as string
    //     // </Cell>
    //   )
    // },
    header: 'Paid',
    id: 'amountPaid',
  }),
  columnHelper.accessor('amountDue', {
    // cell: (ctx) => (
    //   <Cell textAlign={'end'}>{ctx.cell.getValue<number>().toFixed(2)}</Cell>
    // ),
    header: 'Due',
    id: 'due',
  }),

  columnHelper.accessor('notes', {
    // cell: (ctx) => {
    //   const count = ctx.cell.getValue()?.length

    //   return (
    //     <Cell>
    //       <NoteButton onClick={() => {}}>{count}</NoteButton>
    //     </Cell>
    //   )
    // },
    header: 'Notes',
    id: 'notes',
  }),
  // defaultColumns.showColumn(columnHelper),
]

export default function Page() {
  const [columns] = useState(initialColumns)
  const [data] = useState<InvoiceRow[]>(initialData)
  const [columnFilters, onColumnFiltersChange] = useState<ColumnFiltersState>(
    [],
  )

  const table = useTable<InvoiceRow>({
    columns,
    data,
    initialState: {
      columnPinning: {
        left: ['select', 'contact'],
      },
      sorting: [
        {
          desc: true,
          id: 'date',
        },
      ],
    },
    onColumnFiltersChange,
    state: {
      columnFilters,
    },
  })

  return (
    <Table
      bulkActions={[
        {
          id: 'approve',
          label: (
            <>
              <CheckCircleIcon />
              Approve
            </>
          ),
          onClick: () => alert('Approved'),
        },
        {
          id: 'delete',
          label: (
            <>
              <TrashIcon />
              Delete
            </>
          ),
          onClick: () => alert('Deleted'),
        },
      ]}
      table={table}
    />
  )
}
