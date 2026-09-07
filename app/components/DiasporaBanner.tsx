'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const PlaneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const WA_DIASPORA =
  'https://wa.me/40754219011?text=' +
  encodeURIComponent('Bună ziua! Sunt din diaspora și doresc o evaluare pentru tratament dentar. Vă trimit CT-ul și pozele intraorale.')

const FEATURES = [
  { Icon: CheckIcon, text: 'Trimite-ne CT-ul și pozele pe WhatsApp' },
  { Icon: CheckIcon, text: 'Primești planul de tratament în 24 ore' },
  { Icon: PlaneIcon, text: 'Transfer Otopeni — Pitești disponibil' },
  { Icon: CalendarIcon, text: '75-90 minute de aeroport pe A1' },
]

const DiasporaBanner = () => {
  return (
    <section className="bg-forest-dark py-20 px-6">
      <div className="container-site max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Coloana stanga */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="font-playfair font-bold text-[28px] lg:text-[32px] text-cream leading-tight mb-5">
              Vii acasă din diaspora?
            </h2>
            <p className="font-jost font-light text-[16px] text-cream/80 leading-[1.7] mb-8">
              Planificăm tratamentul tău dentar înainte să cumperi biletul de avion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_DIASPORA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-jost text-sm uppercase tracking-wider bg-gold text-forest-dark px-8 py-[14px] rounded-sm hover:bg-cream transition-all duration-300 text-center"
              >
                Trimite documentele pe WhatsApp
              </a>
              <Link
                href="/diaspora"
                className="inline-block font-jost text-sm uppercase tracking-wider border border-gold text-gold px-8 py-[14px] rounded-sm hover:bg-gold hover:text-forest-dark transition-all duration-300 text-center"
              >
                Află mai multe
              </Link>
            </div>
          </motion.div>

          {/* Coloana dreapta */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            {FEATURES.map((item) => (
              <div key={item.text} className="flex items-center gap-4">
                <div className="text-gold">
                  <item.Icon />
                </div>
                <p className="font-jost font-light text-[15px] text-cream/90 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default DiasporaBanner
