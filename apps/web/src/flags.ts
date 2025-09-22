import { flag } from 'flags/next'

export const devmode = flag({
  decide() {
    return false
  },
  description: 'Enable devmode features',
  key: 'devmode',
})

export const showWork = flag({
  decide() {
    return false
  },
  description: 'Enable the /work pages',
  key: 'work',
})
