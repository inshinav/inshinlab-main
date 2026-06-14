import { motion } from 'framer-motion'
import { TIMELINE } from '@/lib/content'
import { cn } from '@/lib/cn'
import { fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/primitives/Section'
import { SectionHeading } from '@/components/primitives/SectionHeading'

export function Timeline() {
  return (
    <Section id="timeline">
      <SectionHeading
        eyebrow="ОПЫТ"
        title="Трек, на котором всё держится"
        intro="Резюме как доказательство: каждая роль — это результат, а не строчка в списке."
      />

      <motion.ol
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mt-12 ml-1 space-y-9 border-l border-line pl-8 sm:pl-10"
      >
        {TIMELINE.map((role) => (
          <motion.li key={role.org} variants={fadeUpItem} className="relative">
            {/* node */}
            <span
              className={cn(
                'absolute top-1.5 size-3 rounded-full',
                '-left-[38px] sm:-left-[46px]',
                role.current
                  ? 'bg-accent shadow-[0_0_12px_rgba(198,242,78,0.7)]'
                  : 'border-2 border-line-strong bg-canvas',
              )}
            />
            <p className="font-mono text-xs tracking-wide text-faint">{role.period}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-lg">{role.org}</h3>
              {role.current && (
                <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] tracking-wide text-accent">
                  сейчас
                </span>
              )}
            </div>
            <p className="mt-0.5 text-sm font-medium text-muted">{role.title}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-faint">{role.body}</p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  )
}
