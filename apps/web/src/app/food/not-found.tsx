import type { Metadata } from 'next'
import { NotFound } from '@/components/not-found'

export const metadata: Metadata = {
  title: '404',
}

export default function Page() {
  return (
    <NotFound
      action={{
        href: '/food',
        label: 'Back to recipes',
      }}
      description="Can’t find this recipe"
      title="You’ve found a lemon 🍋"
    />
  )
}
