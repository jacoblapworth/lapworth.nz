'use client'
import { useEffect, useState } from 'react'

import * as Sentry from '@sentry/nextjs'
import NextScript from 'next/script'

import { useAppleMusic } from '@/components/Hooks/useAppleMusic'
import { TextInput } from '@/components/TextInput'

type State =
  | {
      state: 'authorizing'
    }
  | {
      state: 'authorized'
      userToken: string
    }
  | {
      state: 'error'
      error: string
    }

interface Props {
  developerToken: string
}

export default function Authorise({ developerToken }: Props) {
  const appleMusic = useAppleMusic(developerToken)
  const [state, setState] = useState<State>({ state: 'authorizing' })

  useEffect(() => {
    const authorize = async () => {
      const userToken = await appleMusic?.authorize()
      if (!userToken) {
        setState({ state: 'error', error: 'Failed to authorize' })
        return
      }

      console.log('Apple Music user token: ', userToken)
      setState({ state: 'authorized', userToken })
    }

    authorize().catch((error) => {
      Sentry.captureException(error)
      console.error(error)
    })
  }, [appleMusic, setState])

  const value = state.state === 'authorized' ? state.userToken : ''

  return (
    <>
      <NextScript src="https://js-cdn.music.apple.com/musickit/v1/musickit.js" />
      <TextInput label="Apple Music User Token" value={value} readOnly />
    </>
  )
}
