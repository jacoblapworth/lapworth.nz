import { posthog } from 'posthog-js'

export function captureException(
  error: unknown,
  options?: Record<string, unknown>,
) {
  posthog.captureException(error, options)
}
