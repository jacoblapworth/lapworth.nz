import type { Route } from 'next'
import { Link } from '@/components/Link'
import { enableFood } from '@/flags'
import { styled } from '@/styled/jsx'
import { NavLinks } from './NavLinks'

const EXTERNAL_HREF_REGEX = /(https?|mailto):\/\//

const Row = styled('div', {
  base: {
    '& a': {
      margin: '-xsm',
      padding: 'xsm',
    },

    '& li': {
      display: 'inline-block',
      whiteSpace: 'pre',
    },

    '& ul': {
      lineHeight: '1.4rem',
      margin: 0,
    },
    alignSelf: 'start',
    borderBottom: '1px solid token(colors.divider)',
    fontSize: 13,
    gridColumn: '1 / span 2',
    justifySelf: 'stretch',
    md: {
      borderTop: '1px solid token(colors.divider)',
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

const Description = () => {
  return (
    <Row>
      <ul aria-label="Social media links">
        {socialLinks.map(({ name, href }, i) => (
          <li key={href}>
            <Link href={href} sameTab={!EXTERNAL_HREF_REGEX.test(href)}>
              {name}
            </Link>
            {i !== socialLinks.length - 1 && (
              <span aria-hidden="true">{` \u2022 `}</span>
            )}
          </li>
        ))}
      </ul>
    </Row>
  )
}

const Nav = styled('nav', {
  base: {
    display: 'grid',
    gap: 0,
    gridArea: 'nav',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginInline: 16,
    md: {
      gap: 16,
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
})

export async function Navigation() {
  const showFood = await enableFood()

  return (
    <Nav>
      <NavLinks enableFood={showFood} />
      <Description />
    </Nav>
  )
}
