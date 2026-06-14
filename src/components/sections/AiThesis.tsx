import { motion } from 'framer-motion'
import { PILLARS } from '@/lib/content'
import { fadeUp, fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/primitives/Section'
import { SectionHeading } from '@/components/primitives/SectionHeading'
import { Card } from '@/components/primitives/Card'

export function AiThesis() {
  return (
    <Section id="thesis">
      <SectionHeading
        eyebrow="AI-ТЕЗИС"
        title="Редкое сочетание: инженер + перформанс + AI-native"
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
      >
        {PILLARS.map((p) => (
          <motion.div key={p.tag} variants={fadeUpItem}>
            <Card className="h-full">
              <span className="font-mono text-xs tracking-[0.2em] text-accent">{p.tag}</span>
              <h3 className="mt-4 text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* intersection → AI Portfolio Operator */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center font-mono text-sm"
      >
        <span className="text-muted">инженер</span>
        <span className="text-accent">×</span>
        <span className="text-muted">перформанс</span>
        <span className="text-accent">×</span>
        <span className="text-muted">AI-native</span>
        <span className="mx-1 text-faint">=</span>
        <span className="rounded-full border border-accent/40 bg-accent/[0.08] px-4 py-1.5 font-medium text-accent">
          AI Portfolio Operator
        </span>
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted sm:text-lg"
      >
        Большинство маркетологов «пробуют нейросети». Я собираю из них производственные
        системы. Не жду готовых инструментов — проектирую агентов, связываю в пайплайны и
        ставлю на поток так, чтобы они приносили измеримый результат:{' '}
        <span className="text-ink">меньше CAC, быстрее гипотезы, больше пользователей</span>.
      </motion.p>
    </Section>
  )
}
