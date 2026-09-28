import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Implant Dentar România pentru Diaspora | ARA DENT STUDIO' },
  description: 'Implant dentar în România pentru românii din diaspora — etapizare specială, estimare pe WhatsApp înainte de zbor. Dr. Robert Lungu, ARA DENT STUDIO Pitești.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/diaspora' },
  openGraph: {
    title: 'Implant Dentar România pentru Diaspora | ARA DENT STUDIO',
    description: 'Implant dentar în România pentru românii din diaspora — etapizare specială, estimare pe WhatsApp înainte de zbor. Dr. Robert Lungu, ARA DENT STUDIO Pitești.',
    url: 'https://www.aradentpitesti.ro/diaspora',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

export default function DiasporaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
