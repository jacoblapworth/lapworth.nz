import { useEffect, useState } from 'react'

import { config } from '@/lib/constants'

export const useAppleMusic = (developerToken: string) => {
  const [client, setClient] = useState<MusicKit.MusicKitInstance>()

  useEffect(() => {
    const handleMusicKitLoaded = () => {
      MusicKit.configure({
        developerToken,
        app: {
          name: 'Lapworth.nz',
          icon: `${config.VERCEL_URL}/static/jacob-icon.png`,
        },
      })

      setClient(MusicKit.getInstance())
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
