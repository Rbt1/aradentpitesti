---
name: seo-dental
description: Optimizează SEO pentru ARA DENT STUDIO. Folosește acest skill ori de câte ori adaugi o pagină nouă, generezi metadata, scrii JSON-LD, construiești un articol de blog sau orice element care afectează vizibilitatea în Google. Specializat pe SEO local Pitești și dental Romania.
---

# SEO Dentar Local — ARA DENT STUDIO

## Cuvinte cheie principale

### Head keywords (volum mare, competiție mare)
```
implant dentar pitesti
stomatologie pitesti
clinica dentara pitesti
dentist pitesti
```

### Long-tail keywords (volum mic, conversie mare — prioritizează astea)
```
implant dentar pret pitesti
implant dentar ieftin arges
cabinet stomatologic pitesti centru
stomatologie estetică pitesti
extractie dinte pitesti
tratament canal pitesti
coroana dentara pitesti
proteza dentara pitesti
chirurgie orala pitesti
endodontie pitesti
ara dent studio
aradent studio pitesti
dr robert lungu stomatolog pitesti
```

---

## Metadata — template per pagină

### Homepage
```tsx
export const metadata: Metadata = {
  title: 'ARA DENT STUDIO | Clinică Dentară Premium Pitești',
  description:
    'Implantologie, chirurgie orală, protetică și endodonție în Pitești. ' +
    'Dr. Robert Florentin Lungu. Prima consultație gratuită. Programare online.',
  keywords: [
    'implant dentar pitesti', 'stomatologie pitesti', 'clinica dentara arges',
    'dentist pitesti', 'ara dent studio', 'implantologie pitesti',
  ],
  canonical: 'https://aradent.ro',
  openGraph: {
    title: 'ARA DENT STUDIO | Clinică Dentară Premium Pitești',
    description: 'Studio dentar premium în Pitești. Implantologie, chirurgie, protetică.',
    url: 'https://aradent.ro',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: 'https://aradent.ro/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://aradent.ro' },
}
```

### Pagină serviciu (template)
```tsx
// Înlocuiește [SERVICIU], [SLUG], [DESCRIERE]
export const metadata: Metadata = {
  title: '[SERVICIU] Pitești | ARA DENT STUDIO',
  description: '[DESCRIERE 150-160 caractere cu keyword local]',
  alternates: { canonical: 'https://aradent.ro/servicii/[SLUG]' },
  openGraph: {
    title: '[SERVICIU] în Pitești — ARA DENT STUDIO',
    description: '[DESCRIERE]',
    url: 'https://aradent.ro/servicii/[SLUG]',
  },
}
```

### Pagini individuale servicii
```
/servicii/implantologie
  title: "Implant Dentar Pitești | Sistem Dentium | ARA DENT STUDIO"
  description: "Implant dentar în Pitești cu sistem Dentium SuperLine II și ghidaj chirurgical 3D. Dr. Robert Lungu, specialist implantologie Argeș. Prima consultație gratuită."

/servicii/chirurgie-orala
  title: "Chirurgie Orală Pitești | Extracții & Rezecții | ARA DENT STUDIO"
  description: "Chirurgie orală blândă și precisă în Pitești. Extracții, rezecții apicale, proceduri complexe. Dr. Robert Florentin Lungu. Programare online."

/servicii/protetica
  title: "Protetică Dentară Pitești | Coroane & Punți | ARA DENT STUDIO"
  description: "Coroane, punți și proteze dentare premium în Pitești. Materiale de înaltă calitate, estetica naturală. ARA DENT STUDIO, Bd. Republicii nr. 19."

/servicii/endodontie
  title: "Endodonție Pitești | Tratament Canal | ARA DENT STUDIO"
  description: "Tratamente de canal nedureroase în Pitești. Endodonție modernă cu tehnologie de precizie. Dr. Robert Lungu, ARA DENT STUDIO Argeș."
```

---

## JSON-LD — LocalBusiness complet

