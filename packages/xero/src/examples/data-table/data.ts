import { faker } from '@faker-js/faker'

import type { InvoiceRow } from './model'

function createInvoiceRow(seed?: number, index?: number): InvoiceRow {
  if (seed) {
    faker.seed(seed)
  }

  const amountDue = faker.number.int({ max: 5000, min: 1000 })
  const status = faker.helpers.arrayElement(['draft', 'sent', 'paid'])
  const amountPaid =
    status === 'paid'
      ? amountDue
      : status === 'draft'
        ? 0
        : faker.number.int({ max: amountDue, min: 0 })

  return {
    amountDue,
    amountPaid,
    contact: {
      name: faker.company.name(),
    },
    date: faker.date.past(),
    dueDate: faker.date.future(),
    invoiceID: faker.string.uuid(),
    invoiceNumber: `INV-${String(index).padStart(3, '0')}`,
    notes: [faker.lorem.sentence(), faker.lorem.sentence()],
    number: String(seed ?? faker.number.int()),
    status,
  }
}

export const initialData = Array.from({ length: 100 }).map((_, i) =>
  createInvoiceRow(i + 1, i),
)
