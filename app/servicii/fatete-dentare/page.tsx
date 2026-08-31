import { type ReactNode } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'
import CTAWhatsApp from '@/app/servicii/components/CTAWhatsApp'

export const metadata: Metadata = {
  title: { absolute: 'Fatete Dentare Pitesti | Ceramice si Compozit | ARA DENT STUDIO' },
  description: 'Fatete dentare ceramice si compozit in Pitesti. Transforma aspectul zambetului fara interventii majore. Dr. Robert Lungu. Consultatie: 100 lei.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/fatete-dentare' },
  openGraph: {
    title: 'Fatete Dentare Pitesti | Ceramice si Compozit | ARA DENT STUDIO',
    description: 'Fatete dentare ceramice si compozit in Pitesti. Transforma aspectul zambetului fara interventii majore. Dr. Robert Lungu. Consultatie: 100 lei.',
    url: 'https://www.aradentpitesti.ro/servicii/fatete-dentare',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fatete Dentare',
  provider: {
    '@type': 'Dentist',
    name: 'ARA DENT STUDIO',
    telephone: '+40754219011',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bd. Republicii nr. 19',
      addressLocality: 'Pitesti',
      addressCountry: 'RO',
    },
  },
  areaServed: 'Pitesti',
  description: 'Fatete dentare ceramice si compozit in Pitesti pentru un zambet natural si uniform.',
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce sunt fatetele dentare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fatetele dentare sunt folii subtiri de ceramica sau compozit aplicate pe fata vizibila a dintelui, acoperind imperfectiunile si oferind un aspect uniform si natural.',
      },
    },
    {
      '@type': 'Question',
      name: 'Care e diferenta dintre fatete ceramice si compozit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fatetele ceramice sunt realizate in laborator, au aspect mai natural si durabilitate mai mare. Fatetele compozit se realizeaza direct in cabinet, intr-o singura sedinta, si sunt reversibile.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fatetele dentare dor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Procedura se realizeaza sub anestezie locala. Dupa aplicare poate aparea o sensibilitate usoara care dispare in cateva zile.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cat dureaza tratamentul cu fatete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fatetele compozit se realizeaza intr-o singura sedinta. Fatetele ceramice necesita 2 sedinte — una pentru scanare digitala si una pentru aplicare, dupa realizarea in laborator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fatetele dentare sunt permanente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fatetele ceramice sunt ireversibile — odata aplicate, dintele necesita fateta permanent. Fatetele compozit sunt reversibile si pot fi indepartate fara afectarea dintelui.',
      },
    },
  ],
}

const TIPURI = [
  {
    titlu: 'Fațete ceramice (porțelan)',
    text: 'Realizate în laborator din ceramică de înaltă calitate. Aspect identic cu dintele natural, rezistență mare la colorare și durabilitate crescută.',
    avantaje: [
      'Aspect cel mai natural',
      'Rezistente la colorare (cafea, tutun, vin)',
      'Durabilitate crescută',
      'Biocompatibile',
    ],
    nota: '2 ședințe — scanare digitală + aplicare',
  },
  {
    titlu: 'Fațete compozit (rășină)',
    text: 'Realizate direct în cabinet, modelate pe dinte. Variantă rapidă și reversibilă.',
    avantaje: [
      'Realizate într-o singură ședință',
      'Reversibile',
      'Cost mai accesibil',
    ],
    nota: '1 ședință — rezultat imediat',
  },
]

const INDICATII = [
  'Pete și decolorări care nu răspund la albire',
  'Dinți mici sau neuniformi',
  'Spații între dinți (diasteme)',
  'Dinți ușor crăpați sau ciobiți',
  'Dinți cu formă neregulată',
]

const CONTRAINDICATII: ReactNode[] = [
  <><Link href="/servicii/obturatii" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">Carii</Link> active sau <Link href="/servicii/parodontologie" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">boală parodontală</Link> netratată — se tratează mai întâi</>,
  <><Link href="/servicii/urgente-stomatologice" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">Bruxism</Link> sever netratat</>,
  'Smalț insuficient',
]

