import { useEffect, useState } from 'react'

import packageJson from 'package.json'

const isDebug = process.env.NODE_ENV != 'production'

export const useAppleMusic = (developerToken: string) => {
  const [client, setClient] = useState<MusicKit.MusicKitInstance>()

  useEffect(() => {
    const handleMusicKitLoaded = () => {
      const instance = MusicKit.configure({
        developerToken,
        app: {
          name: 'Lapworth.nz',
          version: packageJson.version,
          suppressErrorDialog: !isDebug,
          debug: isDebug,
          icon: `${process.env.NEXT_PUBLIC_VERCEL_URL}/static/jacob-icon.png`,
        },
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
