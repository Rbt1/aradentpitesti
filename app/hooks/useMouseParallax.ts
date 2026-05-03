'use client'
import { useEffect } from 'react'

export const useMouseParallax = () => {
  useEffect(() => {
    const layers = document.querySelectorAll('[data-parallax-mouse]')

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const deltaX = (e.clientX - centerX) / centerX
      const deltaY = (e.clientY - centerY) / centerY

      layers.forEach((layer) => {
        const depth = parseFloat(
          layer.getAttribute('data-parallax-mouse') || '10'
        )
        const moveX = deltaX * depth
        const moveY = deltaY * depth
        ;(layer as HTMLElement).style.transform =
          `translate(${moveX}px, ${moveY}px)`
        ;(layer as HTMLElement).style.transition =
          'transform 0.3s ease-out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
}
