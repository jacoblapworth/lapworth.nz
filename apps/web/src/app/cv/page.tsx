'use cache'

import type { Metadata } from 'next'
import { cacheLife } from 'next/cache'
import { LinkButton } from '@/components/button'
import { Link } from '@/components/link'
import { Text } from '@/components/text'
import { styled, VStack } from '@/styled/jsx'
import { experience } from './experience'
import { ExperienceListItem } from './experience-list-item'

const Container = styled('div', {
  base: {
    columnGap: 32,
    display: 'grid',
    md: {
      gridTemplateAreas: '"title details"',
      gridTemplateColumns: 'auto 1fr',
    },
    rowGap: 32,
  },
})

export const metadata: Metadata = {
  description: 'Lead product designer and design engineer',
  title: 'CV',
}

export default async function Page() {
  cacheLife('max')
  return (
    <Container>
      <VStack alignItems="start" gap={16} gridColumn="1/-1">
        <VStack alignItems="start" gap={0}>
          <Text as="h1" display size="xl">
            CV
          </Text>
          <Text size="lg">Jacob Lapworth</Text>
          <Text size="sm">
            <Link href="mailto:jacob@lapworth.nz">jacob@lapworth.nz</Link>
          </Text>
          <Text size="sm">
            <Link href="tel:+447949536308">(+44) 7949 536308</Link>
          </Text>
          <Text size="sm">
            <Link href="tel:+64277271661">(+64) 27 727 1661</Link>
          </Text>
          <Text size="sm">Currently in London</Text>
        </VStack>
        <LinkButton href="/cv/download" prefetch={false} size="sm">
          Download
        </LinkButton>
      </VStack>
      {experience.map((item) => (
        <ExperienceListItem item={item} key={item.company.title} />
      ))}
    </Container>
  )
}
