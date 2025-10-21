import { flag } from 'flags/next'
import { cookies } from 'next/headers'
import { env } from '@/lib/env'

async function identify() {
  const jar = await cookies()
  const { value } = jar.get(`ph_${env.NEXT_PUBLIC_POSTHOG_KEY}_posthog`) || {}

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
  key: 'devmode',
})

export const showWork = flag({
  decide: () => true,
  defaultValue: true,
  description: 'Show work pages',
  identify,
  key: 'enable-work',
})

export const enableFood = flag({
  decide: () => true,
  defaultValue: true,
  description: 'Show food pages',
  identify,
  key: 'enable-food',
})

export const enableDrafts = flag({
  decide: () => false,
  defaultValue: false,
  description: 'Show draft articles',
  identify,
  key: 'enable-drafts',
})
