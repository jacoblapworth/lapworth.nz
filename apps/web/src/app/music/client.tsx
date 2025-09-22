import packageJson from 'package.json'
import { useEffect, useState } from 'react'

const isDebug = process.env.NODE_ENV !== 'production'

const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_PRODUCTION_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_VERCEL_URL

export function useAppleMusic(developerToken: string) {
  const [client, setClient] = useState<MusicKit.MusicKitInstance>()

  useEffect(() => {
    const handleMusicKitLoaded = () => {
      const instance = MusicKit.configure({
        app: {
          debug: isDebug,
          icon: `${BASE_URL}/static/jacob-icon.png`,
          name: 'Lapworth.nz',
          suppressErrorDialog: !isDebug,
          version: packageJson.version,
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
