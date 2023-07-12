/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { Router } from 'next/router'

const GOOGLE_MEASUREMENT_ID = process.env.GOOGLE_MEASUREMENT_ID

type WindowWithAnalytics = Window &
  typeof globalThis & {
    gtag: any
  }

interface AnalyticsEventHandlerProps {
  action: string
  params: any
}
type AnalyticsEventHandler = (props: AnalyticsEventHandlerProps) => void

export const event: AnalyticsEventHandler = ({ action, params }) => {
  ;(window as WindowWithAnalytics).gtag('event', action, params)
}

export const useAnalytics = () => {
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (process.env.NODE_ENV !== 'production') {
        return
      }
      ;(window as WindowWithAnalytics).gtag('config', GOOGLE_MEASUREMENT_ID, {
        page_location: url,
        page_title: document.title,
      })
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => Router.events.off('routeChangeComplete', handleRouteChange)
  }, [])
}

export const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_MEASUREMENT_ID}`

export function renderSnippet() {
  if (process.env.NODE_ENV !== 'production') {
    return ``
  }
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GOOGLE_MEASUREMENT_ID}');
    `
}
