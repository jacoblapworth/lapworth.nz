import { postHogAdapter } from '@flags-sdk/posthog'
import { flag } from 'flags/next'
import { cookies } from 'next/headers'

async function identify() {
  const jar = await cookies()
  const { value } =
    jar.get(`ph_${process.env.NEXT_PUBLIC_POSTHOG_KEY}_posthog`) || {}

  if (!value) {
    return {
      distinctId: 'anonymous',
    }
  }

  const { distinct_id } = JSON.parse(value) as { distinct_id: string } //TODO: confirm shape

  return {
    distinctId: distinct_id || 'anonymous',
  }
}

export const devmode = flag({
  decide: () => false,
  defaultValue: false,
  description: 'Enable devmode features',
  identify,
  key: 'devmode',
})

export const showWork = flag({
  decide: () => true,
  defaultValue: true,
  identify,
  key: 'enable-work',
})

export const enableFood = flag({
  decide: () => true,
  defaultValue: true,
  identify,
  key: 'enable-food',
})

export const enableDrafts = flag({
  decide: () => false,
  defaultValue: false,
  identify,
  key: 'enable-drafts',
})
