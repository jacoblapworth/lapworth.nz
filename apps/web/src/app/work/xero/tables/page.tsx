'use client'

import { CheckboxProvider } from '@ariakit/react'
import {
  type ColumnFiltersState,
  type ColumnPinningState,
  createColumnHelper,
  type SortingState,
} from '@tanstack/react-table'
import { useState } from 'react'
import { Table, useTable } from '@/components/Table'
import { Checkbox } from '@/components/Table/Checkbox'
import { Tag } from '@/components/Table/Tag'

type InvoiceRow = {
  number: string
  invoiceID: string
  contact: {
    name: string
  }
  status: string
  invoiceNumber: string
  date: string
  dueDate: string
  amountPaid: number
  amountDue: number
  notes: string[]
}

const columnHelper = createColumnHelper<InvoiceRow>()

const initialColumns = [
  columnHelper.display({
    cell: (ctx) => (
      <CheckboxProvider
        setValue={ctx.row.getToggleSelectedHandler()}
        value={ctx.row.getIsSelected()}
      >
        <Checkbox />
      </CheckboxProvider>
    ),
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
    // cell: (ctx) => {
    //   const value = ctx.cell.getValue()
    //   const tag = getInvoiceStatus(value)
    //   if (!tag) return null

    //   return <Tag sentiment={tag.sentiment}>{tag.label}</Tag>
    // },
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
  const [data] = useState<InvoiceRow[]>([
    {
      amountDue: 1000,
      amountPaid: 0,
      contact: {
        name: 'Acme Corp',
      },
      date: '2023-10-01',
      dueDate: '2023-10-15',
      invoiceID: 'inv_1',
      invoiceNumber: 'INV-001',
      notes: ['First note', 'Second note'],
      number: '1',
      status: 'draft',
    },
    {
      amountDue: 2000,
      amountPaid: 500,
      contact: {
        name: 'Beta LLC',
      },
      date: '2023-09-15',
      dueDate: '2023-09-30',
      invoiceID: 'inv_2',
      invoiceNumber: 'INV-002',
      notes: ['Urgent'],
      number: '2',
      status: 'sent',
    },
    {
      amountDue: 1500,
      amountPaid: 1500,
      contact: {
        name: 'Gamma Inc',
      },
      date: '2023-08-20',
      dueDate: '2023-09-05',
      invoiceID: 'inv_3',
      invoiceNumber: 'INV-003',
      notes: [],
      number: '3',
      status: 'paid',
    },
  ])

  const [columnOrder, onColumnOrderChange] = useState<string[]>([
    'select',
    'contact',
    'status',
    'invoiceNumber',
    'date',
    'dueDate',
    'amountPaid',
    'due',
    'notes',
    'add',
  ])

  const [sorting, onSortingChange] = useState<SortingState>([
    {
      desc: true,
      id: 'date',
    },
  ])
  const [columnFilters, onColumnFiltersChange] = useState<ColumnFiltersState>(
    [],
  )
  const [columnPinning, onColumnPinningChange] = useState<ColumnPinningState>({
    left: ['select', 'contact'],
    right: [],
  })

  const table = useTable<InvoiceRow>({
    columns,
    data,
    onColumnFiltersChange,
    onColumnOrderChange,
    onColumnPinningChange,
    onSortingChange,
    state: {
      columnFilters,
      columnOrder,
      columnPinning,
      sorting,
    },
  })

  return <Table table={table} />
}
