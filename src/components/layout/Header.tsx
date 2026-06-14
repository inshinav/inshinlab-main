import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV, SITE } from '@/lib/content'
import { Logo } from './Logo'
import { Button } from '@/components/primitives/Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 8,
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // close the menu when crossing into the desktop breakpoint (md = 768px),
  // otherwise an open menu would leave body scroll locked after a resize
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300 ' +
        (scrolled || open
          ? 'border-b border-line bg-canvas/80 backdrop-blur-xl'
          : 'border-b border-transparent')
      }
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo onClick={() => setOpen(false)} />

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={SITE.telegramUrl} external size="md">
            Telegram
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Button>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          className="relative z-50 flex size-10 items-center justify-center rounded-lg border border-line bg-white/[0.02] md:hidden"
        >
          <span className="sr-only">Меню</span>
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <span
              className={
                'block h-0.5 w-5 bg-ink transition-transform duration-300 ' +
                (open ? 'translate-y-[7px] rotate-45' : '')
              }
            />
            <span
              className={
                'block h-0.5 w-5 bg-ink transition-opacity duration-300 ' +
                (open ? 'opacity-0' : 'opacity-100')
              }
            />
            <span
              className={
                'block h-0.5 w-5 bg-ink transition-transform duration-300 ' +
                (open ? '-translate-y-[7px] -rotate-45' : '')
              }
            />
          </div>
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5"
              aria-label="Мобильная навигация"
            >
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-lg text-muted transition-colors hover:bg-white/[0.03] hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <Button
                href={SITE.telegramUrl}
                external
                size="lg"
                className="mt-3"
                onClick={() => setOpen(false)}
              >
                Написать в Telegram →
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
