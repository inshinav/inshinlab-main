import type { Variants } from 'framer-motion'

/* Single viewport config reused across every reveal */
export const viewportOnce = { once: true, amount: 0.2 } as const

const ease = [0.22, 1, 0.36, 1] as const

/* Container that staggers its children into view */
export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

/* Single element: fade + slide up */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

/* Lighter child used inside staggered grids */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

/* Scale-in for cards / badges */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease } },
}
