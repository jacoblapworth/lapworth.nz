import { useEffect } from 'react'

export function useWelcomeLog() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      console.info(`
     ,            /)
       _   _  ___(/_
    /_(_(_(__(_)/_)
 .-/
(_/

j's kōpaki — portfolio

`)
    }
  }, [])
}
