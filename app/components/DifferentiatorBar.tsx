'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1 as number, y: 0 as number },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
})

const ToothIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 4C13.5 4 8 9 8 15.5c0 3.5 1 6.5 2.5 9.5L13 36h5.5l1.5-8h2l1.5 8H29l2.5-11c1.5-3 2.5-6 2.5-9.5C34 9 28.5 4 22 4h-2z" />
  </svg>
)

const StarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="20,4 24.5,14.5 36,16 27.5,24 30,36 20,30.5 10,36 12.5,24 4,16 15.5,14.5" />
  </svg>
)

const ITEMS = [
  {
    Icon: ToothIcon,
    title: 'Nu te trimitem prin oraș pentru tomograf',
    text: 'Avem tomograf CBCT propriu, scanner intraoral și microscop dentar — totul la aceeași adresă, condus de Dr. Robert Lungu, medic specialist chirurgie dento-alveolară.',
  },
  {
    Icon: StarIcon,
    title: 'Fără costuri ascunse',
    text: 'Consultație + radiografie panoramică: 100 lei. CT dentar: 250 lei. Știi exact cât plătești din prima zi — fără surprize, fără drumuri inutile.',
  },
]

const DifferentiatorBar = () => {
  return (
    <section className="bg-forest-dark py-12 px-6">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col gap-4"
              {...fadeUp(i * 0.15)}
            >
              <item.Icon />
              <h2 className="font-playfair font-bold text-[22px] text-cream leading-snug">
                {item.title}
              </h2>
              <p className="font-jost font-light text-[15px] leading-relaxed text-forest-light">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DifferentiatorBar
