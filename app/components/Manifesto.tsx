'use client'

import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const CONTENT = {
  quote: 'Nu tratăm dinți. Cultivăm încredere.',
  body: 'La ARA DENT STUDIO credem că sănătatea orală este parte din armonia întregului. Fiecare tratament este gândit cu precizie, răbdare și respect față de unicitatea fiecărui pacient.',
}

const Manifesto = () => {
  const parallaxLine = useParallax(0.1)
  const parallaxBg = useParallax(0.15)

  return (
    <section className="bg-offwhite py-32 px-6 relative overflow-hidden">
      {/* Frunza decorativă fundal — parallax 0.15 */}
      <div
        ref={parallaxBg}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none parallax-element"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 120 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[500px] h-[800px] text-forest opacity-[0.025]"
        >
          <path
            d="M60 190 C60 190 10 140 10 80 C10 35 35 10 60 10 C85 10 110 35 110 80 C110 140 60 190 60 190Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-[720px] mx-auto text-center relative z-10">
        {/* Linie decorativă gold — parallax 0.1 */}
        <div ref={parallaxLine} className="parallax-element">
          <motion.div
            className="h-[1px] bg-gold mx-auto mb-8 origin-center"
            style={{ width: '60px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        {/* Citat principal */}
        <h2
          className="font-playfair italic text-fluid-section text-forest-dark leading-tight mb-8"
          data-animate
          data-animation="fade-up-slow"
        >
          {CONTENT.quote}
        </h2>

        {/* Text corp */}
        <motion.p
          className="font-jost font-light text-[17px] text-bark-dark leading-[1.8]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {CONTENT.body}
        </motion.p>
      </div>
    </section>
  )
}

export default Manifesto
