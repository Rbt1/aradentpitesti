'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: FAQItem[]
}

const FAQ = ({ items }: FAQProps) => {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-bark-light/30 rounded-sm overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-offwhite hover:bg-cream transition-colors duration-200"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-playfair text-[17px] text-forest-dark pr-4">
              {item.q}
            </span>
            <motion.span
              className="text-gold flex-shrink-0 text-xl leading-none"
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              +
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className="font-jost font-light text-[15px] text-bark-dark leading-[1.8] px-6 py-5 bg-cream border-t border-bark-light/20">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default FAQ
