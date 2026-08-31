import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'
import CTAWhatsApp from '@/app/servicii/components/CTAWhatsApp'

export const metadata: Metadata = {
  title: { absolute: 'Urgente Stomatologice Pitesti | Suna 0754 219 011 | ARA DENT STUDIO' },
  description: 'Urgenta stomatologica in Pitesti? Suna acum: 0754 219 011. Gasim loc pentru tine in aceeasi zi, fara programare in avans. Dr. Robert Lungu, specialist chirurgie dento-alveolara.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/urgente-stomatologice' },
  openGraph: {
    title: 'Urgente Stomatologice Pitesti | Suna 0754 219 011 | ARA DENT STUDIO',
    description: 'Urgenta stomatologica in Pitesti? Suna acum: 0754 219 011. Gasim loc pentru tine in aceeasi zi, fara programare in avans. Dr. Robert Lungu, specialist chirurgie dento-alveolara.',
    url: 'https://www.aradentpitesti.ro/servicii/urgente-stomatologice',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Urgente Stomatologice',
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
  description: 'Urgente stomatologice tratate fara programare in avans, in aceeasi zi.',
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Trebuie sa ma programez pentru o urgenta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nu — la ARA DENT STUDIO urgentele au intaietate. Suna si gasim loc pentru tine in aceeasi zi, oricand in programul de lucru Luni-Vineri 09:00-18:00.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce urgente tratati?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tratam durere acuta, abces dentar localizat, fracturi dentare, dinte avulsionat si sangerare post-extractie. Singura exceptie: abcesele ajunse in spatiile fasciale, care necesita chirurgie maxilo-faciala sau UPU.',
      },
    },
    {
      '@type': 'Question',
      name: 'Care e programul pentru urgente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Luni-Vineri 09:00-18:00. Urgentele sunt preluate oricand in acest interval, fara programare separata.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cat costa consultatia de urgenta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tratamentul de urgenta: 200 lei. Radiografie panoramica (daca este necesara): 100 lei.',
      },
    },
  ],
}

const URGENTE_CARDS = [
  {
    titlu: 'Durere acută spontană',
    text: 'Durere intensă care apare fără motiv, mai ales noaptea. Semn de pulpită acută — nervul e afectat.',
  },
  {
    titlu: 'Abces dentar localizat',
    text: 'Umflătură dureroasă la nivel gingival sau facial, cu sau fără febră. Necesită drenaj urgent.',
  },
  {
    titlu: 'Dinte căzut complet',
    text: 'În urma unui traumatism. Fiecare minut contează — vino cât mai repede.',
  },
  {
    titlu: 'Fractură cu expunerea nervului',
    text: 'Dinte spart cu durere intensă la aer, rece sau atingere.',
  },
  {
    titlu: 'Sângerare post-extracție',
    text: 'Sângerare abundentă care nu se oprește după 2-3 ore de la o extracție recentă.',
  },
]

const POT_ASTEPTA = [
  'Sensibilitate la rece sau dulce',
  'Coroană sau lucrare protetică desprinsă',
  'Obturaţie căzută',
  'Sângerare gingivală ușoară',
]

const FAQ_ITEMS = [
  {
    q: 'Trebuie să mă programez pentru o urgență?',
    a: 'Nu — la ARA DENT STUDIO urgențele au întâietate. Sună și găsim loc pentru tine în aceeași zi, oricând în programul de lucru Luni–Vineri 09:00–18:00.',
  },
  {
    q: 'Ce urgențe tratați?',
    a: 'Tratăm durere acută, abces dentar localizat, fracturi dentare, dinte avulsionat și sângerare post-extracție. Singura excepție: abcesele ajunse în spațiile fasciale, care necesită chirurgie maxilo-facială sau UPU.',
  },
  {
    q: 'Care e programul pentru urgențe?',
    a: 'Luni–Vineri 09:00–18:00. Urgențele sunt preluate oricând în acest interval, fără programare separată.',
  },
  {
    q: 'Cât costă consultația de urgență?',
    a: 'Tratamentul de urgență costă 200 lei. Dacă e necesară radiografie panoramică, aceasta se adaugă: 100 lei. CT dentar (CBCT): 250 lei.',
  },
  {
    q: 'Tratați și copii în urgență?',
    a: 'Da — tratăm urgențe pentru toate vârstele, inclusiv copii, în limita competențelor unui cabinet de chirurgie dento-alveolară.',
  },
]

