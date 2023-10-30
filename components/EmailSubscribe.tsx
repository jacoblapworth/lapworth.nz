import {
  ApiKeySession,
  ProfileCreateQuery,
  ProfileEnum,
  ProfilesApi,
} from 'klaviyo-api'

import { HStack, VStack, styled } from 'styled/jsx'

const session = new ApiKeySession(process.env.KLAVIYO_API_KEY)
const profiles = new ProfilesApi(session)

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

      await profiles.createProfile({
        data: {
          type: ProfileEnum.Profile,
          attributes: {
            email,
          },
        },
      })
    } catch (error) {
      // if (error instanceof AxiosError) {
      //   console.error(error.response.statusText, error.response.status)
      // } else {
      //   console.error(error)

      // }

      console.error(error.response.statusText, error.response.status)
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
