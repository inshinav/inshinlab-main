import { cn } from '@/lib/cn'

type Props = { className?: string; onClick?: () => void }

/** Brand mark: pipeline-glyph "IL" + wordmark. */
export function Logo({ className, onClick }: Props) {
  return (
    <a
      href="#top"
      onClick={onClick}
      aria-label="INSHIN LAB — наверх"
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent',
        className,
      )}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="61"
          height="61"
          rx="14"
          fill="#0A0A0B"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.5"
        />
        <rect x="15" y="17" width="6.5" height="30" rx="2" fill="#C6F24E" />
        <rect x="30" y="17" width="6.5" height="30" rx="2" fill="#C6F24E" />
        <rect x="30" y="40.5" width="19" height="6.5" rx="2" fill="#C6F24E" />
        <circle cx="47" cy="19" r="4" fill="#22D3EE" />
      </svg>
      <span className="font-mono text-sm font-medium tracking-[0.16em] text-ink">
        INSHIN&nbsp;LAB
      </span>
    </a>
  )
}
