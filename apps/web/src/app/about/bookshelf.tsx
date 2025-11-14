import { Carousel } from '@/components/carousel'
import { CarouselItem } from './carousel-item'
import { getReadingWithThumbnails } from './oku'

export async function Bookshelf() {
  const books = await getReadingWithThumbnails()

  if (!books) {
    return null
  }

  return (
    <Carousel
      items={books}
      renderItem={(item) => (
        <CarouselItem
          alt={`Book cover for "${item.title}"`}
          href={`https://oku.club/book/${item.slug}`}
          key={item.id}
          subtitle={item.subtitle}
          thumbnail={item.thumbnail}
          title={item.title}
        />
      )}
      title="Bookshelf"
    />
  )
}
