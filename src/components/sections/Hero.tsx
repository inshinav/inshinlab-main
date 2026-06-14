import { motion } from 'framer-motion'
import { SITE, STATUS } from '@/lib/content'
import { fadeUp, fadeUpItem, popIn, staggerParent } from '@/lib/motion'
import { MonoLabel } from '@/components/primitives/MonoLabel'
import { Button } from '@/components/primitives/Button'
import { HeroBackground } from '@/components/visuals/HeroBackground'

function StatusPanel() {
  return (
    <motion.div
      variants={popIn}
      className="relative w-full overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur-md"
    >
      {/* terminal chrome */}
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[11px] text-faint">~/inshin-lab</span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
          <span className="anim-pulse size-1.5 rounded-full bg-accent" />
          online
        </span>
      </div>

      {/* status readout */}
      <div className="space-y-2.5 px-4 py-5 font-mono text-xs">
        {STATUS.map((row) => (
          <div key={row.key} className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-faint">{row.key}</span>
            <span className="text-muted">:</span>
            <span className="text-accent">{row.value}</span>
          </div>
        ))}
        <div className="mt-3 border-t border-line pt-3 text-muted">
          <span className="text-cyan">$</span> deploy --metrics
          <span className="anim-blink ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-accent" />
        </div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      <HeroBackground />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* copy */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div variants={fadeUpItem}>
            <MonoLabel marker className="!text-[0.66rem] sm:!text-[0.72rem]">
              {SITE.brand} · {SITE.role} · ОТКРЫТ К РОЛЯМ И ПРОЕКТАМ
            </MonoLabel>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.04]"
          >
            Я строю AI-системы, которые двигают{' '}
            <span className="text-gradient">метрики бизнеса</span>
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Алексей Иньшин — перформанс-маркетолог с инженерным бэкграундом. 7+ лет в
            перформансе, бюджеты 100М+ ₽/мес в Яндексе, 8 стран. Проектирую автономных
            AI-агентов и ставлю их на поток:{' '}
            <span className="text-ink">CAC −40%</span>, гипотезы в{' '}
            <span className="text-ink">4 раза быстрее</span>,{' '}
            <span className="text-ink">GMV ×2.5</span>.
          </motion.p>

          <motion.p
            variants={fadeUpItem}
            className="mt-5 font-mono text-xs tracking-wide text-faint sm:text-sm"
          >
            Яндекс&nbsp;Go · Яндекс&nbsp;(шеринг) · Ясно&nbsp;—&nbsp;
            <span className="text-muted">сейчас</span>
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={SITE.telegramUrl} external size="lg">
              Написать в Telegram
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Button>
            <Button href="#flagship" variant="secondary" size="lg">
              Смотреть кейсы
              <span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* status panel */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="w-full lg:pl-4"
        >
          <StatusPanel />
        </motion.div>
      </div>
    </section>
  )
}
