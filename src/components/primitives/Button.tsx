import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary'
type Size = 'md' | 'lg'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: Variant
  size?: Size
  external?: boolean
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl font-medium ' +
  'transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent'

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-canvas hover:brightness-105 hover:shadow-[0_10px_40px_-10px_rgba(198,242,78,0.55)] active:translate-y-px',
  secondary:
    'border border-line-strong bg-white/[0.02] text-ink hover:border-white/25 hover:bg-white/[0.05]',
}

/** Link styled as a button. CTA-grade primary, quiet secondary. */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className,
  ...rest
}: Props) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <a className={cn(base, sizes[size], variants[variant], className)} {...externalProps} {...rest}>
      {children}
    </a>
  )
}
