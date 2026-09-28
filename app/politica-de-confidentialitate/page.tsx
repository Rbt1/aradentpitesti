import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate | ARA DENT STUDIO',
  description: 'Politica de confidențialitate a site-ului ARA DENT STUDIO Pitești — cum colectăm, folosim și protejăm datele dumneavoastră personale.',
  alternates: {
    canonical: 'https://www.aradentpitesti.ro/politica-de-confidentialitate',
  },
  robots: { index: true, follow: true },
}

export default function PoliticaConfidentialitatePage() {
  return (
    <main className="bg-cream min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="font-playfair italic text-4xl lg:text-5xl text-forest-dark mb-4">
          Politica de Confidențialitate
        </h1>
        <p className="font-jost text-sm text-bark mb-12">
          Ultima actualizare: 28 septembrie 2026
        </p>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">1. Cine suntem (operatorul datelor)</h2>
          <p className="font-jost text-base text-bark leading-relaxed mb-4">
            Operatorul datelor cu caracter personal colectate prin website-ul www.aradentpitesti.ro este
            SC TRIVALE DENTAL YOUNG SRL, CUI 40303321, J3/2698/2018, cu sediul în Str. Trivale nr. 30,
            Pitești, județul Argeș, care își desfășoară activitatea sub denumirea ARA DENT STUDIO,
            la punctul de lucru din Bd. Republicii nr. 19, Pitești, Argeș.
          </p>
          <address className="not-italic font-jost text-base text-bark space-y-1">
            <p>Contact pentru orice aspect legat de datele personale:</p>
            <p>
              <a href="mailto:aradentstudio@gmail.com" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
                aradentstudio@gmail.com
              </a>{' '}
              |{' '}
              <a href="tel:+40754219011" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
                0754 219 011
              </a>
            </p>
          </address>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">2. Ce date colectăm</h2>
          <p className="font-jost text-base text-bark leading-relaxed mb-4">
            În funcție de modul în care ne contactați, putem prelucra:
          </p>
          <ul className="font-jost text-base text-bark leading-relaxed space-y-3 list-none pl-0">
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Date de identificare și contact</strong>, transmise
              prin formularul de programare de pe site (Nume complet, Telefon, Serviciu dorit, Dată
              preferată, Mesaj opțional) — formular care construiește un mesaj trimis prin WhatsApp
              la numărul nostru; sau prin apel telefonic, WhatsApp direct sau email.
              {' '}Formularul de programare de pe site nu stochează datele pe serverele noastre: el deschide
              o conversație WhatsApp cu mesajul completat, pe care îl trimiteți dumneavoastră. Mesajul
              ajunge la noi prin WhatsApp.
            </li>
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Date privind sănătatea</strong>, pe care ni le
              trimiteți voluntar în vederea unei evaluări sau estimări (de exemplu tomografii CBCT,
              radiografii, fotografii intraorale, descrierea problemei dentare).
            </li>
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Date tehnice și de navigare</strong> (adresă IP,
              tip de browser, pagini vizitate), prin cookie-uri și tehnologii similare, conform{' '}
              <Link href="/politica-cookie" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
                Politicii de Cookie-uri
              </Link>.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">3. De ce folosim aceste date și pe ce temei</h2>
          <ul className="font-jost text-base text-bark leading-relaxed space-y-3 list-none pl-0">
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Răspunsul la solicitări și programarea consultațiilor</strong>{' '}
              — temei: măsuri precontractuale la cererea dumneavoastră (art. 6 alin. 1 lit. b GDPR).
            </li>
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Evaluarea materialelor medicale trimise</strong>{' '}
              (CBCT, fotografii) în vederea unei estimări orientative — temei: consimțământul dumneavoastră
              explicit (art. 9 alin. 2 lit. a GDPR), exprimat prin trimiterea voluntară a materialelor.
            </li>
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Furnizarea serviciilor medicale și păstrarea evidențelor</strong>{' '}
              la cabinet — temeiuri: executarea contractului și obligații legale
              (art. 6 alin. 1 lit. b și c, art. 9 alin. 2 lit. h GDPR).
            </li>
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Statistici privind utilizarea site-ului</strong>,
              pentru îmbunătățirea lui — temei: consimțământul dumneavoastră, acolo unde este cerut
              (art. 6 alin. 1 lit. a GDPR).
            </li>
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Apărarea drepturilor noastre și respectarea obligațiilor legale</strong>{' '}
              — temei: obligații legale și interes legitim (art. 6 alin. 1 lit. c și f GDPR).
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">4. Cui putem transmite datele</h2>
          <p className="font-jost text-base text-bark leading-relaxed mb-4">
            Nu vindem datele dumneavoastră. Le pot accesa personalul nostru și furnizorii care ne ajută
            să operăm site-ul și comunicarea, strict pentru scopurile de mai sus:
          </p>
          <ul className="font-jost text-base text-bark leading-relaxed space-y-2 list-none pl-0">
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Vercel</strong> — furnizorul de găzduire și livrare
              a site-ului;
            </li>
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Google Analytics</strong> — serviciu de analiză a
              traficului, utilizat doar dacă acceptați cookie-urile analitice prin bannerul de pe site;
            </li>
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">WhatsApp (Meta)</strong> — prin care se transmit
              mesajele generate de formularul de programare și comunicările directe;
            </li>
            <li className="pl-4 border-l-2 border-gold/40">
              <strong className="text-forest-dark">Google Maps</strong> — embed de hartă pe pagina de
              contact, prin care browserul dumneavoastră poate stabili o conexiune cu serverele Google.
            </li>
          </ul>
          <p className="font-jost text-base text-bark leading-relaxed mt-4">
            De asemenea, putem transmite date autorităților, atunci când legea ne obligă.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">5. Transferuri în afara Spațiului Economic European</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Unii dintre furnizorii menționați (Google, Meta/WhatsApp) pot prelucra date și în afara SEE,
            inclusiv în Statele Unite. În acest caz, transferul se bazează pe garanțiile prevăzute de GDPR,
            precum clauzele contractuale standard sau decizia de adecvare aplicabilă.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">6. Cât timp păstrăm datele</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Păstrăm datele doar cât este necesar pentru scopul pentru care au fost colectate. Mesajele
            și solicitările care nu duc la o colaborare se păstrează pentru o perioadă limitată, apoi
            se șterg. Datele din dosarul medical al pacienților se păstrează pe perioadele impuse de
            legislația privind evidența medicală. Datele de navigare se păstrează conform{' '}
            <Link href="/politica-cookie" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
              Politicii de Cookie-uri
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">7. Drepturile dumneavoastră</h2>
          <p className="font-jost text-base text-bark leading-relaxed mb-4">
            Aveți dreptul de acces, rectificare, ștergere, restricționare a prelucrării, portabilitate
            și opoziție, precum și dreptul de a vă retrage consimțământul în orice moment, fără ca aceasta
            să afecteze prelucrarea de dinainte de retragere.
          </p>
          <p className="font-jost text-base text-bark leading-relaxed">
            Pentru a vă exercita drepturile, scrieți-ne la{' '}
            <a href="mailto:aradentstudio@gmail.com" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
              aradentstudio@gmail.com
            </a>
            . Vă răspundem în cel mult 30 de zile.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">8. Securitatea datelor</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Luăm măsuri tehnice și organizatorice rezonabile pentru a proteja datele împotriva accesului
            neautorizat, pierderii sau divulgării. Vă rugăm să nu trimiteți date sensibile prin canale
            nesigure; pentru materiale medicale, folosiți canalele pe care vi le indicăm.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">9. Minori</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Site-ul nu se adresează copiilor. Pentru pacienții minori, programările și datele sunt
            gestionate de părinte sau reprezentantul legal.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">10. Cookie-uri</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Informații detaliate despre cookie-uri găsiți în{' '}
            <Link href="/politica-cookie" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
              Politica de Cookie-uri
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">11. Plângeri</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Dacă considerați că prelucrarea datelor dumneavoastră încalcă legea, vă puteți adresa
            Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP),
            B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București,{' '}
            <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-forest underline hover:text-forest-dark transition-colors duration-200">
              www.dataprotection.ro
            </a>
            . Vă invităm însă să ne contactați mai întâi, pentru a rezolva situația împreună.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">12. Modificări ale acestei politici</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Putem actualiza această politică. Versiunea în vigoare este cea publicată pe această pagină,
            cu data ultimei actualizări afișată sus.
          </p>
        </section>

      </div>
    </main>
  )
}
