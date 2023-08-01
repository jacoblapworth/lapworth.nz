import { ReactNode } from 'react'

import { styled } from 'styled/jsx'

const Em = styled('em', {
  base: {
    display: 'inline-grid',
    position: 'relative',
    fontStyle: 'inherit',
    alignItems: 'baseline',
    width: 'min-content',
  },
})

const Span = styled('span', {
  base: {
    height: '0.25em',
    maxHeight: '1rem',
    width: '100%',
    zIndex: 0,
    // position: 'absolute',
    // bottom: 26,
    // '@sm': {
    //   bottom: 48,
    // },
    alignSelf: 'center',
    display: 'block',
    mixBlendMode: 'darken',
    _dark: {
      mixBlendMode: 'lighten',
    },
    overflow: 'visible',
    gridArea: '1/-1',
  },
})

const Text = styled('span', {
  base: {
    inset: '0px',
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap',
    zIndex: 1,
    gridArea: '1/-1',
  },
})

interface Props {
  children: ReactNode
}

export const Highlight = ({ children }: Props) => {
  return (
    <Em>
      <Span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 130 10"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
        >
          <path
            d="M1.41113 8.9715C41.7349 4.29379 81.8227 3.49767 122.469 1.14496C123.47 1.08703 126.542 0.808349 123.789 1.22482C117.023 2.24844 110.456 3.7138 103.633 4.65892C94.3308 5.94738 97.4519 5.47807 88.0592 6.41589C86.937 6.52794 76.6021 7.36701 83.5 7.53397C101.739 7.97546 107.369 7.53397 125.589 7.53397"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            stroke="rgb(19, 181, 234)"
          />
        </svg>
      </Span>
      <Text>{children}</Text>
    </Em>
  )
}
