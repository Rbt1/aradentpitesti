import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: 'Parodontologie Pitești | ARA DENT STUDIO' },
  description: 'Tratament parodontal în Pitești și județul Argeș. Detartraj și chiuretaj subgingival, de la 200 lei. Consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/parodontologie' },
  openGraph: {
    title: 'Parodontologie Pitești, Argeș | Tratament Boală Parodontală | ARA DENT STUDIO',
    description: 'Tratament parodontal în Pitești și județul Argeș. Detartraj și chiuretaj subgingival, de la 200 lei. Consultație gratuită.',
    url: 'https://www.aradentpitesti.ro/servicii/parodontologie',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tratament Parodontal',
  provider: {
    '@type': 'Dentist',
    name: 'ARA DENT STUDIO',
  },
  areaServed: 'Pitești',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RON',
    price: '200',
    description: 'Chiuretaj câmp închis, per ședință',
  },
}

const BENEFITS = [
  {
    title: 'Diagnostic precoce',
    text: 'Detectăm boala parodontală din stadii incipiente, când tratamentul e simplu și eficient.',
  },
  {
    title: 'Salvăm dinții',
    text: 'Tratamentul parodontal oprește distrugerea osului și protejează dinții naturali.',
  },
  {
    title: 'Tratament blând',
    text: 'Procedurile parodontale moderne sunt confortabile și cu recuperare rapidă.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Cât costă tratamentul parodontal?',
    a: 'Chiuretajul în câmp închis costă 200 lei per ședință. Tratamentul complet variază în funcție de severitatea bolii parodontale și numărul de ședințe necesare.',
  },
  {
    q: 'Cum știu că am boală parodontală?',
    a: 'Sângerarea gingiilor, retracția gingivală, mobilitatea dentară sau spații între dinți sunt semne clare. Vino la consultație pentru evaluare.',
  },
  {
    q: 'Se poate vindeca boala parodontală?',
    a: 'În stadii incipiente da. În stadii avansate, tratamentul oprește evoluția și protejează dinții rămași. Intervenția rapidă e esențială.',
  },
  {
    q: 'Cât durează tratamentul parodontal?',
    a: 'Depinde de severitate — de la 1-2 ședințe pentru forme ușoare până la tratament complex pentru forme avansate.',
  },
  {
    q: 'Parodontoza e contagioasă?',
    a: 'Bacteriile care cauzează parodontoza se pot transmite, dar boala în sine depinde de mulți factori: igienă, genetică, fumat, diabet.',
  },
  {
    q: 'Pot face implant dacă am parodontoză?',
    a: 'Da, dar mai întâi tratăm boala parodontală. Un implant pe un os parodontal netratat are șanse mari de eșec.',
  },
]

export default function ParodontologiePage() {
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
              Parodontologie · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Parodontologie în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Oprim boala parodontală înainte să fie prea târziu
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
                Boala parodontală este una dintre cele mai frecvente afecțiuni dentare și, netratată, duce la pierderea dinților.
              </p>
              <p>
                Sângerarea gingiilor la periaj, retracția gingivală, mobilitatea dentară sau respirația urât mirositoare sunt semne clare că ai nevoie de evaluare parodontală.
              </p>
              <p>
                Parodontoza nu doare la început — de aceea e periculoasă. Bacteriile distrug treptat osul și ligamentele care susțin dinții, fără ca pacientul să simtă nimic. Când durerea apare, boala e deja în stadiu avansat.
              </p>
              <p>
                La ARA DENT STUDIO evaluăm starea parodontală la fiecare consultație. Tratamentul parodontal oprește evoluția bolii și protejează dinții. Cu cât intervenim mai devreme, cu atât rezultatele sunt mai bune și tratamentul mai simplu.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10 text-center">
              De ce să tratezi boala parodontală
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
              Evaluare parodontală gratuită
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Nu aștepta până când mobilitatea dentară devine vizibilă. Vino la evaluare acum.
            </p>
            <a
              href="https://wa.me/40754219011?text=Bun%C4%83%20ziua!%20Doresc%20o%20consulta%C8%9Bie%20pentru%20parodontologie."
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
