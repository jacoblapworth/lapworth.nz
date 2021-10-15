import Script from 'next/script'

import { createAppleJWT, getMusic, MusicKitResource } from '@/components/Music'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useAppleMusic } from '@/components/Music/musicHook'
import { FC } from 'react'

interface PageProps {
  developerToken: string
  music: MusicKitResource[]
}

const AppleMusicResource: FC<{ resource: MusicKitResource }> = ({
  resource,
}) => {
  const size = 124
  const { name } = resource.attributes
  const src = resource.attributes.artwork.url.replace(
    '{w}x{h}',
    `${size * 2}x${size * 2}`,
  )
  return (
    <div>
      <Image
        alt={`Album artwork for "${name}"`}
        src={src}
        width={size}
        height={size}
      />
    </div>
  )
}

export default function Home({ developerToken, music }: PageProps) {
  const appleMusic = useAppleMusic(developerToken)

  const musicUserToken = appleMusic?.musicUserToken
  if (!musicUserToken) {
    appleMusic?.unauthorize()
    appleMusic?.authorize()
  }
  console.log({ music, musicUserToken })

  const Music = music.map((item) => (
    <AppleMusicResource key={item.id} resource={item} />
  ))

  return (
    <div>
      Heavy rotation
      {Music}
      <Script src="https://js-cdn.music.apple.com/musickit/v1/musickit.js" />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const music = await getMusic()
  console.log({ music })

  const developerToken = await createAppleJWT()
  return {
    props: {
      music,
      developerToken,
    },
  }
}
