import 'https://deno.land/x/worker_types@v1.0.1/cloudflare-worker-types.ts'

export default {
  async fetch(request: Request) {
    const resizingOptions: BasicImageTransformations = {}

    try {
      const url = new URL(request.url)
      const src = url.searchParams.get('url')

      if (!src) {
        return new Response("Missing 'url' parameter", { status: 400 })
      }

      return fetch(src, { cf: { image: resizingOptions } })
    } catch (e) {
      if (e instanceof Error) {
        return new Response(e.message, { status: 500 })
      } else {
        return new Response('Unknown error', { status: 500 })
      }
    }
  },
}
