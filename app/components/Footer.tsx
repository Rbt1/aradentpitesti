'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Servicii', href: '#servicii' },
  { label: 'Tehnologie', href: '#tehnologie' },
  { label: 'Dr. Robert Lungu', href: '#doctor' },
  { label: 'Înainte / După', href: '#inainte-dupa' },
  { label: 'Testimoniale', href: '#testimoniale' },
  { label: 'Programare', href: '#programare' },
  { label: 'Ghiduri Gratuite', href: '/resurse' },
  { label: 'Blog', href: '/blog' },
]

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

const Footer = () => {
  return (
    <footer className="bg-forest-deep border-t border-gold/20 pt-16 pb-8 px-6">
      <div className="container-site">
        {/* Grid 3 coloane */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Coloana 1: Logo + tagline */}
          <div data-animate data-animation="fade-up" className="delay-100">
            <video
              src="/logo/logo-animated.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-14 w-auto object-contain mb-4"
              aria-label="ARA DENT STUDIO logo"
            />
            <p className="font-jost text-[13px] text-cream/60 leading-relaxed">
              Cabinet Stomatologic · Pitești, România
            </p>
            <p className="font-jost text-[12px] text-cream/40 mt-2">
              aradentstudio@gmail.com
            </p>
          </div>

          {/* Coloana 2: Navigare rapidă */}
          <div data-animate data-animation="fade-up" className="delay-200">
            <h3 className="font-jost text-[11px] uppercase tracking-wider text-gold mb-6">
              Navigare
            </h3>
            <nav>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover-gold-underline font-jost text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Coloana 3: Contact + social */}
          <div data-animate data-animation="fade-up" className="delay-300">
            <h3 className="font-jost text-[11px] uppercase tracking-wider text-gold mb-6">
              Contact
            </h3>

            <address className="not-italic space-y-3">
              <p className="font-jost text-sm text-cream/70">
                Bd. Republicii nr. 19<br />
                Pitești, Argeș, România
              </p>
              <a
                href="tel:+40754219011"
                className="hover-gold-underline font-jost text-sm text-cream/70 hover:text-cream transition-colors duration-200 block"
              >
                0754 219 011
              </a>
              <a
                href="mailto:aradentstudio@gmail.com"
                className="hover-gold-underline font-jost text-sm text-cream/70 hover:text-cream transition-colors duration-200 block"
              >
                aradentstudio@gmail.com
              </a>
              <p className="font-jost text-sm text-cream/50">
                Luni–Vineri 09:00–18:00
              </p>
              <a
                href="https://g.page/r/CXJUUxp2i-GYEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jost text-xs text-gold hover:text-gold-light transition-colors duration-200 inline-block mt-2"
              >
                ★ Lasă o recenzie pe Google
              </a>
            </address>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {SOCIAL.map(({ Icon, label, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-cream/60 hover:text-gold transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-[1px] bg-gold/20 mb-8" />

        {/* Copyright */}
        <p className="font-jost text-[12px] text-bark-light/60 text-center">
          © 2025 ARA DENT STUDIO
        </p>
      </div>
    </footer>
  )
}

export default Footer
