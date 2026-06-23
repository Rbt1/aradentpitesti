import { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Contact | ARA DENT STUDIO Pitești',
  description: 'Contactează ARA DENT STUDIO Pitești. Adresă, telefon, program și hartă. Programează-te pentru o consultație gratuită.',
  alternates: { canonical: 'https://aradentpitesti.ro/contact' },
  openGraph: {
    title: 'Contact | ARA DENT STUDIO Pitești',
    description: 'Contactează ARA DENT STUDIO Pitești. Adresă, telefon, program și hartă. Programează-te pentru o consultație gratuită.',
    url: 'https://aradentpitesti.ro/contact',
    siteName: 'ARA DENT STUDIO',
    locale: 'ro_RO',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'ARA DENT STUDIO',
  image: 'https://aradentpitesti.ro/logo-circular-600.png',
  telephone: '+40754219011',
  email: 'aradentstudio@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bd. Republicii nr. 19',
    addressLocality: 'Pitești',
    addressCountry: 'RO',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  url: 'https://aradentpitesti.ro',
}

const WA_LINK = 'https://wa.me/40754219011?text=' + encodeURIComponent('Bună ziua! Doresc să programez o consultație gratuită.')

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-forest" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest" aria-hidden="true">
    <path d="M12 21s-7-7.2-7-12a7 7 0 0114 0c0 4.8-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-forest" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.2 8.2 0 004.79 1.52V6.87a4.85 4.85 0 01-1.02-.18z" />
  </svg>
)

const SOCIAL = [
  { Icon: InstagramIcon, label: 'Instagram ARA DENT STUDIO', href: 'https://instagram.com/aradentstudio' },
  { Icon: FacebookIcon, label: 'Facebook ARA DENT STUDIO', href: 'https://facebook.com/aradentstudio' },
  { Icon: TikTokIcon, label: 'TikTok ARA DENT STUDIO', href: 'https://tiktok.com/@aradentstudio' },
]

const MAPS_EMBED_SRC = 'https://www.google.com/maps?q=Bd.+Republicii+nr.+19,+Pite%C8%99ti,+ARA+DENT+STUDIO&output=embed'

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="bg-cream">

        {/* Hero */}
        <section className="bg-cream-dark pt-40 pb-24 px-6">
          <div className="container-site max-w-3xl">
            <p className="font-jost text-[11px] uppercase tracking-[0.25em] text-gold mb-4">
              Contact · ARA DENT STUDIO
            </p>
            <h1 className="font-playfair italic text-5xl lg:text-[60px] text-forest-dark leading-tight mb-5">
              Contactează ARA DENT STUDIO
            </h1>
            <p className="font-jost font-light text-lg text-bark-dark">
              Suntem aici pentru tine. Consultația, radiografia și CT-ul sunt complet gratuite.
            </p>
          </div>
        </section>

        {/* Informatii + harta */}
        <section className="py-20 px-6 bg-cream">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

              {/* Coloana stanga — info contact */}
              <div className="bg-offwhite border border-bark-light/30 rounded-sm p-10">
                <div className="space-y-8">

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-cream flex items-center justify-center">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="font-jost text-[11px] uppercase tracking-wider text-bark mb-1">Telefon</p>
                      <a href="tel:+40754219011" className="font-jost font-bold text-[16px] text-gold-dark hover:text-gold transition-colors duration-200">
                        0754 219 011
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-cream flex items-center justify-center">
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <p className="font-jost text-[11px] uppercase tracking-wider text-bark mb-1">WhatsApp</p>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-jost font-bold text-[16px] text-forest-dark hover:text-forest transition-colors duration-200"
                      >
                        0754 219 011
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-cream flex items-center justify-center">
                      <EmailIcon />
                    </div>
                    <div>
                      <p className="font-jost text-[11px] uppercase tracking-wider text-bark mb-1">Email</p>
                      <a href="mailto:aradentstudio@gmail.com" className="font-jost text-[15px] text-forest-dark hover:text-forest transition-colors duration-200">
                        aradentstudio@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-cream flex items-center justify-center">
                      <LocationIcon />
                    </div>
                    <div>
                      <p className="font-jost text-[11px] uppercase tracking-wider text-bark mb-1">Adresă</p>
                      <p className="font-jost text-[15px] text-forest-dark">
                        Bd. Republicii nr. 19, Pitești
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-cream flex items-center justify-center">
                      <ClockIcon />
                    </div>
                    <div>
                      <p className="font-jost text-[11px] uppercase tracking-wider text-bark mb-1">Program</p>
                      <p className="font-jost text-[15px] text-forest-dark mb-1">
                        Luni – Vineri: 09:00 – 18:00
                      </p>
                      <p className="font-jost font-light text-[13px] text-bark leading-relaxed">
                        Urgențele au întâietate — găsim loc oricând în timpul programului.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Social */}
                <div className="flex gap-4 mt-10 pt-8 border-t border-bark-light/30">
                  {SOCIAL.map(({ Icon, label, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-forest hover:text-gold transition-colors duration-200"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Coloana dreapta — harta */}
              <div className="rounded-sm overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(45,106,79,0.12)', minHeight: '400px' }}>
                <iframe
                  src={MAPS_EMBED_SRC}
                  width="100%"
                  height="450"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harta ARA DENT STUDIO — Bd. Republicii nr. 19, Pitești"
                />
              </div>

            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 px-6 bg-forest-dark">
          <div className="container-site max-w-2xl text-center">
            <h2 className="font-playfair italic text-4xl text-cream mb-10">
              Prefer să vorbesc direct cu cineva
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-sm uppercase tracking-wider bg-[#25D366] text-white px-8 py-4 rounded-sm hover:bg-[#1ebe5d] transition-all duration-300"
            >
              <WhatsAppIcon />
              Scrie-ne pe WhatsApp
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
