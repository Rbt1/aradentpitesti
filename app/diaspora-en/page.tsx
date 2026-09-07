'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const WA_EN =
  'https://wa.me/40754219011?text=' +
  encodeURIComponent('Hello! I am a Romanian living abroad and I would like an evaluation for dental treatment. I will send you my CBCT scan and intraoral photos.')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'ARA DENT STUDIO',
  areaServed: ['Pitesti', 'Arges', 'Romania'],
  availableLanguage: ['Romanian', 'English'],
  url: 'https://www.aradentpitesti.ro/diaspora-en',
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

const HomeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const LOGISTICS = [
  {
    Icon: PlaneIcon,
    title: 'Transfer Otopeni — Pitești',
    text: 'Pitești is located 75-90 minutes from Henri Coandă Airport (Otopeni) via the A1 Motorway — without crossing Bucharest. We organize the transfer from the airport directly to the clinic.',
  },
  {
    Icon: HomeIcon,
    title: 'Accommodation in Pitești',
    text: 'We help you find accommodation options near the clinic for the duration of your treatment.',
  },
  {
    Icon: CalendarIcon,
    title: 'Personalized Plan',
    text: 'We do our best to fit everything within your available days — we plan it all before your flight.',
  },
]

const PRICING = [
  { item: 'Consultation', price: 'Free' },
  { item: 'Panoramic X-ray', price: '100 RON (~20 EUR)' },
  { item: 'CBCT dental scan (mandatory for implant planning)', price: '250 RON (~50 EUR)' },
  { item: 'Dental implant (screw)', price: '1,200 RON' },
  { item: 'All-on-4 per arch', price: '12,000 RON (from 1,000 RON/month, 0% interest)' },
  { item: 'All-on-6 per arch', price: '14,000 RON' },
]

const STEPS = [
  { n: 1, text: 'Send us on WhatsApp: recent CBCT scan + intraoral photos' },
  { n: 2, text: 'Receive your treatment plan and estimated cost within 24 hours' },
  { n: 3, text: 'Buy your plane ticket with the dates we set together' },
  { n: 4, text: "Come and we'll take care of everything" },
]

