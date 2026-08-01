import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Tratament Dentar pentru Români din Diaspora | ARA DENT STUDIO Pitești' },
  description: 'Ești acasă în vacanță? Planificăm tratamentul dentar în funcție de zilele tale disponibile. Etapizare specială, programare flexibilă, consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/diaspora' },
  openGraph: {
    title: 'Tratament Dentar pentru Români din Diaspora | ARA DENT STUDIO',
    description: 'Ești acasă în vacanță? Planificăm tratamentul dentar în funcție de zilele tale disponibile. Etapizare specială, programare flexibilă, consultație gratuită.',
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
