import { getPlaiceholder } from 'plaiceholder'
import * as z from 'zod'

export const OkuSourceSchema = z.enum(['gbooks', 'gdreads', 'recs'])
export type OkuSource = z.infer<typeof OkuSourceSchema>

export const RatingSchema = z.object({
  count: z.number(),
  max_score: z.union([z.number(), z.null()]),
  score: z.number(),
  source: OkuSourceSchema,
  updated: z.coerce.date(),
})

export type OkuRating = z.infer<typeof RatingSchema>

export const OkuPurchaseLinkSchema = z.object({
  store: z.string(),
  url: z.string(),
})

export type OkuPurchaseLink = z.infer<typeof OkuPurchaseLinkSchema>

export const OkuImageLinksSchema = z.object({
  thumbnail: z.string().url(),
})

export type OkuImageLinks = z.infer<typeof OkuImageLinksSchema>

export const OkuAuthorSchema = z.object({
  id: z.number(),
  image_url: z.string(),
  name: z.string(),
})

export type OkuAuthor = z.infer<typeof OkuAuthorSchema>

export const OkuBookSchema = z.object({
  addedAt: z.string(),
  authors: z.array(OkuAuthorSchema),
  description: z.string(),
  descriptionMd: z.string(),
  id: z.string(),
  imageLinks: OkuImageLinksSchema,
  isbn10: z.string(),
  isbn13: z.string(),
  language: z.string(),
  pageCount: z.number(),
  publishedDate: z.string(),
  purchaseLinks: z.array(OkuPurchaseLinkSchema),
  ratings: z.array(RatingSchema),
  slug: z.string(),
  subtitle: z.string(),
  thumbnail: z.string().url(),
  title: z.string(),
  workId: z.string(),
})

export type OkuBook = z.infer<typeof OkuBookSchema>

export const OkuReadingSchema = z.object({
  blurb: z.string(),
  books: z.array(z.unknown()),
  createdAt: z.coerce.date(),
  id: z.string(),
  key: z.string(),
  listId: z.string(),
  name: z.string(),
  slug: z.string(),
  visibility: z.string(),
})

export type OkuReading = z.infer<typeof OkuReadingSchema>

export interface OkuBookWithThumbnail extends OkuBook {
  placeholder: string
}

const baseUrl = 'https://oku.club/api'

export async function getReading(): Promise<OkuBook[]> {
  const response = await fetch(
    `${baseUrl}/collections/user/jacoblapworth/reading`,
  )

  const { books } = OkuReadingSchema.parse(await response.json())

  const validBooks = books.filter(
    (book) => OkuBookSchema.safeParse(book).success,
  ) as OkuBook[]

  return validBooks
}

export async function getImgBuffer(src: string): Promise<Buffer> {
  const response = await fetch(src)
  const arrayBuffer = await response.arrayBuffer()

  return Buffer.from(arrayBuffer)
}

export async function getBookWithThumbnail(
  book: OkuBook,
): Promise<OkuBookWithThumbnail> {
  const src = book.imageLinks.thumbnail

  if (src.length === 0) {
    return { ...book, placeholder: '' }
  }

  const image = await getImgBuffer(src)
  const placeholder = await getPlaiceholder(image)

  return { ...book, placeholder: placeholder.base64 }
}

export async function getReadingWithThumbnails(): Promise<
  OkuBookWithThumbnail[]
> {
  const books = await getReading()

  return Promise.all(books.map(getBookWithThumbnail))
}
