'use server'

import { track } from '@vercel/analytics/server'
import { list } from '@vercel/blob'
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

  try {
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

    const { blobs } = await list({ prefix: 'cv' })

    const cv = blobs
      .toSorted(
        (a, b) =>
          new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
      )
      .pop()

    if (!cv) {
      throw new Error('CV not found')
    }

    const { error } = await resend.emails.send({
      attachments: [
        {
          filename: 'Jacob-Lapworth_CV.pdf',
          path: cv.downloadUrl,
        },
      ],
      from: 'Lapworth.nz <hello@mail.lapworth.nz>',
      react: <CvRequestEmail />,
      subject: 'CV for Jacob Lapworth',
      to: [email],
    })

    if (error) {
      throw new Error('Failed to send email', { cause: error })
    }
  } catch (e) {
    console.error('CV request error:', e)
    return {
      error: true,
      message: 'Unknown error, please try again later.',
    }
  }

  redirect('/cv/requested')
}
