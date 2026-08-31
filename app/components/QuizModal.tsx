'use client'

import { useState, useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

type AnswerKey = 'A' | 'B' | 'C' | 'D' | 'E'
type MaybeAnswer = AnswerKey | null

interface Option {
  key: AnswerKey
  label: string
}

interface Question {
  text: string
  options: Option[]
}

const QUESTIONS: Question[] = [
  {
    text: 'Când ai fost ultima dată la stomatolog?',
    options: [
      { key: 'A', label: 'Mai puțin de 6 luni' },
      { key: 'B', label: 'Între 6 și 12 luni' },
      { key: 'C', label: 'Acum 1–2 ani' },
      { key: 'D', label: 'Acum mai mult de 2 ani' },
      { key: 'E', label: 'Nu am fost niciodată' },
    ],
  },
  {
    text: 'Ai dureri de dinți sau gingii în prezent?',
    options: [
      { key: 'A', label: 'Nu, nicio durere' },
      { key: 'B', label: 'Uneori, durere ușoară' },
      { key: 'C', label: 'Da, durere frecventă' },
      { key: 'D', label: 'Da, durere intensă acum' },
    ],
  },
  {
    text: 'Observi sângerare când te periezi?',
    options: [
      { key: 'A', label: 'Nu' },
      { key: 'B', label: 'Uneori' },
      { key: 'C', label: 'Da, de fiecare dată' },
    ],
  },
  {
    text: 'Ai sensibilitate la cald, rece sau dulce?',
    options: [
      { key: 'A', label: 'Nu' },
      { key: 'B', label: 'Ușoară, trece repede' },
      { key: 'C', label: 'Moderată' },
      { key: 'D', label: 'Puternică / Înțepătură ascuțită' },
    ],
  },
  {
    text: 'Ai observat modificări vizibile pe dinți?',
    options: [
      { key: 'A', label: 'Nu' },
      { key: 'B', label: 'Da — pete, decolorări sau fisuri' },
      { key: 'C', label: 'Da — dinte lipsă' },
    ],
  },
  {
    text: 'Ai probleme cu gingiile (umflare, roșeață, retracție)?',
    options: [
      { key: 'A', label: 'Nu' },
      { key: 'B', label: 'Uneori' },
      { key: 'C', label: 'Da, frecvent' },
    ],
  },
  {
    text: 'Cum îți îngrijești dinții zilnic?',
    options: [
      { key: 'A', label: 'Periaj 2x/zi + ață dentară' },
      { key: 'B', label: 'Periaj 2x/zi, fără ață dentară' },
      { key: 'C', label: 'Periaj o dată pe zi' },
      { key: 'D', label: 'Periaj neregulat' },
    ],
  },
]

function calculateResult(answers: MaybeAnswer[]): string {
  const [q1, q2, q3, q4, q5, q6] = answers
  if (q2 === 'D') return 'CANAL10'
  if (q2 === 'C' && (q3 === 'C' || q6 === 'C')) return 'URGENT10'
  if (q2 === 'C') return 'CANAL10'
  if (q3 === 'C' || q6 === 'C') return 'PARO10'
  if (q5 === 'C') return 'IMPLANT10'
  if (q5 === 'B' || q4 === 'D') return 'EVALUARE10'
  if (q1 === 'D' || q1 === 'E') return 'DETARTRAJ10'
  return 'IGIENA10'
}

interface ResultInfo {
  title: string
  text: string
  recommendations: string[]
  service: string
  whatsappText: string
}

const RESULTS: Record<string, ResultInfo> = {
  CANAL10: {
    title: 'Ai nevoie de îngrijire urgentă',
    text: 'Durerea dentară persistentă poate indica un nerv afectat care necesită tratament de canal. Cu cât aștepți mai mult, cu atât tratamentul devine mai complex.',
    recommendations: [
      'Programează-te cât mai curând — găsim loc pentru urgențe în aceeași zi',
      'Nu lua antibiotice fără prescripție',
      'Evită alimentele foarte reci sau calde până la consultație',
      'Consultația la ARA DENT STUDIO: 100 lei (include radiografia)',
    ],
    service: 'tratamentul de canal',
    whatsappText:
      'Bună ziua! Am completat quiz-ul de sănătate dentară și am primit codul CANAL10 pentru 10% reducere la tratamentul de canal. Aș dori să mă programez.',
  },
  URGENT10: {
    title: 'Ai nevoie de îngrijire urgentă și evaluare parodontală',
    text: 'Combinația de durere dentară și sângerare gingivală indică probleme active simultane. Tratăm urgent durerea și evaluăm starea gingiilor în aceeași vizită.',
    recommendations: [
      'Programează-te cât mai curând',
      'Găsim loc pentru urgențe în aceeași zi',
      'Evaluăm tot la prima vizită — consultația: 100 lei',
      'Nu ignora sângerarea — osul pierdut nu se mai reface',
    ],
    service: 'prima procedură efectuată',
    whatsappText:
      'Bună ziua! Am completat quiz-ul de sănătate dentară și am primit codul URGENT10 pentru 10% reducere la prima procedură. Aș dori să mă programez urgent.',
  },
  PARO10: {
    title: 'Gingiile tale au nevoie de atenție',
    text: 'Sângerarea gingivală frecventă indică inflamație activă — primul semn al bolii parodontale. Tratată la timp, gingivita e complet reversibilă. Osul pierdut prin parodontită nu se mai reface.',
    recommendations: [
      'Sângerarea nu e normală — merită investigată',
      'Periaj corect, 2 minute, mișcări circulare blânde',
      'Folosește ața dentară zilnic',
      'Igienizare profesională la fiecare 6 luni',
      'Consultația parodontală: 100 lei (include radiografia)',
    ],
    service: 'terapia parodontală',
    whatsappText:
      'Bună ziua! Am completat quiz-ul de sănătate dentară și am primit codul PARO10 pentru 10% reducere la terapia parodontală. Aș dori să mă programez.',
  },
  IMPLANT10: {
    title: 'Ai nevoie de o evaluare pentru implant',
    text: 'Un dinte lipsă afectează dinții vecini și osul — cu cât aștepți mai mult, cu atât tratamentul devine mai complex și mai costisitor.',
    recommendations: [
      'Consultație: 100 lei, CT dentar: 250 lei la ARA DENT STUDIO',
      'Un dinte lipsă = os care se resoarbe',
      'Există opțiunea de plată în rate, fără dobândă prin TBI Bank',
      'Dr. Robert Lungu evaluează fiecare caz individual',
    ],
    service: 'consultația pentru implant dentar',
    whatsappText:
      'Bună ziua! Am completat quiz-ul de sănătate dentară și am primit codul IMPLANT10 pentru 10% reducere la consultația pentru implant. Aș dori să mă programez.',
  },
  EVALUARE10: {
    title: 'Dinții tăi au nevoie de evaluare',
    text: 'Modificările vizibile precum petele, decolorările sau fisurile pot indica carii sau uzură care, tratate la timp, se rezolvă simplu. Lăsate, devin mai complexe și mai costisitoare.',
    recommendations: [
      'Nu ignora modificările vizibile — cresc în timp fără tratament',
      'O consultație (100 lei) stabilește exact ce ai nevoie',
      'Tratamentele simple acum previn lucrări complexe mai târziu',
      'Dr. Robert Lungu evaluează fiecare caz individual',
    ],
    service: 'prima procedură recomandată după evaluare',
    whatsappText:
      'Bună ziua! Am completat quiz-ul de sănătate dentară și am primit codul EVALUARE10 pentru 10% reducere la prima procedură recomandată. Aș dori să mă programez.',
  },
  DETARTRAJ10: {
    title: 'E timpul pentru un control',
    text: 'Nu ai mai fost la stomatolog de mult timp. Tartrul se acumulează chiar și cu periaj corect — un detartraj acum previne probleme mai grave și mai costisitoare.',
    recommendations: [
      'Controlul periodic la 6 luni este esențial',
      'Tartrul netretat duce la boală parodontală',
      'Consultația costă 100 lei la ARA DENT STUDIO',
      'Un detartraj acum poate evita tratamente costisitoare',
    ],
    service: 'detartraj',
    whatsappText:
      'Bună ziua! Am completat quiz-ul de sănătate dentară și am primit codul DETARTRAJ10 pentru 10% reducere la detartraj. Aș dori să mă programez.',
  },
  IGIENA10: {
    title: 'Felicitări — dinții tăi sunt în formă bună!',
    text: 'Răspunsurile tale arată că îți îngrijești dinții corespunzător. Continuă tot așa și nu uita de controlul periodic — prevenția este cel mai bun tratament.',
    recommendations: [
      'Menține controlul la fiecare 6 luni',
      'Continuă periajul 2x/zi + ața dentară zilnic',
      'O igienizare profesională anuală previne acumularea tartrului',
      'Ești pe drumul cel bun!',
    ],
    service: 'igienizarea profesională',
    whatsappText:
      'Bună ziua! Am completat quiz-ul de sănătate dentară și am primit codul IGIENA10 pentru 10% reducere la igienizarea profesională. Aș dori să mă programez.',
  },
}

// ─── Result icons ─────────────────────────────────────────────────────

const IconUrgent = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 5C16.5 5 10 11 10 19c0 4.5 1.5 8.5 3.5 12L16 44h5l1.5-9h3L27 44h5l2.5-13C36.5 27.5 38 23.5 38 19c0-8-6.5-14-14-14z" />
    <line x1="24" y1="15" x2="24" y2="23" strokeWidth="2.5" />
    <circle cx="24" cy="28" r="1.5" fill="#C9A84C" strokeWidth="0" />
  </svg>
)

