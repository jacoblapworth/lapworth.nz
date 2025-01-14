'use client'
import { useEffect, useState } from 'react'

import * as Sentry from '@sentry/nextjs'
import NextScript from 'next/script'

import { TextInput } from '@/components/TextInput'

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
        setAuthorisation({ state: 'error', error: 'Failed to authorize' })

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
  }, [client, setAuthorisation])

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
        value={
          authorisation.state === 'authorized' ? authorisation.userToken : ''
        }
        readOnly
      />
    </>
  )
}
