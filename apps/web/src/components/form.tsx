import NextForm from 'next/form'
import { styled } from '@/styled/jsx'

export const Form = styled(NextForm, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'lg',
  },
})
