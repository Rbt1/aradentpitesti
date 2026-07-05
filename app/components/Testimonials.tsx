'use client'

import { motion } from 'framer-motion'

const LeafDecor = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M60 190 C60 190 10 140 10 80 C10 35 35 10 60 10 C85 10 110 35 110 80 C110 140 60 190 60 190Z" />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gold" aria-hidden="true">
    <path d="M10 1.5l2.6 5.8 6.2.6-4.7 4.2 1.4 6.2L10 15.1l-5.5 3.2 1.4-6.2-4.7-4.2 6.2-.6L10 1.5z" />
  </svg>
)

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/place/ARA+DENT+STUDIO'

const REVIEWS = [
  {
    nume: 'Amalia Nicolae',
    text: 'Am avut o experiență excelentă la acest cabinet stomatologic! Cabinetul este nou, modern, foarte curat și dotat cu aparatură de ultimă generație. Doctorul este un adevărat profesionist: răbdător, empatic și foarte atent la detalii.',
  },
  {
    nume: 'Jeni Florea',
    text: 'Un medic profesionist. Oferă servicii de calitate. Recomand cu încredere.',
  },
  {
    nume: 'Marian Alexandru Diaconu',
    text: 'Cu adevărat o experiență premium, aparatură de ultimă generație, iar medicul stomatolog și întregul personal, absolut genial! Mi-am schimbat percepția legată de dentist și implicit frica de aceștia.',
  },
  {
    nume: 'Andrada Bostina',
    text: 'Dr. Robert Lungu — recomand cu încredere.',
  },
]

const Testimonials = () => {
  return (
    <section className="relative bg-cream py-24 px-6 overflow-hidden">
      {/* Frunze decorative fundal */}
      <LeafDecor className="absolute top-8 left-8 text-forest opacity-[0.04] w-32 h-48 pointer-events-none" />
      <LeafDecor className="absolute bottom-12 right-6 text-forest opacity-[0.03] w-40 h-60 pointer-events-none" />
      <LeafDecor className="absolute top-1/2 -left-8 text-forest opacity-[0.03] w-24 h-36 pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">

          {/* Titlu */}
          <motion.h2
            className="font-playfair font-bold text-4xl lg:text-[40px] text-forest-dark leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Ce spun pacienții noștri
          </motion.h2>

          {/* Linie gold animată */}
          <motion.div
            className="h-[1px] bg-gold mx-auto mb-6 origin-center"
            style={{ width: '60px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Subtitlu */}
          <motion.p
            className="font-jost italic font-light text-[15px] text-bark leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            4,8 din 5 stele — 26 de recenzii pe Google
          </motion.p>
        </div>

        {/* Grid recenzii */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.nume}
              className="bg-offwhite border border-bark-light rounded-sm p-8"
              style={{ boxShadow: '0 8px 32px rgba(45,106,79,0.10)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -4, boxShadow: '0 16px 44px rgba(45,106,79,0.16)' }}
            >
              {/* Stelute */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon key={idx} />
                ))}
              </div>

              {/* Text recenzie */}
              <p
                className="font-jost italic text-[15px] text-forest-dark leading-[1.7] mb-4"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {review.text}
              </p>

              {/* Separator */}
              <div className="h-[1px] bg-bark-light my-4" />

              {/* Nume */}
              <p className="font-jost font-bold text-[14px] text-forest-dark">
                — {review.nume}
              </p>
              <p className="font-jost text-[11px] uppercase tracking-wide text-bark mt-1">
                Recenzie Google Verificată
              </p>
            </motion.div>
          ))}
        </div>

        {/* Buton toate recenziile */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-gold-underline font-jost text-xs uppercase tracking-widest text-gold hover:text-forest-dark transition-colors duration-200"
          >
            Vezi toate recenziile pe Google →
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Testimonials
