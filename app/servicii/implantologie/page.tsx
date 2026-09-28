import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'
import CTAWhatsApp from '@/app/servicii/components/CTAWhatsApp'

export const metadata: Metadata = {
  title: { absolute: 'Implant Dentar Pitești | Dr. Robert Lungu | ARA DENT STUDIO' },
  description: 'Implant dentar în Pitești cu Dr. Robert Lungu, specialist chirurgie dento-alveolară. Tratament complet cu CBCT propriu. Consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/servicii/implantologie' },
  openGraph: {
    title: 'Implant Dentar Pitești | Dr. Robert Lungu | ARA DENT STUDIO',
    description: 'Implant dentar în Pitești cu Dr. Robert Lungu, specialist chirurgie dento-alveolară. Tratament complet cu CBCT propriu. Consultație gratuită.',
    url: 'https://www.aradentpitesti.ro/servicii/implantologie',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Implant Dentar',
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
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RON',
    price: '1200',
    description: 'Implant (șurub), fără bont și coroană',
  },
}

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cât costă un implant dentar la Pitești?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Implantul (șurubul) costă 1.200 lei, la care se adaugă bontul protetic (300 lei) și coroana (de exemplu, din zirconiu: 900 lei). Costul final se stabilește după consultația gratuită și evaluare, pentru că fiecare caz este diferit.',
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
      name: 'Este necesar un CBCT înainte de implant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atunci când este necesar, medicul recomandă un CBCT, pentru a vedea osul în 3D: înălțimea, grosimea, poziția nervilor și a sinusului. Îl facem la noi în clinică (250 lei; CT-urile ulterioare de verificare sunt incluse).',
      },
    },
    {
      '@type': 'Question',
      name: 'Doare intervenția de implant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intervenția se face sub anestezie locală. După aceea poate apărea un disconfort moderat, care se gestionează cu recomandările medicului.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât durează tratamentul cu implant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depinde de calitatea osului, de necesitatea unei adiții osoase și de tipul lucrării. Vindecarea (osteointegrarea) durează câteva luni, iar medicul îți oferă un calendar personalizat după evaluare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât timp poate funcționa un implant dentar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cu igienă corectă și controale periodice, un implant poate funcționa mulți ani. Nu putem promite o durată fixă, pentru că depinde de igienă, de starea gingiilor, de fumat și de controalele regulate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce fac dacă nu am suficient os?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Există soluții, precum adiția osoasă sau sinus lift-ul, care se stabilesc după evaluare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot face implant dacă am boală parodontală sau alte afecțiuni?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Boala parodontală și unele afecțiuni generale trebuie evaluate înainte de intervenție. Decizia se ia de medic, după consultație.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot plăti implantul în rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, este posibilă plata în rate fără dobândă prin TBI Bank. Detaliile se discută la cabinet.',
      },
    },
  ],
}

const STEPS = [
  {
    nr: '1',
    titlu: 'Consultația gratuită și evaluarea',
    text: 'Examen clinic și discuție despre opțiunile potrivite cazului tău. Dacă medicul consideră necesar, se recomandă o radiografie panoramică, care se taxează separat.',
  },
  {
    nr: '2',
    titlu: 'Imagistica',
    text: 'Atunci când este necesar, medicul recomandă un CBCT (tomografie 3D), care arată osul — înălțime, grosime — și poziția nervilor și a sinusului. Îl facem la noi în clinică, nu te trimitem prin oraș pentru tomograf.',
  },
  {
    nr: '3',
    titlu: 'Intervenția',
    text: 'Implantul se plasează sub anestezie locală.',
  },
  {
    nr: '4',
    titlu: 'Vindecarea (osteointegrarea)',
    text: 'Implantul se integrează în os. Durează câteva luni, în funcție de caz.',
  },
  {
    nr: '5',
    titlu: 'Bontul protetic și coroana',
    text: 'După vindecare se fixează bontul și se realizează coroana (de exemplu din zirconiu), cu ajutorul scanner-ului intraoral digital.',
  },
  {
    nr: '6',
    titlu: 'Controale periodice',
    text: 'Igiena corectă și controalele regulate ajută implantul să funcționeze mulți ani.',
  },
]

