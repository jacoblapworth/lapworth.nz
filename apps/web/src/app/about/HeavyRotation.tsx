'use client'

import NextImage from 'next/image'

import type { MusicKitResource } from '@/app/about/music'
import { Carousel } from '@/components/Carousel'
import { Link } from '@/components/Link'
import { styled } from '@/styled/jsx'

export const buildImageUrl = (_url: string, size: number): string => {
  const url = decodeURI(_url)
  const src = url.replace('{w}x{h}', `${size * 2}x${size * 2}`)

  return src
}

const AlbumArt = styled(NextImage, {
  base: {
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
  },
})

const Label = styled('div', {
  base: {
    display: 'inline',
    wordWrap: 'break-word',
  },
  variants: {
    variant: {
      primary: {
        color: 'primary',
        fontSize: 'md',
      },
      secondary: {
        color: 'tertiary',
        fontSize: 'sm',
      },
    },
  },
})

const Stack = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
})

interface AppleMusicResourceProps {
  resource: MusicKitResource
}

const AppleMusicResource = ({ resource }: AppleMusicResourceProps) => {
  const { name, artistName } = resource.attributes

  const size = 128
  const src = buildImageUrl(resource.attributes.artwork.url, size)

  return (
    <Link className="group" href={resource.attributes.url}>
      <Stack>
        <AlbumArt
          alt={`Album artwork for "${name}"`}
          blurDataURL={resource.attributes.placeholder}
          htmlHeight={size}
          htmlWidth={size}
          placeholder="blur"
          quality={75}
          src={src}
        />
        <Label variant="primary">{name}</Label>
        <Label variant="secondary">{artistName}</Label>
      </Stack>
    </Link>
  )
}

interface HeavyRotationProps {
  music: MusicKitResource[]
}

export const HeavyRotation = ({ music }: HeavyRotationProps) => {
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
