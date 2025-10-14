import { z } from 'zod/v4'

export const InvoiceStatus = z.enum([
  'draft',
  'sent',
  'viewed',
  'paid',
  'overdue',
])

export type InvoiceStatus = z.infer<typeof InvoiceStatus>

export const InvoiceRow = z.object({
  amountDue: z.number(),
  amountPaid: z.number(),
  contact: z.object({
    name: z.string(),
  }),
  date: z.date(),
  dueDate: z.date(),
  invoiceID: z.string(),
  invoiceNumber: z.string(),
  notes: z.array(z.string()),
  number: z.string(),
  status: InvoiceStatus,
})

export type InvoiceRow = z.infer<typeof InvoiceRow>

export function getInvoiceStatus(status: InvoiceStatus): {
  label: string
  sentiment: 'positive' | 'negative' | 'neutral' | 'inform' | 'warning'
} {
  switch (status) {
    case 'draft':
      return {
        label: 'Draft',
        sentiment: 'warning',
      }
    case 'sent':
      return {
        label: 'Sent',
        sentiment: 'neutral',
      }
    case 'viewed':
      return {
        label: 'Viewed',
        sentiment: 'neutral',
      }
    case 'paid':
      return {
        label: 'Paid',
        sentiment: 'positive',
      }
    case 'overdue':
      return {
        label: 'Overdue',
        sentiment: 'negative',
      }
  }
}
