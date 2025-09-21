'use client'

import NextImage from 'next/image'

import { styled } from '@/styled/jsx'

export const Image = styled(
  NextImage,
  {
    base: {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  // {
  //   defaultProps: {
  //     placeholder: 'blur',
  //   },
  // },
)
