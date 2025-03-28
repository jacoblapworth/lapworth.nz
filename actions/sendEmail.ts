'use server'

import * as Sentry from '@sentry/nextjs'
import { headers } from 'next/headers'
import { Resend } from 'resend'

import { HelloEmail } from '@/emails/hello'

const resend = new Resend(process.env.RESEND_API_KEY)

export type State =
  | {
      status: 'idle'
    }
  | {
      status: 'error'
      error: string
    }
  | {
      status: 'success'
      id: string
    }

export async function sendEmail(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  return await Sentry.withServerActionInstrumentation(
    'sendEmail',
    {
      formData,
      headers: headers(),
      recordResponse: true,
    },
    async (): Promise<State> => {
      const email = formData.get('email') as string

      const { data, error } = await resend.emails.send({
        from: 'Lapworth.nz <hello@mail.lapworth.nz>',
        to: [email],
        subject: 'Updates from Lapworth.nz',
        react: HelloEmail({}),
        text: 'This is a test',
      })

      if (error || !data) {
        return {
          status: 'error',
          error: error?.message ?? 'Unknown error',
        }
      }

      console.log(data)

      return {
        status: 'success',
        id: data.id,
      }
    },
  )
}
