import { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Ghiduri Gratuite | ARA DENT STUDIO Pitești' },
  description: 'Descarca gratuit ghidurile dentare ARA DENT STUDIO. Implantologie, urgente dentare, boala parodontala. Dr. Robert Lungu, Pitesti.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/resurse' },
  openGraph: {
    title: 'Ghiduri Gratuite | ARA DENT STUDIO Pitesti',
    description: 'Descarca gratuit ghidurile dentare ARA DENT STUDIO. Implantologie, urgente dentare, boala parodontala. Dr. Robert Lungu, Pitesti.',
    url: 'https://www.aradentpitesti.ro/resurse',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

export default function ResurseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
