import { FC } from 'react'

import { styled } from '@stitches/react'
import NextImage from "next/legacy/image"

import { SkewTile } from '@/components/Tile'
import image from '@/public/static/work/xero/figma-plugin.png'

const Copy = styled('div', {
  gridColumn: '1 / 6',
})

const Picture = styled('div', {
  gridColumn: '8 / -1',
  boxShadow: '0px 0px 0.5px 0px #00000033, 0px 2px 14px 0px #00000026',
})

const Image = styled(NextImage, {
  display: 'flex',
})

interface FigmaAccessibilityProps {}

export const FigmaAccessibility: FC<FigmaAccessibilityProps> = ({}) => {
  return (
    <SkewTile>
      <Copy>
        <h2>Figma plugin for accessibility</h2>
        <p>Meet designers where they work, and amplify the tools they use.</p>
      </Copy>

      <Picture>
        <Image
          src={image}
          alt="Screenshot of Accessibility checklist Figma plugin"
          layout="responsive"
        />
      </Picture>
    </SkewTile>
  )
}
