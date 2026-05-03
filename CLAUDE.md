# CLAUDE.md — ARA DENT STUDIO

## Identitatea proiectului

Site oficial pentru **ARA DENT STUDIO** (SC TRIVALE DENTAL YOUNG SRL, CUI 40303321).
Clinică dentară premium din Pitești, România, condusă de Dr. Robert Florentin Lungu.
Filozofie vizuală: **Organic Luxury** — căldura naturii întâlnește precizia medicală.
Referințe estetice: Aesop, wellness toscan, spa premium.

---

## Stack tehnologic

- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- Cal.com embed (@calcom/embed-react)
- next/font (Google Fonts)
- Deployment: Vercel

---

## Comenzi uzuale

```bash
npm run dev          # dezvoltare locală → localhost:3000
npm run build        # build producție
npm run lint         # verificare ESLint
npm run type-check   # verificare TypeScript
```

---

## Structura folderelor

```
/app
  layout.tsx              → fonturi, cursor, grain, metadata SEO
  page.tsx                → asamblează toate secțiunile
  /components
    Navbar.tsx
    Hero.tsx
    Manifesto.tsx
    Services.tsx
    Technology.tsx
    AboutDoctor.tsx
    BeforeAfter.tsx
    Testimonials.tsx
    Booking.tsx
    Footer.tsx
  /hooks
    useMousePosition.ts
    useScrollProgress.ts
/public
  /logo                   → logo.png (ARA DENT STUDIO)
  /images                 → fotografii clinică
  /svg                    → frunze și decorațiuni custom
```

---

## Design system — culori

Folosește exclusiv culorile din `tailwind.config.ts`. Nu hardcoda nicio culoare în componente.

```ts
cream: { DEFAULT: '#F5F0E6', dark: '#EDE6D6' }
forest: { light: '#52B788', DEFAULT: '#2D6A4F', dark: '#1B4332', deep: '#0D2B1F' }
gold: { light: '#E2C97E', DEFAULT: '#C9A84C', dark: '#A67C2E' }
bark: { light: '#D4C5A9', DEFAULT: '#8B7355', dark: '#5C4A2A' }
offwhite: '#FDFAF5'
```

---

## Design system — tipografie

- **Display / Titluri**: Playfair Display — italic, weights 400 / 600 / 700
- **Body / UI**: Jost — weights 300 / 400 / 500
- Nu folosi niciodată: Arial, Inter, Roboto, system-ui

Scări tipografice orientative:
- Hero principal: `text-6xl lg:text-7xl` Playfair italic
- Titluri secțiuni: `text-4xl lg:text-5xl` Playfair
- Citate: `text-2xl lg:text-3xl` Playfair italic
- Body: `text-base` Jost 300–400
- Labels / nav: `text-xs uppercase tracking-widest` Jost

---

## Design system — reguli vizuale

