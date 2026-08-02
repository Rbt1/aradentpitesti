'use client'

import { usePathname } from 'next/navigation'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ScrollAnimationInit = () => {
  const pathname = usePathname()
  useScrollAnimation(pathname)
  return null
}

export default ScrollAnimationInit
