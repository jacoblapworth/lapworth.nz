import { useEffect, useState } from 'react'

export const mapAuthorizationStatus = (status: number) => {
  switch (status) {
    case 1:
      return 'DENIED'
    case 2:
      return 'RESTRICTED'
    case 3:
      return 'AUTHORIZED'
    default:
      return 'NOT_DETERMINED'
  }
}

export const useAppleMusic = (developerToken: string) => {
  const [client, setClient] = useState<MusicKit.MusicKitInstance>()

  useEffect(() => {
    const handleMusicKitLoaded = () => {
      const instance = MusicKit.configure({
        developerToken,
        app: {
          name: 'Lapworth.nz',
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
