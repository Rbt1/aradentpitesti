import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'
import CTAWhatsApp from '@/app/servicii/components/CTAWhatsApp'

export const metadata: Metadata = {
  title: { absolute: 'Chirurgie dentară Pitești | ARA DENT STUDIO' },
  description: 'Chirurgie dentară și orală în Pitești — extracții, chistectomii, pregătire pentru implant. Medic specialist chirurg. Consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/chirurgie-orala' },
  openGraph: {
    title: 'Chirurgie dentară Pitești | ARA DENT STUDIO',
    description: 'Chirurgie dentară și orală în Pitești — extracții, chistectomii, pregătire pentru implant. Medic specialist chirurg. Consultație gratuită.',
    url: 'https://www.aradentpitesti.ro/servicii/chirurgie-orala',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chirurgie Orală - Extracție',
  provider: {
    '@type': 'Dentist',
    name: 'ARA DENT STUDIO',
  },
  areaServed: 'Pitești',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RON',
    price: '250',
    description: 'Extracție simplă',
  },
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce este chirurgia orală?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chirurgia orală (sau dentară) cuprinde intervențiile chirurgicale la nivelul dinților, gingiei și osului maxilar: extracții dificile, măsele de minte incluse, chistectomii sau pregătirea zonei pentru un implant.',
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
    {
      '@type': 'Question',
      name: 'Doare o intervenție de chirurgie orală?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intervenția se face sub anestezie locală. După aceea poate apărea un disconfort moderat, care se gestionează cu recomandările medicului.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât durează recuperarea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depinde de tipul intervenției și de fiecare pacient. Medicul îți explică la ce să te aștepți și ce să eviți în primele zile.',
      },
    },
    {
      '@type': 'Question',
      name: 'Când merg la urgențe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dacă ai o umflătură care se extinde spre față sau gât, dificultăți la înghițire sau la respirație ori febră mare, mergi imediat la UPU sau sună la 112. Pentru celelalte situații, contactează cabinetul în programul de lucru (luni–vineri, 09:00–18:00).',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce este o chistectomie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Este intervenția prin care se îndepărtează chirurgical un chist de la nivelul osului maxilar, de obicei depistat la o radiografie sau la un CBCT.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot face implant după o extracție?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'În multe cazuri da, dar momentul depinde de fiecare situație și se stabilește după evaluare.',
      },
    },
  ],
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

const PRICE_ROWS = [
  { service: 'Consultație', price: 'Gratuită' },
  { service: 'Radiografie panoramică, dacă este necesară', price: '100 lei' },
  { service: 'CT dentar (CBCT), atunci când este necesar', price: '250 lei*' },
  { service: 'Extracție simplă', price: '250 lei' },
  { service: 'Extracție măsea de minte eruptă', price: '400 lei' },
  { service: 'Extracție măsea de minte semiinclusă', price: '600 lei' },
  { service: 'Extracție măsea de minte inclusă', price: '800 lei' },
]

const FAQ_ITEMS = [
  {
    q: 'Ce este chirurgia orală?',
    a: 'Chirurgia orală (sau dentară) cuprinde intervențiile chirurgicale la nivelul dinților, gingiei și osului maxilar: extracții dificile, măsele de minte incluse, chistectomii sau pregătirea zonei pentru un implant.',
  },
  {
    q: 'Consultația este gratuită?',
    a: 'Da. Dacă medicul consideră necesară o radiografie panoramică, aceasta se taxează separat (100 lei).',
  },
  {
    q: 'Doare o intervenție de chirurgie orală?',
    a: 'Intervenția se face sub anestezie locală. După aceea poate apărea un disconfort moderat, care se gestionează cu recomandările medicului.',
  },
  {
    q: 'Cât durează recuperarea?',
    a: 'Depinde de tipul intervenției și de fiecare pacient. Medicul îți explică la ce să te aștepți și ce să eviți în primele zile.',
  },
  {
    q: 'Când merg la urgențe?',
    a: 'Dacă ai o umflătură care se extinde spre față sau gât, dificultăți la înghițire sau la respirație ori febră mare, mergi imediat la UPU sau sună la 112. Pentru celelalte situații, contactează cabinetul în programul de lucru (luni–vineri, 09:00–18:00).',
  },
  {
    q: 'Ce este o chistectomie?',
    a: 'Este intervenția prin care se îndepărtează chirurgical un chist de la nivelul osului maxilar, de obicei depistat la o radiografie sau la un CBCT.',
  },
  {
    q: 'Pot face implant după o extracție?',
    a: (
      <>
        În multe cazuri da, dar momentul depinde de fiecare situație și se stabilește după evaluare.{' '}
        <Link
          href="/blog/implant-dentar-dupa-extractie"
          className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
        >
          Citește mai multe despre implantul după extracție.
        </Link>
      </>
    ),
  },
]

