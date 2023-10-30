import { kv } from '@vercel/kv'

import { HStack, VStack, styled } from 'styled/jsx'

const Input = styled('input', {
  base: {
    padding: 'sm',
    borderColor: 'interactive',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
})

const Button = styled('button', {
  base: {
    padding: 'sm',
    cursor: 'pointer',
    borderColor: 'interactive',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
})

const Label = styled('label', {
  base: {},
})

export function EmailSubscribe() {
  const onSubmit = async (data: FormData) => {
    'use server'
    try {
      const email = data.get('email')
      if (typeof email !== 'string') {
        throw new Error('Invalid email')
      }
      await kv.sadd('email', email)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form action={onSubmit}>
      <HStack alignItems="end" gap={0}>
        <VStack alignItems="start">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            placeholder="jacob@lapworth.nz"
            type="email"
            autoComplete="email"
            required
          />
        </VStack>

        <Button type="submit">Subscribe</Button>
      </HStack>
    </form>
  )
}
