'use server'

import { isAxiosError } from 'axios'
import {
  ApiKeySession,
  ListEnum,
  ProfileEnum,
  ProfileSubscriptionBulkCreateJobEnum,
  ProfilesApi,
  SubscriptionParameters,
} from 'klaviyo-api'
import { env } from '@/lib/env'
import { captureException } from '@/lib/error'

const session = new ApiKeySession(env.KLAVIYO_API_KEY)
const profiles = new ProfilesApi(session)

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
                        consent: SubscriptionParameters.ConsentEnum.Subscribed,
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
    captureException(error)
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
}
