import { FC } from 'react'

import { GetStaticProps } from 'next'

import { createAppleJWT } from '@/components/Music'
import { useAppleMusic } from '@/components/Music/musicHook'

interface PageProps {
  developerToken: string
}

export default function Home({ developerToken }: PageProps) {
  const appleMusic = useAppleMusic(developerToken)

  const musicUserToken = appleMusic?.musicUserToken
  if (!musicUserToken) {
    appleMusic?.unauthorize()
    appleMusic?.authorize()
  }

  console.log({ musicUserToken })

  return null
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const developerToken = await createAppleJWT()
  return {
    props: {
      developerToken,
    },
  }
}
