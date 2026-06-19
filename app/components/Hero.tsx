'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParallax } from '../hooks/useParallax'
import { useMouseParallax } from '../hooks/useMouseParallax'

const CONTENT = {
  title: 'Zâmbetul tău înflorește aici.',
  subtitle: 'Stomatologie premium în Pitești · Implantologie · Chirurgie · Protetică · Endodonție',
  ctaPrimary: 'Programează-te',
  ctaSecondary: 'Descoperă clinica',
  scrollLabel: 'Descoperă',
}

// SVG frunze decorative
const LeafSVG = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 120 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M60 190 C60 190 10 140 10 80 C10 35 35 10 60 10 C85 10 110 35 110 80 C110 140 60 190 60 190Z"
      fill="currentColor"
    />
    <path
      d="M60 190 L60 50"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.5"
    />
    <path
      d="M60 100 C60 100 30 75 25 55"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1"
    />
    <path
      d="M60 130 C60 130 90 105 95 85"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1"
    />
  </svg>
)

// SVG frunzuliță scroll indicator
const SmallLeafSVG = () => (
  <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-7" aria-hidden="true">
    <path
      d="M20 55 C20 55 5 40 5 22 C5 10 12 3 20 3 C28 3 35 10 35 22 C35 40 20 55 20 55Z"
      fill="currentColor"
    />
    <path d="M20 55 L20 15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
  </svg>
)

const Hero = () => {
  // Scroll parallax refs
  const parallaxLeaf1 = useParallax(0.15)
  const parallaxLeaf2 = useParallax(0.15)
  const parallaxLeaf3 = useParallax(0.15)
  const parallaxLeaf4 = useParallax(0.15)
  const parallaxLogo = useParallax(0.05)
  const parallaxText = useParallax(0.08)
  const parallaxBg = useParallax(0.2)

  // Mouse parallax (Hero only)
  useMouseParallax()

  return (
    <section
      id="acasa"
      className="relative min-h-screen flex flex-col items-center justify-center bg-cream-dark overflow-hidden"
    >
      {/* Cerc decorativ fundal — parallax general 0.2 */}
      <div
        ref={parallaxBg}
        className="absolute inset-0 flex items-center justify-center pointer-events-none parallax-element"
        aria-hidden="true"
      >
        <div className="w-[700px] h-[700px] rounded-full border border-forest opacity-[0.04]" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-forest opacity-[0.03]" />
      </div>

      {/* Frunze decorative — scroll parallax (0.15) + mouse parallax la viteze diferite */}

      {/* Frunza mare stânga */}
      <div
        ref={parallaxLeaf1}
        className="absolute top-[8%] left-[5%] parallax-element"
      >
        <div data-parallax-mouse="20" className="pointer-events-none">
          <div className="text-forest opacity-[0.06] w-32 h-48 animate-float">
            <LeafSVG className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Frunza mare dreapta */}
      <div
        ref={parallaxLeaf2}
        className="absolute top-[15%] right-[7%] parallax-element"
      >
        <div data-parallax-mouse="15" className="pointer-events-none">
          <div className="text-forest opacity-[0.05] w-24 h-36 animate-float animation-delay-2">
            <LeafSVG className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Frunza mică stânga */}
      <div
        ref={parallaxLeaf3}
        className="absolute bottom-[20%] left-[3%] parallax-element"
      >
        <div data-parallax-mouse="30" className="pointer-events-none">
          <div className="text-forest opacity-[0.04] w-20 h-32 animate-float animation-delay-4">
            <LeafSVG className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Frunza mică dreapta */}
      <div
        ref={parallaxLeaf4}
        className="absolute bottom-[30%] right-[4%] parallax-element"
      >
        <div data-parallax-mouse="25" className="pointer-events-none">
          <div className="text-forest opacity-[0.05] w-28 h-40 animate-float animation-delay-6">
            <LeafSVG className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Conținut principal */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Logo animat — scroll parallax 0.05 */}
        <div ref={parallaxLogo} className="mb-10 parallax-element">
          <div data-parallax-mouse="8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <video
                src="/logo/logo-animated.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-[160px] lg:w-[220px] h-auto object-contain mx-auto"
                aria-label="ARA DENT STUDIO logo"
              />
            </motion.div>
          </div>
        </div>

        {/* Titlu + subtitlu — scroll parallax 0.08 */}
        <div ref={parallaxText} className="parallax-element">
          {/* Titlu */}
          <div data-parallax-mouse="5">
            <motion.h1
              className="font-playfair italic text-fluid-hero text-forest-dark leading-tight mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {CONTENT.title}
            </motion.h1>
          </div>

          {/* Subtitlu — mouse parallax mai lent */}
          <div data-parallax-mouse="3">
            <motion.p
              className="font-jost font-light text-xs uppercase tracking-widest text-bark mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
            >
              {CONTENT.subtitle}
            </motion.p>
          </div>

          {/* Butoane CTA — fără mouse parallax */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6, ease: 'easeOut' }}
          >
            <Link
              href="#programare"
              className="font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-forest-dark transition-all duration-300 text-center shadow-forest hover:shadow-forest-lg"
            >
              {CONTENT.ctaPrimary}
            </Link>
            <Link
              href="#servicii"
              className="font-jost text-sm uppercase tracking-wider border border-bark text-forest-dark px-8 py-4 rounded-sm hover:border-forest hover:text-forest hover:bg-forest/5 transition-all duration-300 text-center"
            >
              {CONTENT.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <div className="text-gold animate-bounce-soft">
          <SmallLeafSVG />
        </div>
        <span className="font-jost text-[11px] uppercase tracking-widest text-bark">
          {CONTENT.scrollLabel}
        </span>
      </motion.div>
    </section>
  )
}

export default Hero
