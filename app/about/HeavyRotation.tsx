'use client'

import NextImage from 'next/image'

import { MusicKitResource } from '@/app/about/music'
import { Link } from '@/components/Link'
import { Text } from '@/components/Typography'
import { styled } from '@/styled-system/jsx'

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
    marginBlockEnd: 4,
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

const AlbumLink = styled(Link, {
  base: {
    _hover: {
      // [`& ${AlbumArt}`]: {
      //   opacity: 0.8,
      // },
    },
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
    <AlbumLink href={resource.attributes.url} className="group">
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
    </AlbumLink>
  )
}

const Grid = styled('div', {
  base: {
    display: 'grid',
    gridAutoColumns: 128,
    gridAutoRows: 'auto',
    gridAutoFlow: 'column',
    gap: 16,
    overflowX: 'scroll',
    overflowY: 'visible',
    marginInline: -16,
    paddingBlock: 16,
    paddingInline: 16,
    alignItems: 'start',
  },
})

interface HeavyRotationProps {
  music: MusicKitResource[]
}

export const HeavyRotation = ({ music }: HeavyRotationProps) => {
  if (music.length === 0) {
    return null
  }

  const Music = music.map((item) => (
    <AppleMusicResource key={item.id} resource={item} />
  ))

  return (
    <div>
      <Text as="h2" size="large" display>
        Currently vibing to
      </Text>
      <Grid>{Music}</Grid>
    </div>
  )
}
