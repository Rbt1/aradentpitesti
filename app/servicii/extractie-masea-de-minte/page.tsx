import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'
import CTAWhatsApp from '@/app/servicii/components/CTAWhatsApp'

export const metadata: Metadata = {
  title: { absolute: 'Extracție Maseă de Minte Pitești | de la 400 lei | ARA DENT STUDIO' },
  description: 'Extracție maseă de minte în Pitești de la 400 lei. Extracție simplă, semiinclusă sau inclusă. Dr. Robert Lungu, specialist chirurgie dento-alveolară. Consultație 100 lei.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/extractie-masea-de-minte' },
  openGraph: {
    title: 'Extracție Maseă de Minte Pitești | de la 400 lei | ARA DENT STUDIO',
    description: 'Extracție maseă de minte în Pitești de la 400 lei. Extracție simplă, semiinclusă sau inclusă. Dr. Robert Lungu, specialist chirurgie dento-alveolară. Consultație 100 lei.',
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
      name: 'Cat costa extractia maseei de minte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extractia molarului de minte total erupt costa 400 lei. Extractia molarului semiinclus costa 600 lei, iar extractia molarului inclus costa 800 lei. Consultatia + radiografia panoramica: 100 lei.',
      },
    },
    {
      '@type': 'Question',
      name: 'Doare extractia maseei de minte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extractia se realizeaza sub anestezie locala — nu simti durere in timpul interventiei. Dupa extractie poate aparea un disconfort normal de 2-3 zile, gestionabil cu antiinflamatoare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cand este necesara extractia maseei de minte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cand maseaua de minte cauzeaza durere, infectie, impinge dintii vecini, este semiinclusa sau inclusa si nu are spatiu de eruptie, sau cand prezinta carie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce este un molar de minte inclus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un molar de minte inclus este complet acoperit de os sau gingie si nu a erupt deloc. Necesita extractie chirurgicala mai complexa decat un molar erupt normal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Folositi CT pentru extractia maseei de minte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In cazurile complexe (molar inclus sau aproape de nervul alveolar inferior), folosim tomograful CBCT propriu pentru planificarea precisa a interventiei si protejarea structurilor anatomice.',
      },
    },
  ],
}

const PRICES = [
  {
    title: 'Molar erupt',
    subtitle: '(complet ieșit din gingie)',
    price: '400 lei',
    text: 'Extracție simplă, fără complicații chirurgicale.',
    badge: null,
  },
  {
    title: 'Molar semiinclus',
    subtitle: '(parțial acoperit de gingie)',
    price: '600 lei',
    text: 'Necesită incizie gingivală pentru acces complet.',
    badge: 'Cel mai frecvent',
  },
  {
    title: 'Molar inclus',
    subtitle: '(complet acoperit de os/gingie)',
    price: '800 lei',
    text: 'Intervenție chirurgicală complexă, planificare cu CBCT în cazurile dificile.',
    badge: null,
  },
]

const INDICATII = [
  'Durere sau infecție recurentă',
  'Molar semiinclus sau inclus fără spațiu de erupție',
  'Presiune asupra dinților vecini',
  'Carie pe molarul de minte',
  'Pericoronarită (inflamația gingiei din jurul molarului)',
]

