'use client'

import NextImage from 'next/image'

import { styled } from '@/styled/jsx'

export const Image = styled(
  NextImage,
  {
    base: {
      height: 'auto',
      maxWidth: '100%',
    },
  },
  // {
  //   defaultProps: {
  //     placeholder: 'blur',
  //   },
  // },
)
