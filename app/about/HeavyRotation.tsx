'use client'

import NextImage from 'next/image'

import { styled } from 'styled/jsx'

import { MusicKitResource } from '@/app/about/music'
import { Carousel } from '@/components/Carousel'
import { Link } from '@/components/Link'

export const buildImageUrl = (_url: string, size: number): string => {
  const url = decodeURI(_url)
  const src = url.replace('{w}x{h}', `${size * 2}x${size * 2}`)

  return src
}

const AlbumArt = styled(NextImage, {
  base: {
    overflow: 'hidden',
    borderRadius: 'md',
    backgroundColor: 'surface',
    marginBlockEnd: 'xsm',
    willChange: 'transform',
    _groupHover: {
      opacity: 0.8,
    },
    _hover: {
      opacity: 0.8,
    },
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
        fontSize: 'md',
        color: 'primary',
      },
      secondary: {
        fontSize: 'sm',
        color: 'tertiary',
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
    <Link href={resource.attributes.url} className="group">
      <Stack>
        <AlbumArt
          alt={`Album artwork for "${name}"`}
          src={src}
          htmlWidth={size}
          htmlHeight={size}
          quality={100}
          placeholder="blur"
          blurDataURL={resource.attributes.placeholder}
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
      title="Currently vibing to"
      items={music}
      renderItem={(item) => (
        <AppleMusicResource key={item.id} resource={item} />
      )}
    />
  )
}
