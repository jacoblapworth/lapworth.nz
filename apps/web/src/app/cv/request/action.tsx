'use server'

import { track } from '@vercel/analytics/server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { CvRequestEmail } from '@/emails/cv'
import { env } from '@/lib/env'
import PostHogClient from '@/lib/posthog'

export interface FormState {
  message?: string | undefined
  error?: boolean
}

const resend = new Resend(env.RESEND_API_KEY)

export async function requestCv(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get('email')

  if (typeof email !== 'string') {
    throw new Error('Invalid email')
  }

  const ph = await PostHogClient()

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

  if (email === 'test@test.com') {
    redirect('/cv/requested')
  }

  const filename = 'Jacob-Lapworth_CV.pdf'
  const { error } = await resend.emails.send({
    attachments: [
      {
        filename,
        path: `https://${process.env.VERCEL_URL}/${filename}`,
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

  redirect('/cv/requested')
}
