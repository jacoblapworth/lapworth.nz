import NextImage from 'next/image'


import { css } from 'styled/css'
import { styled } from 'styled/jsx'

import image from '@/public/static/work/xero/figma-plugin.png'

const Copy = styled('div', {
  base: {
    gridColumn: '1 / 6',
  },
})

const Picture = styled('div', {
  base: {
    gridColumn: '8 / -1',
    boxShadow: '0px 0px 0.5px 0px #00000033, 0px 2px 14px 0px #00000026',
  },
})

export const FigmaAccessibility = () => {
  return (
    <div>
      <Copy>
        <h2>Figma plugin for accessibility</h2>
        <p>Meet designers where they work, and amplify the tools they use.</p>
      </Copy>

      <Picture>
        <NextImage
          className={css({ display: 'flex', objectFit: 'contain' })}
          src={image}
          alt="Screenshot of Accessibility checklist Figma plugin"
          fill
        />
      </Picture>
    </div>
  )
}
