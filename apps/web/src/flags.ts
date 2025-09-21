import { flag } from 'flags/next'

export const devmode = flag({
  key: 'devmode',
  description: 'Enable devmode features',
  decide() {
    return false
  },
})
