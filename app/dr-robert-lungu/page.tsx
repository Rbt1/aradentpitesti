import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Dr. Robert Lungu | Medic Specialist Chirurgie Dento-Alveolară | ARA DENT STUDIO Pitești',
  description: 'Dr. Robert Lungu, medic specialist în chirurgie dento-alveolară la ARA DENT STUDIO Pitești. Implantologie, chirurgie orală, consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/dr-robert-lungu' },
  openGraph: {
    title: 'Dr. Robert Lungu | Medic Specialist Chirurgie Dento-Alveolară',
    description: 'Dr. Robert Lungu, medic specialist în chirurgie dento-alveolară la ARA DENT STUDIO Pitești. Implantologie, chirurgie orală, consultație gratuită.',
    url: 'https://www.aradentpitesti.ro/dr-robert-lungu',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'profile',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Robert Lungu',
  alternateName: 'Dr. Robert Florentin Lungu',
  jobTitle: 'Medic Specialist Chirurgie Dento-Alveolară',
  worksFor: {
    '@type': 'Dentist',
    name: 'ARA DENT STUDIO',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bd. Republicii nr. 19',
      addressLocality: 'Pitești',
      addressCountry: 'RO',
    },
    telephone: '+40754219011',
    url: 'https://www.aradentpitesti.ro',
  },
  url: 'https://www.aradentpitesti.ro/dr-robert-lungu',
  sameAs: [],
}

const WA_LINK = 'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Doresc să programez o consultație gratuită cu Dr. Robert Lungu.')

const FORMARE = [
  {
    titlu: 'Formare universitară',
    continut: 'Facultatea de Medicină Dentară, Universitatea de Medicină și Farmacie Carol Davila, București — 2012–2018',
  },
  {
    titlu: 'Specializare',
    continut: 'Medic Specialist Chirurgie Dento-Alveolară — Rezidențiat, Sibiu, 2020–2023. Specialitate medicală acreditată.',
  },
  {
    titlu: 'Certificare implantologie',
    continut: 'Sistem Dentium SuperLine II — implantologie cu un sistem premium, documentat clinic internațional, peste 25 de ani de date clinice.',
  },
  {
    titlu: 'Investiție în tehnologie',
    continut: 'Tomograf computerizat (CBCT) propriu în cabinet, pentru planificare chirurgicală precisă și diagnostic complet înainte de orice intervenție.',
  },
]

const DE_CE = [
  {
    titlu: 'Alături de tine',
    text: 'De la prima consultație până la tratamentul final și după — ești însoțit și informat la fiecare pas.',
  },
  {
    titlu: 'Comunicare deschisă',
    text: 'Îți explicăm tot ce facem și de ce. Nu există surprize, nu există costuri ascunse.',
  },
  {
    titlu: 'Totul perfect',
    text: 'Nu compromitem calitatea. Fiecare detaliu contează — de la planificarea cazului până la rezultatul final.',
  },
]

export default function DrRobertLunguPage() {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Navbar />
      <main className="bg-cream">

        {/* Hero — 2 coloane */}
        <section className="bg-cream-dark pt-40 pb-24 px-6">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

              {/* Text */}
              <div>
                <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
                  ARA DENT STUDIO · Pitești
                </p>
                <h1 className="font-playfair italic text-5xl lg:text-[56px] text-forest-dark leading-tight mb-4">
                  Dr. Robert Lungu
                </h1>
                <p className="font-jost text-[11px] uppercase tracking-[0.2em] text-gold mb-6">
                  Medic Specialist Chirurgie Dento-Alveolară
                </p>
                <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.8] mb-10">
                  Fondator ARA DENT STUDIO, specializat în implantologie și chirurgie orală, dedicat tratamentelor precise și relației de încredere cu fiecare pacient.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Programează consultația gratuită
                </a>
              </div>

              {/* Foto */}
              <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '4px', overflow: 'hidden', border: '2px solid #C9A84C', boxShadow: '0 20px 60px rgba(45,106,79,0.15)' }}>
                  <Image
                    src="/images/pozadoctor.jpg"
                    alt="Dr. Robert Lungu — Medic Specialist Chirurgie Dento-Alveolară, ARA DENT STUDIO Pitești"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Formare profesională */}
        <section className="py-20 px-6 bg-offwhite">
          <div className="container-site max-w-4xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-12 text-center">
              Formare profesională
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FORMARE.map((item) => (
                <div key={item.titlu} className="bg-cream border border-bark-light/30 rounded-sm p-8" style={{ boxShadow: '0 4px 20px rgba(45,106,79,0.07)' }}>
                  <div className="w-8 h-[2px] bg-gold mb-5" />
                  <h3 className="font-playfair font-bold text-lg text-forest-dark mb-3">
                    {item.titlu}
                  </h3>
                  <p className="font-jost font-light text-[14px] text-bark-dark leading-relaxed">
                    {item.continut}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Citat filozofie */}
        <section className="py-20 px-6 bg-forest-dark">
          <div className="container-site max-w-2xl text-center">
            <div className="w-8 h-[1px] bg-gold mx-auto mb-8" />
            <blockquote className="font-playfair italic text-2xl lg:text-3xl text-cream leading-relaxed mb-6">
              &bdquo;Obiectivul meu nu e doar un tratament corect. Este o relație de încredere pe viață.&rdquo;
            </blockquote>
            <cite className="font-jost text-[12px] uppercase tracking-widest text-gold not-italic">
              Dr. Robert Lungu
            </cite>
            <div className="w-8 h-[1px] bg-gold mx-auto mt-8" />
          </div>
        </section>

        {/* De ce ARA DENT STUDIO */}
        <section className="py-20 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-12 text-center">
              De ce ARA DENT STUDIO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {DE_CE.map((c) => (
                <div key={c.titlu} className="bg-cream border border-bark-light/30 rounded-sm p-8">
                  <div className="w-8 h-[2px] bg-gold mb-5" />
                  <h3 className="font-playfair text-xl text-forest-dark mb-3">{c.titlu}</h3>
                  <p className="font-jost font-light text-[14px] text-bark-dark leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 px-6 bg-gold">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-playfair italic text-3xl lg:text-4xl text-forest-dark mb-4">
              Programează-te la o consultație gratuită
            </h2>
            <p className="font-jost font-light text-[15px] text-forest-dark/70 mb-10">
              Dr. Robert Lungu evaluează fiecare caz individual și îți oferă soluția potrivită.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-forest-dark text-cream px-8 py-4 rounded-sm hover:bg-forest transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
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