const PASI = [
  {
    nr: '01',
    titlu: 'Consultație: 100 lei',
    text: 'Evaluăm starea dinților, discutăm așteptările și stabilim tipul de fațetă potrivit.',
  },
  {
    nr: '02',
    titlu: 'Pregătirea dinților',
    text: 'Pentru ceramică — îndepărtarea unui strat minim de smalț. Pentru compozit — minimală sau inexistentă.',
  },
  {
    nr: '03',
    titlu: 'Scanare digitală sau modelare',
    text: 'Pentru ceramică — scanare digitală trimisă la laborator. Pentru compozit — modelare directă în cabinet.',
  },
  {
    nr: '04',
    titlu: 'Aplicarea fațetelor',
    text: 'Fixare cu adeziv special, ajustări finale. Rezultat imediat sau la a doua ședință.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Ce sunt fațetele dentare?',
    a: 'Fațetele dentare sunt folii subțiri de ceramică sau compozit aplicate pe fața vizibilă a dintelui, acoperind imperfecțiunile și oferind un aspect uniform și natural.',
  },
  {
    q: 'Care e diferența dintre fațete ceramice și compozit?',
    a: 'Fațetele ceramice sunt realizate în laborator, au aspect mai natural și durabilitate mai mare. Fațetele compozit se realizează direct în cabinet, într-o singură ședință, și sunt reversibile.',
  },
  {
    q: 'Fațetele dentare dor?',
    a: 'Procedura se realizează sub anestezie locală. După aplicare poate apărea o sensibilitate ușoară care dispare în câteva zile.',
  },
  {
    q: 'Cât durează tratamentul cu fațete?',
    a: 'Fațetele compozit se realizează într-o singură ședință. Fațetele ceramice necesită 2 ședințe — una pentru scanare digitală și una pentru aplicare, după realizarea în laborator.',
  },
  {
    q: 'Fațetele dentare sunt permanente?',
    a: 'Fațetele ceramice sunt ireversibile — odată aplicate, dintele necesită fațetă permanent. Fațetele compozit sunt reversibile și pot fi îndepărtate fără afectarea dintelui.',
  },
]

export default function FateteDentarePage() {
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
              Estetică Dentară · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Fațete Dentare în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Transformă aspectul zâmbetului fără intervenții majore
            </p>
            <Link
              href="#programare"
              className="inline-block font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300 shadow-forest"
            >
              Programează consultație
            </Link>
          </div>
        </section>

        {/* Descriere */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Fațetele dentare sunt una dintre cele mai eficiente soluții de estetică dentară — transformă aspectul zâmbetului fără intervenții majore, cu rezultate naturale și durabile.
              </p>
              <p>
                Spre deosebire de o coroană dentară care acoperă dintele complet, fațeta acoperă doar suprafața frontală, păstrând structura naturală a dintelui în mare parte intactă.
              </p>
            </div>
          </div>
        </section>

        {/* Tipuri */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10 text-center">
              Tipuri de fațete dentare
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {TIPURI.map((tip) => (
                <div key={tip.titlu} className="bg-cream border border-bark-light/30 rounded-sm p-8">
                  <div className="w-8 h-[2px] bg-gold mb-5" />
                  <h3 className="font-playfair text-xl text-forest-dark mb-3">{tip.titlu}</h3>
                  <p className="font-jost font-light text-[14px] text-bark-dark leading-relaxed mb-5">
                    {tip.text}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {tip.avantaje.map((av) => (
                      <li key={av} className="flex items-start gap-2 font-jost text-[14px] text-bark-dark">
                        <span className="text-gold mt-0.5">•</span>
                        {av}
                      </li>
                    ))}
                  </ul>
                  <p className="font-jost text-[12px] uppercase tracking-wider text-gold border-t border-bark-light/30 pt-4">
                    {tip.nota}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Indicatii */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-8">
              Când se recomandă fațetele
            </h2>
            <ul className="space-y-3">
              {INDICATII.map((item) => (
                <li key={item} className="flex items-start gap-3 font-jost font-light text-[15px] text-bark-dark">
                  <span className="text-gold text-lg mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contraindicatii */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-8">
              Când fațetele NU sunt soluția potrivită
            </h2>
            <ul className="space-y-3">
              {CONTRAINDICATII.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 font-jost font-light text-[15px] text-bark-dark">
                  <span className="text-bark text-lg mt-0.5 flex-shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Procedura */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10">
              Cum decurge tratamentul la ARA DENT STUDIO
            </h2>
            <div className="space-y-6">
              {PASI.map((pas) => (
                <div key={pas.nr} className="flex gap-6 items-start">
                  <span className="font-playfair text-3xl text-gold/40 leading-none flex-shrink-0 w-10 text-right">
                    {pas.nr}
                  </span>
                  <div className="border-l border-bark-light/40 pl-6 pb-6">
                    <h3 className="font-playfair text-xl text-forest-dark mb-2">{pas.titlu}</h3>
                    <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed">{pas.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA WhatsApp contextual */}
        <CTAWhatsApp
          title="Vrei să afli dacă fațetele sunt potrivite pentru tine?"
          subtitle="Consultație: 100 lei — evaluăm dinții tăi."
          waUrl={'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Sunt interesat de fațete dentare și aș dori să programez o consultație.')}
        />

        {/* FAQ */}
        <section className="py-20 px-6 bg-offwhite">
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
              Descoperă cum arată zâmbetul tău ideal
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Consultație: 100 lei — evaluăm situația ta și îți explicăm opțiunile disponibile.
            </p>
            <a
              href="https://wa.me/40754219011?text=Bun%C4%83%20ziua!%20Doresc%20o%20consulta%C8%9Bie%20pentru%20fa%C8%9Bete%20dentare."
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
