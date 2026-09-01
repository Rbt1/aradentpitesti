import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'
import CTAWhatsApp from '@/app/servicii/components/CTAWhatsApp'

export const metadata: Metadata = {
  title: { absolute: 'Adiție Osoasă și Sinus Lift Pitești | ARA DENT STUDIO | Dr. Robert Lungu' },
  description: 'Adiție osoasă și sinus lift în Pitești. Proceduri chirurgicale pentru pacienții cu os insuficient pentru implant. Dr. Robert Lungu, specialist chirurgie dento-alveolară. Consultație 100 lei.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/aditie-osoasa-sinus-lift' },
  openGraph: {
    title: 'Adiție Osoasă și Sinus Lift Pitești | ARA DENT STUDIO | Dr. Robert Lungu',
    description: 'Adiție osoasă și sinus lift în Pitești. Proceduri chirurgicale pentru pacienții cu os insuficient pentru implant. Dr. Robert Lungu, specialist chirurgie dento-alveolară. Consultație 100 lei.',
    url: 'https://www.aradentpitesti.ro/servicii/aditie-osoasa-sinus-lift',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Aditie Osoasa si Sinus Lift',
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
  description: 'Proceduri chirurgicale de augmentare osoasa pentru pacientii cu os insuficient pentru implant dentar.',
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ce este aditia osoasa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aditia osoasa (augmentarea osoasa) este o procedura chirurgicala prin care se adauga os in zona unde cantitatea sau calitatea osului este insuficienta pentru plasarea unui implant dentar. Se folosesc materiale osoase autologe, sintetice sau de banca, in functie de caz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce este sinus lift-ul?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sinus lift-ul (elevatia de sinus) este o procedura chirurgicala aplicata in zona laterala a maxilarului superior, unde sinusul maxilar limiteaza cantitatea de os disponibila pentru implant. Se ridica membrana sinusala si se adauga os in spatiul creat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Am nevoie de aditie osoasa inainte de implant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nu intotdeauna. Necesitatea aditiei osoase se stabileste la consultatie pe baza CT-ului dentar (CBCT), care arata exact cantitatea si calitatea osului disponibil. Multi pacienti pot face implant fara proceduri suplimentare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cat dureaza recuperarea dupa aditie osoasa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recuperarea variaza in functie de complexitatea cazului. Dupa aditia osoasa se asteapta de obicei 4-6 luni pentru integrarea osului inainte de inserarea implantului.',
      },
    },
    {
      '@type': 'Question',
      name: 'Se poate face aditia osoasa si implantul in aceeasi sedinta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In anumite cazuri da — depinde de cantitatea de os rezidual si de stabilitatea primara obtinuta. Dr. Robert Lungu evalueaza fiecare caz individual si stabileste protocolul optim.',
      },
    },
  ],
}

const PROCEDURI = [
  {
    title: 'Adiție Osoasă',
    text: 'Procedura prin care se adaugă material osos în zona cu deficit — os autolog (din propriul organism), sintetic sau de bancă osoasă, în funcție de caz.\n\nIndicată când osul e insuficient ca volum sau densitate pentru stabilitatea primară a implantului.',
  },
  {
    title: 'Sinus Lift',
    text: 'Procedura specifică maxilarului superior posterior, unde sinusul maxilar limitează înălțimea osoasă disponibilă.\n\nSe realizează în varianta internă (minim invazivă, simultan cu implantul) sau externă (cazuri cu deficit mare de os), în funcție de situația clinică.',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Ce este adiția osoasă?',
    a: 'Adiția osoasă (augmentarea osoasă) este o procedură chirurgicală prin care se adaugă os în zona unde cantitatea sau calitatea osului este insuficientă pentru plasarea unui implant dentar. Se folosesc materiale osoase autologe, sintetice sau de bancă, în funcție de caz.',
  },
  {
    q: 'Ce este sinus lift-ul?',
    a: 'Sinus lift-ul (elevația de sinus) este o procedură chirurgicală aplicată în zona laterală a maxilarului superior, unde sinusul maxilar limitează cantitatea de os disponibilă pentru implant. Se ridică membrana sinusală și se adaugă os în spațiul creat.',
  },
  {
    q: 'Am nevoie de adiție osoasă înainte de implant?',
    a: 'Nu întotdeauna. Necesitatea adiției osoase se stabilește la consultație pe baza CT-ului dentar (CBCT), care arată exact cantitatea și calitatea osului disponibil. Mulți pacienți pot face implant fără proceduri suplimentare.',
  },
  {
    q: 'Cât durează recuperarea după adiție osoasă?',
    a: 'Recuperarea variază în funcție de complexitatea cazului. După adiția osoasă se așteaptă de obicei 4-6 luni pentru integrarea osului înainte de inserarea implantului.',
  },
  {
    q: 'Se poate face adiția osoasă și implantul în aceeași ședință?',
    a: 'În anumite cazuri da — depinde de cantitatea de os rezidual și de stabilitatea primară obținută. Dr. Robert Lungu evaluează fiecare caz individual și stabilește protocolul optim.',
  },
]

