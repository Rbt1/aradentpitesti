---
name: framer-animation
description: Aplică animații Framer Motion pentru ARA DENT STUDIO. Folosește acest skill ori de câte ori adaugi mișcare, tranziții, efecte de scroll, hover, cursor personalizat sau orice animație în proiect. Conține toate pattern-urile standard ale brandului, gata de copiat.
---

# Framer Motion — ARA DENT STUDIO

## Filozofia animațiilor

Toate animațiile reflectă identitatea organică a brandului:
- **Lente și respirate** — niciodată sacadate
- **Duration minim 0.6s** pe reveal-uri
- **Easing**: `easeOut` sau `[0.25, 0.46, 0.45, 0.94]` (sine out)
- Exclusiv `opacity` și `transform` — GPU accelerated
- Respectă întotdeauna `prefers-reduced-motion`

---

## Imports standard

```tsx
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from 'framer-motion'
```

---

## Pattern 1 — Reveal simplu la scroll

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.7, ease: 'easeOut' }}
>
  {/* conținut */}
</motion.div>
```

---

## Pattern 2 — Stagger listă de elemente

```tsx
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Utilizare
<motion.ul
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.text}
    </motion.li>
  ))}
</motion.ul>
```

---

## Pattern 3 — Titlu cuvânt cu cuvânt (Hero)

```tsx
const sentence = 'Zâmbetul tău înflorește aici.'
const words = sentence.split(' ')

const titleVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Utilizare
<motion.h1
  variants={titleVariants}
  initial="hidden"
  animate="visible"
  className="font-display text-6xl italic text-forest-dark"
>
  {words.map((word, i) => (
    <motion.span key={i} variants={wordVariants} className="inline-block mr-4">
      {word}
    </motion.span>
  ))}
</motion.h1>
```

---

## Pattern 4 — Float frunze decorative

```tsx
// Frunză care plutește continuu
<motion.div
  animate={{
    y: [0, -18, 0],
    rotate: [0, 4, -4, 0],
    opacity: [0.06, 0.09, 0.06],
  }}
  transition={{
    duration: 10,         // între 8 și 14 secunde
    repeat: Infinity,
    ease: 'easeInOut',
    delay: Math.random() * 4, // offset diferit per frunză
  }}
  className="absolute pointer-events-none"
>
  {/* SVG frunză */}
</motion.div>

// Mai multe frunze cu configurații diferite
const leaves = [
  { top: '10%', left: '5%',  duration: 10, delay: 0,   scale: 1.2 },
  { top: '20%', right: '8%', duration: 14, delay: 2,   scale: 0.8 },
  { top: '60%', left: '3%',  duration: 12, delay: 1.5, scale: 1.0 },
  { top: '70%', right: '5%', duration: 9,  delay: 3,   scale: 0.6 },
]
```

---

## Pattern 5 — Linie gold animată

```tsx
// Apare de la stânga la dreapta
<motion.div
  className="h-px bg-gold"
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  style={{ transformOrigin: 'left', width: '48px' }}
/>

// Apare la hover pe card
<motion.div
  className="h-px bg-gold mt-6"
  initial={{ scaleX: 0 }}
  whileHover={{ scaleX: 1 }}    // pe elementul părinte
  transition={{ duration: 0.3 }}
  style={{ transformOrigin: 'left' }}
/>
```

---

## Pattern 6 — Cursor personalizat

```tsx
// hooks/useMousePosition.ts
import { useState, useEffect } from 'react'

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const update = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return position
}

// components/Cursor.tsx
'use client'
import { motion, useSpring } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'

const Cursor = () => {
  const { x, y } = useMousePosition()
  const springX = useSpring(x, { stiffness: 200, damping: 30 })
  const springY = useSpring(y, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="
        fixed top-0 left-0 w-3 h-3 rounded-full bg-forest pointer-events-none z-50
        -translate-x-1/2 -translate-y-1/2 mix-blend-multiply
      "
    />
  )
}

export default Cursor
```

---

## Pattern 7 — Fade între slide-uri (Testimoniale)

```tsx
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const [current, setCurrent] = useState(0)

<AnimatePresence mode="wait">
  <motion.div
    key={current}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    {testimonials[current]}
  </motion.div>
</AnimatePresence>
```

---

## Pattern 8 — Hover card ridicat

```tsx
<motion.div
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
  className="cursor-pointer"
>
  {/* card */}
</motion.div>
```

---

## Pattern 9 — Navbar transparent → opac la scroll

```tsx
'use client'
import { motion, useScroll } from 'framer-motion'

const { scrollY } = useScroll()
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  return scrollY.onChange((v) => setScrolled(v > 40))
}, [scrollY])

<motion.nav
  className={`fixed top-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? 'bg-cream/90 backdrop-blur-md shadow-[0_2px_24px_rgba(45,106,79,0.08)]'
      : 'bg-transparent'
  }`}
>
```

---

## Pattern 10 — Indicator scroll (Hero)

```tsx
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  className="flex flex-col items-center gap-2"
>
  {/* SVG frunză mică sau săgeată */}
  <span className="font-body text-xs uppercase tracking-widest text-bark">
    Descoperă
  </span>
</motion.div>
```

---

## Prefers-reduced-motion — obligatoriu

```tsx
// În orice componentă cu animații
import { useReducedMotion } from 'framer-motion'

const shouldReduceMotion = useReducedMotion()

const variants = {
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
  visible: { opacity: 1, y: 0 },
}
```

---

## Valori de referință

| Context         | Duration | Ease       |
|-----------------|----------|------------|
| Reveal scroll   | 0.6–0.8s | easeOut    |
| Hover card      | 0.3s     | easeOut    |
| Fade slides     | 0.5s     | easeInOut  |
| Float frunze    | 8–14s    | easeInOut  |
| Linie gold      | 0.8s     | easeOut    |
| Cursor spring   | stiffness 200 / damping 30 | — |
| Titlu stagger   | 0.12s între cuvinte | easeOut |
| Listă stagger   | 0.15s între elemente | easeOut |
