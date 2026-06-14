import { EMPLOYERS } from '@/lib/content'
import { Reveal } from '@/components/primitives/Reveal'

export function SocialProof() {
  return (
    <section aria-label="Где работал" className="border-y border-line bg-surface/40">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:gap-10 sm:px-8">
        <p className="mono-eyebrow shrink-0">Строил рост в командах:</p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 sm:gap-x-9">
          {EMPLOYERS.map((name, i) => (
            <span key={name} className="flex items-center gap-x-7 sm:gap-x-9">
              {i > 0 && <span className="hidden text-line-strong sm:inline">/</span>}
              <span className="font-display text-lg font-medium text-muted transition-colors hover:text-ink">
                {name}
              </span>
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
