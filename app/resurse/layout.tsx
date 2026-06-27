import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ghiduri Gratuite | ARA DENT STUDIO Pitesti',
  description: 'Descarca gratuit ghidurile dentare ARA DENT STUDIO. Implantologie, urgente dentare, boala parodontala. Dr. Robert Lungu, Pitesti.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/resurse' },
  openGraph: {
    title: 'Ghiduri Gratuite | ARA DENT STUDIO Pitesti',
    description: 'Descarca gratuit ghidurile dentare ARA DENT STUDIO. Implantologie, urgente dentare, boala parodontala. Dr. Robert Lungu, Pitesti.',
    url: 'https://www.aradentpitesti.ro/resurse',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function ResurseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
