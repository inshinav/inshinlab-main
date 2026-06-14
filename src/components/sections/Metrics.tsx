import { motion } from 'framer-motion'
import { METRICS } from '@/lib/content'
import { fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { CountUp } from '@/components/primitives/CountUp'

export function Metrics() {
  return (
    <section aria-label="Ключевые показатели" className="border-b border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3 lg:grid-cols-6"
        >
          {METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUpItem}
              className="flex flex-col gap-2 bg-canvas px-5 py-8"
            >
              <CountUp
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                className={
                  'font-mono text-3xl font-medium tracking-tight tabular-nums sm:text-[2rem] ' +
                  (m.accent === 'cyan' ? 'text-cyan' : 'text-accent')
                }
              />
              <span className="text-[13px] leading-snug text-muted">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
