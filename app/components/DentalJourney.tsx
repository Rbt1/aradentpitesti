'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const CONTENT = {
  title: 'Înțelege ce se întâmplă cu dintele tău',
  subtitle: 'De la primele semne până la soluția completă',
}

interface Step {
  number: string
  image: string
  alt: string
  tag: string
  title: string
  text: string
}

const STEPS: Step[] = [
  {
    number: '01',
    image: '/images/carie_fara_afectare_pulpara.jpg',
    alt: 'Carie simplă fără afectare pulpară — obturație dentară',
    tag: 'Obturație',
    title: 'Caria simplă — acționează acum',
    text: 'Caria detectată la timp afectează doar smalțul și dentina, fără să ajungă la nerv. Tratamentul este simplu, rapid și nedureros — o obturație (plombă) rezolvă problema complet. Acesta este momentul ideal să vii la control.',
  },
  {
    number: '02',
    image: '/images/carie_cu_afectare_pulpara_si_granulor.jpg',
    alt: 'Carie cu afectare pulpară și granulom — tratament endodontic',
    tag: 'Endodonție',
    title: 'Caria profundă — nervul e afectat',
    text: 'Când caria ajunge la pulpa dentară apare durerea spontană, mai ales noaptea. La vârful rădăcinii se poate forma un granulom — o infecție cronică a osului. Tratamentul de canal (endodontic) salvează dintele și elimină infecția definitiv.',
  },
  {
    number: '03',
    image: '/images/implant_dentar.jpg',
    alt: 'Implant dentar — înlocuire dinte lipsă cu soluție permanentă',
    tag: 'Implantologie',
    title: 'Dintele pierdut — soluția permanentă',
    text: 'Când dintele nu mai poate fi salvat, implantul dentar este cea mai apropiată alternativă a unui dinte natural. Se inserează în os, se integrează biologic și suportă o coroană identică vizual cu dinții naturali. O soluție permanentă, stabilă și estetică.',
  },
  {
    number: '04',
    image: '/images/boala_parodontala.jpg',
    alt: 'Boala parodontală — retracție gingivală și afectare osoasă',
    tag: 'Parodontologie',
    title: 'Boala parodontală — osul se retrage',
    text: 'Parodontoza nu doare la început — de aceea e periculoasă. Bacteriile distrug treptat osul și ligamentele care susțin dinții. Sângerarea gingiilor și mobilitatea dentară sunt semne clare. Tratamentul parodontal oprește evoluția și protejează dinții rămași.',
  },
]

// O etapă individuală
const Step = ({ step, index }: { step: Step; index: number }) => {
  const isEven = index % 2 === 0
  // Numerele decorative mari se mișcă mai repede decât conținutul
  const parallaxNumber = useParallax(0.25)

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-16 lg:py-20">
      {/* Număr decorativ — parallax 0.25 */}
      <div
        ref={parallaxNumber}
        className="absolute hidden lg:block parallax-element"
        style={{ zIndex: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        aria-hidden="true"
      >
        <motion.span
          className="font-playfair italic text-[120px] text-forest leading-none select-none pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {step.number}
        </motion.span>
      </div>

      {/* Imagine */}
      <div
        className={`relative z-10 flex justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
        data-animate
        data-animation={isEven ? 'fade-left' : 'fade-right'}
      >
        <motion.div
          className="relative w-full max-w-[480px] rounded-sm overflow-hidden shadow-forest"
          whileHover={{ scale: 1.03, boxShadow: '0 16px 48px rgba(45, 106, 79, 0.20)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Image
            src={step.image}
            alt={step.alt}
            width={480}
            height={360}
            className="w-full h-auto"
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </motion.div>
      </div>

      {/* Text */}
      <div
        className={`relative z-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
        data-animate
        data-animation={isEven ? 'fade-right' : 'fade-left'}
      >
        {/* Număr mic + tag */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-jost text-[11px] uppercase tracking-[0.25em] text-bark">
            {step.number}
          </span>
          <span
            className="font-jost text-[11px] uppercase tracking-wider text-forest-dark px-3 py-1 rounded-sm animate-pulse-gold"
            style={{ backgroundColor: '#C9A84C', color: '#1B4332' }}
          >
            {step.tag}
          </span>
        </div>

        {/* Titlu */}
        <h3 className="font-playfair text-3xl lg:text-[34px] text-forest-dark leading-tight mb-5">
          {step.title}
        </h3>

        {/* Text */}
        <p className="font-jost font-light text-[15px] text-bark-dark leading-[1.8]">
          {step.text}
        </p>
      </div>
    </div>
  )
}

const DentalJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
  const parallaxLine = useParallax(0.1)

  return (
    <section className="bg-cream py-24 px-6 overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            className="font-playfair italic text-4xl lg:text-[48px] text-forest-dark leading-tight mb-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {CONTENT.title}
          </motion.h2>
          <motion.p
            className="font-jost font-light text-base text-bark"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {CONTENT.subtitle}
          </motion.p>
        </div>

        {/* Etape + linie verticală */}
        <div ref={containerRef} className="relative">
          {/* Linie fond */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-bark-light/30 -translate-x-1/2 hidden lg:block" aria-hidden="true" />

          {/* Linie gold animată — parallax 0.1 */}
          <div
            ref={parallaxLine}
            className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:block parallax-element"
            style={{ height: '100%', width: '1px' }}
            aria-hidden="true"
          >
            <motion.div
              className="w-full bg-gold origin-top"
              style={{ scaleY: lineScaleY, height: '100%' }}
            />
          </div>

          {/* Etapele */}
          <div className="divide-y divide-bark-light/20">
            {STEPS.map((step, i) => (
              <Step key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DentalJourney
