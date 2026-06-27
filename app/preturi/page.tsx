import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Prețuri Stomatologie Pitești | ARA DENT STUDIO',
  description: 'Prețuri transparente pentru implant dentar, tratament canal, detartraj și alte servicii la ARA DENT STUDIO Pitești. Consultație gratuită.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/preturi' },
  openGraph: {
    title: 'Prețuri Stomatologie Pitești | ARA DENT STUDIO',
    description: 'Prețuri transparente pentru implant dentar, tratament canal, detartraj și alte servicii la ARA DENT STUDIO Pitești. Consultație gratuită.',
    url: 'https://www.aradentpitesti.ro/preturi',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

const WA_LINK = 'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Doresc o consultație gratuită pentru a discuta despre tratament și preț.')

const CATEGORII = [
  {
    titlu: 'Implantologie',
    href: '/servicii/implantologie',
    servicii: [
      { nume: 'Implant dentar (Dentium, șurub)', pret: '1.200 lei' },
      { nume: 'Bont protetic', pret: '300 lei' },
      { nume: 'Capă de vindecare', pret: '150 lei' },
    ],
  },
  {
    titlu: 'Endodonție',
    href: '/servicii/endodontie',
    servicii: [
      { nume: 'Tratament canal (dinte monoradicular)', pret: '400 lei' },
    ],
  },
  {
    titlu: 'Profilaxie',
    href: '/servicii/obturatii',
    servicii: [
      { nume: 'Detartraj simplu (per ședință)', pret: '200 lei' },
    ],
  },
  {
    titlu: 'Obturații',
    href: '/servicii/obturatii',
    servicii: [
      { nume: 'Obturație simplă (1 suprafață)', pret: '200 lei' },
    ],
  },
  {
    titlu: 'Chirurgie orală',
    href: '/servicii/chirurgie-orala',
    servicii: [
      { nume: 'Extracție simplă', pret: '250 lei' },
    ],
  },
  {
    titlu: 'Parodontologie',
    href: '/servicii/parodontologie',
    servicii: [
      { nume: 'Chiuretaj câmp închis (per ședință)', pret: '200 lei' },
    ],
  },
]

export default function PreturiPage() {
  return (
    <>
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
            <p className="font-jost font-light text-lg text-bark-dark">
              Transparență completă. Consultația, radiografia și CT-ul sunt gratuite — plătești doar pentru tratamentul ales.
            </p>
          </div>
        </section>

        {/* Tabel preturi */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-3xl">
            <div className="space-y-10">
              {CATEGORII.map((cat) => (
                <div key={cat.titlu} className="bg-offwhite border border-bark-light/30 rounded-sm overflow-hidden">
                  <div className="flex items-center justify-between px-8 py-5 border-b border-bark-light/30">
                    <h2 className="font-playfair text-xl text-forest-dark">
                      {cat.titlu}
                    </h2>
                    <Link
                      href={cat.href}
                      className="font-jost text-[12px] uppercase tracking-wider text-gold hover:text-forest transition-colors duration-200 whitespace-nowrap"
                    >
                      Află mai multe →
                    </Link>
                  </div>
                  <div>
                    {cat.servicii.map((s, i) => (
                      <div
                        key={s.nume}
                        className={`flex items-center justify-between px-8 py-4 ${i % 2 === 1 ? 'bg-cream-dark' : ''}`}
                      >
                        <span className="font-jost font-light text-[15px] text-bark-dark">
                          {s.nume}
                        </span>
                        <span className="font-jost font-bold text-[15px] text-gold-dark whitespace-nowrap ml-4">
                          {s.pret}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Nota */}
            <p className="font-jost italic text-[13px] text-bark leading-relaxed mt-10">
              Prețurile sunt orientative și pot varia în funcție de complexitatea cazului. Tratamentul de canal la dinții multiradiculari (premolari, molari) costă mai mult decât prețul afișat pentru dinte monoradicular — prețul exact se stabilește la consultație, în funcție de numărul de canale. Coroana definitivă pe implant se stabilește separat, în funcție de materialul ales.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 px-6 bg-forest">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-playfair italic text-4xl text-cream mb-4">
              Programează-te la o consultație gratuită
            </h2>
            <p className="font-jost font-light text-forest-light mb-10">
              Aflăm exact ce ai nevoie și îți oferim un plan de tratament transparent, fără costuri ascunse.
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
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
