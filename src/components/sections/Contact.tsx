import { motion } from 'framer-motion'
import { SITE } from '@/lib/content'
import { fadeUp, fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/primitives/Section'
import { MonoLabel } from '@/components/primitives/MonoLabel'
import { Button } from '@/components/primitives/Button'

export function Contact() {
  return (
    <Section id="contact">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-3xl border border-line bg-surface/60 px-6 py-14 text-center sm:px-12 sm:py-16 lg:py-20"
      >
        {/* accent glow */}
        <div
          aria-hidden="true"
          className="anim-glow pointer-events-none absolute left-1/2 top-0 size-[32rem] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(198,242,78,0.13), transparent 65%)',
          }}
        />
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 opacity-50"
          style={{
            maskImage: 'radial-gradient(80% 60% at 50% 0%, #000 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(80% 60% at 50% 0%, #000 20%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <motion.div variants={fadeUpItem}>
            <MonoLabel marker>КОНТАКТ</MonoLabel>
          </motion.div>

          <motion.h2 variants={fadeUp} className="mt-6 text-3xl leading-tight sm:text-4xl">
            Открыт к сильным командам и проектам — рост, перформанс, AI-системы
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
          >
            Нужен человек, который не просто запускает рекламу, а строит AI-системы под рост и
            P&L? Напишите — отвечаю в Telegram быстро.
          </motion.p>

          <motion.div variants={fadeUpItem} className="mt-9">
            <Button href={SITE.telegramUrl} external size="lg" className="text-base">
              Написать в Telegram → {SITE.telegram}
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUpItem}
            className="mt-7 font-mono text-xs text-faint sm:text-[13px]"
          >
            Формат: remote / гибрид / офис · готов к переезду и командировкам
          </motion.p>
        </div>
      </motion.div>
    </Section>
  )
}
