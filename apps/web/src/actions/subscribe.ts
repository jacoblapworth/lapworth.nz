'use server'

import * as Sentry from '@sentry/nextjs'
import { isAxiosError } from 'axios'
import {
  ApiKeySession,
  ListEnum,
  ProfileEnum,
  ProfileSubscriptionBulkCreateJobEnum,
  ProfilesApi,
  SubscriptionParameters,
} from 'klaviyo-api'
import { headers } from 'next/headers'

const session = new ApiKeySession(process.env.KLAVIYO_API_KEY)
const profiles = new ProfilesApi(session)

export interface FormState {
  message: string | null
}

export async function subscribeEmail(
  _prevState: FormState,
  formData: FormData,
) {
  return await Sentry.withServerActionInstrumentation(
    'subscribeEmail',
    {
      formData,
      headers: headers(),
      recordResponse: true,
    },
    async () => {
      try {
        const email = formData.get('email')
        if (typeof email !== 'string') {
          throw new Error('Invalid email')
        }

        await profiles.bulkSubscribeProfiles({
          data: {
            attributes: {
              profiles: {
                data: [
                  {
                    attributes: {
                      email,
                      subscriptions: {
                        email: {
                          marketing: {
                            consent:
                              SubscriptionParameters.ConsentEnum.Subscribed,
                          },
                        },
                      },
                    },
                    type: ProfileEnum.Profile,
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  id: 'W7qqMe',
                  type: ListEnum.List,
                },
              },
            },
            type: ProfileSubscriptionBulkCreateJobEnum.ProfileSubscriptionBulkCreateJob,
          },
        })

        return { message: 'Check your emails' }
      } catch (error) {
        if (isAxiosError(error)) {
          console.error(
            `Klaviyo error: ${error.response?.statusText}`,
            error.response?.status,
          )
        } else {
          console.error(error)
        }

        return { message: 'Unable to subscribe' }
      }
    },
  )
}
