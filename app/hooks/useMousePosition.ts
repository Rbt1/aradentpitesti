'use client'

import { useEffect } from 'react'
import { useMotionValue, useSpring, MotionValue } from 'framer-motion'

interface MousePosition {
  x: MotionValue<number>
  y: MotionValue<number>
}

export const useMousePosition = (): MousePosition => {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness: 150, damping: 15, mass: 0.1 })
  const y = useSpring(rawY, { stiffness: 150, damping: 15, mass: 0.1 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [rawX, rawY])

  return { x, y }
}