const IconGum = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 5C16.5 5 10 11 10 19c0 4.5 1.5 8.5 3.5 12L16 44h5l1.5-9h3L27 44h5l2.5-13C36.5 27.5 38 23.5 38 19c0-8-6.5-14-14-14z" />
    <path d="M10 32 Q24 39 38 32" strokeWidth="1.5" />
    <circle cx="16" cy="34" r="1.5" fill="#C9A84C" strokeWidth="0" />
    <circle cx="32" cy="34" r="1.5" fill="#C9A84C" strokeWidth="0" />
  </svg>
)

const IconImplant = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 5C16 5 11 10 11 16.5c0 4 1.2 7.5 2.8 10.5L16 36h5l1.5-7h3L27 36h5l2.2-9c1.6-3 2.8-6.5 2.8-10.5C37 10 32 5 26 5h-4z" />
    <line x1="24" y1="36" x2="24" y2="44" strokeWidth="2" />
    <line x1="20" y1="38" x2="28" y2="38" />
    <line x1="19" y1="41" x2="29" y2="41" />
    <line x1="20" y1="44" x2="28" y2="44" />
  </svg>
)

const IconSearch = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 4C14 4 9 9 9 15.5c0 3.5 1 6.5 2.5 9.5L14 36h4.5l1.5-7h4l1.5 7H30l2.5-11c1.5-3 2.5-6 2.5-9.5C35 9 30 4 24 4h-4z" />
    <circle cx="36" cy="37" r="5" />
    <line x1="40" y1="41" x2="44" y2="45" strokeWidth="2" />
  </svg>
)