const FAQ_ITEMS = [
  {
    q: 'Cât costă extracția maseei de minte?',
    a: 'Extracția molarului de minte total erupt costă 400 lei. Extracția molarului semiinclus costă 600 lei, iar extracția molarului inclus costă 800 lei. Consultația + radiografia panoramică: 100 lei.',
  },
  {
    q: 'Doare extracția maseei de minte?',
    a: 'Extracția se realizează sub anestezie locală — nu simți durere în timpul intervenției. După extracție poate apărea un disconfort normal de 2-3 zile, gestionabil cu antiinflamatoare.',
  },
  {
    q: 'Când este necesară extracția maseei de minte?',
    a: 'Când maseaua de minte cauzează durere, infecție, împinge dinții vecini, este semiinclusă sau inclusă și nu are spațiu de erupție, sau când prezintă carie.',
  },
  {
    q: 'Ce este un molar de minte inclus?',
    a: 'Un molar de minte inclus este complet acoperit de os sau gingie și nu a erupt deloc. Necesită extracție chirurgicală mai complexă decât un molar erupt normal.',
  },
  {
    q: 'Folosiți CT pentru extracția maseei de minte?',
    a: 'În cazurile complexe — molar inclus sau aproape de nervul alveolar inferior — folosim tomograful CBCT propriu pentru planificarea precisă a intervenției și protejarea structurilor anatomice.',
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

        {/* Descriere */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Molarul de minte (al treilea molar) este ultimul dinte care erupe, de obicei între 18 și 25 de ani. Când nu are spațiu suficient de erupție sau crește în poziție incorectă, poate cauza durere, infecție și afectarea dinților vecini.
              </p>
              <p>
                La ARA DENT STUDIO, <Link href="/dr-robert-lungu" className="font-semibold text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">Dr. Robert Lungu</Link>, medic specialist în chirurgie dento-alveolară, evaluează fiecare caz individual și recomandă extracția doar când este cu adevărat necesară.
              </p>
            </div>
          </div>
        </section>

        {/* Prețuri */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10 text-center">
              Prețuri extracție maseă de minte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {PRICES.map((card) => (
                <div
                  key={card.title}
                  className="bg-cream border border-bark-light/30 rounded-sm p-8 relative"
                  style={{ boxShadow: '0 4px 20px rgba(45,106,79,0.07)' }}
                >
                  {card.badge && (
                    <span className="absolute top-4 right-4 font-jost font-bold text-[10px] uppercase tracking-wider text-forest-dark bg-gold px-3 py-1 rounded-sm">
                      {card.badge}
                    </span>
                  )}
                  <div className="w-8 h-[2px] bg-gold mb-5" />
                  <h3 className="font-playfair font-bold text-xl text-forest-dark mb-1">
                    {card.title}
                  </h3>
                  <p className="font-jost text-[12px] text-bark mb-4">{card.subtitle}</p>
                  <p className="font-playfair font-bold text-[32px] text-forest mb-4 leading-none">
                    {card.price}
                  </p>
                  <p className="font-jost font-light text-[14px] text-bark-dark leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-jost text-[13px] text-bark text-center mt-8">
              Consultație + radiografie panoramică: 100 lei &nbsp;|&nbsp; CT dentar: 250 lei (când este necesar)
            </p>
          </div>
        </section>

        {/* Când e necesară */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10">
              Când recomandăm extracția
            </h2>
            <ul className="space-y-4">
              {INDICATII.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-[7px]" />
                  <span className="font-jost font-light text-[16px] text-bark-dark leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CBCT */}
        <section className="py-16 px-6 bg-forest-dark">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-cream mb-6">
              Planificare precisă cu CBCT propriu
            </h2>
            <div className="space-y-4 font-jost font-light text-[16px] text-forest-light leading-[1.9]">
              <p>
                În cazurile complexe — molar inclus profund sau aproape de nervul alveolar inferior — folosim tomograful CBCT propriu pentru vizualizarea exactă a poziției molarului și a structurilor anatomice din jur.
              </p>
              <p>
                Totul în același cabinet — fără drumuri la centre de radiologie externe.
              </p>
            </div>
          </div>
        </section>

        {/* CTA WhatsApp contextual */}
        <CTAWhatsApp
          title="Ai nevoie de extracția maseei de minte?"
          subtitle="Programează-te direct — consultație + radiografie: 100 lei."
          waUrl={WA_URL}
        />

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
              Programează evaluarea
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Consultație + radiografie panoramică: 100 lei — stabilim împreună dacă extracția este necesară.
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
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
