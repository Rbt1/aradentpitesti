import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'

export const metadata: Metadata = {
  title: 'Protetică Dentară Pitești | Coroane și Punți',
  description: 'Protetică dentară în Pitești. Coroane, punți și proteze din materiale premium. Dr. Robert Lungu, ARA DENT STUDIO. Estetică și durabilitate garantate.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/protetica-dentara' },
  openGraph: {
    title: 'Protetică Dentară Pitești | Coroane și Punți',
    description: 'Coroane, punți și proteze din materiale premium în Pitești. Dr. Robert Lungu, ARA DENT STUDIO.',
    url: 'https://www.aradentpitesti.ro/servicii/protetica-dentara',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

const BENEFITS = [
  {
    title: 'Materiale premium',
    text: 'Coroane din zirconiu sau ceramică integral — estetice, biocompatibile și durabile. Identice vizual cu dinții naturali.',
  },
  {
    title: 'Potrivire perfectă',
    text: 'Fiecare lucrare protetică este realizată individual, adaptată ocluziei și culorii dinților tăi naturali.',
  },
  {
    title: 'Soluții complete',
    text: 'De la o singură coroană până la restaurări complete — oferim soluția potrivită pentru fiecare situație.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Cât durează o coroană dentară?',
    a: 'O coroană din zirconiu sau ceramică durează 10-15 ani sau mai mult cu îngrijire corectă. Materialele pe care le folosim sunt de ultimă generație.',
  },
  {
    q: 'Ce este o coroană dentară și când e necesară?',
    a: 'O coroană este o „căciulă" care acoperă complet dintele deteriorat, refăcând forma, funcția și estetica. Este necesară după tratament de canal, fracturi sau carii extinse.',
  },
  {
    q: 'Care e diferența dintre coroană și fațetă?',
    a: 'Coroana acoperă tot dintele, fațeta doar suprafața frontală. Fațetele sunt pentru corecturi estetice minore; coroanele pentru restaurare structurală.',
  },
  {
    q: 'Cât durează realizarea unei coroane?',
    a: 'De obicei 2 ședințe la interval de 1-2 săptămâni. Prima ședință — prepararea dintelui și amprenta; a doua — cimentarea coroanei finale.',
  },
  {
    q: 'Punte sau implant — ce aleg?',
    a: 'Implantul este soluția superioară pe termen lung: nu afectează dinții vecini și menține osul. Puntea este o alternativă când implantul nu e posibil. La consultație evaluăm ce se potrivește cel mai bine situației tale.',
  },
]

export default function ProteticaDentaraPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">

        {/* Hero */}
        <section className="bg-cream-dark pt-40 pb-24 px-6">
          <div className="container-site max-w-3xl">
            <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
              Protetică Dentară · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Protetică Dentară în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Coroane, punți și proteze — estetice, durabile, personalizate
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
                Protetică dentară înseamnă refacerea dinților deteriorați sau înlocuirea celor lipsă cu lucrări fixe sau mobilizabile — coroane, punți, proteze totale sau parțiale.
              </p>
              <p>
                La ARA DENT STUDIO folosim materiale de înaltă calitate — zirconiu, ceramică integral și compozite premium. Fiecare lucrare protetică este realizată individual: adaptată culorii dinților tăi, ocluziei și fizionomiei feței.
              </p>
              <p>
                Dr. Robert Lungu planifică fiecare restaurare cu atenție la detaliu — de la prepararea corectă a dintelui, la amprentă precisă, până la adaptarea finală a lucrării. Rezultatul trebuie să fie invizibil: nimeni nu ar trebui să-și dea seama că ai o coroană.
              </p>
              <p>
                Indiferent dacă ai nevoie de o singură coroană după un tratament de canal sau de o restaurare completă a arcadei, îți oferim o soluție adaptată nevoilor și bugetului tău. Vino la o consultație și stabilim împreună planul optim.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10 text-center">
              Restaurări protetice de calitate
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
              Refă-ți zâmbetul
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Consultație pentru stabilirea planului de tratament protetic. Evaluăm situația ta și îți propunem soluția optimă.
            </p>
            <a
              href="https://wa.me/40754219011?text=Bun%C4%83%20ziua!%20Doresc%20o%20consulta%C8%9Bie%20pentru%20protetic%C4%83%20dentar%C4%83."
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
