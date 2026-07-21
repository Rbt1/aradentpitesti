'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const WA_GENERIC = 'https://wa.me/40754219011'
const WA_DIASPORA =
  'https://wa.me/40754219011?text=Buna+ziua!+Sunt+din+diaspora+si+as+dori+sa+programez+o+consultatie+gratuita.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'ARA DENT STUDIO',
  areaServed: ['Pitesti', 'Arges', 'Romania'],
  availableLanguage: 'Romanian',
  url: 'https://www.aradentpitesti.ro/diaspora',
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1 as number, y: 0 as number },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
})

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const PlaneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

interface Card {
  Icon: () => JSX.Element
  title: string
  text: string
}

const CARDS: Card[] = [
  {
    Icon: PlaneIcon,
    title: 'Planificat din timp',
    text: 'Știi exact ce tratament faci înainte să iei avionul. Fără surprize, fără timp pierdut.',
  },
  {
    Icon: CalendarIcon,
    title: 'Programare flexibilă',
    text: 'Dimineața devreme, seara, zile consecutive — adaptăm programul la zilele tale acasă.',
  },
  {
    Icon: CheckIcon,
    title: 'Etapizare specială',
    text: 'Două vizite, două vacanțe — tratament complet fără să sacrifici toate zilele libere.',
  },
]

const FREE_ITEMS = [
  {
    title: 'Consultație completă',
    text: 'Evaluare cu Dr. Robert Lungu, specialist chirurgie dento-alveolară',
  },
  {
    title: 'Radiografie panoramică',
    text: 'Esențială pentru planificarea corectă a tratamentului',
  },
]

