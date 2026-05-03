'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Case {
  id: number
  title: string
  service: string
}

const CASES: Case[] = [
  { id: 1, title: 'Implant unitar cu coroană ceramică', service: 'Implantologie' },
  { id: 2, title: 'Reabilitare protetică completă', service: 'Protetică Dentară' },
  { id: 3, title: 'Chirurgie parodontală și restaurare', service: 'Chirurgie Orală' },
]

// Componentă slider comparativ
const ComparisonSlider = ({ caseIndex }: { caseIndex: number }) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }

  // Culori placeholder pentru înainte/după
  const beforeColor = `hsl(${30 + caseIndex * 10}, 20%, 60%)`
  const afterColor = `hsl(${140 + caseIndex * 10}, 30%, 45%)`

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-sm overflow-hidden cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      role="img"
      aria-label={`Comparație înainte și după — ${CASES[caseIndex].title}`}
    >
      {/* Imagine DUPĂ (fundal complet) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: afterColor }}
        aria-hidden="true"
      >
        <span className="font-jost text-sm text-white/60 uppercase tracking-widest">Fotografie reală — în curând</span>
      </div>

      {/* Imagine ÎNAINTE (stânga, clipată) */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          backgroundColor: beforeColor,
        }}
        aria-hidden="true"
      >
        <span className="font-jost text-sm text-white/60 uppercase tracking-widest">Fotografie reală — în curând</span>
      </div>

      {/* Linie separatoare */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-forest z-10"
        style={{ left: `${sliderPosition}%` }}
        aria-hidden="true"
      />

      {/* Mâner drag */}
      <motion.div
        className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gold shadow-gold flex items-center justify-center cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-forest-dark" aria-hidden="true">
          <path d="M8 12H4M4 12L6 10M4 12L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 12H20M20 12L18 10M20 12L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Label-uri floating */}
      <div
        className="absolute top-4 left-4 font-jost text-xs uppercase tracking-wider text-white bg-bark/60 px-3 py-1.5 rounded-sm z-10"
        aria-label="Înainte"
      >
        Înainte
      </div>
      <div
        className="absolute top-4 right-4 font-jost text-xs uppercase tracking-wider text-white bg-forest/60 px-3 py-1.5 rounded-sm z-10"
        aria-label="După"
      >
        După
      </div>
    </div>
  )
}

const BeforeAfter = () => {
  const [activeCase, setActiveCase] = useState(0)

  return (
    <section className="bg-cream py-24 px-6">
      <div className="container-site">
        {/* Header */}
        <div className="mb-12">
          <motion.h2
            className="font-playfair text-4xl lg:text-5xl text-forest-dark mb-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Transformări reale
          </motion.h2>
          <motion.p
            className="font-jost font-light text-sm text-bark uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cazuri reale tratate la ARA DENT STUDIO, Pitești
          </motion.p>
        </div>

        {/* Slider + info */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ComparisonSlider caseIndex={activeCase} />
          </motion.div>

          {/* Info caz activ */}
          <div className="mt-6 text-center">
            <p className="font-playfair text-lg text-forest-dark">{CASES[activeCase].title}</p>
            <p className="font-jost text-sm text-forest font-light mt-1">{CASES[activeCase].service}</p>
          </div>

          {/* Navigare puncte */}
          <div className="flex justify-center gap-3 mt-6" role="tablist" aria-label="Navigare cazuri">
            {CASES.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(i)}
                role="tab"
                aria-selected={activeCase === i}
                aria-label={`Cazul ${i + 1}: ${c.title}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeCase === i
                    ? 'bg-gold scale-125'
                    : 'bg-bark-light hover:bg-bark'
                }`}
              />
            ))}
          </div>

          {/* Notă legală */}
          <p className="font-jost text-xs text-bark italic text-center mt-8 leading-relaxed">
            Fotografiile sunt ale pacienților reali ai ARA DENT STUDIO, publicate cu acordul scris al acestora.
            Rezultatele individuale pot varia.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