export default function ChirurgieOralaPage() {
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
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-4">
              Chirurgie Orală în Pitești
            </h1>
            <span className="inline-block font-jost font-bold text-[11px] uppercase tracking-wide text-forest-dark bg-gold px-[14px] py-[6px] rounded-sm mb-5">
              Centrul de Excelență în Chirurgie Dento-Alveolară din Pitești
            </span>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Specialist chirurgie dento-alveolară —{' '}
              <Link
                href="/dr-robert-lungu"
                className="font-semibold text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
              >
                Dr. Robert Lungu
              </Link>
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
                Chirurgia orală (numită și chirurgie dentară) cuprinde intervențiile chirurgicale de la nivelul dinților, gingiei și osului maxilar. La ARA DENT STUDIO din Pitești, ele sunt realizate de{' '}
                <Link
                  href="/dr-robert-lungu"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  Dr. Robert Lungu
                </Link>
                , medic specialist în chirurgie dento-alveolară, iar evaluarea imagistică se face la aceeași adresă. Consultația este gratuită.
              </p>
            </div>
          </div>
        </section>

        {/* B. Ce intervenții facem */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Ce intervenții de chirurgie orală facem
            </h2>
            <ul className="space-y-4 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>
                  <Link
                    href="/servicii/extractie-masea-de-minte"
                    className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                  >
                    Extracția măselei de minte
                  </Link>{' '}
                  (eruptată, semiinclusă sau inclusă) — una dintre cele mai frecvente intervenții de chirurgie orală.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>
                  <Link
                    href="/servicii/aditie-osoasa-sinus-lift"
                    className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                  >
                    Adiția osoasă și sinus lift
                  </Link>{' '}
                  — reconstrucție osoasă pentru pregătirea zonei în vederea implantului dentar.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>
                  Chistectomii — îndepărtarea chirurgicală a chisturilor de la nivelul osului maxilar.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>
                  Pregătirea chirurgicală pentru{' '}
                  <Link
                    href="/servicii/implantologie"
                    className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                  >
                    implant dentar
                  </Link>{' '}
                  — intervenții care asigură condiții optime pentru inserarea implantului.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>
                  Alte intervenții chirurgicale dento-alveolare, stabilite după evaluare.
                </span>
              </li>
            </ul>
            <p className="mt-6 font-jost font-light text-[15px] text-bark-dark leading-relaxed">
              Citește{' '}
              <Link
                href="/blog/chirurgie-dentara-ce-interventii-exista"
                className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
              >
                ghidul nostru despre intervențiile de chirurgie dentară
              </Link>{' '}
              pentru o prezentare detaliată a fiecărei proceduri.
            </p>
          </div>
        </section>

        {/* C. Când este necesară */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Când este necesară o intervenție chirurgicală
            </h2>
            <ul className="space-y-4 font-jost font-light text-[16px] text-bark-dark leading-[1.9] mb-6">
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Un dinte care nu mai poate fi salvat prin alte tratamente.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Măsele de minte incluse sau semiincluse care creează probleme: durere, infecție sau presiune asupra dinților vecini.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Un chist depistat la o radiografie sau la un CBCT.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>Pregătirea zonei pentru un implant — când osul disponibil nu este suficient.</span>
              </li>
            </ul>
            <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed italic">
              Decizia se ia după examinare și, dacă este cazul, după investigații imagistice.
            </p>
          </div>
        </section>

        {/* D. Cum decurge o intervenție */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Cum decurge o intervenție, de la evaluare la recuperare
            </h2>
            <ol className="space-y-6 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  1
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Consultația gratuită:</span>{' '}
                  examen clinic și discuție despre opțiuni.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  2
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Imagistica:</span>{' '}
                  dacă medicul consideră necesar, se recomandă o radiografie panoramică (taxată separat). Atunci când este necesar, se recomandă și un CBCT (tomografie 3D), pe care îl facem în clinică — nu te trimitem prin oraș pentru tomograf.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  3
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Intervenția</span>{' '}
                  se realizează sub anestezie locală.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  4
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Indicații pentru recuperare</span>{' '}
                  — explicate pe înțelesul tău înainte să pleci din cabinet.
                </div>
              </li>
              <li className="flex gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-forest text-cream font-jost font-medium text-sm flex items-center justify-center">
                  5
                </span>
                <div>
                  <span className="font-medium text-forest-dark">Control după intervenție</span>{' '}
                  — dacă medicul recomandă, programat din cabinet.
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* E. Recuperarea */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Recuperarea după o intervenție
            </h2>
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Recuperarea depinde de tipul intervenției și de fiecare pacient în parte. Înainte să pleci din cabinet, medicul îți explică ce să eviți și la ce să te aștepți în zilele următoare.
              </p>
              <p>
                În primele zile pot apărea un disconfort moderat și o umflătură ușoară — acestea se gestionează urmând recomandările primite. Dacă ai nelămuriri, suntem disponibili în programul de lucru.
              </p>
              <p>
                Dacă ai programată o extracție, poți citi în avans{' '}
                <Link
                  href="/blog/ce-mananci-dupa-extractie-dentara"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  ce mănânci după o extracție
                </Link>{' '}
                — un ghid practic pentru primele zile de recuperare.
              </p>
            </div>
          </div>
        </section>

        {/* F. Urgențe */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Când mergi la urgențe și când la cabinet
            </h2>
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Cabinetul funcționează luni–vineri, 09:00–18:00. Dacă după o intervenție sângerarea nu se oprește sau umflătura crește, contactează cabinetul în programul de lucru.
              </p>
              <p>
                Mergi imediat la urgențe (UPU) sau sună la <strong className="font-medium text-forest-dark">112</strong> dacă apare o umflătură care se extinde spre față sau gât, dificultăți la înghițire sau la respirație ori febră mare.
              </p>
              <p>
                Pentru alte situații de urgență stomatologică care apar brusc, consultă pagina de{' '}
                <Link
                  href="/servicii/urgente-stomatologice"
                  className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
                >
                  urgențe stomatologice
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* G. Cât costă */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8">
              Cât costă
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
                    <tr key={row.service} className="border-b border-bark-light/20 hover:bg-offwhite/60 transition-colors duration-150">
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
              Costul chistectomiei, al adiției osoase/sinus lift-ului și al altor intervenții se stabilește după evaluare.{' '}
              <Link
                href="/preturi"
                className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200"
              >
                Lista completă de prețuri.
              </Link>
            </p>
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

        {/* CTA WhatsApp contextual */}
        <CTAWhatsApp
          title="Ai nevoie de o extracție sau intervenție chirurgicală?"
          subtitle="Programează-te direct — consultație gratuită."
          waUrl={'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Aș dori o consultație pentru chirurgie orală la ARA DENT STUDIO.')}
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

        {/* I. CTA final */}
        <section id="programare" className="py-20 px-6 bg-forest">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-playfair italic text-4xl text-cream mb-4">
              Programează consultația gratuită
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