export default function UrgenteStomatologicePage() {
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
        <section className="bg-forest-dark pt-40 pb-24 px-6">
          <div className="container-site max-w-3xl">
            <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
              Urgențe Stomatologice · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair font-bold text-[40px] lg:text-[48px] text-cream leading-tight mb-5">
              Urgențe Stomatologice în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-cream/80 mb-8">
              Găsim loc pentru tine oricând — fără programare în avans
            </p>

            {/* Banner telefon prominent */}
            <a
              href="tel:+40754219011"
              className="block mb-10 rounded-sm text-center py-6 px-8 hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#8B0000' }}
            >
              <p className="font-playfair font-bold text-[28px] lg:text-[32px] text-white leading-tight">
                Sună acum: 0754 219 011
              </p>
              <p className="font-jost text-[16px] text-cream/85 mt-2">
                Luni–Vineri 09:00–18:00
              </p>
            </a>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+40754219011"
                className="inline-flex items-center justify-center gap-3 font-jost text-sm uppercase tracking-wider bg-red-700 text-white px-8 py-4 rounded-sm hover:bg-red-800 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                Sună acum — 0754 219 011
              </a>
              <a
                href="https://wa.me/40754219011?text=Bun%C4%83%20ziua%2C%20am%20o%20urgent%C4%83%20stomatologic%C4%83."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-jost text-sm uppercase tracking-wider bg-[#25D366] text-white px-8 py-4 rounded-sm hover:bg-[#1ebe5d] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Scrie pe WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Ce tratăm */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-3 text-center">
              Urgențe care necesită consult în aceeași zi
            </h2>
            <p className="font-jost font-light text-[15px] text-bark-dark text-center mb-12">
              Sună și vii direct — fără programare în avans
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {URGENTE_CARDS.map((card) => (
                <div
                  key={card.titlu}
                  className="bg-forest-dark rounded-sm p-8"
                  style={{ boxShadow: '0 8px 32px rgba(45,106,79,0.12)' }}
                >
                  <div className="w-8 h-[2px] bg-gold mb-5" />
                  <h3 className="font-playfair text-xl text-cream mb-3">{card.titlu}</h3>
                  <p className="font-jost font-light text-[14px] text-cream/75 leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce poate aștepta */}
        <section className="py-20 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10">
              Situații care pot aștepta până a doua zi
            </h2>
            <ul className="space-y-4">
              {POT_ASTEPTA.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-jost font-light text-[16px] text-bark-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* De ce ARA DENT STUDIO */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-8">
              De ce să alegi ARA DENT STUDIO pentru urgențe
            </h2>
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                La ARA DENT STUDIO, <Link href="/dr-robert-lungu" className="font-semibold text-forest-dark underline underline-offset-2 hover:text-gold transition-colors duration-200">Dr. Robert Lungu</Link> este medic specialist în chirurgie dento-alveolară — specializarea care acoperă toate tipurile de urgențe stomatologice, de la <Link href="/servicii/chirurgie-orala" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">extracții chirurgicale</Link> la drenajul abceselor dentare localizate.
              </p>
              <p>
                Cabinetul este dotat cu echipamente de ultimă generație — scanner intraoral, tomograf CBCT propriu și microscop dentar — care permit diagnosticul rapid și tratamentul precis chiar și în situații de urgență.
              </p>
            </div>
          </div>
        </section>

        {/* Cum ajungi la noi */}
        <section className="py-20 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10">
              Cum ajungi la noi
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <a
                    href="https://maps.google.com/?q=ARA+DENT+STUDIO+Pitesti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jost font-medium text-[16px] text-forest-dark hover:text-forest transition-colors duration-200 underline underline-offset-2"
                  >
                    Bd. Republicii nr. 19, Pitești
                  </a>
                  <p className="font-jost font-light text-[14px] text-bark mt-1">
                    Vezi pe Google Maps →
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="font-jost font-medium text-[16px] text-forest-dark">
                    Luni – Vineri: 09:00 – 18:00
                  </p>
                  <p className="font-jost font-light text-[14px] text-bark mt-1">
                    Urgențele sunt preluate oricând în acest interval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Când mergi la spital */}
        <section className="py-20 px-6" style={{ backgroundColor: '#8B0000' }}>
          <div className="container-site max-w-3xl">
            <div className="w-8 h-[1px] bg-gold/60 mb-8" />
            <h2 className="font-playfair text-3xl text-white mb-6">
              Când mergi direct la spital sau suni 112
            </h2>
            <p className="font-jost font-light text-[16px] text-cream/85 leading-[1.9]">
              Există situații care depășesc competența unui cabinet stomatologic: umflătură care se extinde rapid pe față sau gât, dificultate la înghițit sau deschiderea gurii, febră peste 38,5 grade asociată cu durere dentară. Acestea necesită chirurgie maxilo-facială (BMF) sau UPU.
            </p>
            <div className="w-8 h-[1px] bg-gold/60 mt-8" />
          </div>
        </section>

        {/* CTA WhatsApp contextual */}
        <CTAWhatsApp
          title="Ai o urgență dentară acum?"
          subtitle="Suntem disponibili Luni-Vineri 09:00-18:00."
          waUrl={'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Am o urgență stomatologică și aș dori să mă programez.')}
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
        <section className="py-20 px-6 bg-gold">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-playfair italic text-3xl lg:text-4xl text-forest-dark mb-10">
              Nu aștepta — sună acum
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+40754219011"
                className="inline-flex items-center justify-center gap-3 font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                0754 219 011
              </a>
              <a
                href="https://wa.me/40754219011?text=Bun%C4%83%20ziua%2C%20am%20o%20urgent%C4%83%20stomatologic%C4%83."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-jost text-sm uppercase tracking-wider bg-forest-dark text-cream px-8 py-4 rounded-sm hover:bg-forest transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <p className="font-jost text-[12px] uppercase tracking-wider text-bark mt-8">
              Luni–Vineri 09:00–18:00 · Bd. Republicii nr. 19, Pitești
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
