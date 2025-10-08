'use server'

import fs from 'node:fs'
import path from 'node:path'
import { track } from '@vercel/analytics/server'
import { Resend } from 'resend'
import { CvRequestEmail } from '@/emails/cv'

export interface FormState {
  message?: string | undefined
  success?: boolean
}

const resend = new Resend(process.env.RESEND_API_KEY)
const filepath = path.resolve(`public/JacobLapworth_CV.pdf`)
const attachment = fs.readFileSync(filepath).toString('base64')

export async function requestCv(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get('email')

  if (typeof email !== 'string') {
    throw new Error('Invalid email')
  }

  await track('request-cv', { email })

  const { data, error } = await resend.emails.send({
    attachments: [
      {
        content: attachment,
        filename: 'JacobLapworth_CV.pdf',
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
      message: error.message,
      success: false,
    }
  }

  console.debug(`Email sent: ${data.id}`)

  return {
    message: 'CV sent! Please check your inbox.',
    success: true,
  }
}
