'use server'

import * as Sentry from '@sentry/nextjs'
import { isAxiosError } from 'axios'
import {
  ApiKeySession,
  ListEnum,
  ProfileEnum,
  ProfileSubscriptionBulkCreateJobEnum,
  ProfilesApi,
} from 'klaviyo-api'
import { headers } from 'next/headers'

const session = new ApiKeySession(process.env.KLAVIYO_API_KEY)
const profiles = new ProfilesApi(session)

export interface FormState {
  status: 'idle' | 'error' | 'success'
  message: string | null
}

export async function subscribeEmail(prevState: FormState, formData: FormData) {
  return await Sentry.withServerActionInstrumentation(
    'subscribeEmail',
    {
      formData,
      headers: headers(),
      recordResponse: true,
    },
    async (): Promise<FormState> => {
      try {
        const email = formData.get('email')
        console.log('formData', email)
        if (typeof email !== 'string') {
          throw new Error('Invalid email')
        }

        await profiles.bulkSubscribeProfiles({
          data: {
            type: ProfileSubscriptionBulkCreateJobEnum.ProfileSubscriptionBulkCreateJob,
            attributes: {
              profiles: {
                data: [
                  {
                    type: ProfileEnum.Profile,
                    attributes: {
                      email,
                    },
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  type: ListEnum.List,
                  id: 'W7qqMe',
                },
              },
            },
          },
        })

        return {
          status: 'success',
          message: 'Check your emails',
        }
      } catch (error) {
        if (isAxiosError(error)) {
          console.error(
            `Klaviyo error: ${error.response?.statusText}`,
            error.response?.status,
          )
        } else {
          console.error(error)
        }

        return {
          status: 'error',
          message: 'Unable to subscribe',
        }
      }
    },
  )
}
