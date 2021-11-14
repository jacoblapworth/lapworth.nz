import { FC, useEffect, useState } from 'react'

import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import NextScript from 'next/script'

import { createAppleJWT } from '@/components/Music'
import { useAppleMusic } from '@/components/Music/musicHook'

interface PageProps {
  developerToken: string
}

export default function Home({ developerToken }: PageProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const appleMusic = useAppleMusic(developerToken)

  if (!mounted) return null

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

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const developerToken = await createAppleJWT()
  return {
    props: {
      developerToken,
    },
  }
}
