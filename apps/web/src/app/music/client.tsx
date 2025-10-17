import { useEffect, useState } from 'react'

const isDebug = process.env.NODE_ENV !== 'production'

const BASE_URL = (() => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
      return `https://${process.env.NEXT_PUBLIC_PRODUCTION_URL}`
    case 'preview':
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    case 'development':
      return process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
    default:
      return process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
  }
})()

export function useAppleMusic(developerToken: string) {
  const [client, setClient] = useState<MusicKit.MusicKitInstance>()

  useEffect(() => {
    const handleMusicKitLoaded = () => {
      const instance = MusicKit.configure({
        app: {
          debug: isDebug,
          icon: `${BASE_URL}/jacob-icon.png`,
          name: 'Lapworth.nz',
          suppressErrorDialog: !isDebug,
          version: '1',
        },
        developerToken,
      })

      setClient(instance)
    }

    if (typeof document !== 'undefined') {
      document.addEventListener('musickitloaded', handleMusicKitLoaded)
    }

    return () => {
      document.removeEventListener('musickitloaded', handleMusicKitLoaded)
    }
  }, [developerToken])

  return client
}
