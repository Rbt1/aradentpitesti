import { type ReactNode } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'
import CTAWhatsApp from '@/app/servicii/components/CTAWhatsApp'

export const metadata: Metadata = {
  title: { absolute: 'Fațete dentare Pitești | ARA DENT STUDIO' },
  description: 'Fațete dentare în Pitești — ceramice și din compozit. Corectează forma și culoarea dinților fără intervenții majore. Consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/fatete-dentare' },
  openGraph: {
    title: 'Fațete dentare Pitești | ARA DENT STUDIO',
    description: 'Fațete dentare în Pitești — ceramice și din compozit. Corectează forma și culoarea dinților fără intervenții majore. Consultație gratuită.',
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
  description: 'Fatete dentare ceramice si compozit in Pitesti pentru corectarea formei si culorii dintilor.',
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce sunt fațetele dentare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lamele subțiri, fixate pe fața dintelui, care pot corecta forma, culoarea sau mici imperfecțiuni.',
      },
    },
    {
      '@type': 'Question',
      name: 'Care e diferența dintre fațetele ceramice și cele din compozit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cele ceramice se realizează pe baza unei amprente digitale, iar cele din compozit se modelează direct pe dinte. Medicul îți recomandă varianta potrivită după examinare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât costă fațetele dentare la Pitești?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prețul se stabilește la consultație, în funcție de numărul de dinți și de materialul ales. Consultația este gratuită.',
      },
    },
    {
      '@type': 'Question',
      name: 'Doare montarea fațetelor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dacă este necesar, se folosește anestezie locală. Medicul îți explică ce poți simți.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât durează tratamentul cu fațete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depinde de numărul de dinți și de materialul ales. Medicul îți spune la consultație câte ședințe sunt necesare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot face fațete dacă scrâșnesc din dinți?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicul evaluează situația și, dacă este cazul, poate recomanda o gutieră de protecție.',
      },
    },
    {
      '@type': 'Question',
      name: 'Consultația este gratuită?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da. Dacă medicul consideră necesară o radiografie panoramică, aceasta se taxează separat (100 lei).',
      },
    },
  ],
}

const FAQ_ITEMS: { q: string; a: string | ReactNode }[] = [
  {
    q: 'Ce sunt fațetele dentare?',
    a: 'Lamele subțiri, fixate pe fața dintelui, care pot corecta forma, culoarea sau mici imperfecțiuni.',
  },
  {
    q: 'Care e diferența dintre fațetele ceramice și cele din compozit?',
    a: 'Cele ceramice se realizează pe baza unei amprente digitale, iar cele din compozit se modelează direct pe dinte. Medicul îți recomandă varianta potrivită după examinare.',
  },
  {
    q: 'Cât costă fațetele dentare la Pitești?',
    a: 'Prețul se stabilește la consultație, în funcție de numărul de dinți și de materialul ales. Consultația este gratuită.',
  },
  {
    q: 'Doare montarea fațetelor?',
    a: 'Dacă este necesar, se folosește anestezie locală. Medicul îți explică ce poți simți.',
  },
  {
    q: 'Cât durează tratamentul cu fațete?',
    a: 'Depinde de numărul de dinți și de materialul ales. Medicul îți spune la consultație câte ședințe sunt necesare.',
  },
  {
    q: 'Pot face fațete dacă scrâșnesc din dinți?',
    a: (
      <>
        Medicul evaluează situația și, dacă este cazul, poate recomanda o{' '}
        <Link
          href="/blog/gutiera-bruxism-pitesti"
          className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
        >
          gutieră de protecție
        </Link>
        .
      </>
    ),
  },
  {
    q: 'Consultația este gratuită?',
    a: 'Da. Dacă medicul consideră necesară o radiografie panoramică, aceasta se taxează separat (100 lei).',
  },
]

