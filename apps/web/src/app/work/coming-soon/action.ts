'use server'

import { Resend } from 'resend'
import { env } from '@/lib/env'
import { captureException } from '@/lib/error'

const resend = new Resend(env.RESEND_API_KEY)

export interface FormState {
  message: string | null
}

export async function subscribeEmail(
  _prevState: FormState,
  formData: FormData,
) {
  try {
    const email = formData.get('email')
    if (typeof email !== 'string') {
      throw new Error('Invalid email')
    }

    const { error } = await resend.contacts.create({
      audienceId: env.RESEND_AUDIENCE_ID,
      email,
    })

    if (error) {
      throw new Error('Failed to subscribe', { cause: error })
    }

    return { message: 'Check your emails' }
  } catch (error) {
    captureException(error)
    console.error(error)

    return { message: 'Unable to subscribe' }
  }
}
