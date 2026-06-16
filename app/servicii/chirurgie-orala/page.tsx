import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'

export const metadata: Metadata = {
  title: 'Chirurgie Orală Pitești | Dr. Robert Lungu',
  description: 'Chirurgie orală și chirurgie dento-alveolară în Pitești. Dr. Robert Lungu, medic specialist. Extracții, rezecții, proceduri complexe.',
  alternates: { canonical: 'https://aradentpitesti.ro/servicii/chirurgie-orala' },
  openGraph: {
    title: 'Chirurgie Orală Pitești | Dr. Robert Lungu',
    description: 'Chirurgie orală și chirurgie dento-alveolară în Pitești. Dr. Robert Lungu, medic specialist. Extracții, rezecții, proceduri complexe.',
    url: 'https://aradentpitesti.ro/servicii/chirurgie-orala',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

const BENEFITS = [
  {
    title: 'Specialist dedicat',
    text: 'Dr. Robert Lungu are specializare în chirurgie dento-alveolară — domeniul său principal de activitate.',
  },
  {
    title: 'Minim invaziv',
    text: 'Tehnici moderne care reduc traumatismul și accelerează recuperarea.',
  },
  {
    title: 'Suport post-operator',
    text: 'Nu ești singur după intervenție. Suntem disponibili pentru orice nelămurire pe tot parcursul recuperării.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Ce tipuri de extracții realizați?',
    a: 'Realizăm extracții simple, extracții chirurgicale, extracții ale măselelor de minte și ale dinților incluși.',
  },
  {
    q: 'Cât durează recuperarea după o extracție?',
    a: 'În general 3-5 zile. Dr. Robert Lungu îți oferă instrucțiuni clare post-operator pentru o recuperare rapidă.',
  },
  {
    q: 'Intervenția chirurgicală doare?',
    a: 'Nu — procedura se realizează sub anestezie locală. Dr. Lungu lucrează cu blândețe și precizie pentru confortul tău maxim.',
  },
  {
    q: 'Trebuie să iau antibiotice după extracție?',
    a: 'Depinde de complexitatea intervenției. Dr. Robert Lungu îți prescrie tratamentul post-operator adecvat și îți explică exact ce ai de făcut acasă.',
  },
  {
    q: 'Pot mânca după o extracție?',
    a: 'Da, dar cu precauție. Îți recomandăm alimente moi și reci în primele 24 ore. Primești instrucțiuni complete înainte să pleci din cabinet.',
  },
]

export default function ChirurgieOralaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">

        {/* Hero */}
        <section className="bg-cream-dark pt-40 pb-24 px-6">
          <div className="container-site max-w-3xl">
            <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
              Chirurgie Orală · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Chirurgie Orală în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Specialist chirurgie dento-alveolară — Dr. Robert Lungu
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
                Chirurgia orală cuprinde o gamă largă de proceduri — de la extracții simple până la intervenții complexe precum rezecții apicale sau extracții ale dinților incluși.
              </p>
              <p>
                Dr. Robert Lungu este medic specialist în chirurgie dento-alveolară — specializarea sa principală. Fiecare intervenție este planificată cu precizie, realizată cu blândețe și urmărită până la recuperarea completă.
              </p>
              <p>
                La ARA DENT STUDIO folosim tehnici minim invazive pentru a reduce traumatismul și a accelera recuperarea. Anestezia locală asigură confortul complet în timpul procedurii. Instrumentarul este modern, sterilizat conform protocoalelor stricte.
              </p>
              <p>
                Suntem alături de pacienții noștri și după intervenție — cu îndrumare clară pentru recuperare și disponibilitate pentru orice întrebare. Dr. Robert Lungu poate fi contactat direct dacă apar nelămuriri post-operator.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficii */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10 text-center">
              Chirurgie orală de specialitate
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
              Programează o consultație
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Dr. Robert Lungu evaluează fiecare caz individual și îți oferă soluția potrivită.
            </p>
            <a
              href="https://wa.me/40754219011?text=Bun%C4%83%20ziua!%20Doresc%20o%20consulta%C8%9Bie%20pentru%20chirurgie%20oral%C4%83."
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
