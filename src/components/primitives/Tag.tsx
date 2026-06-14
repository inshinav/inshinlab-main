import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = { children: ReactNode; className?: string }

/** Monospace pill used for tech tags and labels. */
export function Tag({ children, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-line bg-white/[0.02] px-2.5 py-1',
        'font-mono text-[11px] leading-none tracking-wide text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
