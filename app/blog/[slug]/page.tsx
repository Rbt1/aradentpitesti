import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { articole, formatDate } from '@/data/articole'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return articole.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const articol = articole.find((a) => a.slug === params.slug)
  if (!articol) return {}

  return {
    title: `${articol.title} | ARA DENT STUDIO`,
    description: articol.metaDescription,
    alternates: { canonical: `https://aradentpitesti.ro/blog/${articol.slug}` },
    openGraph: {
      title: `${articol.title} | ARA DENT STUDIO`,
      description: articol.metaDescription,
      url: `https://aradentpitesti.ro/blog/${articol.slug}`,
      siteName: 'ARA DENT STUDIO',
      locale: 'ro_RO',
      type: 'article',
    },
  }
}

const WA_TEXT = encodeURIComponent(
  'Buna ziua! Am citit articolul despre pretul implantului dentar si as dori sa programez o consultatie gratuita.'
)

export default function ArticolPage({ params }: Props) {
  const articol = articole.find((a) => a.slug === params.slug)
  if (!articol) notFound()

  const jsonLdFaq = articol.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: articol.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null

  return (
    <>
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
      <Navbar />
      <main className="bg-cream">

        {/* Header articol */}
        <section className="bg-cream-dark pt-40 pb-16 px-6">
          <div className="container-site max-w-[720px]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-jost text-[13px] uppercase tracking-wider text-gold hover:text-forest transition-colors duration-200 mb-8"
            >
              <span aria-hidden="true">←</span>
              Înapoi la blog
            </Link>
            <h1 className="font-playfair font-bold text-3xl lg:text-[40px] text-forest-dark leading-tight mb-4">
              {articol.title}
            </h1>
            <time
              dateTime={articol.date}
              className="font-jost italic text-[13px] text-bark block"
            >
              {formatDate(articol.date)}
            </time>
          </div>
        </section>

        {/* Continut articol */}
        <section className="py-16 px-6 bg-cream">
          <div
            className="container-site max-w-[720px] prose-blog"
            dangerouslySetInnerHTML={{ __html: articol.continut }}
          />
        </section>

        {/* CTA box */}
        <section className="py-16 px-6 bg-cream">
          <div className="container-site max-w-[720px]">
            <div className="bg-cream-dark rounded-sm p-10 text-center">
              <h2 className="font-playfair font-bold text-2xl lg:text-3xl text-forest-dark mb-3">
                Vrei să afli cât te costă implantul TĂU?
              </h2>
              <p className="font-jost font-light text-[15px] text-bark-dark mb-8">
                Consultația, radiografia și CT-ul sunt complet gratuite.
              </p>
              <a
                href={`https://wa.me/40754219011?text=${WA_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-gold hover:text-forest-dark transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Programează consultația gratuită
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
