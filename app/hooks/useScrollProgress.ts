'use client'

import { useEffect, useState } from 'react'
import { useScroll, MotionValue } from 'framer-motion'

interface ScrollProgress {
  scrollYProgress: MotionValue<number>
  isScrolled: boolean
}

export const useScrollProgress = (threshold = 50): ScrollProgress => {
  const { scrollYProgress } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return { scrollYProgress, isScrolled }
}
