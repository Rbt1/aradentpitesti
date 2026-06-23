import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'

export const metadata: Metadata = {
  title: 'All-on-4 și All-on-6 Pitești | Dinți Fixi pe Implanturi | ARA DENT STUDIO',
  description: 'Reabilitare totală pe implanturi All-on-4 și All-on-6 în Pitești. Încărcare imediată, Dr. Robert Lungu. Prețuri de la 12.000 lei.',
  alternates: { canonical: 'https://aradentpitesti.ro/servicii/all-on-4-all-on-6' },
  openGraph: {
    title: 'All-on-4 și All-on-6 Pitești | Dinți Fixi pe Implanturi',
    description: 'Reabilitare totală pe implanturi All-on-4 și All-on-6 în Pitești. Încărcare imediată, Dr. Robert Lungu. Prețuri de la 12.000 lei.',
    url: 'https://aradentpitesti.ro/servicii/all-on-4-all-on-6',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'All-on-4 și All-on-6',
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
  offers: [
    {
      '@type': 'Offer',
      priceCurrency: 'RON',
      price: '12000',
      description: 'All-on-4, per arcadă',
    },
    {
      '@type': 'Offer',
      priceCurrency: 'RON',
      price: '14000',
      description: 'All-on-6, per arcadă',
    },
  ],
}

const BENEFITS = [
  {
    title: 'Încărcare imediată',
    text: 'În funcție de caz, lucrarea provizorie fixă poate fi montată în aceeași zi sau în 24-48 ore — pleci cu dinți fixi, nu cu proteză temporară.',
  },
  {
    title: 'Stabilitate totală',
    text: 'Lucrarea este complet fixă, sustinută de implanturi. Nu se mișcă, nu necesită adeziv, funcționează ca o dantură naturală.',
  },
  {
    title: 'Plan personalizat',
    text: 'Decizia între 4 sau 6 implanturi se stabilește individual, în funcție de osul disponibil și necesitățile fiecărui caz.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Care e diferența între All-on-4 și All-on-6?',
    a: 'Diferența constă în numărul de implanturi folosite pentru a sustine lucrarea — 4 sau 6. Decizia se stabilește la consultație, în funcție de osul disponibil și distribuția optimă a forțelor de masticație pentru cazul tău specific.',
  },
  {
    q: 'Cât costă tratamentul All-on-4 sau All-on-6?',
    a: 'All-on-4 costă 12.000 lei per arcadă, iar All-on-6 costă 14.000 lei per arcadă. Prețul include implanturile și lucrarea provizorie fixă. Prețul exact se confirmă la consultația gratuită.',
  },
  {
    q: 'Pot pleca din cabinet cu dinți fixi în aceeași zi?',
    a: 'În anumite situații, da — cu încărcare imediată. În funcție de caz, lucrarea provizorie fixă poate fi montată chiar în ziua intervenției sau în 24-48 ore.',
  },
  {
    q: 'Cât durează tot procesul, de la inserare la lucrarea definitivă?',
    a: 'Lucrarea provizorie fixă se montează imediat sau în câteva zile. Lucrarea definitivă se realizează după perioada de oseointegrare, de obicei 3-6 luni.',
  },
  {
    q: 'Este dureros tratamentul?',
    a: 'Intervenția se realizează sub anestezie locală. Disconfortul post-operator este similar cu cel de la o extracție chirurgicală și se gestionează cu medicație antialgică.',
  },
  {
    q: 'Sunt candidat pentru All-on-4/6 dacă port de mult timp proteză totală?',
    a: 'În majoritatea cazurilor, da. La consultația gratuită, cu scanare și CT 3D, evaluăm exact osul disponibil și îți recomandăm soluția potrivită situației tale.',
  },
]

export default function AllOn4AllOn6Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <Navbar />
      <main className="bg-cream">

        {/* Hero */}
        <section className="bg-cream-dark pt-40 pb-24 px-6">
          <div className="container-site max-w-3xl">
            <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
              All-on-4 / All-on-6 · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              All-on-4 și All-on-6 în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Dantură fixă pe implanturi — recuperare completă într-o singură zi
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
                Când lipsesc toți dinții de pe o arcadă, soluția care schimbă complet calitatea vieții este o lucrare fixă, susținută de implanturi strategic poziționate — cunoscută ca All-on-4 sau All-on-6.
              </p>
              <p>
                Spre deosebire de proteza totală mobilă, care se sprijină direct pe gingie și pe creasta osoasă, lucrarea All-on-4/6 este complet fixă. Nu se scoate, nu se mișcă, funcționează ca o dantură naturală.
              </p>
              <p>
                La ARA DENT STUDIO, Dr. Robert Lungu evaluează fiecare caz individual pentru a determina dacă sunt necesare 4 sau 6 implanturi — decizia depinde de cantitatea de os disponibilă, distribuția forțelor de masticație și particularitățile anatomice ale fiecărui pacient.
              </p>
              <p>
                Unul dintre avantajele majore ale acestei proceduri este încărcarea imediată — în funcție de caz, lucrarea provizorie fixă poate fi montată chiar în aceeași zi cu inserarea implanturilor, sau în 24-48 ore. Aceasta înseamnă că pleci din cabinet cu dinți fixi, nu cu o proteză temporară mobilă.
              </p>
              <p>
                Procesul începe cu o evaluare completă, incluzând scanare și CT 3D, pentru planificarea exactă a poziției implanturilor. Această precizie permite plasarea optimă a celor 4 sau 6 implanturi, distribuind corect forțele de masticație pe toată arcada.
              </p>
              <p>
                După perioada de oseointegrare (3-6 luni), lucrarea provizorie este înlocuită cu cea definitivă, realizată din materiale durabile precum zirconiul.
              </p>
              <p>
                Această soluție este ideală pentru pacienții cu edentație totală sau aproape totală, care vor să renunțe definitiv la proteza mobilă și la disconfortul zilnic al scoaterii și punerii acesteia.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10 text-center">
              Dantură fixă, recuperare rapidă
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
              Programează consultația gratuită
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Evaluăm cazul tău cu scanare și CT 3D și îți recomandăm soluția potrivită — All-on-4 sau All-on-6.
            </p>
            <a
              href="https://wa.me/40754219011?text=Bun%C4%83%20ziua!%20Doresc%20o%20consulta%C8%9Bie%20gratuit%C4%83%20pentru%20All-on-4%20%2F%20All-on-6."
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
