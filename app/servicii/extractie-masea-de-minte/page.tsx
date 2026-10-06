import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'
import CTAWhatsApp from '@/app/servicii/components/CTAWhatsApp'

export const metadata: Metadata = {
  title: { absolute: 'Extracție măsea de minte Pitești | ARA DENT STUDIO' },
  description: 'Extracție măsea de minte în Pitești — eruptă, semiinclusă sau inclusă. Medic specialist chirurg dento-alveolar. Anestezie locală. Consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/extractie-masea-de-minte' },
  openGraph: {
    title: 'Extracție măsea de minte Pitești | ARA DENT STUDIO',
    description: 'Extracție măsea de minte în Pitești — eruptă, semiinclusă sau inclusă. Medic specialist chirurg dento-alveolar. Anestezie locală. Consultație gratuită.',
    url: 'https://www.aradentpitesti.ro/servicii/extractie-masea-de-minte',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Extractie Masea de Minte',
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
  offers: [
    { '@type': 'Offer', name: 'Extractie molar minte total erupt', price: '400', priceCurrency: 'RON' },
    { '@type': 'Offer', name: 'Extractie molar minte semiinclus', price: '600', priceCurrency: 'RON' },
    { '@type': 'Offer', name: 'Extractie molar minte inclus', price: '800', priceCurrency: 'RON' },
  ],
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Trebuie scoase toate măselele de minte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nu neapărat. Decizia se ia după examinare și imagistică — unele măsele de minte nu creează probleme și nu necesită extracție.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât costă extracția unei măsele de minte la Pitești?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '400 lei pentru măseaua eruptă, 600 lei pentru cea semiinclusă și 800 lei pentru cea inclusă. Prețul final se stabilește după examinare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Doare extracția măselei de minte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extracția se face sub anestezie locală. După aceea poate apărea un disconfort moderat, care se gestionează conform recomandărilor medicului.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât durează extracția măselei de minte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depinde de poziția măselei și de complexitate. Medicul îți spune la consultație la ce să te aștepți.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât durează recuperarea după extracția măselei de minte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depinde de caz și de pacient. Medicul îți explică ce să eviți și la ce să te aștepți în primele zile.',
      },
    },
    {
      '@type': 'Question',
      name: 'Am nevoie de CBCT înainte de extracția măselei de minte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicul îl recomandă atunci când este necesar, mai ales la măselele incluse sau aflate aproape de structuri importante. Costă 250 lei, iar CT-urile ulterioare de verificare sunt incluse.',
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

const PRICE_ROWS = [
  { service: 'Consultație', price: 'Gratuită' },
  { service: 'Extracție măsea de minte eruptă', price: '400 lei' },
  { service: 'Extracție măsea de minte semiinclusă', price: '600 lei' },
  { service: 'Extracție măsea de minte inclusă', price: '800 lei' },
  { service: 'Radiografie panoramică, dacă este necesară', price: '100 lei' },
  { service: 'CT dentar (CBCT), atunci când este necesar', price: '250 lei*' },
]

const FAQ_ITEMS = [
  {
    q: 'Trebuie scoase toate măselele de minte?',
    a: 'Nu neapărat. Decizia se ia după examinare și imagistică — unele măsele de minte nu creează probleme și nu necesită extracție.',
  },
  {
    q: 'Cât costă extracția unei măsele de minte la Pitești?',
    a: '400 lei pentru măseaua eruptă, 600 lei pentru cea semiinclusă și 800 lei pentru cea inclusă. Prețul final se stabilește după examinare.',
  },
  {
    q: 'Doare extracția măselei de minte?',
    a: 'Extracția se face sub anestezie locală. După aceea poate apărea un disconfort moderat, care se gestionează conform recomandărilor medicului.',
  },
  {
    q: 'Cât durează extracția măselei de minte?',
    a: 'Depinde de poziția măselei și de complexitate. Medicul îți spune la consultație la ce să te aștepți.',
  },
  {
    q: 'Cât durează recuperarea după extracția măselei de minte?',
    a: 'Depinde de caz și de pacient. Medicul îți explică ce să eviți și la ce să te aștepți în primele zile.',
  },
  {
    q: 'Am nevoie de CBCT înainte de extracția măselei de minte?',
    a: 'Medicul îl recomandă atunci când este necesar, mai ales la măselele incluse sau aflate aproape de structuri importante. Costă 250 lei, iar CT-urile ulterioare de verificare sunt incluse.',
  },
  {
    q: 'Consultația este gratuită?',
    a: 'Da. Dacă medicul consideră necesară o radiografie panoramică, aceasta se taxează separat (100 lei).',
  },
]

const WA_URL = 'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Aș dori o consultație pentru extracția maseei de minte la ARA DENT STUDIO.')

