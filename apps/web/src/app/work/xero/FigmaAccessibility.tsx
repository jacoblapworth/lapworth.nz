import NextImage from 'next/image'

import image from '@/public/work/xero/figma-plugin.png'
import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'

const Copy = styled('div', {
  base: {
    gridColumn: '1 / 6',
  },
})

const Picture = styled('div', {
  base: {
    boxShadow: '0px 0px 0.5px 0px #00000033, 0px 2px 14px 0px #00000026',
    gridColumn: '8 / -1',
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
          alt="Screenshot of Accessibility checklist Figma plugin"
          className={css({ display: 'flex', objectFit: 'contain' })}
          fill
          src={image}
        />
      </Picture>
    </div>
  )
}
