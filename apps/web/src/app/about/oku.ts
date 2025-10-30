import { cacheLife, cacheTag } from 'next/cache'
import type { StaticImageData } from 'next/image'
import * as z from 'zod'
import { getImageMetadata } from './image'

export const OkuSource = z.enum(['gbooks', 'gdreads', 'recs', 'isbndb'])
export type OkuSource = z.infer<typeof OkuSource>

export const OkuRating = z.object({
  count: z.number(),
  max_score: z.number().nullable(),
  score: z.number(),
  source: OkuSource,
  updated: z.coerce.date(),
})

export type OkuRating = z.infer<typeof OkuRating>

export const OkuPurchaseLink = z.object({
  store: z.string(),
  url: z.string(),
})

export type OkuPurchaseLink = z.infer<typeof OkuPurchaseLink>

export const OkuImageLinks = z.object({
  thumbnail: z.url(),
})

export type OkuImageLinks = z.infer<typeof OkuImageLinks>

export const OkuAuthor = z.object({
  id: z.number(),
  image_url: z.string(),
  name: z.string(),
})

export type OkuAuthor = z.infer<typeof OkuAuthor>

export const OkuBook = z.object({
  addedAt: z.coerce.date(),
  authors: z.array(OkuAuthor),
  description: z.string().nullish().default(''),
  descriptionMd: z.string().nullish().default(''),
  id: z.string(),
  imageLinks: OkuImageLinks,
  isbn10: z.string().nullish(),
  isbn13: z.string().nullish(),
  language: z.string(),
  pageCount: z.number(),
  publishedDate: z.coerce.date(),
  purchaseLinks: z.array(OkuPurchaseLink),
  ratings: z.array(OkuRating),
  slug: z.string(),
  subtitle: z.string().nullish().default(''),
  thumbnail: z.url(),
  title: z.string(),
  workId: z.string().nullish(),
})

export type OkuBook = z.infer<typeof OkuBook>

export function isBook(object: unknown): object is OkuBook {
  return OkuBook.safeParse(object).success
}

export const OkuCollection = z.object({
  blurb: z.string(),
  books: z.array(OkuBook),
  createdAt: z.coerce.date(),
  id: z.string(),
  key: z.string(),
  listId: z.string(),
  name: z.string(),
  slug: z.string(),
  visibility: z.string(),
})

export type OkuCollection = z.infer<typeof OkuCollection>

export interface OkuBookWithThumbnail extends Omit<OkuBook, 'thumbnail'> {
  thumbnail: string | StaticImageData
}

/** Cache for 24 hours */
const defaultRevalidate = 60 * 60 * 24
const baseUrl = 'https://oku.club/api'
const fetchOptions = {
  next: {
    cache: 'force-cache',
    revalidate: defaultRevalidate,
  },
}

export async function getCollection(user: string, collection: string) {
  const path = `${baseUrl}/collections/user/${encodeURIComponent(user)}/${encodeURIComponent(collection)}`
  const response = await fetch(path, fetchOptions)

  if (!response.ok) {
    throw new Error(
      `Failed to fetch collection "${collection}" for user "${user}": ${response.status} ${response.statusText}`,
    )
  }

  return OkuCollection.parse(await response.json())
}

export async function getBookshelf(): Promise<OkuBook[]> {
  const { books: reading } = await getCollection('jacoblapworth', 'reading')
  const { books: read } = await getCollection('jacoblapworth', 'read')
  return [...reading, ...read]
    .sort((a, b) => b.addedAt.getTime() - a.addedAt.getTime())
    .slice(0, 20)
}

export async function getBookWithThumbnail(
  book: OkuBook,
): Promise<OkuBookWithThumbnail> {
  const src = book.imageLinks.thumbnail

  if (!src || src.length === 0) {
    return book
  }

  try {
    const thumbnail = await getImageMetadata(src)

    return {
      ...book,
      thumbnail,
    }
  } catch (error) {
    console.error(
      `Failed to generate placeholder for book "${book.title}":`,
      error,
    )
    return book
  }
}

export async function getReadingWithThumbnails(): Promise<
  OkuBookWithThumbnail[]
> {
  'use cache'
  cacheLife('days')
  cacheTag('reading')
  const books = await getBookshelf()

  return Promise.all(books.map(getBookWithThumbnail))
}