const PRICE_ROWS = [
  { serviciu: 'Implant dentar (șurub)', pret: '1.200 lei' },
  { serviciu: 'Bont protetic', pret: '300 lei' },
  { serviciu: 'Capă de vindecare', pret: '150 lei' },
  { serviciu: 'Coroană din zirconiu', pret: '900 lei' },
  { serviciu: 'CT dentar (CBCT), atunci când este necesar', pret: '250 lei (CT-urile ulterioare de verificare sunt incluse)' },
  { serviciu: 'Radiografie panoramică, dacă este necesară', pret: '100 lei' },
]

const FAQ_ITEMS = [
  {
    q: 'Cât costă un implant dentar la Pitești?',
    a: 'Implantul (șurubul) costă 1.200 lei, la care se adaugă bontul protetic (300 lei) și coroana (de exemplu, din zirconiu: 900 lei). Costul final se stabilește după consultația gratuită și evaluare, pentru că fiecare caz este diferit.',
  },
  {
    q: 'Consultația este gratuită?',
    a: 'Da. Dacă medicul consideră necesară o radiografie panoramică, aceasta se taxează separat (100 lei).',
  },
  {
    q: 'Este necesar un CBCT înainte de implant?',
    a: 'Atunci când este necesar, medicul recomandă un CBCT, pentru a vedea osul în 3D: înălțimea, grosimea, poziția nervilor și a sinusului. Îl facem la noi în clinică (250 lei; CT-urile ulterioare de verificare sunt incluse).',
  },
  {
    q: 'Doare intervenția de implant?',
    a: 'Intervenția se face sub anestezie locală. După aceea poate apărea un disconfort moderat, care se gestionează cu recomandările medicului.',
  },
  {
    q: 'Cât durează tratamentul cu implant?',
    a: 'Depinde de calitatea osului, de necesitatea unei adiții osoase și de tipul lucrării. Vindecarea (osteointegrarea) durează câteva luni, iar medicul îți oferă un calendar personalizat după evaluare.',
  },
  {
    q: 'Cât timp poate funcționa un implant dentar?',
    a: 'Cu igienă corectă și controale periodice, un implant poate funcționa mulți ani. Nu putem promite o durată fixă, pentru că depinde de igienă, de starea gingiilor, de fumat și de controalele regulate.',
  },
  {
    q: 'Ce fac dacă nu am suficient os?',
    a: (
      <>
        Există soluții, precum{' '}
        <Link href="/servicii/aditie-osoasa-sinus-lift" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
          adiția osoasă sau sinus lift-ul
        </Link>
        , care se stabilesc după evaluare.
      </>
    ),
  },
  {
    q: 'Pot face implant dacă am boală parodontală sau alte afecțiuni?',
    a: 'Boala parodontală și unele afecțiuni generale trebuie evaluate înainte de intervenție. Decizia se ia de medic, după consultație.',
  },
  {
    q: 'Pot plăti implantul în rate?',
    a: 'Da, este posibilă plata în rate fără dobândă prin TBI Bank. Detaliile se discută la cabinet.',
  },
]

const BLOG_LINKS = [
  {
    href: '/blog/cat-costa-implant-dentar-pitesti-2026',
    text: 'Cât costă un implant dentar în Pitești — defalcare 2026',
  },
  {
    href: '/blog/implant-dentar-rate-pitesti',
    text: 'Implant dentar în rate la Pitești — plată fără dobândă',
  },
  {
    href: '/blog/implant-dentar-dupa-extractie',
    text: 'Implant dentar după extracție — cât timp aștepți',
  },
  {
    href: '/blog/fara-os-pentru-implant-all-on-4',
    text: 'Fără os pentru implant? Soluții când osul e insuficient',
  },
  {
    href: '/blog/cat-costa-implant-dentar-romania-2026',
    text: 'Cât costă un implant dentar în România în 2026? Tot adevărul',
  },
  {
    href: '/blog/implant-dentar-sau-proteza-mobila',
    text: 'Implant dentar sau proteză mobilă? Ghid complet 2026',
  },
  {
    href: '/blog/cum-alegi-clinica-implant-dentar-pitesti',
    text: 'Cum alegi clinica de implant dentar în Pitești',
  },
]

const WHY_ITEMS = [
  'Medic specialist chirurg și CBCT propriu la aceeași adresă — evaluare și intervenție fără drumuri suplimentare.',
  'Planificare digitală cu CBCT (când este necesar) și scanner intraoral.',
  'Consultație gratuită, fără costuri ascunse.',
  'Bd. Republicii nr. 19, Pitești, program luni–vineri, 09:00–18:00.',
]

