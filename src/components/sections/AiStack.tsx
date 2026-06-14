import { motion } from 'framer-motion'
import { STACK } from '@/lib/content'
import { cn } from '@/lib/cn'
import { fadeUp, fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/primitives/Section'
import { SectionHeading } from '@/components/primitives/SectionHeading'
import { Card } from '@/components/primitives/Card'
import { Tag } from '@/components/primitives/Tag'

export function AiStack() {
  const lastIsWide = STACK.length % 2 === 1

  return (
    <Section id="stack">
      <SectionHeading eyebrow="AI-СТЕК · ИЮНЬ 2026" title="Production-стек на острие" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-7 flex items-start gap-3 rounded-xl border border-line bg-surface/50 px-4 py-3.5 font-mono text-xs leading-relaxed text-muted sm:text-[13px]"
      >
        <span className="mt-0.5 text-cyan">{'//'}</span>
        <span>
          Только то, что реально SOTA сейчас — обновляю каждый месяц. Прошлогодних
          инструментов здесь нет.
        </span>
      </motion.div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2"
      >
        {STACK.map((g, i) => {
          const wide = lastIsWide && i === STACK.length - 1
          return (
            <motion.div key={g.group} variants={fadeUpItem} className={cn(wide && 'lg:col-span-2')}>
              <Card className="h-full">
                <h3 className="text-lg">{g.group}</h3>
                <p className="mt-2 max-w-prose font-mono text-[12px] leading-relaxed text-faint">
                  {g.note}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.tools.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
