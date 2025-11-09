import { faker } from '@faker-js/faker'

import type { InvoiceRow } from './model'

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