export default function ExtractieMAseaDeMintePage() {
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
              Chirurgie Orală · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Extracție Maseă de Minte în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Intervenție chirurgicală sigură, sub anestezie locală
            </p>
            <Link
              href="#programare"
              className="inline-block font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300 shadow-forest"
            >
              Programează consultația
            </Link>
          </div>
        </section>

        {/* A. Intro */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Extracția măselei de minte se face la ARA DENT STUDIO din Pitești de către{' '}
                <Link
                  href="/dr-robert-lungu"
                  className="font-semibold text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  Dr. Robert Lungu
                </Link>
                , medic specialist în chirurgie dento-alveolară, de obicei sub anestezie locală. Evaluarea imagistică se face la aceeași adresă, iar consultația este gratuită.
              </p>
              <p>
                Extracția măselei de minte face parte din sfera{' '}
                <Link
                  href="/servicii/chirurgie-orala"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  chirurgiei dentare
                </Link>
                {' '}— domeniul principal de activitate al Dr. Robert Lungu. Citește și despre{' '}
                <Link
                  href="/blog/chirurgie-dentara-ce-interventii-exista"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  alte intervenții de chirurgie dentară
                </Link>
                {' '}pe care le realizăm.
              </p>
            </div>
          </div>
        </section>

        {/* B. Când este recomandată */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Când este recomandată extracția măselei de minte
            </h2>
            <ul className="space-y-4 font-jost font-light text-[16px] text-bark-dark leading-[1.9] mb-6">
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Maseaua a erupt parțial sau înclinat și creează inflamații repetate ale gingiei din jur (pericoronarită).</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Există o carie greu de tratat din cauza poziției sau a accesului dificil.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Dureri sau inflamații recurente în aceeași zonă, fără o rezolvare definitivă.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Maseaua exercită presiune asupra dinților vecini, afectând aliniamentul lor.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>A apărut un chist asociat molarului, depistat la o radiografie sau la un CBCT.</span>
              </li>
            </ul>
            <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed italic">
              Nu toate măselele de minte trebuie scoase. Decizia se ia după examinare clinică și imagistică.
            </p>
          </div>
        </section>

        {/* C. Tipuri */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Măsea erupută, semiinclusă sau inclusă
            </h2>
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                <span className="font-medium text-forest-dark">Maseă erupută</span> — a ieșit complet prin gingie. Extracția este în general mai simplă, similară cu a oricărui alt dinte.
              </p>
              <p>
                <span className="font-medium text-forest-dark">Maseă semiinclusă</span> — a ieșit parțial, restul rămânând acoperit de țesut moale sau os. Necesită o incizie gingivală pentru acces complet. Este cel mai frecvent tip întâlnit.
              </p>
              <p>
                <span className="font-medium text-forest-dark">Maseă inclusă</span> — rămâne complet în os sau sub gingie și nu a erupt deloc. Poate necesita o abordare chirurgicală adaptată pentru îndepărtarea în siguranță.
              </p>
              <p className="italic text-[15px]">
                Tipul se stabilește după examinare clinică și imagistică și influențează complexitatea intervenției și prețul final.
              </p>
            </div>
          </div>
        </section>

        {/* D. Cât costă */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Cât costă extracția măselei de minte
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-[400px] w-full border-collapse font-jost text-[15px] text-bark-dark">
                <thead>
                  <tr className="border-b border-bark-light/40">
                    <th className="text-left font-medium text-forest-dark py-3 pr-6">Serviciu</th>
                    <th className="text-right font-medium text-forest-dark py-3 pl-6 whitespace-nowrap">Preț</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_ROWS.map((row) => (
                    <tr key={row.service} className="border-b border-bark-light/20 hover:bg-cream/60 transition-colors duration-150">
                      <td className="py-3 pr-6 font-light leading-snug">{row.service}</td>
                      <td className="py-3 pl-6 text-right font-medium text-forest-dark whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-jost font-light text-[13px] text-bark leading-relaxed">
              * CT-urile ulterioare de verificare sunt incluse.
            </p>
            <p className="mt-5 font-jost font-light text-[15px] text-bark-dark leading-relaxed">
              Prețul final depinde de tipul măselei și se stabilește după examinare. Fără costuri ascunse: consultația este gratuită, iar tu afli ce plătești înainte să începi.{' '}
              <Link
                href="/preturi"
                className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
              >
                Lista completă de prețuri.
              </Link>
            </p>
          </div>
        </section>

        {/* E. Cum decurge */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Cum decurge o extracție
            </h2>
            <ol className="space-y-6 font-jost font-light text-[16px] text-bark-dark leading-[1.9] mb-6">
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  1
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Consultația gratuită și planificarea</span>{' '}
                  — examen clinic, discuție despre simptome și istoricul medical.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  2
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Imagistica</span>{' '}
                  — atunci când este necesară: radiografie panoramică (taxată separat); la măselele incluse sau aflate aproape de structuri importante, medicul poate recomanda un CBCT (tomografie 3D) — tomograful se află în clinică, fără drumuri prin oraș.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  3
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Anestezia locală</span>{' '}
                  — aplicată înainte de intervenție, pentru confort pe toată durata procedurii.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  4
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Extracția</span>{' '}
                  — la măselele incluse, medicul poate lucra chirurgical, adaptând abordarea la poziția molarului.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  5
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Indicații de recuperare</span>{' '}
                  — explicate pe înțelesul tău înainte să pleci din cabinet.
                </div>
              </li>
            </ol>
            <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed">
              Detalii pas cu pas în{' '}
              <Link
                href="/blog/extractia-maselei-de-minte-cum-decurge"
                className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
              >
                ghidul nostru despre cum decurge extracția măselei de minte
              </Link>
              .
            </p>
          </div>
        </section>

        {/* F. După extracție */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              După extracție
            </h2>
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                În primele zile pot apărea un disconfort moderat, o umflătură ușoară și o ușoară sângerare — toate se gestionează conform recomandărilor primite de la medic. Alimentația adaptată (moale, la temperatura camerei) și igiena atentă a zonei susțin procesul de vindecare.
              </p>
              <p>
                Citește ghidul practic despre{' '}
                <Link
                  href="/blog/ce-mananci-dupa-extractie-dentara"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  ce mănânci după extracție
                </Link>
                {' '}— util atât înainte, cât și după intervenție.
              </p>
              <p>
                Dacă ai nelămuriri după extracție, ne poți contacta în programul de lucru.
              </p>
            </div>
          </div>
        </section>

        {/* CTA WhatsApp contextual */}
        <CTAWhatsApp
          title="Ai nevoie de extracția maseei de minte?"
          subtitle="Programează-te direct — consultație gratuită. Radiografie: 100 lei."
          waUrl={WA_URL}
        />

        {/* G. FAQ */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10">
              Întrebări frecvente
            </h2>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </section>

        {/* H. CTA final */}
        <section id="programare" className="py-20 px-6 bg-forest">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-playfair italic text-4xl text-cream mb-4">
              Programează consultația gratuită
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Dr. Robert Lungu evaluează fiecare caz individual și îți spune dacă extracția este necesară.
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
