'use client'
import { useEffect } from 'react'

import NextScript from 'next/script'

import { useAppleMusic } from '@/components/Hooks/useAppleMusic'

interface Props {
  developerToken: string
}

export default function Authorise({ developerToken }: Props) {
  const appleMusic = useAppleMusic(developerToken)

  useEffect(() => {
    const authorize = async () => {
      const userToken = await appleMusic?.authorize()
      userToken && console.log('Apple Music user token:', userToken)
    }

    authorize().catch(console.error)
  }, [appleMusic])

  return (
    <NextScript src="https://js-cdn.music.apple.com/musickit/v1/musickit.js" />
  )
}
