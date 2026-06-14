import { motion } from 'framer-motion'
import { PROCESS } from '@/lib/content'
import { fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/primitives/Section'
import { SectionHeading } from '@/components/primitives/SectionHeading'
import { Card } from '@/components/primitives/Card'

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="ПРОЦЕСС"
        title="От задачи до системы на потоке"
        intro="Как я превращаю узкое место в работающую AI-систему — за четыре шага."
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {PROCESS.map((s) => (
          <motion.div key={s.n} variants={fadeUpItem}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm tracking-[0.2em] text-accent">{s.n}</span>
                <span className="font-display text-3xl text-white/[0.06] transition-colors group-hover:text-white/10">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.body}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