const WHEN_ITEMS = [
  'ai pierdut un dinte (extracție, accident, dinte nesalvabil);',
  'vrei să eviți șlefuirea dinților vecini, cum se întâmplă la o punte;',
  'porți proteză mobilă și îți dorești mai multă stabilitate;',
  'îți lipsesc mai mulți dinți sau o arcadă întreagă.',
]

export default function ImplantologiePage() {
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
              Implantologie · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-4">
              Implant Dentar în Pitești
            </h1>
            <span className="inline-block font-jost font-bold text-[11px] uppercase tracking-wide text-forest-dark bg-gold px-[14px] py-[6px] rounded-sm mb-5">
              Centrul de Excelență în Chirurgie Dento-Alveolară din Pitești
            </span>
            <p className="font-jost font-light text-lg text-bark-dark mb-10">
              Soluția permanentă pentru dinții lipsă
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
                Un implant dentar înlocuiește rădăcina unui dinte pierdut cu un șurub din titan, pe care se fixează ulterior coroana. La ARA DENT STUDIO din Pitești, implanturile sunt realizate de{' '}
                <Link href="/dr-robert-lungu" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Dr. Robert Lungu
                </Link>
                , medic specialist în chirurgie dento-alveolară, iar evaluarea, imagistica, intervenția și lucrarea protetică se fac la aceeași adresă. Consultația este gratuită.
              </p>
              <p>
                Spre deosebire de punte sau proteză mobilă, implantul nu afectează dinții vecini și menține osul maxilar sănătos pe termen lung. Când un dinte lipsește, osul din zona respectivă se resoarbe treptat — implantul oprește acest proces și păstrează structura feței.
              </p>
              <p>
                Implantul dentar este cea mai apropiată alternativă a unui dinte natural: integrat biologic în os, identic vizual cu dinții din jur și funcțional în masticație. Îngrijit corect și cu controale periodice, un implant poate funcționa mulți ani.
              </p>
            </div>
          </div>
        </section>

        {/* B. Când este recomandat */}
        <section className="py-16 px-6 bg-cream-dark">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-6">
              Când este recomandat un implant dentar
            </h2>
            <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9] mb-6">
              Implantul dentar este o soluție potrivită dacă:
            </p>
            <ul className="space-y-3 mb-8">
              {WHEN_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-[10px] w-[5px] h-[5px] rounded-full bg-gold flex-shrink-0" />
                  <span className="font-jost font-light text-[16px] text-bark-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              Dacă nu există suficient os, există soluții — decizia se ia după evaluare.{' '}
              <Link href="/servicii/aditie-osoasa-sinus-lift" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                Adiție osoasă și sinus lift
              </Link>
              .
            </p>
          </div>
        </section>

        {/* C. Etapele tratamentului */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-8">
              Etapele tratamentului cu implant dentar
            </h2>
            <ol className="space-y-5">
              {STEPS.map((step) => (
                <li key={step.nr} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-forest flex items-center justify-center font-jost font-bold text-cream text-sm">
                    {step.nr}
                  </span>
                  <div className="pt-1">
                    <p className="font-playfair text-[17px] text-forest-dark mb-1">{step.titlu}</p>
                    <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* D. Cât durează tratamentul */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-6">
              Cât durează tratamentul
            </h2>
            <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              Durata depinde de calitatea osului, de necesitatea unei adiții osoase și de tipul lucrării. Medicul stabilește calendarul după evaluare — nu există o durată standard valabilă pentru toți pacienții. De aceea, consultația este primul pas.
            </p>
          </div>
        </section>

        {/* E. Soluții pentru situații diferite */}
        <section className="py-16 px-6 bg-cream-dark">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-8">
              Soluții pentru situații diferite
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-xl text-forest-dark mb-3">Un dinte lipsă</h3>
                <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
                  Un implant, o coroană. Soluția completă pentru înlocuirea unui singur dinte, fără a atinge dinții vecini.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-forest-dark mb-3">Mai mulți dinți lipsă</h3>
                <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
                  Mai multe implanturi sau o lucrare fixă susținută pe implanturi — în funcție de caz, se alege soluția optimă la consultație.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-forest-dark mb-3">Arcadă completă</h3>
                <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
                  Când lipsesc toți dinții de pe o arcadă, o opțiune este{' '}
                  <Link href="/servicii/all-on-4-all-on-6" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                    All-on-4 și All-on-6
                  </Link>
                  {' '}— o lucrare fixă pe patru sau șase implanturi.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-forest-dark mb-3">Când osul nu este suficient</h3>
                <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
                  Lipsa de os nu înseamnă automat că implantul nu este posibil.{' '}
                  <Link href="/servicii/aditie-osoasa-sinus-lift" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                    Adiția osoasă și sinus lift-ul
                  </Link>
                  {' '}sunt proceduri care pregătesc terenul — mai multe detalii în articolul{' '}
                  <Link href="/blog/fara-os-pentru-implant-all-on-4" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                    Fără os pentru implant? Soluții când osul e insuficient
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* F. Prețuri */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-8">
              Cât costă un implant dentar la Pitești
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[460px]">
                <tbody>
                  {PRICE_ROWS.map((row) => (
                    <tr key={row.serviciu} className="border-b border-bark-light/30">
                      <td className="py-3 pr-8 font-jost font-light text-[15px] text-bark-dark">{row.serviciu}</td>
                      <td className="py-3 font-jost font-bold text-[15px] text-forest-dark whitespace-nowrap">{row.pret}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 space-y-4 font-jost font-light text-[15px] text-bark-dark leading-relaxed">
              <p>
                Consultația este gratuită. Costul final depinde de fiecare caz — numărul de implanturi, tipul lucrării, eventuale proceduri suplimentare — și se stabilește după evaluare. Fără costuri ascunse: tu afli ce include tratamentul înainte să te decizi.
              </p>
              <p>
                Este posibilă plata în rate fără dobândă prin TBI Bank.{' '}
                <Link href="/blog/implant-dentar-rate-pitesti" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Detalii despre plata în rate
                </Link>
                .
              </p>
              <p>
                <Link href="/preturi" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Lista completă de prețuri
                </Link>
                {' '}|{' '}
                <Link href="/blog/cat-costa-implant-dentar-pitesti-2026" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Defalcare completă: cât costă un implant dentar în Pitești
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* G. De ce ARA DENT STUDIO */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-6">
              De ce să alegi ARA DENT STUDIO pentru implant
            </h2>
            <ul className="space-y-3">
              {WHY_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-[10px] w-[5px] h-[5px] rounded-full bg-gold flex-shrink-0" />
                  <span className="font-jost font-light text-[16px] text-bark-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA WhatsApp contextual */}
        <CTAWhatsApp
          title="Programează consultația gratuită"
          subtitle="Program: luni–vineri, 09:00–18:00."
          waUrl={'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Sunt interesat de implant dentar și aș dori să programez o consultație la ARA DENT STUDIO.')}
        />

        {/* H. Diaspora */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-6">
              Vii din străinătate? Ne pregătim din timp
            </h2>
            <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              Dacă locuiești în afara țării și ai venit în vacanță, poți să ne trimiți pe WhatsApp un CBCT (dacă ai deja unul) și câteva fotografii intraorale. Primești o estimare orientativă în 24 de ore. Planul final se stabilește la consultația gratuită, la cabinet.{' '}
              <Link href="/diaspora" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                Află mai multe despre programarea pentru pacienții din afara țării.
              </Link>
            </p>
          </div>
        </section>

        {/* I. FAQ */}
        <section className="py-20 px-6 bg-cream-dark">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10">
              Întrebări frecvente
            </h2>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </section>

        {/* Articole utile */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-2xl text-forest-dark mb-8">
              Articole utile despre implant dentar
            </h2>
            <ul className="space-y-4">
              {BLOG_LINKS.map((link) => (
                <li key={link.href} className="flex items-start gap-3">
                  <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-gold flex-shrink-0" />
                  <Link
                    href={link.href}
                    className="font-jost font-light text-[15px] text-forest-dark underline underline-offset-2 hover:text-gold transition-colors duration-200 leading-snug"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* J. CTA final */}
        <section id="programare" className="py-20 px-6 bg-forest">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-playfair italic text-4xl text-cream mb-4">
              Consultație pentru implant — gratuită
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Vino să afli dacă implantul dentar este soluția potrivită pentru tine. Evaluare clinică, discuție despre opțiuni și costuri — fără obligații.
            </p>
            <a
              href={'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Doresc să programez o consultație pentru implant dentar la ARA DENT STUDIO.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-[#25D366] text-white px-8 py-4 rounded-sm hover:bg-[#1ebe5d] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Programează consultația gratuită
            </a>
            <p className="font-jost text-[13px] text-forest-light/70 mt-4">
              Program: luni–vineri, 09:00–18:00.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