```tsx
// În app/layout.tsx — script type="application/ld+json"
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'ARA DENT STUDIO',
  alternateName: 'Aradent Studio',
  legalName: 'SC TRIVALE DENTAL YOUNG SRL',
  url: 'https://aradent.ro',
  logo: 'https://aradent.ro/logo/logo.png',
  image: 'https://aradent.ro/og-image.jpg',
  description:
    'Clinică dentară premium în Pitești, România. Implantologie, chirurgie orală, protetică și endodonție.',
  telephone: '+40754219011',
  email: 'aradentstudio@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bd. Republicii nr. 19',
    addressLocality: 'Pitești',
    addressRegion: 'Argeș',
    postalCode: '110014',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.8564,
    longitude: 24.8698,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'RON',
  paymentAccepted: 'Cash, Card',
  medicalSpecialty: [
    'Implantology', 'Oral Surgery', 'Prosthodontics', 'Endodontics'
  ],
  founder: {
    '@type': 'Person',
    name: 'Dr. Robert Florentin Lungu',
    jobTitle: 'Medic Stomatolog, Specialist Implantologie',
  },
  sameAs: [
    'https://www.facebook.com/aradentstudio',
    'https://www.instagram.com/aradentstudio',
  ],
}
```

---

## JSON-LD — MedicalProcedure (pentru pagini servicii)

```tsx
// Pe pagina /servicii/implantologie
const procedureData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Implant Dentar',
  description: 'Înlocuirea dinților lipsă cu implanturi dentare Dentium SuperLine II.',
  procedureType: 'Surgical',
  bodyLocation: 'Jaw',
  preparation: 'Consultație inițială și radiografie CBCT',
  followup: 'Control la 1 săptămână și 3 luni',
  performer: {
    '@type': 'Physician',
    name: 'Dr. Robert Florentin Lungu',
    worksFor: { '@type': 'Dentist', name: 'ARA DENT STUDIO' },
  },
}
```

---

## Structura URL-urilor

```
https://aradent.ro                          → Homepage
https://aradent.ro/servicii/implantologie   → Implantologie
https://aradent.ro/servicii/chirurgie-orala → Chirurgie Orală
https://aradent.ro/servicii/protetica       → Protetică
https://aradent.ro/servicii/endodontie      → Endodonție
https://aradent.ro/despre                   → Despre Dr. Lungu
https://aradent.ro/blog                     → Blog (articole SEO)
https://aradent.ro/contact                  → Contact & Programare
```

Reguli URL:
- Toate lowercase, fără diacritice
- Separator: cratimă `-`, niciodată underscore `_`
- Cât mai scurte și descriptive

---

## Blog — idei articole SEO local (prioritate mare)

```
"Cât costă un implant dentar în Pitești în 2025?"
"Implant dentar vs punte dentară — ce să alegi?"
"Cât durează un tratament de canal? Tot ce trebuie să știi"
"Cum îngrijești un implant dentar acasă"
"De câte vizite ai nevoie pentru o coroană dentară?"
"Ce se întâmplă dacă nu tratezi un dinte care doare"
"Implant dentar — mitul durerii: adevărul din cabinetul nostru"
"Ghid complet protetică dentară — tipuri, materiale, prețuri Pitești"
```

Format articol:
- H1 cu keyword principal
- 800-1200 cuvinte
- H2-uri cu întrebări frecvente (People Also Ask)
- 1 imagine cu alt text SEO
- Paragraph final cu CTA → programare online
- Schema Article în JSON-LD

---

## Google Business Profile — postări recomandate

```
Tipuri de postări săptămânale:
- Ofertă: "Prima consultație gratuită pentru implantologie"
- Noutate: echipament nou, caz rezolvat (cu acord pacient)
- Educational: "Știai că..."
- Eveniment: program sărbători, zile libere

Categorii GBP:
Primară: Dentist
Secundare: Oral surgeon, Dental implants periodontist,
           Cosmetic dentist, Endodontist
```

---

## Robots.txt — conținut recomandat

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Sitemap: https://aradent.ro/sitemap.xml
```

---

## Checklist SEO per pagină nouă

```
[ ] Title tag: 50-60 caractere, include keyword + Pitești
[ ] Meta description: 150-160 caractere, include CTA
[ ] H1 unic pe pagină, include keyword principal
[ ] Alt text la toate imaginile
[ ] URL scurt, fără diacritice
[ ] JSON-LD adecvat tipului de pagină
[ ] Link intern către pagina de programare
[ ] Canonical corect setat
[ ] Open Graph complet (title, description, image)
```
