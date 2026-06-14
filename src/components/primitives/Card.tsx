import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  children: ReactNode
  className?: string
  /** enable hover lift + accent edge glow */
  interactive?: boolean
}

/**
 * Elevated surface. Hover lift is CSS-driven so it auto-disables under
 * prefers-reduced-motion (see index.css).
 */
export function Card({ children, className, interactive = true }: Props) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-line bg-surface p-6',
        'transition duration-300 will-change-transform',
        interactive &&
          'hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_28px_70px_-40px_rgba(0,0,0,0.9)]',
        className,
      )}
    >
      {interactive && (
        <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-accent/25 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      {children}
    </div>
  )
}
