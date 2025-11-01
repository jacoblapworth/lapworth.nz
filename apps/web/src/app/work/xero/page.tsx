import { Text } from '@/components/text'
import { enableDrafts } from '@/flags'
import { getWork } from '../work'
import { WorkList } from '../work-list'
import { Background } from './background'

export default async function Page() {
  const isPreview = await enableDrafts()
  const work = await getWork()

  return (
    <>
      <Background />
      <Text as="h1" display size="lg">
        Xero
      </Text>
      <Text display size="md">
        Design system for beautiful business
      </Text>
      <p>
        XUI (Xero User Interface) is the design system at Xero used by 200
        designers and 800 engineers to create #beautiful, accessible,
        predictable and modern experiences for all 3.5 million Xero users.
      </p>
      <WorkList
        work={work
          .filter(({ draft }) => (isPreview ? true : !draft))
          .filter(({ category }) => category === 'xero')}
      />
    </>
  )
}
