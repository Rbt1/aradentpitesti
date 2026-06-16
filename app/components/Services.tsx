'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Service {
  number: string
  title: string
  description: string
  href: string
}

const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Implantologie',
    description: 'Înlocuim dinții lipsă cu soluții permanente, stabile și estetice. Implantul dentar este cea mai apropiată alternativă a unui dinte natural — funcționează la fel, arată la fel și, îngrijit corect, durează toată viața. Fiecare caz este evaluat individual pentru a găsi soluția potrivită pentru tine.',
    href: '/servicii/implantologie',
  },
  {
    number: '02',
    title: 'Chirurgie Orală',
    description: 'Extracții complexe, rezecții apicale și augmentări osoase efectuate cu precizie maximă, anestezie modernă și recuperare rapidă pentru confortul pacientului.',
    href: '/servicii/chirurgie-orala',
  },
  {
    number: '03',
    title: 'Protetică Dentară',
    description: 'Coroane, punți și proteze realizate prin tehnologie CAD/CAM din materiale premium. Fiecare restaurare este individualizată pentru armonie perfectă cu zâmbetul tău.',
    href: '/servicii/protetica-dentara',
  },
  {
    number: '04',
    title: 'Endodonție',
    description: 'Tratamente de canal cu microscop și instrumentar rotativ de înaltă precizie. Salvăm dinții naturali printr-o abordare minim invazivă și eficientă.',
    href: '/servicii/endodontie',
  },
  {
    number: '05',
    title: 'Parodontologie',
    description: 'Boala parodontală este una dintre cele mai frecvente afecțiuni dentare și, netratată, duce la pierderea dinților. Sângerarea gingiilor, mobilitatea dentară sau retracția gingivală sunt semne că osul și țesuturile de susținere sunt afectate. Tratamentul parodontal oprește evoluția bolii și protejează dinții pe termen lung. Cu cât intervenim mai devreme, cu atât rezultatele sunt mai bune.',
    href: '/servicii/parodontologie',
  },
  {
    number: '06',
    title: 'Obturații Dentare',
    description: 'Tratăm caria înainte să devină o problemă mai mare. Folosim materiale compozite de înaltă calitate, cu nuanțe identice culorii dinților naturali. Rezultatul este estetic, durabil și invizibil.',
    href: '/servicii/obturatii',
  },
]

const DELAY_CLASSES = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500']

const Services = () => {
  return (
    <section id="servicii" className="bg-cream py-24 px-6">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16">
          <motion.h2
            className="font-playfair text-5xl lg:text-[52px] text-forest-dark mb-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Ce facem
          </motion.h2>
          <motion.div
            className="h-[2px] bg-gold origin-left"
            style={{ width: '40px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        {/* Grid carduri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <Link key={service.number} href={service.href} className="block">
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(45, 106, 79, 0.20)' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`relative bg-offwhite border border-bark-light/30 rounded-sm p-10 overflow-hidden group cursor-pointer ${DELAY_CLASSES[i]}`}
                data-animate
                data-animation="fade-up"
              >
                {/* Număr decorativ — fundal */}
                <span
                  className="absolute top-4 left-6 font-playfair italic text-[80px] leading-none select-none pointer-events-none"
                  style={{ color: '#C9A84C', opacity: 0.15, zIndex: 0 }}
                  aria-hidden="true"
                >
                  {service.number}
                </span>

                {/* Titlu */}
                <h3 className="relative font-playfair text-[26px] text-forest-dark mb-3 leading-snug" style={{ zIndex: 1 }}>
                  {service.title}
                </h3>

                {/* Descriere */}
                <p className="relative font-jost font-light text-[15px] text-bark-dark leading-[1.7]" style={{ zIndex: 1 }}>
                  {service.description}
                </p>

                {/* Linie gold hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gold origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ width: '100%' }}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
