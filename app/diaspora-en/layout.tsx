import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Dental Treatment Romania for Diaspora | ARA DENT STUDIO' },
  description: 'Dental implants in Romania for Romanians living abroad — special scheduling, WhatsApp estimate before your flight. Dr. Robert Lungu, ARA DENT STUDIO Pitești.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/diaspora-en' },
  openGraph: {
    title: 'Dental Treatment Romania for Diaspora | ARA DENT STUDIO',
    description: 'Dental implants in Romania for Romanians living abroad — special scheduling, WhatsApp estimate before your flight. Dr. Robert Lungu, ARA DENT STUDIO Pitești.',
    url: 'https://www.aradentpitesti.ro/diaspora-en',
    siteName: 'ARA DENT STUDIO',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

export default function DiasporaEnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
