import NextImage from 'next/image'
import {
  getMusicWithThumbnails,
  type MusicKitResource,
} from '@/app/about/music'
import { Carousel, Label } from '@/components/carousel'
import { Link } from '@/components/link'
import { css } from '@/styled/css'
import { VStack } from '@/styled/jsx'

export const buildImageUrl = (src: string, size: number): string => {
  const url = decodeURI(src)
  return url.replace('{w}x{h}', `${size * 2}x${size * 2}`)
}

interface AppleMusicResourceProps {
  resource: MusicKitResource
}

function AppleMusicResource({ resource }: AppleMusicResourceProps) {
  const { name, artistName } = resource.attributes

  const size = 128
  const src = buildImageUrl(resource.attributes.artwork.url, size)

  return (
    <Link className="group" href={resource.attributes.url}>
      <VStack
        alignItems="start"
        gap="xs"
        maxWidth="100%"
        minWidth={0}
        overflow="hidden"
        overflowWrap="break-word"
      >
        <NextImage
          alt={`Album artwork for "${name}"`}
          blurDataURL={resource.attributes.placeholder}
          className={css({
            _groupHover: {
              opacity: 0.8,
            },
            _hover: {
              opacity: 0.8,
            },
            backgroundColor: 'surface',
            borderRadius: 'md',
            marginBlockEnd: 'xsm',
            overflow: 'hidden',
            willChange: 'transform',
          })}
          height={size}
          placeholder="blur"
          quality={75}
          src={src}
          width={size}
        />
        <Label variant="primary">{name}</Label>
        <Label variant="secondary">{artistName}</Label>
      </VStack>
    </Link>
  )
}

export async function HeavyRotation() {
  const music = await getMusicWithThumbnails()

  if (!music) {
    return null
  }

  return (
    <Carousel
      items={music}
      renderItem={(item) => (
        <AppleMusicResource key={item.id} resource={item} />
      )}
      title="Currently vibing to"
    />
  )
}
