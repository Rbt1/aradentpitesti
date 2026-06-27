import type { Metadata } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'
import CustomCursor from './components/CustomCursor'
import ScrollAnimationInit from './components/ScrollAnimationInit'
import LenisProvider from './components/LenisProvider'
import Script from 'next/script'

// ============================================================
// FONTURI
// ============================================================
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal'],
  variable: '--font-jost',
  display: 'swap',
  preload: true,
})

// ============================================================
// METADATA SEO
// ============================================================
export const metadata: Metadata = {
  metadataBase: new URL('https://www.aradentpitesti.ro'),
  title: {
    default: 'Stomatologie Pitești | Dr. Robert Lungu | ARA DENT STUDIO',
    template: '%s | ARA DENT STUDIO Pitești',
  },
  description:
    'Stomatologie Pitești — implantologie, chirurgie orală și endodonție. Dr. Robert Lungu. Consultație gratuită.',
  keywords: [
    'implant dentar pitesti',
    'stomatologie premium pitesti',
    'clinica dentara arges',
    'implantologie pitesti',
    'ara dent studio',
    'dr robert lungu',
    'chirurgie orala pitesti',
    'protetica dentara pitesti',
    'endodontie pitesti',
    'Dr. Robert Lungu',
    'Robert Lungu dentist Pitesti',
    'Robert Lungu implantologie',
    'Robert Lungu endodontie',
    'Robert Lungu chirurgie',
    'Robert Lungu stomatologie',
    'Dr. Robert Lungu Pitesti',
    'aradent',
    'aradent pitesti',
    'aradent studio',
    'aradent stomatologie',
  ],
  authors: [{ name: 'ARA DENT STUDIO' }],
  creator: 'ARA DENT STUDIO',
  publisher: 'ARA DENT STUDIO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Stomatologie Pitești | Dr. Robert Lungu | ARA DENT STUDIO',
    description: 'Stomatologie Pitești — implantologie, chirurgie orală și endodonție. Dr. Robert Lungu. Consultație gratuită.',
    url: 'https://www.aradentpitesti.ro',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: 'https://www.aradentpitesti.ro/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'ARA DENT STUDIO Pitești',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARA DENT STUDIO | Clinică Dentară Pitești',
    description: 'Implantologie și chirurgie orală în Pitești. Dr. Robert Lungu.',
    images: ['https://www.aradentpitesti.ro/logo/logo.png'],
  },
  alternates: {
    canonical: 'https://www.aradentpitesti.ro',
  },
}

// ============================================================
// JSON-LD STRUCTURED DATA
// ============================================================
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'ARA DENT STUDIO',
  description:
    'Clinică dentară premium în Pitești — implantologie, chirurgie orală, protetică și endodonție.',
  url: 'https://www.aradentpitesti.ro',
  telephone: '+40754219011',
  email: 'aradentstudio@gmail.com',
  priceRange: '$$',
  currenciesAccepted: 'RON',
  paymentAccepted: 'Cash, Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bd. Republicii nr. 19',
    addressLocality: 'Pitești',
    addressRegion: 'Argeș',
    postalCode: '110017',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '44.8565',
    longitude: '24.8692',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  medicalSpecialty: ['Dentistry', 'OralSurgery'],
  founder: {
    '@type': 'Person',
    name: 'Dr. Robert Lungu',
    jobTitle: 'Medic Stomatolog · Specialist Implantologie',
  },
  sameAs: [
    'https://instagram.com/aradentstudio',
    'https://facebook.com/aradentstudio',
  ],
}

// ============================================================
// LAYOUT
// ============================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream font-jost antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MV0DF1E3LC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MV0DF1E3LC');
          `}
        </Script>
        <LenisProvider>
          <CustomCursor />
          <ScrollAnimationInit />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
