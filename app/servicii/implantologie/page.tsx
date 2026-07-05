import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'

export const metadata: Metadata = {
  title: 'Implant Dentar Pitești | Dr. Robert Lungu',
  description: 'Implant dentar Pitești — 1.200 lei. Dr. Robert Lungu, specialist chirurgie dento-alveolară. Consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/implantologie' },
  openGraph: {
    title: 'Implant Dentar Pitești | Dr. Robert Lungu',
    description: 'Implant dentar Pitești — 1.200 lei. Dr. Robert Lungu, specialist chirurgie dento-alveolară. Consultație gratuită.',
    url: 'https://www.aradentpitesti.ro/servicii/implantologie',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Implant Dentar',
  provider: {
    '@type': 'Dentist',
    name: 'ARA DENT STUDIO',
    telephone: '+40754219011',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bd. Republicii nr. 19',
      addressLocality: 'Pitești',
      addressCountry: 'RO',
    },
  },
  areaServed: 'Pitești',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RON',
    price: '1200',
    description: 'Implant (șurub), fără bont și coroană',
  },
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cat dureaza procedura de implant dentar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inserarea implantului dureaza 30-60 de minute per implant, sub anestezie locala. Oseointegrarea dureaza 3-6 luni, dupa care se monteaza coroana definitiva.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cat costa un implant dentar in Pitesti la ARA DENT STUDIO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La ARA DENT STUDIO, implantul dentar (surub Dentium) costa 1.200 lei. Bontul protetic este 300 lei, iar capa de vindecare 150 lei. Consultatia, radiografia panoramica si CT-ul sunt gratuite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Implantul dentar doare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Procedura se realizeaza sub anestezie locala si nu provoaca durere in timpul interventiei. Post-operator pot aparea cateva zile de disconfort usor, gestionabil cu antiinflamatoare standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot face implant daca am diabet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diabetul bine controlat nu este o contraindicatie absoluta pentru implant. Dr. Robert Lungu evalueaza fiecare caz individual la consultatia gratuita.',
      },
    },
    {
      '@type': 'Question',
      name: 'Care e diferenta dintre implant si proteza mobila?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Implantul este fix, integrat in os, identic functional cu un dinte natural. Proteza mobila se scoate zilnic, nu opreste resorbtia osoasa si poate fi inconfortabila. Implantul este singura solutie permanenta care inlocuieste si radacina dintelui.',
      },
    },
  ],
}

const BENEFITS = [
  {
    title: 'Durată de viață',
    text: 'Îngrijit corect, implantul durează toată viața. O investiție o singură dată.',
  },
  {
    title: 'Aspect natural',
    text: 'Coroana pe implant este identică vizual cu dinții naturali. Nimeni nu va observa diferența.',
  },
  {
    title: 'Fără durere',
    text: 'Procedura se realizează sub anestezie locală. Dr. Robert Lungu are mână ușoară și lucrează cu blândețe.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Cât durează procedura de implant dentar?',
    a: 'Inserarea implantului durează 30-60 minute. Coroana finală se montează după 3-6 luni, când implantul s-a integrat în os.',
  },
  {
    q: 'Cât costă un implant dentar în Pitești?',
    a: 'Implantul (șurubul Dentium) costă 1.200 lei, bontul protetic 300 lei, iar capa de vindecare 150 lei. Coroana finală se stabilește separat, la consultația gratuită, în funcție de materialul ales.',
  },
  {
    q: 'Implantul dentar doare?',
    a: 'Nu — procedura se face sub anestezie locală. Nu vei simți durere în timpul intervenției. Post-operator pot apărea disconforturi minore care se ameliorează rapid.',
  },
  {
    q: 'Pot face implant dacă am diabet?',
    a: 'Depinde de stadiul și controlul bolii. La consultația gratuită evaluăm situația ta specific și îți spunem dacă ești candidat potrivit pentru implant.',
  },
  {
    q: 'Care e diferența între implant și proteză?',
    a: 'Implantul e fix, integrat în os, identic cu un dinte natural. Proteza e mobilă, poate fi inconfortabilă și nu oprește resorbția osoasă. Implantul e soluția permanentă și superioară pe termen lung.',
  },
]

export default function ImplantologiePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Navbar />
      <main className="bg-cream">

        {/* Hero */}
        <section className="bg-cream-dark pt-40 pb-24 px-6">
          <div className="container-site max-w-3xl">
            <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
              Implantologie · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Implant Dentar în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Soluția permanentă pentru dinții lipsă
            </p>
            <Link
              href="#programare"
              className="inline-block font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300 shadow-forest"
            >
              Programează consultație gratuită
            </Link>
          </div>
        </section>

        {/* Descriere */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Implantul dentar este cea mai apropiată alternativă a unui dinte natural. Se inserează în osul maxilar, se integrează biologic și suportă o coroană identică vizual cu dinții naturali.
              </p>
              <p>
                La ARA DENT STUDIO, Dr. Robert Lungu planifică fiecare implant individual, folosind tehnologie modernă pentru rezultate predictibile și durabile. Fiecare caz este evaluat atent — radiografie panoramică, CBCT dacă e necesar, și un plan de tratament personalizat.
              </p>
              <p>
                Spre deosebire de punte sau proteză, implantul nu afectează dinții vecini și menține osul maxilar sănătos pe termen lung. Când un dinte lipsește, osul din zona respectivă se resoarbe treptat. Implantul oprește acest proces și păstrează structura feței.
              </p>
              <p>
                Procesul de implantare este realizat sub anestezie locală — confortabil și fără durere. Recuperarea este rapidă, iar rezultatul final este un zâmbet complet și natural. Îngrijit corect, un implant dentar durează toată viața.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10 text-center">
              De ce să alegi implantul dentar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {BENEFITS.map((b) => (
                <div key={b.title} className="bg-cream border border-bark-light/30 rounded-sm p-8">
                  <div className="w-8 h-[2px] bg-gold mb-5" />
                  <h3 className="font-playfair text-xl text-forest-dark mb-3">{b.title}</h3>
                  <p className="font-jost font-light text-[14px] text-bark-dark leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10">
              Întrebări frecvente
            </h2>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </section>

        {/* CTA final */}
        <section id="programare" className="py-20 px-6 bg-forest">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-playfair italic text-4xl text-cream mb-4">
              Consultație gratuită pentru implant
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Prima consultație pentru cazurile de implantologie este gratuită. Vino să afli dacă implantul e soluția potrivită pentru tine.
            </p>
            <a
              href="https://wa.me/40754219011?text=Bun%C4%83%20ziua!%20Doresc%20o%20consulta%C8%9Bie%20gratuit%C4%83%20pentru%20implant%20dentar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-[#25D366] text-white px-8 py-4 rounded-sm hover:bg-[#1ebe5d] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Programează pe WhatsApp
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
