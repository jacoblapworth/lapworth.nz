'use client'

import { CheckboxProvider } from '@ariakit/react'
import { CurrencyCell, DateCell } from '@lapworth/xero/Cells'
import { Checkbox } from '@lapworth/xero/Checkbox'
import { footer } from '@lapworth/xero/ColumnHelper'
import { DataCell } from '@lapworth/xero/DataCell'
import { Table, useTable } from '@lapworth/xero/Table'
import { Tag } from '@lapworth/xero/Tag'
import {
  type ColumnFiltersState,
  createColumnHelper,
  type HeaderContext,
} from '@tanstack/react-table'
import { CheckCircleIcon, TrashIcon } from 'lucide-react'
import { useState } from 'react'
import { Box } from '@/styled/jsx'
import { initialData } from './data'
import { getInvoiceStatus, type InvoiceRow } from './model'
import '@lapworth/xero/styles.css'

import * as Ariakit from '@ariakit/react'

const columnHelper = createColumnHelper<InvoiceRow>()

const columns = [
  columnHelper.display({
    cell: ({ row }) => (
      <Ariakit.Checkbox
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
    enableGrouping: false,
    enableHiding: false,
    enablePinning: false,
    enableResizing: false,
    enableSorting: false,
    header: ({ table }) => (
      <Ariakit.Checkbox
        checked={
          table.getIsAllRowsSelected() ||
          (table.getIsSomeRowsSelected() ? 'mixed' : false)
        }
        onChange={
          table.getIsAllPageRowsSelected()
            ? table.getToggleAllRowsSelectedHandler()
            : table.getToggleAllPageRowsSelectedHandler()
        }
      />
    ),
    id: 'select',
    maxSize: 32,
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
    size: 200,
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
    size: 90,
  }),
  columnHelper.accessor('invoiceNumber', {
    // cell: (ctx) => <Cell>{ctx.getValue<string>()}</Cell>,
    header: 'Reference',
    id: 'invoiceNumber',
  }),
  columnHelper.accessor('date', {
    aggregationFn: 'sum',
    cell: (ctx) => <DateCell ctx={ctx} />,
    header: 'Date',
    id: 'date',
    meta: {
      alignment: 'end',
    },
    sortingFn: 'datetime',
  }),
  columnHelper.accessor('dueDate', {
    // cell: (ctx) => (
    //   <TextInputCell onChange={() => {}} value={ctx.getValue<string>()} />
    // ),
    cell: (ctx) => <DateCell ctx={ctx} />,
    header: 'Due',
    id: 'dueDate',
    meta: {
      alignment: 'end',
    },
    sortingFn: 'datetime',
  }),
  columnHelper.accessor('amountPaid', {
    aggregationFn: 'sum',
    cell: (ctx) => <CurrencyCell ctx={ctx} />,
    footer,
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
    meta: {
      alignment: 'end',
      isNumeric: true,
    },
  }),
  columnHelper.accessor('amountDue', {
    cell: (ctx) => <CurrencyCell ctx={ctx} />,
    footer,
    header: 'Due',
    id: 'due',
    meta: {
      alignment: 'end',
    },
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
      // grouping: ['group'],
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
              <CheckCircleIcon size={16} />
              Approve
            </>
          ),
          onClick: () => alert('Approved'),
        },
        {
          id: 'delete',
          label: (
            <>
              <TrashIcon size={16} />
              Delete
            </>
          ),
          onClick: () => alert('Deleted'),
        },
      ]}
      summaryTotalKey="due"
      table={table}
      views={[
        { filters: [], id: 'all', label: 'All' },
        {
          filters: [
            {
              id: 'status',
              label: 'Status',
              operator: 'is',
              value: 'draft',
            },
          ],
          id: 'draft',
          label: 'Draft',
        },
        {
          filters: [
            {
              id: 'status',
              label: 'Status',
              operator: 'is',
              value: 'awaiting-payment',
            },
          ],
          id: 'awaiting-payment',
          label: 'Awaiting Payment',
        },
        {
          filters: [
            {
              id: 'status',
              label: 'Status',
              operator: 'is',
              value: 'awaiting-payment',
            },
            {
              id: 'due',
              label: 'Due date',
              operator: 'is before',
              value: 'today',
            },
          ],
          id: 'overdue',
          label: 'Overdue',
        },
        {
          filters: [
            {
              id: 'status',
              label: 'Status',
              operator: 'is',
              value: 'paid',
            },
          ],
          id: 'paid',
          label: 'Paid',
        },
      ]}
    />
  )
}
