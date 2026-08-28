'use client'

import { motion } from 'framer-motion'

interface CTAWhatsAppProps {
  title: string
  subtitle: string
  waUrl: string
}

const CTAWhatsApp = ({ title, subtitle, waUrl }: CTAWhatsAppProps) => {
  return (
    <section className="py-10 px-6 bg-forest-dark">
      <motion.div
        className="container-site max-w-2xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="font-playfair text-[22px] text-cream mb-3">
          {title}
        </h2>
        <p className="font-jost font-light text-cream/70 mb-8">
          {subtitle}
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-jost text-sm uppercase tracking-wider bg-gold text-forest-dark px-8 py-4 rounded-sm hover:bg-gold-light transition-all duration-300"
        >
          Scrie pe WhatsApp →
        </a>
      </motion.div>
    </section>
  )
}

export default CTAWhatsApp
