export const baseUrl = 'https://lapworth.nz'
export const baseEmail = 'jacob@lapworth.nz'

export const defaultSEO = {
  title: 'Jacob Lapworth — Product designer',
  description:
    'Jacob is a product designer, living in Auckland, New Zealand. Currently scaling the design system at Xero.',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: baseUrl,
    site_name: 'Jacob Lapworth — Product designer',
    images: [
      {
        url: `${baseUrl}/static/og-image.png`,
        alt: 'Jacob Lapworth',
      },
    ],
  },
  twitter: {
    handle: '@jacoblapworth',
    site: '@jacoblapworth',
    cardType: 'summary_large_image',
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}