export default function DiasporaEnPage() {
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
            <motion.p
              className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4"
              {...fadeUp(0)}
            >
              ARA DENT STUDIO · Pitești, Romania
            </motion.p>
            <motion.h1
              className="font-playfair font-bold text-4xl lg:text-5xl text-cream leading-tight mb-6"
              {...fadeUp(0.1)}
            >
              Dental Treatment in Romania — For Romanians Living Abroad
            </motion.h1>
            <motion.p
              className="font-jost font-light text-lg leading-relaxed mb-10"
              style={{ color: 'rgba(245,240,230,0.80)' }}
              {...fadeUp(0.2)}
            >
              We plan your treatment before you buy your plane ticket.
            </motion.p>
            <motion.a
              href={WA_EN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-[#25D366] text-white px-8 py-4 rounded-sm hover:bg-[#1ebe5d] transition-all duration-300"
              {...fadeUp(0.3)}
            >
              <WaIcon />
              Send Documents on WhatsApp
            </motion.a>
            <motion.div className="mt-6" {...fadeUp(0.35)}>
              <Link
                href="/diaspora"
                className="font-jost text-[12px] text-cream/50 hover:text-cream/80 transition-colors duration-200 underline underline-offset-2"
              >
                → Versiunea în română
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Protocol — before ticket */}
        <section className="py-20 px-6 bg-forest-dark">
          <div className="container-site max-w-3xl">
            <motion.h2
              className="font-playfair text-3xl lg:text-4xl text-cream mb-6"
              {...fadeUp()}
            >
              Before You Buy Your Plane Ticket
            </motion.h2>
            <motion.p
              className="font-jost font-light text-[16px] text-forest-light mb-4"
              {...fadeUp(0.1)}
            >
              You don&apos;t need to come without knowing what to expect. Send us on WhatsApp before your flight:
            </motion.p>
            <motion.ul className="space-y-2 mb-8" {...fadeUp(0.15)}>
              <li className="flex items-start gap-3 font-jost font-light text-[16px] text-cream">
                <span className="text-gold font-bold mt-[2px]">—</span>
                Recent dental CT scan (CBCT)
              </li>
              <li className="flex items-start gap-3 font-jost font-light text-[16px] text-cream">
                <span className="text-gold font-bold mt-[2px]">—</span>
                Intraoral photos
              </li>
            </motion.ul>
            <motion.p
              className="font-jost font-light text-[16px] text-forest-light leading-[1.9] mb-10"
              {...fadeUp(0.2)}
            >
              Based on these, Dr. Robert Lungu will analyze your situation and send you an estimated treatment plan — what procedures are needed, how many days to plan for, and the total estimated cost. You&apos;ll know exactly what to expect before buying your ticket.
            </motion.p>
            <motion.a
              href={WA_EN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-gold text-forest-dark px-8 py-4 rounded-sm hover:bg-gold-light transition-all duration-300"
              {...fadeUp(0.25)}
            >
              Send Documents on WhatsApp
            </motion.a>
          </div>
        </section>

        {/* 3. Logistics */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-4xl">
            <motion.h2
              className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-10 text-center"
              {...fadeUp()}
            >
              We Organize Everything Together
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LOGISTICS.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="bg-offwhite border border-bark-light/30 rounded-sm p-8"
                  style={{ boxShadow: '0 8px 32px rgba(45,106,79,0.08)' }}
                  {...fadeUp(i * 0.12)}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-gold mb-4">
                    <card.Icon />
                  </div>
                  <h3 className="font-playfair text-xl text-forest-dark mb-3">{card.title}</h3>
                  <p className="font-jost font-light text-[14px] text-bark-dark leading-relaxed">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Treatments */}
        <section className="py-20 px-6 bg-offwhite">
          <div className="container-site max-w-3xl">
            <motion.h2
              className="font-playfair text-3xl text-forest-dark mb-10"
              {...fadeUp()}
            >
              Treatments Available at ARA DENT STUDIO
            </motion.h2>
            <motion.ul className="space-y-4" {...fadeUp(0.1)}>
              {[
                'Dental implants',
                'All-on-4 and All-on-6 (fixed full-arch restoration)',
                'Dental veneers (ceramic and composite)',
                'Extractions, endodontics, periodontology',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-[7px]" />
                  <span className="font-jost font-light text-[16px] text-bark-dark leading-relaxed">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* 5. Pricing */}
        <section className="py-20 px-6 bg-forest-dark">
          <div className="container-site max-w-3xl">
            <motion.h2
              className="font-playfair text-3xl lg:text-4xl text-cream mb-10"
              {...fadeUp()}
            >
              Transparent Pricing
            </motion.h2>
            <motion.div
              className="overflow-x-auto"
              {...fadeUp(0.1)}
            >
              <table className="w-full border-collapse">
                <tbody>
                  {PRICING.map((row, i) => (
                    <tr
                      key={row.item}
                      className={i % 2 === 0 ? 'bg-forest/40' : 'bg-forest/20'}
                    >
                      <td className="font-jost font-light text-[14px] text-cream/90 px-5 py-4 leading-relaxed">
                        {row.item}
                      </td>
                      <td className="font-jost font-bold text-[14px] text-gold px-5 py-4 whitespace-nowrap text-right">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.p
              className="font-jost italic font-light text-[13px] text-forest-light mt-4"
              {...fadeUp(0.2)}
            >
              Prices in EUR are approximate and may vary with exchange rates.
            </motion.p>
          </div>
        </section>

        {/* 6. About Dr. Robert Lungu */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeUp(0)}>
                <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
                  Your Doctor
                </p>
                <h2 className="font-playfair text-3xl text-forest-dark mb-6">
                  Dr. Robert Lungu
                </h2>
                <div className="space-y-4 font-jost font-light text-[15px] text-bark-dark leading-[1.9]">
                  <p>
                    Dr. Robert Lungu is a specialist in dento-alveolar surgery, graduate of UMF Carol Davila Bucharest, with specialized residency training in dento-alveolar surgery.
                  </p>
                  <p>
                    Implantology and oral surgery are his primary area of activity — not an occasional procedure.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-forest-light/20"
                {...fadeUp(0.15)}
              >
                <Image
                  src="/images/pozadoctor.jpg"
                  alt="Dr. Robert Lungu — specialist dento-alveolar surgery, ARA DENT STUDIO Pitești"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Steps */}
        <section className="py-20 px-6 bg-offwhite">
          <div className="container-site max-w-2xl">
            <motion.h2
              className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-14 text-center"
              {...fadeUp()}
            >
              How to Get Started
            </motion.h2>
            <div className="relative space-y-10">
              <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-bark-light/60 hidden md:block" />
              {STEPS.map((step, i) => (
                <motion.div key={step.n} className="flex gap-6" {...fadeUp(i * 0.12)}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-jost font-bold text-lg relative z-10 ${step.n % 2 === 0 ? 'bg-forest text-cream' : 'bg-gold text-forest-dark'}`}>
                    {step.n}
                  </div>
                  <div className="pt-2">
                    <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA final */}
        <section className="py-20 px-6 bg-gold">
          <div className="container-site max-w-2xl text-center">
            <motion.h2
              className="font-playfair text-3xl lg:text-4xl text-forest-dark mb-4"
              {...fadeUp()}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="font-jost font-light text-[16px] text-forest-dark/70 mb-10"
              {...fadeUp(0.12)}
            >
              Send your documents on WhatsApp and receive your personalized treatment plan within 24 hours.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              {...fadeUp(0.2)}
            >
              <a
                href={WA_EN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300"
              >
                <WaIcon />
                WhatsApp: +40 754 219 011
              </a>
              <a
                href="tel:+40754219011"
                className="inline-block font-jost text-sm uppercase tracking-wider border border-forest text-forest-dark px-8 py-4 rounded-sm hover:bg-forest hover:text-cream transition-all duration-300"
              >
                Call: +40 754 219 011
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
