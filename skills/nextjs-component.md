---
name: nextjs-component
description: Creează componente Next.js 14 pentru ARA DENT STUDIO. Folosește acest skill ori de câte ori generezi o componentă nouă, modifici una existentă, adaugi o secțiune sau construiești orice element de UI pentru acest proiect. Include automat TypeScript, Tailwind cu paleta brandului, Framer Motion și convențiile proiectului.
---

# Next.js Component — ARA DENT STUDIO

## Structura obligatorie a oricărei componente

```tsx
'use client' // doar dacă folosești hooks sau animații

import { motion } from 'framer-motion'
import Image from 'next/image'

// 1. Interface Props
interface NumeComponentaProps {
  title?: string
  className?: string
}

// 2. Constante și date statice (niciodată inline în JSX)
const CONTENT = {
  title: 'Titlu în română',
  items: [],
}

// 3. Variante animație (dacă există)
const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// 4. Componenta
const NumeComponenta = ({ title = CONTENT.title, className }: NumeComponentaProps) => {
  return (
    <section className={className}>
      {/* conținut */}
    </section>
  )
}

export default NumeComponenta
```

---

## Paleta Tailwind — tokeni obligatorii

Folosește exclusiv acești tokeni. Nu hardcoda nicio culoare hex.

```
Fonduri:        bg-cream / bg-cream-dark / bg-offwhite / bg-forest-deep
Text principal: text-forest-dark / text-cream / text-bark-dark
Text secundar:  text-bark / text-forest-light
Accente:        text-gold / border-gold / bg-gold
Borduri:        border-bark-light / border-forest-light
```

---

## Tipografie — clase standard

```tsx
// Hero / Titlu principal
<h1 className="font-display text-6xl lg:text-7xl italic font-normal text-forest-dark leading-tight">

// Titlu secțiune
<h2 className="font-display text-4xl lg:text-5xl text-forest-dark">

// Citat
<blockquote className="font-display text-2xl lg:text-3xl italic text-forest-dark leading-relaxed">

// Body text
<p className="font-body text-base font-light text-bark-dark leading-relaxed">

// Label / Nav
<span className="font-body text-xs uppercase tracking-widest text-bark">
```

---

## Umbre — folosește exclusiv astea

```tsx
// Card normal
className="shadow-[0_8px_32px_rgba(45,106,79,0.10)]"

// Card hover
className="hover:shadow-[0_16px_48px_rgba(45,106,79,0.18)]"

// Secțiune
className="shadow-[0_2px_24px_rgba(45,106,79,0.08)]"
```

---

## Pattern reveal la scroll — standard

```tsx
// Simplu
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>

// Cu stagger (listă de elemente)
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

<motion.ul variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map((el) => (
    <motion.li key={el.id} variants={item}>{el.text}</motion.li>
  ))}
</motion.ul>
```

---

## Imagini — obligatoriu next/image

```tsx
<Image
  src="/images/nume-fisier.jpg"
  alt="Descriere în română, relevantă SEO"
  width={800}
  height={600}
  className="object-cover"
  placeholder="blur"
  blurDataURL="/images/blur/nume-fisier.jpg"
/>

// Dacă imaginea lipsește → placeholder vizual
<div className="w-full h-64 bg-forest-light flex items-center justify-center rounded">
  <span className="font-body text-xs text-cream uppercase tracking-widest">
    Fotografie în curând
  </span>
</div>
```

---

## Card standard ARA DENT

```tsx
<motion.div
  className="
    bg-offwhite border border-bark-light rounded p-10
    shadow-[0_8px_32px_rgba(45,106,79,0.10)]
    hover:shadow-[0_16px_48px_rgba(45,106,79,0.18)]
    hover:-translate-y-1.5 transition-all duration-300
  "
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {/* conținut card */}
</motion.div>
```

---

## Buton standard

```tsx
// Principal (forest)
<button className="
  bg-forest text-cream font-body text-sm uppercase tracking-widest px-8 py-3
  hover:bg-gold hover:text-forest-dark transition-colors duration-300
">
  Text buton
</button>

// Secundar (outline)
<button className="
  border border-bark text-forest-dark font-body text-sm uppercase tracking-widest px-8 py-3
  hover:border-forest hover:text-forest transition-colors duration-300
">
  Text buton
</button>
```

---

## Linie decorativă gold

```tsx
<motion.div
  className="h-px bg-gold w-12 mb-8"
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  style={{ transformOrigin: 'left' }}
/>
```

---

## Reguli finale

- Toate textele vizibile → în română
- Niciodată `#FFFFFF` sau `white` ca fundal de pagină
- Niciodată `any` în TypeScript
- Niciodată `<img>` direct → folosește `next/image`
- Niciodată culori hardcodate → folosește tokeni Tailwind
- Fiecare componentă nouă → `npm run type-check` înainte de a o declara gata
