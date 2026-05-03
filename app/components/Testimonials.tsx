'use client'

import { motion } from 'framer-motion'

const LeafDecor = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M60 190 C60 190 10 140 10 80 C10 35 35 10 60 10 C85 10 110 35 110 80 C110 140 60 190 60 190Z" />
  </svg>
)

const GOOGLE_REVIEW_URL = 'https://g.page/r/CXJUUxp2i-GYEBM/review'

const Testimonials = () => {
  return (
    <section className="relative bg-offwhite py-24 px-6 overflow-hidden">
      {/* Frunze decorative fundal */}
      <LeafDecor className="absolute top-8 left-8 text-forest opacity-[0.04] w-32 h-48 pointer-events-none" />
      <LeafDecor className="absolute bottom-12 right-6 text-forest opacity-[0.03] w-40 h-60 pointer-events-none" />
      <LeafDecor className="absolute top-1/2 -left-8 text-forest opacity-[0.03] w-24 h-36 pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="max-w-[560px] mx-auto text-center">

          {/* Titlu */}
          <motion.h2
            className="font-playfair italic text-4xl lg:text-[48px] text-forest-dark leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Ce spun pacienții noștri
          </motion.h2>

          {/* Linie gold animată */}
          <motion.div
            className="h-[1px] bg-gold mx-auto mb-10 origin-center"
            style={{ width: '60px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Text provizoriu */}
          <motion.p
            className="font-jost font-light text-[18px] text-bark-dark leading-[1.8] mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Părerile pacienților noștri vor apărea în curând. Fiecare recenzie ne ajută să creștem și să îmbunătățim experiența în cabinet.
          </motion.p>

          {/* Buton Google Reviews */}
          <motion.a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-jost text-xs uppercase tracking-widest bg-gold text-forest-dark px-8 py-4 rounded-sm hover:bg-gold-dark transition-all duration-300 shadow-md hover:shadow-lg mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            whileHover={{ scale: 1.03 }}
          >
            Lasă o recenzie pe Google
          </motion.a>

          {/* Mesaj */}
          <motion.p
            className="font-jost text-[13px] text-bark italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Mulțumim că ne ești alături.
          </motion.p>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
