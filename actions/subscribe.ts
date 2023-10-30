'use server'

import {
  ApiKeySession,
  ListEnum,
  ProfileEnum,
  ProfileSubscriptionBulkCreateJobEnum,
  ProfilesApi,
} from 'klaviyo-api'

import { isAxiosError } from 'axios'

const session = new ApiKeySession(process.env.KLAVIYO_API_KEY)
const profiles = new ProfilesApi(session)

export async function subscribeEmail(prevState: any, data: FormData) {
  try {
    const email = data.get('email')
    if (typeof email !== 'string') {
      throw new Error('Invalid email')
    }

    await profiles.subscribeProfiles({
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
}
