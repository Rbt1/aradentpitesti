'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Tehnologie', href: '/#tehnologie' },
  { label: 'Dr. Robert Lungu', href: '/dr-robert-lungu' },
  { label: 'Resurse', href: '/resurse' },
  { label: 'Blog', href: '/blog' },
  { label: 'Prețuri', href: '/preturi' },
]

const SERVICII_LINKS = [
  { label: 'Implantologie', href: '/servicii/implantologie' },
  { label: 'Chirurgie Orală', href: '/servicii/chirurgie-orala' },
  { label: 'Protetică Dentară', href: '/servicii/protetica-dentara' },
  { label: 'Endodonție', href: '/servicii/endodontie' },
  { label: 'Parodontologie', href: '/servicii/parodontologie' },
  { label: 'Obturații', href: '/servicii/obturatii' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Blochează scroll-ul când meniul mobil e deschis
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-forest-sm'
            : 'bg-transparent backdrop-blur-sm'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container-site flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="ARA DENT STUDIO — pagina principală">
            <video
              src="/logo/logo-animated.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-12 w-auto object-contain"
              aria-hidden="true"
            />
          </Link>

          {/* Navigare desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Dropdown Servicii */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="font-jost text-xs uppercase tracking-wider text-forest-dark hover:text-forest transition-colors duration-200 flex items-center gap-1"
                aria-expanded={servicesOpen}
              >
                Servicii
                <motion.svg
                  width="10" height="6" viewBox="0 0 10 6" fill="none"
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-forest-dark"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-3 bg-cream border border-bark-light/30 rounded-sm shadow-forest py-2 min-w-[200px] z-50"
                  >
                    {SERVICII_LINKS.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-2.5 font-jost text-[12px] text-forest-dark hover:bg-offwhite hover:text-forest transition-colors duration-150"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-jost text-xs uppercase tracking-wider text-forest-dark hover:text-forest transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://g.page/r/CXJUUxp2i-GYEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost text-xs uppercase tracking-widest text-gold hover:text-gold-dark transition-colors duration-200"
            >
              Recenzii Google ★
            </a>
            <Link
              href="/#programare"
              className="font-jost text-xs uppercase tracking-wider bg-forest text-cream px-6 py-3 rounded-sm hover:bg-gold hover:text-forest-dark transition-all duration-300"
            >
              Programare
            </Link>
          </div>

          {/* Hamburger mobil */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[6px] rounded-sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Închide meniu' : 'Deschide meniu'}
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-forest-dark origin-center"
              animate={mobileOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-forest-dark origin-center"
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-forest-dark origin-center"
              animate={mobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Meniu mobil full-screen */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav className="flex flex-col items-center gap-6 w-full px-8">
              {/* Servicii mobile */}
              {SERVICII_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-playfair text-2xl text-forest-dark hover:text-forest transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="w-12 h-[1px] bg-bark-light/40 my-2" />
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: (SERVICII_LINKS.length + i) * 0.06, duration: 0.4, ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-jost text-sm uppercase tracking-wider text-bark-dark hover:text-forest transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: (SERVICII_LINKS.length + NAV_LINKS.length) * 0.06, duration: 0.4, ease: 'easeOut' }}
              >
                <Link
                  href="/#programare"
                  onClick={() => setMobileOpen(false)}
                  className="font-jost text-sm uppercase tracking-wider bg-forest text-cream px-8 py-4 rounded-sm hover:bg-gold hover:text-forest-dark transition-all duration-300 inline-block mt-2"
                >
                  Programare
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
