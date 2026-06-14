import { motion } from 'framer-motion'
import { fadeUp, fadeUpItem, staggerParent, viewportOnce } from '@/lib/motion'
import { Section } from '@/components/primitives/Section'
import { MonoLabel } from '@/components/primitives/MonoLabel'
import { PipelineDiagram } from '@/components/visuals/PipelineDiagram'

const RESULT_CHIPS = ['Цикл ×4', 'CAC −18%', 'self-service для команды']

export function Flagship() {
  return (
    <Section id="flagship">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative overflow-hidden rounded-3xl border border-line bg-surface/50"
      >
        {/* faint grid backdrop */}
        <div
          className="bg-grid pointer-events-none absolute inset-0 opacity-60"
          style={{
            maskImage: 'radial-gradient(110% 80% at 80% 0%, #000 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(110% 80% at 80% 0%, #000 30%, transparent 75%)',
          }}
        />

        <div className="relative p-6 sm:p-10 lg:p-14">
          <motion.div variants={fadeUpItem}>
            <MonoLabel marker className="text-accent">
              FLAGSHIP CASE
            </MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 max-w-3xl text-3xl leading-[1.1] sm:text-4xl"
          >
            Мульти-агентная система перформанс-экспериментов
          </motion.h2>

          {/* Problem */}
          <motion.div
            variants={fadeUpItem}
            className="mt-12 max-w-3xl border-l-2 border-line pl-5 sm:pl-6"
          >
            <MonoLabel>ПРОБЛЕМА</MonoLabel>
            <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
              Цикл «гипотеза → креатив → запуск → инсайт» занимал ~2 месяца. Узкое место —
              ручная генерация гипотез и текстов, отрисовка баннеров и медленная аналитика.
            </p>
          </motion.div>

          {/* System + diagram */}
          <motion.div variants={fadeUpItem} className="mt-10 border-l-2 border-line pl-5 sm:pl-6">
            <MonoLabel>СИСТЕМА</MonoLabel>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Собрал систему из 3 AI-агентов, работающих в связке:
            </p>
          </motion.div>

          <div className="mt-8">
            <PipelineDiagram />
          </div>

          {/* Result */}
          <motion.div
            variants={fadeUpItem}
            className="mt-12 max-w-3xl border-l-2 border-accent/60 pl-5 sm:pl-6"
          >
            <MonoLabel className="text-accent">РЕЗУЛЬТАТ</MonoLabel>
            <p className="mt-3 text-base leading-relaxed text-ink sm:text-lg">
              Цикл сократился с ~2 месяцев до 2 недель (×4). CAC −18% уже на первой итерации.
              Систему упаковал в self-service инструмент для всей команды.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {RESULT_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-accent/30 bg-accent/[0.08] px-3.5 py-1.5 font-mono text-xs text-accent"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
