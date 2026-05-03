'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const CONTENT = {
  title: 'Rezervă-ți consultația',
  subtitle: 'Prima consultație — gratuită pentru cazurile de implantologie',
  submitLabel: 'Trimite cererea',
}

const CONTACT_INFO = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Adresă',
    value: 'Bd. Republicii nr. 19, Pitești, Argeș',
    href: 'https://maps.google.com/?q=Bd.+Republicii+nr.+19+Pitesti',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Telefon',
    value: '0754 219 011',
    href: 'tel:+40754219011',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Program',
    value: 'Luni–Vineri 09:00–18:00',
    href: null,
  },
]

const SERVICES_OPTIONS = [
  'Implantologie',
  'Chirurgie Orală',
  'Protetică Dentară',
  'Endodonție',
  'Consultație generală',
]

interface FormData {
  name: string
  phone: string
  service: string
  date: string
  message: string
}

const inputClass = `
  w-full bg-forest-dark border border-forest-light/40 rounded-sm px-4 py-3
  font-jost text-sm text-cream placeholder:text-bark-light/50
  focus:outline-none focus:border-gold transition-colors duration-200
`

const WHATSAPP_NUMBER = '40754219011'

const buildWhatsAppUrl = (data: FormData): string => {
  const lines = [
    'Bună ziua! Doresc o programare la ARA DENT STUDIO.',
    `Nume: ${data.name}`,
    `Telefon: ${data.phone}`,
    `Serviciu: ${data.service}`,
    data.date ? `Data preferată: ${data.date}` : null,
    data.message ? `Mesaj: ${data.message}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`
}

const Booking = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(buildWhatsAppUrl(formData), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="programare" className="bg-forest py-24 px-6">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            className="font-playfair italic text-4xl lg:text-[52px] text-cream leading-tight mb-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {CONTENT.title}
          </motion.h2>
          <motion.p
            className="font-jost font-light text-[15px] text-forest-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {CONTENT.subtitle}
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Formular */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-jost text-xs uppercase tracking-wider text-forest-light mb-2" htmlFor="name">
                    Nume complet *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ion Popescu"
                    className={inputClass}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block font-jost text-xs uppercase tracking-wider text-forest-light mb-2" htmlFor="phone">
                    Telefon *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    className={inputClass}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-jost text-xs uppercase tracking-wider text-forest-light mb-2" htmlFor="service">
                    Serviciu dorit *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>Selectează</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-jost text-xs uppercase tracking-wider text-forest-light mb-2" htmlFor="date">
                    Data preferată
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block font-jost text-xs uppercase tracking-wider text-forest-light mb-2" htmlFor="message">
                  Mesaj (opțional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descrieți pe scurt situația sau întrebările dvs..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full font-jost text-sm uppercase tracking-wider bg-[#25D366] text-white py-4 rounded-sm hover:bg-[#1ebe5d] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {CONTENT.submitLabel}
              </button>
          </motion.form>

          {/* Info contact — 3 coloane */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-forest-light/20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          >
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="text-center">
                <div className="text-forest-light flex justify-center mb-3">
                  {info.icon}
                </div>
                <p className="font-jost text-[11px] uppercase tracking-wider text-forest-light mb-1">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-jost text-sm text-cream hover:text-gold transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-jost text-sm text-cream">{info.value}</p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Booking
