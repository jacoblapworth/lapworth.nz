'use client'

import * as Sentry from '@sentry/nextjs'

import NextScript from 'next/script'
import { useEffect, useState } from 'react'

import { TextInput } from '@/components/text-input'

import { useAppleMusic } from '../client'

type Authorisation =
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

export function useAppleMusicAuthorisation({
  client,
}: {
  client?: MusicKit.MusicKitInstance
}): Authorisation {
  const [authorisation, setAuthorisation] = useState<Authorisation>({
    state: 'authorizing',
  })

  useEffect(() => {
    const authorize = async () => {
      const userToken = await client?.authorize()
      if (!userToken) {
        setAuthorisation({ error: 'Failed to authorize', state: 'error' })

        return
      }

      console.log('Apple Music user token: ', userToken)
      setAuthorisation({ state: 'authorized', userToken })
    }

    try {
      authorize()
    } catch (error) {
      Sentry.captureException(error)
      console.error(error)
    }
  }, [client])

  return authorisation
}

interface Props {
  developerToken: string
}

export function Authorise({ developerToken }: Props) {
  const client = useAppleMusic(developerToken)
  const authorisation = useAppleMusicAuthorisation({ client })

  return (
    <>
      <NextScript src="https://js-cdn.music.apple.com/musickit/v1/musickit.js" />
      <TextInput
        label="Apple Music User Token"
        readOnly
        value={
          authorisation.state === 'authorized' ? authorisation.userToken : ''
        }
      />
    </>
  )
}
