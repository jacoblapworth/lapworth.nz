import { getPlaiceholder } from 'plaiceholder'
import * as z from 'zod'

export const OkuSourceSchema = z.enum(['gbooks', 'gdreads', 'recs'])
export type OkuSource = z.infer<typeof OkuSourceSchema>

export const RatingSchema = z.object({
  source: OkuSourceSchema,
  score: z.number(),
  max_score: z.union([z.number(), z.null()]),
  count: z.number(),
  updated: z.coerce.date(),
})

export type OkuRating = z.infer<typeof RatingSchema>

export const OkuPurchaseLinkSchema = z.object({
  store: z.string(),
  url: z.string(),
})

export type OkuPurchaseLink = z.infer<typeof OkuPurchaseLinkSchema>

export const OkuImageLinksSchema = z.object({
  thumbnail: z.string(),
})

export type OkuImageLinks = z.infer<typeof OkuImageLinksSchema>

export const OkuAuthorSchema = z.object({
  id: z.number(),
  name: z.string(),
  image_url: z.string(),
})

export type OkuAuthor = z.infer<typeof OkuAuthorSchema>

export const OkuBookSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  publishedDate: z.string(),
  isbn10: z.string(),
  isbn13: z.string(),
  description: z.string(),
  descriptionMd: z.string(),
  pageCount: z.number(),
  language: z.string(),
  imageLinks: OkuImageLinksSchema,
  purchaseLinks: z.array(OkuPurchaseLinkSchema),
  authors: z.array(OkuAuthorSchema),
  ratings: z.array(RatingSchema),
  thumbnail: z.string(),
  slug: z.string(),
  workId: z.string(),
  addedAt: z.string(),
})

export type OkuBook = z.infer<typeof OkuBookSchema>

export const OkuReadingSchema = z.object({
  id: z.string(),
  listId: z.string(),
  books: z.array(OkuBookSchema),
  createdAt: z.coerce.date(),
  key: z.string(),
  slug: z.string(),
  blurb: z.string(),
  name: z.string(),
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

  return books
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
