import { motion } from 'framer-motion'
import { CONTRASTS } from '@/lib/content'
import { fadeUp, fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/primitives/Section'
import { SectionHeading } from '@/components/primitives/SectionHeading'

export function Differentiation() {
  return (
    <Section id="approach">
      <SectionHeading
        eyebrow="ОТСТРОЙКА"
        title="Разница — в подходе"
        intro="Почему я, а не «ещё один маркетолог, который попробовал нейросети»."
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 overflow-hidden rounded-2xl border border-line"
      >
        {/* column labels */}
        <div className="hidden grid-cols-2 gap-6 border-b border-line bg-surface/40 px-6 py-3 md:grid">
          <span className="mono-eyebrow">обычный подход</span>
          <span className="mono-eyebrow text-accent">мой подход</span>
        </div>

        {CONTRASTS.map((c) => (
          <motion.div
            key={c.before}
            variants={fadeUpItem}
            className="grid grid-cols-1 gap-3 border-b border-line px-6 py-5 last:border-b-0 md:grid-cols-2 md:gap-6 md:py-6"
          >
            <p className="flex items-start gap-3 text-muted">
              <span aria-hidden="true" className="mt-0.5 select-none font-mono text-sm text-faint">
                ✕
              </span>
              {c.before}
            </p>
            <p className="flex items-start gap-3 font-medium text-ink">
              <span aria-hidden="true" className="mt-0.5 select-none font-mono text-sm text-accent">
                →
              </span>
              {c.after}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-12 max-w-3xl text-center text-2xl leading-snug sm:text-3xl"
      >
        Я не «подключаю ChatGPT» — я{' '}
        <span className="text-gradient">проектирую системы</span> под конкретный
        бизнес-результат.
      </motion.p>
    </Section>
  )
}
