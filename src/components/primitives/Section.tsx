import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  /** render without the inner max-width container (full-bleed) */
  bleed?: boolean
}

/** Standard page section: anchor target, vertical rhythm, centered container. */
export function Section({ id, children, className, containerClassName, bleed = false }: Props) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-24 py-20 sm:py-24 lg:py-28', className)}
    >
      {bleed ? (
        children
      ) : (
        <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', containerClassName)}>
          {children}
        </div>
      )}
    </section>
  )
}
