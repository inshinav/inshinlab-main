import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type Props = {
  /** numeric core, e.g. "2.5", "40", "100". Non-numeric values render as-is. */
  value: string
  prefix?: string
  suffix?: string
  className?: string
}

const NUMERIC = /^-?\d+(\.\d+)?$/

/** Counts a number up from zero when it scrolls into view. */
export function CountUp({ value, prefix = '', suffix = '', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduced = usePrefersReducedMotion()

  const numeric = NUMERIC.test(value)
  const target = numeric ? parseFloat(value) : 0
  const decimals = numeric && value.includes('.') ? value.split('.')[1].length : 0

  // Only the live animated number lives in state; everything else is derived.
  const [animated, setAnimated] = useState(0)

  useEffect(() => {
    if (!numeric || reduced || !inView) return
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setAnimated(v),
    })
    return () => controls.stop()
  }, [inView, numeric, reduced, target])

  let display: string
  if (!numeric) display = value
  else if (reduced) display = target.toFixed(decimals)
  else display = animated.toFixed(decimals)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
