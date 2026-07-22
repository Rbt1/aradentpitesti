import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { articole, formatDate } from '@/data/articole'

export const metadata: Metadata = {
  title: { absolute: 'Blog Stomatologie Pitești | Sfaturi și Informații | ARA DENT STUDIO' },
  description: 'Articole despre implant dentar, boala parodontală și tratamente stomatologice în Pitești. Scrise de Dr. Robert Lungu, specialist chirurgie dento-alveolară.',
  alternates: { canonical: 'https://www.aradentpitesti.ro/blog' },
  openGraph: {
    title: 'Blog Stomatologie Pitești | Sfaturi și Informații | ARA DENT STUDIO',
    description: 'Articole despre implant dentar, boala parodontală și tratamente stomatologice în Pitești. Scrise de Dr. Robert Lungu, specialist chirurgie dento-alveolară.',
    url: 'https://www.aradentpitesti.ro/blog',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

const articoleSortate = [...articole].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">

        {/* Hero */}
        <section className="bg-cream-dark pt-40 pb-24 px-6">
          <div className="container-site max-w-3xl">
            <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
              Blog · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Blog ARA DENT STUDIO
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark">
              Articole scrise de Dr. Robert Lungu despre sănătatea dentară
            </p>
          </div>
        </section>

        {/* Lista articole */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articoleSortate.map((articol) => (
                <article
                  key={articol.slug}
                  className="bg-offwhite border border-bark-light/30 rounded-sm p-8 flex flex-col hover:shadow-[0_8px_32px_rgba(45,106,79,0.12)] transition-shadow duration-300"
                >
                  <time
                    dateTime={articol.date}
                    className="font-jost text-[12px] text-bark uppercase tracking-wider mb-4 block"
                  >
                    {formatDate(articol.date)}
                  </time>
                  <h2 className="font-playfair font-bold text-xl text-forest-dark leading-snug mb-3">
                    {articol.title}
                  </h2>
                  <p className="font-jost font-light text-[14px] text-bark-dark leading-relaxed mb-6 flex-1">
                    {articol.excerpt}
                  </p>
                  <Link
                    href={`/blog/${articol.slug}`}
                    className="font-jost text-[13px] uppercase tracking-wider text-gold hover:text-forest transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Citește articolul
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
