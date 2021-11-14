import { FC } from 'react'

import { GetStaticProps } from 'next'
import NextImage from 'next/image'
import NextLink from 'next/link'

import { getMusic, MusicEndpoint, MusicKitResource } from '@/components/Music'
import { styled } from '@/styles'

interface PageProps {
  music: MusicKitResource[]
}

const buildImageUrl = (_url: string, size: number): string => {
  const url = decodeURI(_url)
  const src = url.replace('{w}x{h}', `${size * 2}x${size * 2}`)
  const proxiedSrc = `https://image-proxy.lapworth.workers.dev/?url=${encodeURIComponent(
    src,
  )}`

  return proxiedSrc
}

const AlbumArt = styled(NextImage, {
  borderRadius: 8,
  backgroundColor: '$surface',
})

const AppleMusicResource: FC<{ resource: MusicKitResource }> = ({
  resource,
}) => {
  const { name, artistName } = resource.attributes

  const size = 128
  const src = buildImageUrl(resource.attributes.artwork.url, size)

  const Label = styled('div', {
    display: 'inline',
    wordWrap: 'break-word',
    variants: {
      variant: {
        primary: {
          fontSize: '$md',
          color: '$primary',
        },
        secondary: {
          fontSize: '$sm',
          color: '$tertiary',
        },
      },
    },
  })

  const Stack = styled('div', {
    display: 'flex',
    flexDirection: 'column',
  })

  return (
    <a href={resource.attributes.url}>
      <Stack>
        <AlbumArt
          alt={`Album artwork for "${name}"`}
          src={src}
          width={size}
          height={size}
          quality={100}
        />
        <Label variant="primary">{name}</Label>
        <Label variant="secondary">{artistName}</Label>
      </Stack>
    </a>
  )
}

export default function Home({ music }: PageProps) {
  const Music = music.map((item) => (
    <AppleMusicResource key={item.id} resource={item} />
  ))

  const Grid = styled('div', {
    display: 'grid',
    gridAutoColumns: 128,
    gridAutoRows: 'auto',
    gridAutoFlow: 'column',
    gap: 16,
    overflowX: 'scroll',
    marginInline: -16,
    paddingBlockEnd: 16,
    paddingInline: 16,
  })

  return (
    <div>
      <h2>Heavy rotation</h2>
      <Grid>{Music}</Grid>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const music = await getMusic(MusicEndpoint.RECENT)

  return {
    props: {
      music,
    },
  }
}