- Fundal global: `cream` (#F5F0E6) — niciodată `#FFFFFF`
- Umbre colorate: `0 8px 32px rgba(45, 106, 79, 0.12)` — niciodată gri/negru
- Border-radius: `rounded` (4px) — niciodată `rounded-full` pe carduri
- Borduri: `bark-light` sau `forest-light` la 30% opacitate
- Textură grain pe body: SVG noise filter, opacitate 0.04
- Cursor custom: cerc `forest` 10px cu lag Framer Motion useSpring
  La hover clickabile: cerc 32px transparent cu border forest

---

## Animații — reguli stricte

- Toate reveal-urile la scroll: `whileInView` + `once: true`
- Duration minim reveal: `0.6s`
- Easing standard: `easeOut` sau `sineInOut`
- Reveal pattern standard: `opacity: 0→1` + `y: 24→0`
- Stagger între elemente: `0.12s – 0.15s`
- Hover transitions: maxim `0.3s`
- Frunze decorative: `float infinite`, duration `8–14s`, alternating
- Folosește **exclusiv** `transform` și `opacity` (GPU accelerated)
- Respectă întotdeauna `prefers-reduced-motion: reduce`

---

## Convenții de cod

```tsx
// Structura standard a unei componente
import { motion } from 'framer-motion'

interface HeroProps {
  title?: string
}

const CONTENT = {
  title: 'Zâmbetul tău înflorește aici.',
  subtitle: 'Implantologie · Chirurgie · Protetică · Endodonție',
}

const Hero = ({ title = CONTENT.title }: HeroProps) => {
  return (
    <section>...</section>
  )
}

export default Hero
```

Reguli:
- TypeScript strict — fără `any`
- Arrow functions cu named export default
- Interfețe Props definite separat, deasupra componentei
- Textele statice în constante separate (nu inline în JSX)
- Imagini: exclusiv `next/image` cu `alt` în română

---

## Conținut fix — date reale

```
Clinică:    ARA DENT STUDIO
Firmă:      SC TRIVALE DENTAL YOUNG SRL
CUI:        40303321
Doctor:     Dr. Robert Florentin Lungu
Titlu:      Medic Stomatolog · Specialist Implantologie
Adresă:     Bd. Republicii nr. 19, Pitești, Argeș, România
Program:    Luni–Vineri 09:00–19:00
Servicii:   Implantologie, Chirurgie Orală, Protetică Dentară, Endodonție
```

Telefon:    0754 219 011
Email:      aradentstudio@gmail.com
Fotografii reale: de adăugat în `/public/images/` înainte de deploy.

---

## SEO — reguli

- `layout.tsx` conține metadata globală completă
- Fiecare pagină nouă adaugă propriul `generateMetadata()`
- Alt text la toate imaginile — în română, descriptiv
- JSON-LD LocalBusiness în `layout.tsx`
- Canonical: `https://aradent.ro`

```ts
// JSON-LD minim obligatoriu
{
  "@type": "Dentist",
  "name": "ARA DENT STUDIO",
  "address": {
    "streetAddress": "Bd. Republicii nr. 19",
    "addressLocality": "Pitești",
    "addressRegion": "Argeș",
    "addressCountry": "RO"
  },
  "openingHours": "Mo-Fr 09:00-19:00",
  "priceRange": "$$"
}
```

---

## Responsive — breakpoints

```
mobil:   < 640px   → 1 coloană, hero text 38px, butoane full-width
tablet:  640–1024px → 2 coloane, hero text 52px
desktop: > 1024px  → layout complet cu toate efectele
```

- Mobile-first approach întotdeauna
- Touch targets minim 44px pe mobil
- Fluid typography cu `clamp()` pe elementele hero

---

## Performanță — obligatoriu

- `next/image` pentru toate imaginile (lazy + blur placeholder + WebP)
- Fonturi: `display: 'swap'` în next/font
- Dynamic import pentru `BeforeAfter` și `Booking` (componente grele)
- Animații exclusiv pe `transform` și `opacity`
- Lighthouse target: **90+** pe toate cele 4 categorii

---

## Interzis absolut

- ❌ Fundal `#FFFFFF` sau `white` pe pagini
- ❌ Box-shadow gri sau negru
- ❌ Fonturi: Arial, Inter, Roboto, system-ui
- ❌ Culori hardcodate în componente (folosește Tailwind tokens)
- ❌ Animații cu duration < 0.3s pe reveal-uri
- ❌ Texte Lorem Ipsum — toate textele în română
- ❌ `any` în TypeScript
- ❌ Imagini cu `<img>` direct — folosește `next/image`
- ❌ Purple gradients sau estetică AI generică
- ❌ Border-radius excesiv (`rounded-3xl`, `rounded-full`) pe carduri

---

## Git workflow

```bash
# Branch per secțiune
git checkout -b feature/hero
git checkout -b feature/services

# Commit după fiecare componentă finalizată
git commit -m "feat: Hero section cu animatii Framer Motion"

# Nu commita niciodată
.env.local
node_modules/
.next/
```

---

## Note finale pentru Claude Code

1. Construiește **fișier cu fișier**, în ordinea din structura de mai sus
2. La fiecare fișier: explică pe scurt decizia de design, apoi scrie codul complet
3. Nu lăsa placeholder-e de cod (`// TODO`, `...`) — fiecare fișier trebuie să fie funcțional
4. Toate textele vizibile pe site sunt în **română**
5. Dacă o imagine lipsește, folosește un div cu fundal `forest-light` și dimensiunile corecte
6. Testează că `npm run build` trece fără erori înainte de a declara o secțiune finalizată
