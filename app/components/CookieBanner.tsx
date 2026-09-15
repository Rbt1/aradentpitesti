'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ara-dent-cookie-consent')
    if (!consent) {
      setVisible(true)
    } else if (consent === 'accepted') {
      updateConsent('granted')
    }
  }, [])

  const updateConsent = (value: 'granted' | 'denied') => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('consent', 'update', {
        analytics_storage: value,
        ad_storage: value,
        ad_user_data: value,
        ad_personalization: value,
      })
    }
  }

  const handleAccept = () => {
    localStorage.setItem('ara-dent-cookie-consent', 'accepted')
    updateConsent('granted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('ara-dent-cookie-consent', 'rejected')
    updateConsent('denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#2D6A4F] border-t-2 border-[#C9A84C] px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#F5F0E6] text-sm font-[Jost] leading-relaxed">
          Folosim cookie-uri pentru a analiza traficul pe site și a îmbunătăți experiența ta. Prin acceptare, ești de acord cu{' '}
          <a href="/politica-cookie" className="underline text-[#C9A84C] hover:text-white transition-colors">
            politica noastră de cookie-uri
          </a>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2.5 text-sm font-bold text-[#F5F0E6] border border-[#F5F0E6] rounded hover:bg-white/10 transition-colors font-[Jost] whitespace-nowrap"
          >
            Refuz
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2.5 text-sm font-bold bg-[#C9A84C] text-[#2D6A4F] rounded hover:opacity-90 transition-opacity font-[Jost] whitespace-nowrap"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
