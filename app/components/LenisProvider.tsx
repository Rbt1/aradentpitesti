'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      const parallaxElements =
        document.querySelectorAll('[data-parallax-speed]')

      parallaxElements.forEach((el) => {
        const speed = parseFloat(
          el.getAttribute('data-parallax-speed') || '0.5'
        )
        const offset = scroll * speed
        ;(el as HTMLElement).style.transform = `translateY(${offset}px)`
      })
    })

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
