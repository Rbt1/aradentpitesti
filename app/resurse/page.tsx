'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

// SVG Icons
const ToothIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-forest" aria-hidden="true">
    <path d="M16 4C12 4 8 8 8 14c0 4 1.5 7 2 10l2 16h4l2-10h4l2 10h4l2-16c.5-3 2-6 2-10 0-6-4-10-8-10-2 0-3.5 1-4 1.5C19.5 5 18 4 16 4z" />
    <path d="M16 4c2 3 6 3 8 0" />
  </svg>
)

const CrossIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-forest" aria-hidden="true">
    <rect x="20" y="6" width="8" height="36" rx="2" />
    <rect x="6" y="20" width="36" height="8" rx="2" />
  </svg>
)

const GumIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-forest" aria-hidden="true">
    <path d="M8 32 C8 20 16 12 24 12 C32 12 40 20 40 32" />
    <path d="M14 32 C14 24 18 18 24 18 C30 18 34 24 34 32" />
    <line x1="24" y1="18" x2="24" y2="40" />
    <line x1="18" y1="24" x2="14" y2="32" />
    <line x1="30" y1="24" x2="34" y2="32" />
    <line x1="8" y1="36" x2="40" y2="36" />
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-forest" aria-hidden="true">
    <path d="M24 40 C24 40 6 28 6 16 C6 10 11 6 16 6 C19.5 6 22.5 7.5 24 10 C25.5 7.5 28.5 6 32 6 C37 6 42 10 42 16 C42 28 24 40 24 40Z" />
  </svg>
)

const BookIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-forest" aria-hidden="true">
    <path d="M8 6h24a4 4 0 014 4v28a4 4 0 01-4 4H8V6z" />
    <path d="M8 6a4 4 0 000 8" />
    <path d="M8 14v28" />
    <line x1="18" y1="20" x2="30" y2="20" />
    <line x1="18" y1="26" x2="30" y2="26" />
    <line x1="18" y1="32" x2="24" y2="32" />
  </svg>
)

const ChatIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-forest" aria-hidden="true">
    <path d="M8 8h32a2 2 0 012 2v20a2 2 0 01-2 2H16l-8 6V10a2 2 0 012-2z" />
    <line x1="16" y1="18" x2="32" y2="18" />
    <line x1="16" y1="24" x2="26" y2="24" />
  </svg>
)

type GhidKey = 'implant' | 'urgente' | 'parodontala'

const GHIDURI: Record<GhidKey, string> = {
  implant: 'Ghidul Implantului Dentar',
  urgente: 'Ghidul Urgentelor Dentare',
  parodontala: 'Ghidul Bolii Parodontale',
}

const CARDS = [
  {
    key: 'implant' as GhidKey,
    Icon: ToothIcon,
    titlu: 'Ghidul Implantului Dentar',
    descriere: 'Tot ce trebuie să știi înainte să te decizi. Etape, durată, îngrijire și întrebări frecvente.',
    tag: '8 pagini · Gratuit',
    pdf: '/ghiduri/Ghid_Implant_Dentar_ARA_DENT_2026.pdf',
  },
  {
    key: 'urgente' as GhidKey,
    Icon: CrossIcon,
    titlu: 'Ghidul Urgențelor Dentare',
    descriere: 'Ce faci când te doare dintele. Urgențe imediate, ce poate aștepta și când mergi la spital.',
    tag: '8 pagini · Gratuit',
    pdf: '/ghiduri/Ghid_Urgente_Dentare_ARA_DENT_2026.pdf',
  },
  {
    key: 'parodontala' as GhidKey,
    Icon: GumIcon,
    titlu: 'Ghidul Bolii Parodontale',
    descriere: 'Boala parodontală se poate preveni și trata. Osul pierdut însă nu se mai reface. Află mai multe.',
    tag: '8 pagini · Gratuit',
    pdf: '/ghiduri/Ghid_Boala_Parodontala_ARA_DENT_2026.pdf',
  },
]

