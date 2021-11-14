import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import NextScript from 'next/script'

import { createAppleJWT } from '@/components/Music'
import { useAppleMusic } from '@/components/Music/musicHook'

interface PageProps {
  developerToken: string
}

export default function Authorise({ developerToken }: PageProps) {
  const appleMusic = useAppleMusic(developerToken)
  const musicUserToken = appleMusic?.musicUserToken

  if (!musicUserToken) {
    appleMusic?.authorize()
  } else {
    console.log({ musicUserToken })
  }

  return (
    <>
      <NextSeo noindex={true} />
      <NextScript src="https://js-cdn.music.apple.com/musickit/v1/musickit.js" />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const developerToken = await createAppleJWT()
  return {
    props: {
      developerToken,
    },
  }
}
