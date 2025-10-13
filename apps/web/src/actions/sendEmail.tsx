'use server'

import * as Sentry from '@sentry/nextjs'
import { headers } from 'next/headers'
import { Resend } from 'resend'

import { HelloEmail } from '@/emails/hello'
import { env } from '@/lib/env'

const resend = new Resend(env.RESEND_API_KEY)

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
        from: 'Lapworth.nz <hello@lapworth.nz>',
        react: <HelloEmail />,
        subject: 'Updates from Lapworth.nz',
        text: 'This is a test',
        to: [email],
      })

      if (error || !data) {
        return {
          error: error?.message ?? 'Unknown error',
          status: 'error',
        }
      }

      console.log(data)

      return {
        id: data.id,
        status: 'success',
      }
    },
  )
}
