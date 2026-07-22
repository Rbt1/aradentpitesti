import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: 'Endodonție Pitești | Tratament Canal de la 400 lei | ARA DENT STUDIO' },
  description: 'Tratament de canal în Pitești de la 400 lei, cu microscop dentar. Nedureros, rezultat durabil. Dr. Robert Lungu. Consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/endodontie' },
  openGraph: {
    title: 'Endodonție Pitești | Tratament Canal de la 400 lei | ARA DENT STUDIO',
    description: 'Tratament de canal în Pitești de la 400 lei, cu microscop dentar. Nedureros, rezultat durabil. Dr. Robert Lungu. Consultație gratuită.',
    url: 'https://www.aradentpitesti.ro/servicii/endodontie',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tratament de Canal',
  provider: {
    '@type': 'Dentist',
    name: 'ARA DENT STUDIO',
  },
  areaServed: 'Pitești',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RON',
    price: '400',
    description: 'Dinte monoradicular',
  },
}

const BENEFITS = [
  {
    title: 'Microscop dentar',
    text: 'Folosim microscop dentar pentru precizie maximă și identificarea tuturor canalelor radiculare.',
  },
  {
    title: 'Salvăm dintele',
    text: 'Endodonția evită extracția. Dinții naturali sunt întotdeauna prima opțiune.',
  },
  {
    title: 'Fără durere',
    text: 'Sub anestezie locală, procedura este complet confortabilă. Durerea dispare după tratament.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Cât costă un tratament de canal?',
    a: 'Tratamentul de canal pentru un dinte monoradicular costă 400 lei. Pentru dinți multiradiculari (premolari, molari), prețul este mai mare, în funcție de numărul de canale — se stabilește exact la consultație.',
  },
  {
    q: 'Tratamentul de canal doare?',
    a: 'Nu — se realizează sub anestezie locală. Mulți pacienți sunt surprinși cât de confortabil este tratamentul modern.',
  },
  {
    q: 'Câte ședințe necesită un tratament de canal?',
    a: 'De obicei 1-2 ședințe, în funcție de complexitatea cazului și numărul de canale radiculare.',
  },
  {
    q: 'Ce se întâmplă dacă nu fac tratamentul?',
    a: 'Infecția se extinde, poate apărea un abces și dintele va trebui extras. Tratamentul timpuriu salvează dintele și elimină durerea definitiv.',
  },
  {
    q: 'Cât durează o ședință de endodonție?',
    a: 'De obicei 60-90 minute. Dr. Robert Lungu lucrează metodic și precis pentru un rezultat durabil.',
  },
  {
    q: 'Poate fi salvat orice dinte cu tratament de canal?',
    a: 'Nu întotdeauna — depinde de gradul de distrucție. La consultație evaluăm dacă dintele poate fi salvat sau dacă extracția e singura opțiune.',
  },
]

export default function EndodontiePage() {
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
              Endodonție · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Endodonție în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Tratament de canal nedureros — salvăm dintele
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
                Endodonția — cunoscut popular ca tratament de canal — este procedura prin care salvăm un dinte afectat de carie profundă sau infecție pulpară.
              </p>
              <p>
                Fără tratament endodontic, un dinte cu pulpită sau granulom trebuie extras. Cu endodonție, dintele este salvat, infecția eliminată și durerea dispare definitiv.
              </p>
              <p>
                La ARA DENT STUDIO folosim microscop dentar pentru precizie maximă — vedem detalii invizibile cu ochiul liber, ceea ce crește semnificativ rata de succes a tratamentului. Microscopul ne permite să identificăm toate canalele radiculare și să lucrăm cu acuratețe chirurgicală.
              </p>
              <p>
                Tratamentul se realizează sub anestezie locală. Contrar mitului popular, endodonția modernă nu doare — pacienții noștri sunt surprinși cât de confortabilă este experiența. Durerea care a cauzat prezentarea la cabinet dispare după prima ședință.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10 text-center">
              Endodonție cu microscop dentar
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
              Salvează-ți dintele acum
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Cu cât intervenim mai devreme, cu atât șansele de salvare a dintelui sunt mai mari.
            </p>
            <a
              href="https://wa.me/40754219011?text=Bun%C4%83%20ziua!%20Doresc%20o%20consulta%C8%9Bie%20pentru%20tratament%20de%20canal."
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
