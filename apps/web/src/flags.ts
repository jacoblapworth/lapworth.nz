import { flag } from 'flags/next'

export const devmode = flag({
  key: 'devmode',
  description: 'Enable devmode features',
  decide() {
    return false
  },
})

export const showWork = flag({
  key: 'work',
  description: 'Enable the /work pages',
  decide() {
    return false
  },
})