export default function DiasporaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="bg-cream">

        {/* 1. Hero */}
        <section className="bg-forest-dark pt-40 pb-24 px-6 text-center">
          <div className="container-site max-w-3xl mx-auto">
            <motion.h1
              className="font-playfair font-bold text-4xl lg:text-5xl text-cream leading-tight mb-6"
              {...fadeUp(0)}
            >
              Vii acasă în vacanță?
            </motion.h1>
            <motion.p
              className="font-jost font-light text-lg leading-relaxed mb-10"
              style={{ color: 'rgba(245,240,230,0.80)' }}
              {...fadeUp(0.15)}
            >
              Rezolvă tratamentul dentar pe care l-ai amânat — cu programare flexibilă adaptată zilelor tale acasă.
            </motion.p>
            <motion.a
              href={WA_GENERIC}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-[#25D366] text-white px-8 py-4 rounded-sm hover:bg-[#1ebe5d] transition-all duration-300"
              {...fadeUp(0.25)}
            >
              <WaIcon />
              Scrie-ne pe WhatsApp
            </motion.a>
          </div>
        </section>

        {/* 2. De ce sa te tratezi acasa */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-4xl">
            <motion.h2
              className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-8 text-center"
              {...fadeUp()}
            >
              De ce aleg românii din diaspora să se trateze acasă
            </motion.h2>
            <motion.p
              className="font-jost font-light text-[16px] text-bark-dark leading-[1.9] max-w-3xl mx-auto text-center mb-12"
              {...fadeUp(0.1)}
            >
              Diferența de cost între România și țările din vest este semnificativă — pentru același tip de tratament, cu aceleași materiale certificate internațional. Implanturile folosite în România sunt identice cu cele din Germania sau Spania — certificate FDA, CE și ISO 13485. Diferența vine exclusiv din costurile de operare locale.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="bg-offwhite border border-bark-light/30 rounded-sm p-8"
                  style={{ boxShadow: '0 8px 32px rgba(45,106,79,0.08)' }}
                  {...fadeUp(i * 0.12)}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-forest mb-4">
                    <card.Icon />
                  </div>
                  <h3 className="font-playfair text-xl text-forest-dark mb-3">{card.title}</h3>
                  <p className="font-jost font-light text-[14px] text-bark-dark leading-relaxed">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Timeline */}
        <section className="py-20 px-6 bg-offwhite">
          <div className="container-site max-w-2xl">
            <motion.h2
              className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-14 text-center"
              {...fadeUp()}
            >
              Tratamentul în două vizite
            </motion.h2>

            <div className="relative space-y-10">
              <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-bark-light/60 hidden md:block" />

              {/* Etapa 1 */}
              <motion.div className="flex gap-6" {...fadeUp(0)}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center font-jost font-bold text-forest-dark text-lg relative z-10">
                  1
                </div>
                <div className="pt-2">
                  <h3 className="font-playfair text-xl text-forest-dark mb-3">
                    Vizita 1 — Prima vacanță
                  </h3>
                  <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed">
                    Consultație gratuită și evaluare completă cu radiografie panoramică. Extracție dacă e necesară. Inserarea implantului — 30–60 minute. Pleci fără durere, cu implantul în curs de integrare.
                  </p>
                </div>
              </motion.div>

              {/* Etapa 2 */}
              <motion.div className="flex gap-6" {...fadeUp(0.15)}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-forest flex items-center justify-center font-jost font-bold text-cream text-lg relative z-10">
                  2
                </div>
                <div className="pt-2">
                  <h3 className="font-playfair text-xl text-forest-dark mb-3">
                    Vizita 2 — Următoarea vacanță
                  </h3>
                  <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed">
                    După 3–6 luni de osteointegrare, montăm coroana definitivă. Control final. Tratament complet finalizat.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.p
              className="font-jost italic text-[14px] text-bark leading-relaxed text-center mt-10"
              {...fadeUp(0.25)}
            >
              Intervalul de 3–6 luni dintre vizite coincide perfect cu ritmul natural al vizitelor acasă — vară, Crăciun sau Paște.
            </motion.p>
          </div>
        </section>

        {/* 4. Gratuit */}
        <section className="py-20 px-6 bg-forest-dark">
          <div className="container-site max-w-3xl text-center">
            <motion.h2
              className="font-playfair text-3xl lg:text-4xl text-cream mb-10"
              {...fadeUp()}
            >
              Gratuit, pentru toți pacienții
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {FREE_ITEMS.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="bg-forest border border-gold/40 rounded-sm p-8 text-left"
                  {...fadeUp(i * 0.12)}
                >
                  <div className="w-6 h-[1px] bg-gold mb-4" />
                  <h3 className="font-playfair text-xl text-cream mb-2">{item.title}</h3>
                  <p className="font-jost font-light text-[14px] leading-relaxed" style={{ color: 'rgba(245,240,230,0.70)' }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="font-jost italic font-light text-[15px]"
              style={{ color: 'rgba(245,240,230,0.60)' }}
              {...fadeUp(0.2)}
            >
              Fără obligații. Fără surprize. Pleci cu un plan clar.
            </motion.p>
          </div>
        </section>

        {/* 5. Despre Dr. Robert Lungu */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0)}>
                <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
                  Medicul tău
                </p>
                <h2 className="font-playfair text-3xl text-forest-dark mb-6">
                  Dr. Robert Lungu
                </h2>
                <div className="space-y-4 font-jost font-light text-[15px] text-bark-dark leading-[1.9]">
                  <p>
                    Dr. Robert Lungu este medic specialist în chirurgie dento-alveolară, absolvent al UMF Carol Davila București și cu rezidențiat la Sibiu (2020–2023).
                  </p>
                  <p>
                    Implantologia și chirurgia orală reprezintă domeniul său principal de activitate — nu o procedură ocazională.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-forest-light/20"
                {...fadeUp(0.15)}
              >
                <Image
                  src="/images/pozadoctor.jpg"
                  alt="Dr. Robert Lungu — specialist chirurgie dento-alveolară, ARA DENT STUDIO Pitești"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. CTA final */}
        <section className="py-20 px-6 bg-gold">
          <div className="container-site max-w-2xl text-center">
            <motion.h2
              className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-4"
              {...fadeUp()}
            >
              Programează-te înainte să ajungi acasă
            </motion.h2>
            <motion.p
              className="font-jost font-light text-[16px] text-forest-dark/70 mb-10"
              {...fadeUp(0.12)}
            >
              Scrie-ne pe WhatsApp cu perioada când ești disponibil și planificăm împreună.
            </motion.p>
            <motion.a
              href={WA_DIASPORA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300"
              {...fadeUp(0.2)}
            >
              <WaIcon />
              Scrie pe WhatsApp acum
            </motion.a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