const WA_URL =
  'https://wa.me/40754219011?text=' +
  encodeURIComponent('Bună ziua! Aș dori o evaluare pentru adiție osoasă sau sinus lift la ARA DENT STUDIO.')

export default function AditieOsoasaSinusLiftPage() {
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
              Adiție Osoasă și Sinus Lift în Pitești
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Soluții chirurgicale pentru pacienții cu os insuficient pentru implant
            </p>
            <Link
              href="#programare"
              className="inline-block font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300 shadow-forest"
            >
              Programează evaluarea
            </Link>
          </div>
        </section>

        {/* Descriere */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Unul dintre motivele pentru care unii pacienți sunt informați că nu pot face implant este cantitatea insuficientă de os disponibil. În multe dintre aceste cazuri, implantul este totuși posibil — după o procedură de augmentare osoasă.
              </p>
              <p>
                La ARA DENT STUDIO, <Link href="/dr-robert-lungu" className="font-semibold text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">Dr. Robert Lungu</Link> evaluează fiecare caz individual cu tomograful CBCT propriu și stabilește dacă și ce procedură pregătitoare este necesară.
              </p>
            </div>
          </div>
        </section>

        {/* Proceduri */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10 text-center">
              Proceduri de augmentare osoasă
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {PROCEDURI.map((card) => (
                <div
                  key={card.title}
                  className="bg-cream border border-bark-light/30 rounded-sm p-8"
                  style={{ boxShadow: '0 4px 20px rgba(45,106,79,0.07)' }}
                >
                  <div className="w-8 h-[2px] bg-gold mb-5" />
                  <h3 className="font-playfair font-bold text-xl text-forest-dark mb-4">
                    {card.title}
                  </h3>
                  <div className="space-y-3">
                    {card.text.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="font-jost font-light text-[14px] text-bark-dark leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CBCT */}
        <section className="py-16 px-6 bg-forest-dark">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-cream mb-6">
              Planificare 3D cu CBCT propriu
            </h2>
            <div className="space-y-4 font-jost font-light text-[16px] text-forest-light leading-[1.9]">
              <p>
                Necesitatea augmentării osoase și tipul de procedură se stabilesc exclusiv pe baza tomografiei CBCT 3D — care arată exact volumul, densitatea și morfologia osului disponibil.
              </p>
              <p>
                La ARA DENT STUDIO, tomograful CBCT este în cabinet. Nu ești trimis în altă parte pentru investigații — evaluăm, planificăm și intervenim la aceeași adresă.
              </p>
            </div>
          </div>
        </section>

        {/* A doua opinie */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-6">
              Ai fost informat că nu poți face implant din lipsă de os?
            </h2>
            <div className="space-y-5 font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              <p>
                Nu accepta acest răspuns fără o a doua opinie. Multe cazuri considerate imposibile devin realizabile după augmentare osoasă.
              </p>
              <p>
                La consultație evaluăm situația ta specific — cu CBCT propriu — și îți spunem sincer ce e posibil și ce presupune tratamentul complet.
              </p>
            </div>
          </div>
        </section>

        {/* CTA WhatsApp contextual */}
        <CTAWhatsApp
          title="Vrei să afli dacă poți face implant?"
          subtitle="Evaluare cu CBCT propriu — consultație: 100 lei, CT dentar: 250 lei."
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
              Evaluare completă cu CBCT
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Consultație + radiografie: 100 lei &nbsp;·&nbsp; CT dentar: 250 lei
              <br />
              Stabilim împreună ce tratament este posibil pentru cazul tău.
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
