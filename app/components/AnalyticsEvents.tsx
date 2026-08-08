'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

// Listener global care prinde toate click-urile pe tel: și wa.me de pe întreg site-ul.
// Elementele cu data-ga-manual="true" sunt excluse (au tracking explicit propriu).
const AnalyticsEvents = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest('a')
      if (!anchor) return
      if (anchor.getAttribute('data-ga-manual') === 'true') return

      const href = anchor.getAttribute('href') ?? ''
      if (href.startsWith('tel:')) {
        trackEvent('phone_click', { location: 'global' })
      } else if (href.includes('wa.me')) {
        trackEvent('whatsapp_click', { location: 'global' })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

export default AnalyticsEvents