const IconCalendar = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="6" y="10" width="36" height="32" rx="3" />
    <line x1="6" y1="18" x2="42" y2="18" />
    <line x1="16" y1="6" x2="16" y2="14" />
    <line x1="32" y1="6" x2="32" y2="14" />
    <rect x="13" y="24" width="5" height="5" rx="1" />
    <rect x="21" y="24" width="5" height="5" rx="1" />
    <rect x="29" y="24" width="5" height="5" rx="1" />
    <rect x="13" y="33" width="5" height="5" rx="1" />
    <rect x="21" y="33" width="5" height="5" rx="1" />
  </svg>
)

const IconStar = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 5C16.5 5 10 11 10 19c0 4.5 1.5 8.5 3.5 12L16 44h5l1.5-9h3L27 44h5l2.5-13C36.5 27.5 38 23.5 38 19c0-8-6.5-14-14-14z" />
    <path d="M24 11l2 6h6l-5 3.5 2 6-5-3.5-5 3.5 2-6-5-3.5h6z" fill="#C9A84C" stroke="none" />
  </svg>
)

const RESULT_ICONS: Record<string, React.ReactNode> = {
  CANAL10: <IconUrgent />,
  URGENT10: <IconUrgent />,
  PARO10: <IconGum />,
  IMPLANT10: <IconImplant />,
  EVALUARE10: <IconSearch />,
  DETARTRAJ10: <IconCalendar />,
  IGIENA10: <IconStar />,
}

