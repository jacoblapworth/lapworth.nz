import { faker } from '@faker-js/faker'

import type { InvoiceRow } from './model'

// export const initialData: InvoiceRow[] = [
//   {
//     amountDue: 1000,
//     amountPaid: 0,
//     contact: {
//       name: 'Acme Corp',
//     },
//     date: '2023-10-01',
//     dueDate: '2023-10-15',
//     invoiceID: 'inv_1',
//     invoiceNumber: 'INV-001',
//     notes: ['First note', 'Second note'],
//     number: '1',
//     status: 'draft',
//   },
//   {
//     amountDue: 2000,
//     amountPaid: 500,
//     contact: {
//       name: 'Beta LLC',
//     },
//     date: '2023-09-15',
//     dueDate: '2023-09-30',
//     invoiceID: 'inv_2',
//     invoiceNumber: 'INV-002',
//     notes: ['Urgent'],
//     number: '2',
//     status: 'sent',
//   },
//   {
//     amountDue: 1500,
//     amountPaid: 1500,
//     contact: {
//       name: 'Gamma Inc',
//     },
//     date: '2023-08-20',
//     dueDate: '2023-09-05',
//     invoiceID: 'inv_3',
//     invoiceNumber: 'INV-003',
//     notes: [],
//     number: '3',
//     status: 'paid',
//   },
// ]

function createInvoiceRow(seed?: number, index?: number): InvoiceRow {
  if (seed) {
    faker.seed(seed)
  }

  return {
    amountDue: faker.number.int({ max: 5000, min: 1000 }),
    amountPaid: faker.number.int({ max: 5000, min: 0 }),
    contact: {
      name: faker.company.name(),
    },
    date: faker.date.past(),
    dueDate: faker.date.future(),
    invoiceID: faker.string.uuid(),
    invoiceNumber: `INV-${String(index).padStart(3, '0')}`,
    notes: [faker.lorem.sentence(), faker.lorem.sentence()],
    number: String(seed ?? faker.number.int()),
    status: faker.helpers.arrayElement(['draft', 'sent', 'paid']),
  }
}

export const initialData = Array.from({ length: 100 }).map((_, i) =>
  createInvoiceRow(i + 1, i),
)