const DE_CE = [
  { Icon: HeartIcon, text: 'Informații corecte, din cabinet' },
  { Icon: BookIcon, text: 'Scrise de Dr. Robert Lungu, specialist' },
  { Icon: ChatIcon, text: 'Fără obligații, fără spam' },
]

const PROBLEMA_OPTIONS = [
  'Lipsesc unul sau mai mulți dinți',
  'Mă doare un dinte',
  'Gingiile mele sângerează sau s-au retras',
  'Vreau să știu mai multe înainte de orice decizie',
]

const DURATA_OPTIONS = ['Recent', 'De câteva luni', 'De mai mult timp']

const SURSA_OPTIONS = ['Google', 'Instagram sau Facebook', 'Recomandare de la cineva', 'Altceva']

const inputClass = `
  w-full border border-bark-light rounded-sm px-4 py-3
  font-jost text-[15px] text-forest-dark bg-white
  focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10
  transition-all duration-200
`.trim()

const labelClass = 'block font-jost text-[13px] uppercase tracking-wider text-bark mb-2'

export default function ResursePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [ghidSelectat, setGhidSelectat] = useState<GhidKey>('implant')
  const [confirmat, setConfirmat] = useState(false)

  const [nume, setNume] = useState('')
  const [telefon, setTelefon] = useState('')
  const [problema, setProblema] = useState('')
  const [durata, setDurata] = useState('')
  const [sursa, setSursa] = useState('')

  const deschideModal = (key: GhidKey) => {
    setGhidSelectat(key)
    setModalOpen(true)
  }

  const inchideModal = () => {
    setModalOpen(false)
    setConfirmat(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nume.trim() || !telefon.trim()) return

    const mesaj = `Bună ziua! Am completat chestionarul pe site și doresc să primesc: ${GHIDURI[ghidSelectat]}.

Numele meu: ${nume}
Problema: ${problema || 'nespecificat'}
De cât timp: ${durata || 'nespecificat'}
Cum am aflat: ${sursa || 'nespecificat'}`

    window.open(
      `https://wa.me/40754219011?text=${encodeURIComponent(mesaj)}`,
      '_blank'
    )
    setConfirmat(true)
    setTimeout(() => inchideModal(), 3000)
  }

  return (
    <>
      <Navbar />
      <main className="bg-cream">

        {/* Hero */}
        <section className="bg-cream-dark pt-40 pb-24 px-6">
          <div className="container-site max-w-3xl">
            <motion.p
              className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Resurse · ARA DENT STUDIO
            </motion.p>
            <motion.h1
              className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Ghiduri gratuite pentru pacienții noștri
            </motion.h1>
            <motion.p
              className="font-jost font-light text-lg text-bark-dark"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
            >
              Răspunde la câteva întrebări scurte și primești ghidul potrivit situației tale — direct pe WhatsApp, fără obligații.
            </motion.p>
          </div>
        </section>

        {/* Carduri ghiduri */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {CARDS.map((card, i) => (
                <motion.div
                  key={card.key}
                  className="bg-offwhite border border-bark-light rounded-sm p-8 flex flex-col"
                  style={{ boxShadow: '0 8px 32px rgba(45,106,79,0.10)' }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(45,106,79,0.18)' }}
                >
                  <div className="mb-5">
                    <card.Icon />
                  </div>
                  <span className="inline-block font-jost text-[11px] uppercase tracking-wider text-gold border border-gold/40 px-3 py-1 rounded-sm mb-4 w-fit">
                    {card.tag}
                  </span>
                  <h2 className="font-playfair text-xl text-forest-dark mb-3 leading-snug">
                    {card.titlu}
                  </h2>
                  <p className="font-jost font-light text-[14px] text-bark-dark leading-relaxed mb-8 flex-1">
                    {card.descriere}
                  </p>
                  <button
                    onClick={() => deschideModal(card.key)}
                    className="w-full font-jost text-sm uppercase tracking-wider bg-forest text-cream px-6 py-3 rounded-sm hover:bg-forest-dark transition-all duration-300 text-center"
                  >
                    Vreau acest ghid
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* De ce aceste ghiduri */}
        <section className="py-16 px-6 bg-offwhite">
          <div className="container-site max-w-4xl">
            <motion.h2
              className="font-playfair italic text-3xl text-forest-dark text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              De ce aceste ghiduri?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DE_CE.map(({ Icon, text }, i) => (
                <motion.div
                  key={text}
                  className="flex flex-col items-center text-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="w-16 h-16 rounded-sm bg-cream border border-bark-light/30 flex items-center justify-center">
                    <Icon />
                  </div>
                  <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-50"
              style={{ background: 'rgba(13,43,31,0.7)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={inchideModal}
            />

            {/* Modal panel */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-cream rounded-lg w-full max-w-[520px] max-h-[90vh] overflow-y-auto p-10"
                style={{ boxShadow: '0 24px 80px rgba(13,43,31,0.3)' }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* X buton */}
                <button
                  onClick={inchideModal}
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-bark hover:text-forest-dark transition-colors duration-200"
                  aria-label="Închide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                  </svg>
                </button>

                {confirmat ? (
                  <motion.div
                    className="flex flex-col items-center text-center py-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mb-5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-forest">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-playfair text-2xl text-forest-dark mb-3">Mulțumim!</h3>
                    <p className="font-jost font-light text-[15px] text-bark-dark leading-relaxed">
                      Te redirecționăm către WhatsApp pentru a primi ghidul.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-7">
                      <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-2">
                        {GHIDURI[ghidSelectat]}
                      </p>
                      <h3 className="font-playfair text-2xl text-forest-dark mb-2">
                        Câteva întrebări rapide
                      </h3>
                      <p className="font-playfair italic text-[15px] text-bark">
                        Ca să îți trimitem ghidul potrivit situației tale.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Nume */}
                      <div>
                        <label className={labelClass}>Numele tău</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Nume și prenume"
                          value={nume}
                          onChange={(e) => setNume(e.target.value)}
                          required
                        />
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label className={labelClass}>Numărul tău de WhatsApp</label>
                        <input
                          type="tel"
                          className={inputClass}
                          placeholder="07XX XXX XXX"
                          value={telefon}
                          onChange={(e) => setTelefon(e.target.value)}
                          required
                        />
                      </div>

                      {/* Problema */}
                      <div>
                        <label className={labelClass}>Ce te preocupă în acest moment?</label>
                        <div className="space-y-2.5">
                          {PROBLEMA_OPTIONS.map((opt) => (
                            <label key={opt} className="flex items-start gap-3 cursor-pointer group">
                              <div className="relative mt-0.5 flex-shrink-0">
                                <input
                                  type="radio"
                                  name="problema"
                                  value={opt}
                                  checked={problema === opt}
                                  onChange={() => setProblema(opt)}
                                  className="sr-only"
                                />
                                <div className={`w-4 h-4 rounded-full border transition-all duration-200 ${problema === opt ? 'border-forest bg-forest' : 'border-bark-light bg-white'}`}>
                                  {problema === opt && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="w-1.5 h-1.5 rounded-full bg-cream" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <span className="font-jost text-[14px] text-bark-dark leading-snug group-hover:text-forest-dark transition-colors duration-150">
                                {opt}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Durata */}
                      <div>
                        <label className={labelClass}>De cât timp?</label>
                        <div className="flex flex-wrap gap-2">
                          {DURATA_OPTIONS.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setDurata(opt)}
                              className={`font-jost text-[13px] px-4 py-2 rounded-sm border transition-all duration-200 ${
                                durata === opt
                                  ? 'bg-forest text-cream border-forest'
                                  : 'bg-white text-bark-dark border-bark-light hover:border-forest'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Sursa */}
                      <div>
                        <label className={labelClass}>Cum ai aflat de noi?</label>
                        <select
                          className={inputClass}
                          value={sursa}
                          onChange={(e) => setSursa(e.target.value)}
                        >
                          <option value="">Selectează...</option>
                          {SURSA_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full font-jost text-sm uppercase tracking-widest bg-forest text-cream px-8 py-[14px] rounded-sm hover:bg-gold hover:text-forest-dark transition-all duration-300"
                      >
                        Trimite și primește ghidul
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </>
  )
}
