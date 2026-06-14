import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/content'
import { fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/primitives/Section'
import { SectionHeading } from '@/components/primitives/SectionHeading'
import { Card } from '@/components/primitives/Card'
import { Tag } from '@/components/primitives/Tag'

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="BUILD IN PUBLIC"
        title="Я не рассказываю про AI — я отгружаю на нём продукты"
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map((p) => (
          <motion.div key={p.title} variants={fadeUpItem}>
            <Card className="flex h-full flex-col">
              <h3 className="text-lg leading-snug">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
