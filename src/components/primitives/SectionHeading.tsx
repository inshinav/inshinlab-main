import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { fadeUp, fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { MonoLabel } from './MonoLabel'

type Props = {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

/** Eyebrow + heading + optional intro, revealed with a small stagger. */
export function SectionHeading({ eyebrow, title, intro, align = 'left', className }: Props) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        'flex max-w-3xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <motion.div variants={fadeUpItem}>
          <MonoLabel marker>{eyebrow}</MonoLabel>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl leading-[1.08] sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUpItem}
          className="text-base leading-relaxed text-muted sm:text-lg"
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
