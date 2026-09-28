import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și Condiții | ARA DENT STUDIO',
  description: 'Termenii și condițiile de utilizare a site-ului ARA DENT STUDIO Pitești — SC TRIVALE DENTAL YOUNG SRL, CUI 40303321.',
  alternates: {
    canonical: 'https://www.aradentpitesti.ro/termeni-conditii',
  },
  robots: { index: true, follow: true },
}

export default function TermeniConditiiPage() {
  return (
    <main className="bg-cream min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="font-playfair italic text-4xl lg:text-5xl text-forest-dark mb-4">
          Termeni și Condiții
        </h1>
        <p className="font-jost text-sm text-bark mb-12">
          Ultima actualizare: septembrie 2026
        </p>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">1. Date de identificare</h2>
          <p className="font-jost text-base text-bark leading-relaxed mb-4">
            Prezentul website www.aradentpitesti.ro este operat de SC TRIVALE DENTAL YOUNG SRL, CUI 40303321,
            J3/2698/2018, cu sediul în Str. Trivale nr. 30, Pitești, județul Argeș, denumită în continuare
            &ldquo;ARA DENT STUDIO&rdquo; sau &ldquo;Societatea&rdquo;.
          </p>
          <address className="not-italic font-jost text-base text-bark space-y-1">
            <p>Punct de lucru: Bd. Republicii nr. 19, Pitești, Argeș</p>
            <p>
              Email:{' '}
              <a href="mailto:aradentstudio@gmail.com" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
                aradentstudio@gmail.com
              </a>
            </p>
            <p>
              Telefon:{' '}
              <a href="tel:+40754219011" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
                0754 219 011
              </a>
            </p>
          </address>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">2. Acceptarea termenilor</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Utilizarea acestui website implică acceptarea integrală a prezentilor Termeni și Condiții.
            Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">3. Serviciile oferite</h2>
          <p className="font-jost text-base text-bark leading-relaxed mb-4">
            ARA DENT STUDIO oferă servicii stomatologice: implantologie, chirurgie orală, endodonție,
            parodontologie, protetică dentară, fațete dentare, tratamente de urgență și igienizare profesională.
            Informațiile prezentate pe site au caracter general și informativ și nu constituie sfat medical personalizat.
          </p>
          <p className="font-jost text-base text-bark leading-relaxed">
            Consultația este gratuită; investigațiile suplimentare (radiografie, CT dentar/CBCT) se taxează separat,
            conform listei de prețuri comunicate în cabinet.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">4. Programări</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Programările realizate prin site, telefon sau rețele sociale sunt orientative și se confirmă de către
            echipa ARA DENT STUDIO. Societatea își rezervă dreptul de a reprograma în cazuri de urgență medicală
            sau indisponibilitate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">5. Limitarea răspunderii</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Informațiile de pe site nu înlocuiesc un consult medical de specialitate. Orice plan de tratament
            este stabilit exclusiv în urma unei evaluări clinice și, unde este cazul, a unei investigații
            imagistice (CBCT) efectuate la cabinet. ARA DENT STUDIO nu poate fi făcută răspunzătoare pentru
            decizii luate exclusiv pe baza informațiilor publicate pe site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">6. Proprietate intelectuală</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Conținutul site-ului (texte, imagini, logo, fotografii ale cabinetului) este proprietatea
            SC TRIVALE DENTAL YOUNG SRL și este protejat de legislația privind drepturile de autor.
            Reproducerea fără acord scris este interzisă.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">7. Prelucrarea datelor cu caracter personal</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Datele colectate prin formularele de contact/programare sunt prelucrate conform Regulamentului
            (UE) 2016/679 (GDPR). Detalii complete în Politica de Confidențialitate.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">8. Soluționarea litigiilor (SAL/SOL)</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            În caz de nemulțumire, ne puteți contacta direct la{' '}
            <a href="mailto:aradentstudio@gmail.com" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
              aradentstudio@gmail.com
            </a>
            . Aveți, de asemenea, dreptul de a apela la Autoritatea Națională pentru Protecția Consumatorilor
            (ANPC) —{' '}
            <a href="https://www.anpc.ro" target="_blank" rel="noopener noreferrer" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
              www.anpc.ro
            </a>{' '}
            — sau la platforma europeană de Soluționare a Litigiilor Online (SOL):{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
              ec.europa.eu/consumers/odr
            </a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">9. Legea aplicabilă</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Prezentul document este guvernat de legea română. Orice litigiu se soluționează de instanțele
            competente din România.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">10. Contact</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Pentru întrebări legate de acești termeni:{' '}
            <a href="mailto:aradentstudio@gmail.com" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
              aradentstudio@gmail.com
            </a>{' '}
            / 0754 219 011.
          </p>
        </section>

      </div>
    </main>
  )
}
