import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  children: ReactNode
  /** show the small lime status square before the text */
  marker?: boolean
  className?: string
}

/** Monospace overline label — the "system" voice of the brand. */
export function MonoLabel({ children, marker = false, className }: Props) {
  return (
    <span className={cn('mono-eyebrow inline-flex items-center gap-2', className)}>
      {marker && (
        <span className="inline-block size-1.5 rounded-[2px] bg-accent shadow-[0_0_8px_rgba(198,242,78,0.8)]" />
      )}
      {children}
    </span>
  )
}
