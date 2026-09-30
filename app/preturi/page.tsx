import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import FAQ from '@/app/servicii/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: 'Prețuri stomatologie și implant Pitești | ARA DENT STUDIO' },
  description: 'Lista de prețuri ARA DENT STUDIO: implant, All-on-4, tratament de canal, extracții. Consultația este gratuită. Rate fără dobândă prin TBI Bank.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/preturi' },
  openGraph: {
    title: 'Prețuri stomatologie și implant Pitești | ARA DENT STUDIO',
    description: 'Lista de prețuri ARA DENT STUDIO: implant, All-on-4, tratament de canal, extracții. Consultația este gratuită. Rate fără dobândă prin TBI Bank.',
    url: 'https://www.aradentpitesti.ro/preturi',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://www.aradentpitesti.ro/logo-circular-600.png', width: 600, height: 600, alt: 'ARA DENT STUDIO Pitesti' }],
  },
}

const ULTIMA_ACTUALIZARE = 'septembrie 2026'

const WA_LINK = 'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Doresc să programez o consultație la ARA DENT STUDIO pentru a discuta despre tratament și preț.')

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Cât costă un implant dentar la Pitești?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Implantul (șurubul) costă 1.200 lei, la care se adaugă bontul protetic (300 lei) și coroana din zirconiu (900 lei). Costul final se stabilește după consultația gratuită, pentru că fiecare caz este diferit.',
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
      name: 'Cât costă All-on-4?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '12.000 lei pe arcadă, preț care include chirurgia, cele 4 implanturi și lucrarea provizorie fixă. All-on-6 costă 14.000 lei pe arcadă.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ce include prețul implantului?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prețul de 1.200 lei este pentru implantul propriu-zis (șurubul). Bontul protetic, capa de vindecare și coroana se calculează separat, iar eventualele proceduri suplimentare se stabilesc la evaluare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Este obligatoriu un CBCT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicul îl recomandă atunci când este necesar, pentru a evalua osul în 3D. Costă 250 lei, iar CT-urile ulterioare de verificare sunt incluse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pot plăti în rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, este posibilă plata în rate fără dobândă prin TBI Bank. Detaliile se discută la cabinet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Cât costă un tratament de canal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depinde de tipul dintelui: 400 lei la monoradicular, 500 lei la premolar și 600 lei la molar. Tratamentele se fac cu microscop dentar.',
      },
    },
  ],
}

const FAQ_ITEMS = [
  {
    q: 'Cât costă un implant dentar la Pitești?',
    a: 'Implantul (șurubul) costă 1.200 lei, la care se adaugă bontul protetic (300 lei) și coroana din zirconiu (900 lei). Costul final se stabilește după consultația gratuită, pentru că fiecare caz este diferit.',
  },
  {
    q: 'Consultația este gratuită?',
    a: 'Da. Dacă medicul consideră necesară o radiografie panoramică, aceasta se taxează separat (100 lei).',
  },
  {
    q: 'Cât costă All-on-4?',
    a: '12.000 lei pe arcadă, preț care include chirurgia, cele 4 implanturi și lucrarea provizorie fixă. All-on-6 costă 14.000 lei pe arcadă.',
  },
  {
    q: 'Ce include prețul implantului?',
    a: 'Prețul de 1.200 lei este pentru implantul propriu-zis (șurubul). Bontul protetic, capa de vindecare și coroana se calculează separat, iar eventualele proceduri suplimentare se stabilesc la evaluare.',
  },
  {
    q: 'Este obligatoriu un CBCT?',
    a: 'Medicul îl recomandă atunci când este necesar, pentru a evalua osul în 3D. Costă 250 lei, iar CT-urile ulterioare de verificare sunt incluse.',
  },
  {
    q: 'Pot plăti în rate?',
    a: 'Da, este posibilă plata în rate fără dobândă prin TBI Bank. Detaliile se discută la cabinet.',
  },
  {
    q: 'Cât costă un tratament de canal?',
    a: 'Depinde de tipul dintelui: 400 lei la monoradicular, 500 lei la premolar și 600 lei la molar. Tratamentele se fac cu microscop dentar.',
  },
]