// ─── Props ────────────────────────────────────────────────────────────

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

// ─── Component ────────────────────────────────────────────────────────

const QuizModal = ({ isOpen, onClose }: QuizModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<MaybeAnswer[]>(Array(7).fill(null))
  const [result, setResult] = useState<string | null>(null)
  const [visible, setVisible] = useState(true)
  const [resultVisible, setResultVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setCurrentQuestion(0)
      setAnswers(Array(7).fill(null))
      setResult(null)
      setVisible(true)
      setResultVisible(false)
      trackEvent('quiz_start')
    }
  }, [isOpen])

  useEffect(() => {
    if (result) {
      trackEvent('quiz_complete', { result })
    }
  }, [result])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const selectAnswer = (key: AnswerKey) => {
    const next = [...answers]
    next[currentQuestion] = key
    setAnswers(next)
  }

  const goNext = () => {
    setVisible(false)
    setTimeout(() => {
      if (currentQuestion === 6) {
        const code = calculateResult(answers)
        setResult(code)
        setTimeout(() => setResultVisible(true), 60)
      } else {
        setCurrentQuestion((q) => q + 1)
        setVisible(true)
      }
    }, 200)
  }

  const goBack = () => {
    if (currentQuestion === 0) return
    setVisible(false)
    setTimeout(() => {
      setCurrentQuestion((q) => q - 1)
      setVisible(true)
    }, 200)
  }

  const currentAnswer = answers[currentQuestion]
  const progress = ((currentQuestion + 1) / 7) * 100
  const waUrl = result
    ? `https://wa.me/40754219011?text=${encodeURIComponent(RESULTS[result].whatsappText)}`
    : ''

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Quiz sănătate dentară"
        style={{
          backgroundColor: '#F5F0E6',
          borderRadius: '12px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '32px',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Închide quiz"
          style={{
            position: 'absolute',
            top: '14px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#8B7355',
            fontSize: '26px',
            lineHeight: 1,
            padding: '4px 8px',
            fontWeight: 300,
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ marginBottom: '24px', paddingRight: '28px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '22px',
              fontWeight: 700,
              color: '#1B4332',
              marginBottom: '8px',
            }}
          >
            Verifică-ți sănătatea dentară
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '14px',
              color: '#8B7355',
              fontStyle: 'italic',
              lineHeight: 1.5,
            }}
          >
            Răspunde la 7 întrebări și primești o reducere personalizată de 10% la tratamentul de care ai nevoie.
          </p>
        </div>

        {/* Quiz */}
        {!result && (
          <>
            {/* Progress bar */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  height: '3px',
                  backgroundColor: 'rgba(212,197,169,0.5)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${progress}%`,
                    backgroundColor: '#C9A84C',
                    transition: 'width 0.4s ease',
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '12px',
                  color: '#8B7355',
                  marginTop: '6px',
                }}
              >
                Întrebarea {currentQuestion + 1} din 7
              </p>
            </div>

            {/* Question + options */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.2s ease',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#1B4332',
                  marginBottom: '16px',
                  lineHeight: 1.4,
                }}
              >
                {QUESTIONS[currentQuestion].text}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {QUESTIONS[currentQuestion].options.map((opt) => {
                  const selected = currentAnswer === opt.key
                  return (
                    <button
                      key={opt.key}
                      onClick={() => selectAnswer(opt.key)}
                      style={{
                        padding: '14px 18px',
                        textAlign: 'left',
                        border: selected ? '2px solid #C9A84C' : '1px solid rgba(212,197,169,0.6)',
                        borderRadius: '6px',
                        backgroundColor: selected ? '#EDE6D6' : '#FDFAF5',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-jost)',
                        fontSize: '15px',
                        color: '#1B4332',
                        transition: 'border-color 0.15s ease, background-color 0.15s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <span
                        style={{
                          color: selected ? '#C9A84C' : '#8B7355',
                          fontWeight: 700,
                          fontSize: '13px',
                          minWidth: '18px',
                          transition: 'color 0.15s ease',
                        }}
                      >
                        {opt.key}
                      </span>
                      {opt.label}
                    </button>
                  )
                })}
              </div>

              {/* Navigation */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={goBack}
                  disabled={currentQuestion === 0}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: currentQuestion === 0 ? 'default' : 'pointer',
                    color: currentQuestion === 0 ? 'transparent' : '#8B7355',
                    fontFamily: 'var(--font-jost)',
                    fontSize: '14px',
                    padding: '10px 0',
                    transition: 'color 0.15s ease',
                  }}
                >
                  ← Înapoi
                </button>
                <button
                  onClick={goNext}
                  disabled={!currentAnswer}
                  style={{
                    padding: '12px 28px',
                    backgroundColor: currentAnswer ? '#2D6A4F' : '#D4C5A9',
                    color: '#F5F0E6',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: currentAnswer ? 'pointer' : 'not-allowed',
                    fontFamily: 'var(--font-jost)',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  {currentQuestion === 6 ? 'Vezi rezultatul' : 'Înainte →'}
                </button>
              </div>
            </div>
          </>
        )}

        {/* Result */}
        {result && (
          <div
            style={{
              opacity: resultVisible ? 1 : 0,
              transform: resultVisible ? 'scale(1)' : 'scale(0.97)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            {/* Icon */}
            <div style={{ marginBottom: '16px' }}>{RESULT_ICONS[result]}</div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '22px',
                fontWeight: 700,
                color: '#1B4332',
                marginBottom: '12px',
                lineHeight: 1.3,
              }}
            >
              {RESULTS[result].title}
            </h2>

            {/* Text */}
            <p
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '15px',
                color: '#1B4332',
                lineHeight: 1.75,
                marginBottom: '20px',
              }}
            >
              {RESULTS[result].text}
            </p>

            {/* Recommendations */}
            <ul style={{ marginBottom: '24px', padding: 0, listStyle: 'none' }}>
              {RESULTS[result].recommendations.map((rec, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-jost)',
                    fontSize: '14px',
                    color: '#1B4332',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: '#C9A84C', fontSize: '20px', lineHeight: '1.1', flexShrink: 0 }}>•</span>
                  {rec}
                </li>
              ))}
            </ul>

            {/* Coupon card */}
            <div
              style={{
                backgroundColor: '#1B4332',
                border: '2px solid #C9A84C',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '11px',
                  color: '#F5F0E6',
                  marginBottom: '8px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Codul tău de reducere:
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#C9A84C',
                  letterSpacing: '0.12em',
                  marginBottom: '8px',
                }}
              >
                {result}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '14px',
                  color: '#F5F0E6',
                  marginBottom: '4px',
                }}
              >
                10% reducere la {RESULTS[result].service}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '12px',
                  color: 'rgba(245,240,230,0.65)',
                }}
              >
                Valabil 30 de zile de la azi
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => result && trackEvent('quiz_whatsapp_click', { result })}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 24px',
                backgroundColor: '#C9A84C',
                color: '#1B4332',
                borderRadius: '4px',
                textDecoration: 'none',
                fontFamily: 'var(--font-jost)',
                fontSize: '14px',
                fontWeight: 700,
                marginBottom: '12px',
                letterSpacing: '0.04em',
              }}
            >
              Trimite codul pe WhatsApp 💬
            </a>

            {/* Phone CTA */}
            <a
              href="tel:+40754219011"
              style={{
                display: 'block',
                textAlign: 'center',
                fontFamily: 'var(--font-jost)',
                fontSize: '14px',
                color: '#2D6A4F',
                textDecoration: 'underline',
              }}
            >
              Sau sună acum: 0754 219 011
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizModal
