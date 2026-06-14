import { SITE } from '@/lib/content'
import { Logo } from './Logo'

const YEAR = 2026

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="font-mono text-xs text-faint">
            AI Portfolio Operator · {YEAR}
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={SITE.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Telegram {SITE.telegram}
          </a>
          <p className="font-mono text-[11px] tracking-wide text-faint">built in public</p>
        </div>
      </div>
    </footer>
  )
}