export default function PreturiPage() {
  return (
    <>
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
              Prețuri · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Prețuri ARA DENT STUDIO
            </h1>
            <div className="space-y-3 font-jost font-light text-lg text-bark-dark mb-4">
              <p>
                Aici găsești prețurile principalelor tratamente de la ARA DENT STUDIO din Pitești. Consultația este gratuită, iar costul final al fiecărui tratament se stabilește după evaluare, pentru că fiecare caz este diferit.
              </p>
            </div>
            <p className="font-jost text-[12px] text-bark/70 italic">
              Ultima actualizare a listei: {ULTIMA_ACTUALIZARE}.
            </p>
          </div>
        </section>

        {/* Tabele pe categorii */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl space-y-14">

            {/* Consultație și investigații */}
            <div>
              <h2 className="font-playfair text-2xl text-forest-dark mb-4">
                Consultație și investigații
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <tbody>
                    {[
                      { s: 'Consultație', p: 'GRATUITĂ' },
                      { s: 'Radiografie panoramică', p: '100 lei' },
                      { s: 'CT dentar (CBCT), atunci când este necesar*', p: '250 lei' },
                      { s: 'Tratament de urgență (în programul de lucru)', p: '200 lei' },
                    ].map((row, i) => (
                      <tr key={row.s} className={`border-b border-bark-light/30 ${i % 2 === 1 ? 'bg-cream-dark' : 'bg-offwhite'}`}>
                        <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark">{row.s}</td>
                        <td className="py-3 px-4 font-jost font-bold text-[15px] text-gold-dark whitespace-nowrap text-right">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-jost font-light text-[13px] text-bark mt-3 leading-relaxed">
                * CT-urile ulterioare de verificare sunt incluse în prețul CBCT-ului inițial. Consultația este gratuită; dacă medicul consideră necesară o radiografie panoramică, aceasta se taxează separat. CBCT-ul se recomandă atunci când este necesar.
              </p>
            </div>

            {/* Implantologie */}
            <div>
              <h2 className="font-playfair text-2xl text-forest-dark mb-4">
                Implantologie
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <tbody>
                    {[
                      { s: 'Implant dentar (șurub)', p: '1.200 lei' },
                      { s: 'Bont protetic', p: '300 lei' },
                      { s: 'Capă de vindecare', p: '150 lei' },
                      { s: 'Coroană din zirconiu', p: '900 lei' },
                    ].map((row, i) => (
                      <tr key={row.s} className={`border-b border-bark-light/30 ${i % 2 === 1 ? 'bg-cream-dark' : 'bg-offwhite'}`}>
                        <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark">{row.s}</td>
                        <td className="py-3 px-4 font-jost font-bold text-[15px] text-gold-dark whitespace-nowrap text-right">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-jost font-light text-[13px] text-bark mt-3 leading-relaxed">
                Prețurile de mai sus sunt pe componentă: implantul (șurubul), bontul protetic și coroana se calculează separat. Numărul de implanturi și eventualele proceduri suplimentare se stabilesc la evaluare.{' '}
                <Link href="/servicii/implantologie" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Detalii despre tratamentul cu implant dentar
                </Link>.
              </p>
            </div>

            {/* All-on-4 și All-on-6 */}
            <div>
              <h2 className="font-playfair text-2xl text-forest-dark mb-4">
                All-on-4 și All-on-6
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <tbody>
                    {[
                      { s: 'All-on-4 (per arcadă)', p: '12.000 lei' },
                      { s: 'All-on-6 (per arcadă)', p: '14.000 lei' },
                    ].map((row, i) => (
                      <tr key={row.s} className={`border-b border-bark-light/30 ${i % 2 === 1 ? 'bg-cream-dark' : 'bg-offwhite'}`}>
                        <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark">{row.s}</td>
                        <td className="py-3 px-4 font-jost font-bold text-[15px] text-gold-dark whitespace-nowrap text-right">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-jost font-light text-[13px] text-bark mt-3 leading-relaxed">
                Prețul este pe arcadă. La All-on-4, prețul include chirurgia, cele 4 implanturi și lucrarea provizorie fixă.{' '}
                <Link href="/servicii/all-on-4-all-on-6" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Detalii despre All-on-4 și All-on-6
                </Link>.
              </p>
            </div>

            {/* Endodonție */}
            <div>
              <h2 className="font-playfair text-2xl text-forest-dark mb-4">
                Endodonție (tratament de canal)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <tbody>
                    {[
                      { s: 'Monoradicular', p: '400 lei' },
                      { s: 'Premolar', p: '500 lei' },
                      { s: 'Molar', p: '600 lei' },
                    ].map((row, i) => (
                      <tr key={row.s} className={`border-b border-bark-light/30 ${i % 2 === 1 ? 'bg-cream-dark' : 'bg-offwhite'}`}>
                        <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark">{row.s}</td>
                        <td className="py-3 px-4 font-jost font-bold text-[15px] text-gold-dark whitespace-nowrap text-right">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-jost font-light text-[13px] text-bark mt-3 leading-relaxed">
                Prețul depinde de tipul dintelui. Tratamentele de canal se fac cu microscop dentar.{' '}
                <Link href="/servicii/endodontie" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Detalii despre endodonție
                </Link>.
              </p>
            </div>

            {/* Obturații */}
            <div>
              <h2 className="font-playfair text-2xl text-forest-dark mb-4">
                Obturații
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <tbody>
                    {[
                      { s: 'Obturație (1 suprafață)', p: '200 lei' },
                    ].map((row, i) => (
                      <tr key={row.s} className={`border-b border-bark-light/30 ${i % 2 === 1 ? 'bg-cream-dark' : 'bg-offwhite'}`}>
                        <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark">{row.s}</td>
                        <td className="py-3 px-4 font-jost font-bold text-[15px] text-gold-dark whitespace-nowrap text-right">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-jost font-light text-[13px] text-bark mt-3 leading-relaxed">
                Prețul este pentru o obturație pe o suprafață. Obturațiile pe mai multe suprafețe se stabilesc la consultație.{' '}
                <Link href="/servicii/obturatii" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Detalii despre obturații
                </Link>.
              </p>
            </div>

            {/* Chirurgie orală */}
            <div>
              <h2 className="font-playfair text-2xl text-forest-dark mb-4">
                Chirurgie orală
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <tbody>
                    {[
                      { s: 'Extracție simplă', p: '250 lei' },
                      { s: 'Extracție măsea de minte erupt', p: '400 lei' },
                      { s: 'Extracție măsea de minte semiinclus', p: '600 lei' },
                      { s: 'Extracție măsea de minte inclus', p: '800 lei' },
                    ].map((row, i) => (
                      <tr key={row.s} className={`border-b border-bark-light/30 ${i % 2 === 1 ? 'bg-cream-dark' : 'bg-offwhite'}`}>
                        <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark">{row.s}</td>
                        <td className="py-3 px-4 font-jost font-bold text-[15px] text-gold-dark whitespace-nowrap text-right">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-jost font-light text-[13px] text-bark mt-3 leading-relaxed">
                Prețul depinde de gradul de incluzie al măselei de minte, stabilit pe baza examenului clinic și imagistic.{' '}
                <Link href="/servicii/extractie-masea-de-minte" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Detalii despre extracția măselei de minte
                </Link>.
              </p>
            </div>

            {/* Parodontologie */}
            <div>
              <h2 className="font-playfair text-2xl text-forest-dark mb-4">
                Parodontologie
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <tbody>
                    {[
                      { s: 'Chiuretaj câmp închis (per ședință)', p: '200 lei' },
                    ].map((row, i) => (
                      <tr key={row.s} className={`border-b border-bark-light/30 ${i % 2 === 1 ? 'bg-cream-dark' : 'bg-offwhite'}`}>
                        <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark">{row.s}</td>
                        <td className="py-3 px-4 font-jost font-bold text-[15px] text-gold-dark whitespace-nowrap text-right">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-jost font-light text-[13px] text-bark mt-3 leading-relaxed">
                Prețul este per ședință. Numărul de ședințe depinde de severitatea bolii parodontale și se stabilește la evaluare.{' '}
                <Link href="/servicii/parodontologie" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Detalii despre tratamentul parodontal
                </Link>.
              </p>
            </div>

            {/* Igienă orală */}
            <div>
              <h2 className="font-playfair text-2xl text-forest-dark mb-4">
                Igienă orală
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <tbody>
                    {[
                      { s: 'Detartraj', p: '200 lei' },
                      { s: 'Igienizare profesională', p: '250 lei' },
                    ].map((row, i) => (
                      <tr key={row.s} className={`border-b border-bark-light/30 ${i % 2 === 1 ? 'bg-cream-dark' : 'bg-offwhite'}`}>
                        <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark">{row.s}</td>
                        <td className="py-3 px-4 font-jost font-bold text-[15px] text-gold-dark whitespace-nowrap text-right">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-jost font-light text-[13px] text-bark mt-3 leading-relaxed">
                Recomandăm igienizare profesională periodic; frecvența se stabilește la control.
              </p>
            </div>

            {/* Fațete dentare */}
            <div>
              <h2 className="font-playfair text-2xl text-forest-dark mb-4">
                Fațete dentare
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <tbody>
                    <tr className="border-b border-bark-light/30 bg-offwhite">
                      <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark">Fațete dentare</td>
                      <td className="py-3 px-4 font-jost font-light text-[15px] text-bark-dark whitespace-nowrap text-right italic">preț la consultație</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-jost font-light text-[13px] text-bark mt-3 leading-relaxed">
                Prețul fațetelor se stabilește la consultație, în funcție de numărul de dinți și de materialul ales (ceramică sau compozit).{' '}
                <Link href="/servicii/fatete-dentare" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                  Detalii despre fațete dentare
                </Link>.
              </p>
            </div>

          </div>
        </section>

        {/* Exemplu implant complet */}
        <section className="py-16 px-6 bg-cream-dark">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-2xl text-forest-dark mb-4">
              Exemplu: cât costă un implant complet
            </h2>
            <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              Pentru un dinte înlocuit cu implant, costul include trei componente: implantul (1.200 lei), bontul protetic (300 lei) și coroana din zirconiu (900 lei), adică 2.400 lei. La acestea se pot adăuga, după caz, capa de vindecare (150 lei), CBCT-ul atunci când este necesar (250 lei) și alte proceduri stabilite la evaluare, de exemplu{' '}
              <Link href="/servicii/aditie-osoasa-sinus-lift" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                adiția osoasă
              </Link>
              . Este un exemplu orientativ; oferta pentru cazul tău o primești după consultație.
            </p>
            <p className="font-jost font-light text-[14px] text-bark mt-4 leading-relaxed">
              Mai multe detalii:{' '}
              <Link href="/blog/cat-costa-implant-dentar-pitesti-2026" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                defalcare completă a costului unui implant dentar în Pitești
              </Link>.
            </p>
          </div>
        </section>

        {/* De ce poate diferi costul final */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-2xl text-forest-dark mb-5">
              De ce poate diferi costul final
            </h2>
            <ul className="space-y-3 mb-6">
              {[
                'Numărul de implanturi necesare',
                'Cantitatea și calitatea osului (uneori e necesară adiție osoasă sau sinus lift)',
                'Tipul lucrării protetice alese',
                'Investigațiile necesare pentru planificarea tratamentului',
                'Alte tratamente asociate, de exemplu extracții sau tratamente parodontale',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-[10px] w-[5px] h-[5px] rounded-full bg-gold flex-shrink-0" />
                  <span className="font-jost font-light text-[16px] text-bark-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              Îți spunem toate acestea înainte să începi tratamentul: consultația este gratuită, iar tu afli ce plătești înainte să te decizi.
            </p>
          </div>
        </section>

        {/* Plata în rate */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-2xl text-forest-dark mb-4">
              Plata în rate
            </h2>
            <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              Este posibilă plata în rate fără dobândă prin TBI Bank. Detaliile se discută la cabinet.{' '}
              <Link href="/blog/implant-dentar-rate-pitesti" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                Află mai multe despre plata în rate
              </Link>.
            </p>
          </div>
        </section>

        {/* Cum afli prețul pentru cazul tău */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-2xl text-forest-dark mb-6">
              Cum afli prețul pentru cazul tău
            </h2>
            <ol className="space-y-4 mb-8">
              {[
                'Programezi consultația gratuită (WhatsApp sau telefon, luni–vineri, 09:00–18:00).',
                'Medicul examinează și, dacă e cazul, recomandă radiografie sau CBCT.',
                'Primești explicații și costul pentru cazul tău, înainte să începi tratamentul.',
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest flex items-center justify-center font-jost font-bold text-cream text-sm">
                    {i + 1}
                  </span>
                  <span className="font-jost font-light text-[16px] text-bark-dark leading-relaxed pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <p className="font-jost font-light text-[16px] text-bark-dark leading-[1.9]">
              Locuiești în străinătate? Trimite-ne pe WhatsApp un CBCT (dacă ai deja unul) și câteva poze intraorale și primești o estimare orientativă în 24 de ore. Planul final se stabilește la consultația gratuită.{' '}
              <Link href="/diaspora" className="text-forest underline underline-offset-2 hover:text-gold transition-colors duration-200">
                Informații pentru pacienții din afara țării
              </Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-cream-dark">
          <div className="container-site max-w-3xl">
            <h2 className="font-playfair text-3xl text-forest-dark mb-10">
              Întrebări frecvente
            </h2>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 px-6 bg-forest">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-playfair italic text-4xl text-cream mb-4">
              Programează consultația gratuită
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Afli ce ai nevoie și costul exact pentru cazul tău — înainte să te decizi.
            </p>
            <a
              href={WA_LINK}
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
