'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const CONTENT = {
  title: 'Clinica viitorului,',
  titleAccent: 'azi în Pitești',
  quote: 'Înainte să atingem un dinte, știm exact ce facem, de ce și cum va arăta rezultatul.',
  quoteAuthor: '— Dr. Robert Lungu',
  equipmentLabel: 'Tehnologie utilizată în clinică',
}

const BENEFITS = [
  {
    title: 'Mai puțină durere',
    text: 'Precizia digitală ne permite intervenții minim invazive. Mai puțin traumatism, recuperare mai rapidă, confort maxim în fotoliu.',
  },
  {
    title: 'Rezultate previzibile',
    text: 'Nu lucrăm după estimări. Fiecare tratament e planificat digital înainte să înceapă. Știi exact la ce să te aștepți.',
  },
  {
    title: 'Timp redus',
    text: 'Tehnologia modernă scurtează timpul petrecut în cabinet fără să facă compromisuri asupra calității. Respectăm timpul tău.',
  },
]

const EQUIPMENT = [
  'Scanner intraoral digital',
  'Sistem de implanturi premium',
  'Microscop pentru tratamente endodontice',
  'Radiografie digitală panoramică și CBCT',
]

const BENEFIT_DELAYS = ['delay-100', 'delay-200', 'delay-300']

const Technology = () => {
  const parallaxGrid = useParallax(0.12)
  const parallaxCircles = useParallax(0.2)
  const parallaxImage = useParallax(0.08)

  return (
    <section id="tehnologie" className="bg-forest-deep py-24 px-6 overflow-hidden relative">

      {/* Grid geometric fundal — parallax 0.12 */}
      <div
        ref={parallaxGrid}
        className="absolute inset-0 pointer-events-none parallax-element"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(82,183,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(82,183,136,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Cercuri concentrice decorative — parallax 0.2 */}
      <div
        ref={parallaxCircles}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none parallax-element"
        aria-hidden="true"
      >
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
          <circle cx="300" cy="300" r="220" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
          <circle cx="300" cy="300" r="160" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
          <circle cx="300" cy="300" r="100" stroke="rgba(201,168,76,0.03)" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Stânga: text */}
          <div>
            {/* Titlu */}
            <h2
              className="font-playfair italic text-fluid-section text-cream leading-tight mb-8"
              data-animate
              data-animation="fade-left"
            >
              {CONTENT.title}
              <br />
              <span className="text-gold-light">{CONTENT.titleAccent}</span>
            </h2>

            {/* Citat puternic */}
            <motion.blockquote
              className="mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <p className="font-playfair italic text-2xl lg:text-[26px] text-gold-light leading-relaxed">
                &ldquo;{CONTENT.quote}&rdquo;
              </p>
              <footer className="font-jost not-italic text-sm text-forest-light mt-4 font-light">
                {CONTENT.quoteAuthor}
              </footer>
            </motion.blockquote>

            {/* 3 beneficii */}
            <div className="space-y-6">
              {BENEFITS.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className={`border-l-2 border-gold/40 pl-5 ${BENEFIT_DELAYS[i]}`}
                  data-animate
                  data-animation="fade-up"
                >
                  <h3 className="font-playfair text-lg text-cream mb-1">
                    {benefit.title}
                  </h3>
                  <p className="font-jost font-light text-sm text-forest-light leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Listă echipamente — discretă */}
            <motion.div
              className="mt-14"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
            >
              <p className="font-jost text-[11px] uppercase tracking-[0.2em] text-forest-light/60 mb-4">
                {CONTENT.equipmentLabel}
              </p>
              <ul className="space-y-3" role="list">
                {EQUIPMENT.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.08, ease: 'easeOut' }}
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0" aria-hidden="true" />
                    <span className="font-jost text-sm text-cream/50 font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Dreapta: fotografie clinică în cerc — parallax 0.08 */}
          <div className="flex items-center justify-center lg:justify-end">
            <div
              ref={parallaxImage}
              data-animate
              data-animation="fade-right"
              className="parallax-element"
            >
              <div style={{
                width: 'clamp(280px, 40vw, 460px)',
                height: 'clamp(280px, 40vw, 460px)',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid #C9A84C',
                boxShadow: '0 0 60px rgba(201, 168, 76, 0.25)',
                position: 'relative',
                flexShrink: 0,
              }}>
                <Image
                  src="/images/AT2A3840.jpg"
                  alt="Recepție ARA DENT STUDIO Pitești"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  quality={100}
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Technology
