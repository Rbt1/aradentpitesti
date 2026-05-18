'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const CONTENT = {
  label: 'Med. Stom. · Fondator',
  name: 'Dr. Robert Lungu',
  specialty: 'Medic Stomatolog · Specialist Chirurgie Dento-Alveolară',
  paragraphs: [
    'Sunt dedicat tratamentelor stomatologice moderne, cu accent pe precizie, confort și rezultate pe termen lung. Practica mea îmbină experiența clinică cu tehnologiile actuale pentru a oferi soluții eficiente, adaptate fiecărui pacient.',
    'Activitatea mea se concentrează pe chirurgie orală, implantologie și reabilitări dentare complexe — cu o abordare minim invazivă și predictibilă. Pun accent pe stabilitatea biologică a rezultatelor și pe o comunicare clară și sinceră cu fiecare pacient.',
    'Dar dincolo de tehnică, ceea ce mă definește e că nu dispar după tratament. Sunt alături de pacienții mei pe termen lung — cu răbdare, deschidere și tot angajamentul de a face lucrurile perfect.',
  ],
  quote: 'Obiectivul meu nu e doar un tratament corect. Este o relație de încredere pe viață.',
  quoteAuthor: 'Dr. Robert Lungu',
}

const VALUES = [
  {
    title: 'Alături de tine',
    text: 'Înainte, în timpul și după tratament. Nu dispar după ce închidem ușa.',
  },
  {
    title: 'Comunicare deschisă',
    text: 'Îți spun tot — ce fac, de ce, ce urmează. Nicio surpriză, niciun secret.',
  },
  {
    title: 'Totul perfect',
    text: 'Am standarde înalte față de mine. Fiecare detaliu contează pentru că tu contezi.',
  },
]

const PARA_DELAYS = ['delay-100', 'delay-200', 'delay-300']
const VALUE_DELAYS = ['delay-200', 'delay-300', 'delay-400']

const AboutDoctor = () => {
  // Frunzele se mișcă mai repede (0.3) pentru efect de adâncime pronunțat
  const parallaxLeafBig = useParallax(0.3)
  const parallaxLeafSmall = useParallax(0.3)
  // Fotografia se mișcă mai lent (0.06) — aproape statică
  const parallaxPhoto = useParallax(0.06)

  return (
    <section id="doctor" className="bg-cream-dark py-24 px-6">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Stânga: fotografie */}
          <div
            data-animate
            data-animation="fade-left"
          >
            {/* Wrapper fotografie */}
            <div className="relative">
              {/* Outline border cu offset */}
              <div
                className="absolute inset-0 border-2 border-forest rounded-sm"
                style={{ transform: 'translate(12px, 12px)' }}
                aria-hidden="true"
              />

              {/* Fotografie doctor */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                height: '560px',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '2px solid #C9A84C',
                boxShadow: '0 20px 60px rgba(45, 106, 79, 0.15)',
                flexShrink: 0,
              }}>
                <Image
                  src="/images/pozadoctor.jpg"
                  alt="Dr. Robert Lungu — ARA DENT STUDIO Pitești"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                  priority
                />
              </div>

              {/* Frunza mare */}
              <div
                className="absolute -bottom-6 -right-4"
                aria-hidden="true"
              >
                <svg
                  className="text-gold w-14 h-14 opacity-60"
                  viewBox="0 0 120 200"
                  fill="currentColor"
                >
                  <path d="M60 190 C60 190 10 140 10 80 C10 35 35 10 60 10 C85 10 110 35 110 80 C110 140 60 190 60 190Z" />
                </svg>
              </div>

              {/* Frunza mică */}
              <div
                className="absolute -top-4 -left-3"
                aria-hidden="true"
              >
                <svg
                  className="text-gold w-10 h-10 opacity-40"
                  viewBox="0 0 120 200"
                  fill="currentColor"
                >
                  <path d="M60 190 C60 190 10 140 10 80 C10 35 35 10 60 10 C85 10 110 35 110 80 C110 140 60 190 60 190Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dreapta: conținut text */}
          <div
            data-animate
            data-animation="fade-right"
          >
            {/* Label */}
            <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
              {CONTENT.label}
            </p>

            {/* Nume */}
            <h2 className="font-playfair text-4xl lg:text-[44px] text-forest-dark leading-tight mb-2">
              {CONTENT.name}
            </h2>

            {/* Specialitate */}
            <p className="font-playfair italic text-lg text-forest mb-10">
              {CONTENT.specialty}
            </p>

            {/* Paragrafe */}
            <div className="space-y-5 mb-12">
              {CONTENT.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`font-jost font-light text-[15px] text-bark-dark leading-[1.8] ${PARA_DELAYS[i]}`}
                  data-animate
                  data-animation="fade-up"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Pull quote */}
            <motion.blockquote
              className="relative mb-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
              {/* Ghilimele decorative */}
              <span
                className="absolute -top-4 -left-2 font-playfair text-[80px] text-gold leading-none select-none pointer-events-none"
                style={{ opacity: 0.15 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="font-playfair italic text-xl text-forest leading-relaxed pl-4">
                {CONTENT.quote}
              </p>
              <footer className="font-jost text-sm text-bark mt-2 pl-4 font-light">
                — {CONTENT.quoteAuthor}
              </footer>
            </motion.blockquote>

            {/* Blocuri valori */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {VALUES.map((value, i) => (
                <div
                  key={value.title}
                  className={`border-t border-bark-light/40 pt-5 ${VALUE_DELAYS[i]}`}
                  data-animate
                  data-animation="fade-up"
                >
                  <p className="font-playfair text-base text-forest-dark mb-2">
                    {value.title}
                  </p>
                  <p className="font-jost font-light text-[13px] text-bark-dark leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutDoctor
