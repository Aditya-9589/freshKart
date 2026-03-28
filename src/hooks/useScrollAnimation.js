import { useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Observes element visibility for scroll-triggered animations (Framer Motion).
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: options.once !== false,
    amount: options.threshold ?? 0.15,
    margin: options.rootMargin ?? '0px',
  })
  return { ref, isInView }
}
