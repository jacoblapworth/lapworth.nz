'use server'

import { track } from '@vercel/analytics/server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { CvRequestEmail } from '@/emails/cv'
import PostHogClient from '@/lib/posthog'

export interface FormState {
  message?: string | undefined
  error?: boolean
}

const resend = new Resend(process.env.RESEND_API_KEY)
const ph = await PostHogClient()

export async function requestCv(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get('email')

  if (typeof email !== 'string') {
    throw new Error('Invalid email')
  }

  ph.identify({
    distinctId: email,
    properties: {
      email,
    },
  })

  ph.capture({
    distinctId: email,
    event: 'request-cv',
    properties: {
      email,
    },
  })

  await track('request-cv', { email })

  const { data, error } = await resend.emails.send({
    attachments: [
      {
        filename: 'JacobLapworth_CV.pdf',
        path: `http://${process.env.VERCEL_URL}/JacobLapworth_CV.pdf`,
      },
    ],
    from: 'Lapworth.nz <hello@lapworth.nz>',
    react: <CvRequestEmail />,
    subject: 'CV for Jacob Lapworth',
    to: [email],
  })

  if (error) {
    console.error(`Email error: ${error.name}\n${error.message}`)
    return {
      error: true,
      message: 'Unknown error, please try again later.',
    }
  }

  console.debug(`Email sent: ${data.id}`)

  redirect('/cv/requested')
}