const WA_URL =
  'https://wa.me/40754219011?text=' +
  encodeURIComponent('Bună ziua! Sunt interesat de fațete dentare și aș dori să programez o consultație la ARA DENT STUDIO.')

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
              Ceramice sau din compozit, după evaluarea cazului tău
            </p>
            <Link
              href="#programare"
              className="inline-block font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300 shadow-forest"
            >
              Programează consultație
            </Link>
          </div>
        </section>

        {/* A. Intro */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Fațetele dentare se realizează la ARA DENT STUDIO din Pitești în variantele ceramice și din compozit, după o evaluare atentă a cazului tău. Consultația este gratuită, iar tu afli ce soluție ți se potrivește înainte să începi tratamentul.
              </p>
            </div>
          </div>
        </section>

        {/* B. Ce sunt fațetele dentare */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Ce sunt fațetele dentare
            </h2>
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                O fațetă dentară este o lamelă subțire de ceramică sau compozit care se fixează pe suprafața din față a dintelui și poate corecta forma, culoarea sau mici imperfecțiuni. Spre deosebire de o coroană dentară — care acoperă dintele complet — fațeta acoperă doar suprafața frontală, păstrând structura naturală a dintelui în mare parte intactă.
              </p>
              <p>
                Fațetele nu sunt potrivite pentru orice caz. Decizia se ia după examinare clinică, ținând cont de starea dinților, a gingiilor și de ce îți dorești.
              </p>
            </div>
          </div>
        </section>

        {/* C. Ceramice și compozit */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Fațete ceramice și fațete din compozit
            </h2>
            <div className="space-y-10">

              <div>
                <h3 className="font-playfair text-2xl text-forest-dark mb-4">
                  Fațete ceramice
                </h3>
                <div className="space-y-4 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
                  <p>
                    Fațetele ceramice se realizează pe baza unei amprente digitale, luată cu scanner-ul intraoral, și se fixează pe dinte după ce sunt confecționate în laborator. Oferă un aspect identic cu dintele natural și rezistă bine la colorare în timp.
                  </p>
                  <p>
                    Odată aplicate, fațetele ceramice sunt ireversibile — dintele va necesita fațetă permanent. De aceea, decizia se ia în urma unei examinări atente, iar medicul îți explică ce presupune pregătirea dintelui.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-2xl text-forest-dark mb-4">
                  Fațete din compozit
                </h3>
                <div className="space-y-4 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
                  <p>
                    Materialul compozit se modelează direct pe dinte, în cabinet. Este o variantă mai rapidă și reversibilă — fațetele din compozit pot fi îndepărtate fără a afecta dintele.
                  </p>
                  <p>
                    Se potrivesc cazurilor în care dorești o corecție estetică cu o intervenție minimală, iar medicul consideră că este soluția adecvată după evaluare.
                  </p>
                </div>
              </div>

            </div>
            <p className="mt-8 font-jost font-light text-[15px] text-bark-dark leading-relaxed italic">
              Alegerea materialului depinde de starea dintelui, de ce îți dorești și de recomandarea medicului. Citește și{' '}
              <Link
                href="/blog/fatete-dentare-pitesti"
                className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200 not-italic"
              >
                ghidul nostru despre tipurile de fațete
              </Link>
              {' '}pentru mai multe detalii.
            </p>
          </div>
        </section>

        {/* D. Când se recomandă */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Când se recomandă fațetele dentare
            </h2>
            <ul className="space-y-4 font-jost font-light text-[16px] text-bark-dark leading-[1.9] mb-8">
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Dinți ciobiți sau uzați, fără afectarea nervului.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Spații mici între dinți (diasteme) pe care dorești să le închizi.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Dinți cu formă neregulată sau dimensiune disproporționată față de celelalte.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Pete sau decolorări care nu dispar la igienizare profesională.</span>
              </li>
            </ul>
            <div className="space-y-4 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Fațetele nu sunt singura soluție. În funcție de caz, medicul poate recomanda o{' '}
                <Link
                  href="/servicii/obturatii"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  obturație
                </Link>
                {' '}sau o{' '}
                <Link
                  href="/servicii/protetica-dentara"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  coroană dentară
                </Link>
                , în funcție de starea dintelui.
              </p>
              <p>
                Dinții și gingiile trebuie să fie sănătoși înainte de tratament. Eventualele carii sau{' '}
                <Link
                  href="/servicii/parodontologie"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  afecțiuni parodontale
                </Link>
                {' '}se tratează mai întâi, la fel și smalțul insuficient poate contraindica fațetele ceramice.
              </p>
            </div>
          </div>
        </section>

        {/* E. Cum decurge tratamentul */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Cum decurge tratamentul cu fațete
            </h2>
            <ol className="space-y-6 font-jost font-light text-[16px] text-bark-dark leading-[1.9] mb-6">
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  1
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Consultația gratuită</span>{' '}
                  — examen clinic și discuție despre ce îți dorești. Medicul îți explică ce soluție se potrivește cazului tău.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  2
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Evaluarea imagistică</span>{' '}
                  — dacă medicul consideră necesar, se face o radiografie panoramică (taxată separat, 100 lei).
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  3
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Alegerea materialului</span>{' '}
                  — ceramic sau compozit, în funcție de starea dinților, de așteptări și de recomandarea medicului.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  4
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Pregătirea dinților</span>{' '}
                  — medicul îți explică ce presupune în funcție de materialul ales.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  5
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Realizarea fațetelor</span>{' '}
                  — amprentă digitală cu scanner intraoral pentru cele ceramice; modelare directă pe dinte pentru cele din compozit.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  6
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Fixarea și verificarea</span>{' '}
                  — fațetele se fixează cu adeziv special, cu ajustări finale și verificarea rezultatului împreună cu medicul.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  7
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Control și recomandări</span>{' '}
                  — medicul îți explică cum să îngrijești fațetele și stabilește controlul următor.
                </div>
              </li>
            </ol>
            <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed italic">
              Numărul de ședințe depinde de material și de caz — medicul îți spune la consultație la ce să te aștepți.
            </p>
          </div>
        </section>

        {/* F. Cum îți îngrijești fațetele */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Cum îți îngrijești fațetele
            </h2>
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Igiena corectă acasă — periaj delicat și ață dentară — menține fațetele în stare bună. Controalele periodice și{' '}
                <Link
                  href="/blog/detartraj-igienizare-dentara-pitesti"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  igienizarea profesională
                </Link>
                {' '}la clinică completează îngrijirea de acasă și ajută la depistarea timpurie a oricărei probleme.
              </p>
              <p>
                Dacă scrâșnești din dinți în timpul somnului, medicul poate recomanda o{' '}
                <Link
                  href="/blog/gutiera-bruxism-pitesti"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  gutieră de protecție
                </Link>
                {' '}pentru a preveni uzura fațetelor.
              </p>
              <p>
                Medicul îți explică la consultație și la control ce obiceiuri să eviți și la ce să fii atent în funcție de tipul de fațetă ales.
              </p>
            </div>
          </div>
        </section>

        {/* G. Cât costă */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Cât costă fațetele dentare
            </h2>
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Prețul fațetelor se stabilește la consultație, în funcție de numărul de dinți și de materialul ales. Consultația este gratuită, iar tu afli costul înainte să începi tratamentul.
              </p>
              <p>
                Radiografia panoramică, dacă este necesară, se taxează separat (100 lei). Găsești{' '}
                <Link
                  href="/preturi"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  lista de prețuri
                </Link>
                {' '}pe pagina dedicată.
              </p>
            </div>
          </div>
        </section>

        {/* CTA WhatsApp contextual */}
        <CTAWhatsApp
          title="Vrei să afli dacă fațetele sunt potrivite pentru tine?"
          subtitle="Consultație gratuită — evaluăm dinții tăi."
          waUrl={WA_URL}
        />

        {/* H. FAQ */}
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
              Programează consultația gratuită
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Echipa ARA DENT STUDIO evaluează situația ta și îți explică opțiunile disponibile — fără presiune, fără obligații.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-[#25D366] text-white px-8 py-4 rounded-sm hover:bg-[#1ebe5d] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Programează pe WhatsApp
            </a>
            <p className="mt-4 font-jost font-light text-[13px] text-forest-light/80">
              Program: luni–vineri, 09:00–18:00
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
