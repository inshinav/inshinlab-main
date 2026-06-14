import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { FLAGSHIP_AGENTS, type Agent } from '@/lib/content'
import { popIn, staggerParent, viewportOnce } from '@/lib/motion'

function FlowConnector() {
  return (
    <motion.div
      variants={popIn}
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center py-1 lg:py-0"
    >
      {/* horizontal flow (lg+) */}
      <svg className="hidden lg:block" width="76" height="28" viewBox="0 0 76 28" fill="none">
        <line x1="2" y1="14" x2="62" y2="14" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <line x1="2" y1="14" x2="62" y2="14" stroke="#C6F24E" strokeWidth="2" className="anim-flow" />
        <path
          d="M60 8 L72 14 L60 20"
          fill="none"
          stroke="#C6F24E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* vertical flow (mobile / tablet) */}
      <svg className="lg:hidden" width="28" height="46" viewBox="0 0 28 46" fill="none">
        <line x1="14" y1="2" x2="14" y2="34" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <line x1="14" y1="2" x2="14" y2="34" stroke="#C6F24E" strokeWidth="2" className="anim-flow" />
        <path
          d="M8 32 L14 44 L20 32"
          fill="none"
          stroke="#C6F24E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}

function Node({ agent }: { agent: Agent }) {
  return (
    <motion.div variants={popIn} className="relative flex-1">
      <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface-2 p-5">
        {/* pulsing accent halo */}
        <span
          className="anim-pulse pointer-events-none absolute -right-8 -top-10 size-28 rounded-full blur-2xl"
          style={{ background: 'radial-gradient(circle, rgba(198,242,78,0.16), transparent 70%)' }}
        />
        <div className="relative flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
            {agent.n.toUpperCase()}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-faint">
            <span className="anim-pulse size-1.5 rounded-full bg-accent" />
            online
          </span>
        </div>
        <h3 className="relative mt-3 text-lg text-ink">{agent.title}</h3>
        <p className="relative mt-2 text-sm leading-relaxed text-muted">{agent.body}</p>
      </div>
    </motion.div>
  )
}

/** Animated 3-agent pipeline — the flagship case visual. */
export function PipelineDiagram() {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="flex flex-col items-stretch lg:flex-row lg:items-stretch"
    >
      {FLAGSHIP_AGENTS.map((agent, i) => (
        <Fragment key={agent.n}>
          <Node agent={agent} />
          {i < FLAGSHIP_AGENTS.length - 1 && <FlowConnector />}
        </Fragment>
      ))}
    </motion.div>
  )
}
