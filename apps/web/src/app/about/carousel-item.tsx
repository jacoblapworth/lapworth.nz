import type { StaticImageData } from 'next/image'
import NextImage from 'next/image'
import Link from 'next/link'
import { css } from '@/styled/css'
import { styled, VStack } from '@/styled/jsx'

export const Label = styled('div', {
  base: {
    _groupHover: {
      textDecoration: 'underline',
      textDecorationColor: 'quaternary',
    },
    lineClamp: 2,
    minWidth: 0,
    overflowWrap: 'break-word',
    textOverflow: 'ellipsis',
    whiteSpace: 'wrap',
    width: '100%',
  },
  variants: {
    variant: {
      primary: {
        color: 'primary',
        fontSize: 'md',
      },
      secondary: {
        color: 'secondary',
        fontSize: 'sm',
      },
    },
  },
})

interface Props {
  title: string
  subtitle?: string | null
  thumbnail: StaticImageData | string
  href: string
  alt: string
}

export function CarouselItem({ title, subtitle, thumbnail, href, alt }: Props) {
  return (
    <Link
      className="group"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <VStack alignItems="start" gap="xs" overflow="hidden">
        <NextImage
          alt={alt}
          className={css({
            _groupHover: {
              opacity: 0.8,
            },
            _hover: {
              opacity: 0.8,
            },
            backgroundColor: 'surface',
            borderRadius: 'md',
            height: 'auto',
            marginBlockEnd: 'xsm',
            overflow: 'hidden',
            willChange: 'transform',
          })}
          placeholder="blur"
          quality={75}
          src={thumbnail}
        />
        <Label variant="primary">{title}</Label>
        <Label variant="secondary">{subtitle}</Label>
      </VStack>
    </Link>
  )
}
