import type { Route } from 'next'
import { Link } from '@/components/link'
import { styled } from '@/styled/jsx'

const EXTERNAL_HREF_REGEX = /(https?|mailto):\/\//

const Ul = styled('ul', {
  base: {
    lineHeight: '1.4rem',
    margin: 0,
  },
})

const Li = styled('li', {
  base: {
    display: 'inline-block',
    whiteSpace: 'pre',
  },
})

const Anchor = styled(Link, {
  base: {
    margin: '-xsm',
    padding: 'xsm',
  },
})

const Row = styled('div', {
  base: {
    alignSelf: 'start',
    borderBottom: 'divider',
    fontSize: 13,
    gridColumn: '1 / span 2',
    justifySelf: 'stretch',
    md: {
      borderTop: 'divider',
    },
    paddingBlock: 8,
    sm: {
      gridColumn: 'span 1',
    },
  },
})

const socialLinks = [
  {
    href: 'https://twitter.com/jacoblapworth',
    name: 'Twitter',
  },
  {
    href: 'https://instagram.com/jacoblapworth',
    name: 'Instagram',
  },
  {
    href: 'https://linkedin.com/in/jacoblapworth',
    name: 'LinkedIn',
  },
  {
    href: 'https://github.com/jacoblapworth',
    name: 'Github',
  },
  {
    href: 'https://music.apple.com/profile/jacoblapworth',
    name: 'Apple Music',
  },
  {
    href: 'mailto:jacob@lapworth.nz',
    name: 'Email',
  },
  {
    href: '/cv/request' satisfies Route,
    name: 'CV',
  },
]

export function SecondaryLinks() {
  return (
    <Row>
      <Ul aria-label="Social media links">
        {socialLinks.map(({ name, href }, i) => (
          <Li key={href}>
            <Anchor
              href={href}
              prefetch
              sameTab={!EXTERNAL_HREF_REGEX.test(href)}
            >
              {name}
            </Anchor>
            {i !== socialLinks.length - 1 && (
              <span aria-hidden="true">{` \u2022 `}</span>
            )}
          </Li>
        ))}
      </Ul>
    </Row>
  )
}
