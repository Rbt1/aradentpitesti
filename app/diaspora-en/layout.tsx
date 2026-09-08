import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Dental Implants in Romania for Romanians Abroad | ARA DENT STUDIO Pitesti' },
  description: 'Planning dental treatment in Romania? Send your CBCT and intraoral photos on WhatsApp — get your treatment plan before buying your plane ticket. 75 min from Otopeni Airport.',
  alternates: {
    canonical: 'https://www.aradentpitesti.ro/diaspora-en',
    languages: {
      ro: 'https://www.aradentpitesti.ro/diaspora',
      en: 'https://www.aradentpitesti.ro/diaspora-en',
    },
  },
  openGraph: {
    title: 'Dental Implants in Romania for Romanians Abroad | ARA DENT STUDIO Pitesti',
    description: 'Planning dental treatment in Romania? Send your CBCT and intraoral photos on WhatsApp — get your treatment plan before buying your plane ticket. 75 min from Otopeni Airport.',
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
