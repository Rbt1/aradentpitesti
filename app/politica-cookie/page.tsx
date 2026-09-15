import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politică de Cookie-uri',
  description: 'Politica de utilizare a cookie-urilor pe site-ul ARA DENT STUDIO Pitești. Aflați ce cookie-uri folosim și cum le puteți gestiona.',
  alternates: {
    canonical: 'https://www.aradentpitesti.ro/politica-cookie',
  },
  robots: { index: true, follow: true },
}

export default function PoliticaCookiePage() {
  return (
    <main className="bg-cream min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="font-playfair italic text-4xl lg:text-5xl text-forest-dark mb-4">
          Politică de Cookie-uri
        </h1>
        <p className="font-jost text-sm text-bark mb-12">
          Ultima actualizare: septembrie 2026
        </p>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">1. Ce sunt cookie-urile?</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Cookie-urile sunt fișiere mici de text stocate pe dispozitivul dvs. atunci când vizitați un site web.
            Ele permit site-ului să vă recunoască la vizitele ulterioare și să rețină preferințele dvs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">2. Ce cookie-uri folosim?</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-jost font-medium text-forest-dark mb-2">Cookie-uri strict necesare</h3>
              <p className="font-jost text-base text-bark leading-relaxed">
                Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.
                Ele nu colectează date personale identificabile.
              </p>
            </div>
            <div>
              <h3 className="font-jost font-medium text-forest-dark mb-2">Cookie-uri analitice (Google Analytics)</h3>
              <p className="font-jost text-base text-bark leading-relaxed">
                Folosim Google Analytics (ID: G-MV0DF1E3LC) pentru a înțelege cum interacționați cu site-ul nostru.
                Aceste cookie-uri colectează informații anonime despre paginile vizitate, durata sesiunii și sursa
                traficului. Sunt activate doar cu consimțământul dvs. explicit.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">3. Google Consent Mode v2</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Site-ul nostru utilizează Google Consent Mode v2. Până la acordarea consimțământului dvs.,
            toate tipurile de stocare (analytics_storage, ad_storage, ad_user_data, ad_personalization)
            sunt setate pe <strong>denied</strong> (refuzat). Consimțământul dvs. actualizează aceste setări
            în timp real.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">4. Cum vă gestionați consimțământul?</h2>
          <p className="font-jost text-base text-bark leading-relaxed mb-4">
            La prima vizită pe site, vi se afișează un banner prin care puteți accepta sau refuza cookie-urile
            analitice. Alegerea dvs. este stocată local în browserul dvs.
          </p>
          <p className="font-jost text-base text-bark leading-relaxed">
            Puteți retrage consimțământul oricând ștergând datele site-ului din setările browserului dvs.
            (Setări → Confidențialitate → Șterge datele de navigare → Cookie-uri și alte date ale site-urilor).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-playfair text-2xl text-forest-dark mb-4">5. Contact</h2>
          <p className="font-jost text-base text-bark leading-relaxed">
            Pentru orice întrebări legate de cookie-uri sau de prelucrarea datelor dvs. personale,
            ne puteți contacta la:
          </p>
          <address className="not-italic mt-4 font-jost text-base text-bark space-y-1">
            <p><strong className="text-forest-dark">ARA DENT STUDIO</strong> — SC TRIVALE DENTAL YOUNG SRL</p>
            <p>Bd. Republicii nr. 19, Pitești, Argeș, România</p>
            <p>
              Email:{' '}
              <a href="mailto:aradentstudio@gmail.com" className="text-forest underline hover:text-forest-dark transition-colors">
                aradentstudio@gmail.com
              </a>
            </p>
          </address>
        </section>

      </div>
    </main>
  )
}
