import { Link } from '@/components/Link'
import { Text } from '@/components/text'
import { Box, styled, VStack } from '@/styled/jsx'
import type { ExperienceItem } from './experience'

const Ul = styled('ul', {
  base: {
    listStylePosition: 'outside',
    listStyleType: 'square',
    marginInlineStart: 16,
  },
})

const Li = styled('li', {
  base: {
    _marker: {
      color: 'tertiary',
    },
    paddingInlineStart: 4,
  },
})

export function ExperienceListItem({ item }: { item: ExperienceItem }) {
  return (
    <Box
      display="grid"
      gridColumn="1/-1"
      gridTemplateAreas={`"title" "details"`}
      md={{
        gridTemplateAreas: 'unset',
        gridTemplateColumns: 'subgrid',
        gridTemplateRows: 'subgrid',
      }}
    >
      <VStack
        alignItems="start"
        fontVariantNumeric="oldstyle-nums"
        gap={0}
        gridArea="title"
      >
        <Text as="p" bold>
          {item.start} — {item.end ? item.end : 'Present'}
        </Text>
      </VStack>
      <VStack alignItems="start" gap={8} gridArea="details">
        <VStack alignItems="start" gap={0}>
          <Text as="h2" bold size="md">
            {item.role.title}
          </Text>

          {item.company.href ? (
            <Link href={item.company.href}>{item.company.title}</Link>
          ) : (
            <p>{item.company.title}</p>
          )}
        </VStack>
        <Ul>
          {item.details.map((detail, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static list
            <Li key={index}>{detail}</Li>
          ))}
        </Ul>
      </VStack>
    </Box>
  )
}
