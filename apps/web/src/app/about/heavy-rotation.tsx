import { getMusicWithThumbnails } from '@/app/about/apple-music'
import { Carousel } from '@/components/carousel'
import { CarouselItem } from './carousel-item'

export async function HeavyRotation() {
  const music = await getMusicWithThumbnails()

  if (!music) {
    return null
  }

  return (
    <Carousel
      items={music}
      renderItem={(item) => (
        <CarouselItem
          alt={`Album artwork for "${item.attributes.name}"`}
          href={item.attributes.url}
          key={item.id}
          subtitle={item.attributes.artistName}
          thumbnail={item.thumbnail}
          title={item.attributes.name}
        />
      )}
      title="Currently vibing to"
    />
  )
}
