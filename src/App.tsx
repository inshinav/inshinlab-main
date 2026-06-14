import { lazy, Suspense, type ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { Metrics } from '@/components/sections/Metrics'

// Below-the-fold sections are code-split to keep initial JS lean.
const AiThesis = lazy(() =>
  import('@/components/sections/AiThesis').then((m) => ({ default: m.AiThesis })),
)
const Differentiation = lazy(() =>
  import('@/components/sections/Differentiation').then((m) => ({ default: m.Differentiation })),
)
const Flagship = lazy(() =>
  import('@/components/sections/Flagship').then((m) => ({ default: m.Flagship })),
)
const Process = lazy(() =>
  import('@/components/sections/Process').then((m) => ({ default: m.Process })),
)
const AiStack = lazy(() =>
  import('@/components/sections/AiStack').then((m) => ({ default: m.AiStack })),
)
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({ default: m.Projects })),
)
const Timeline = lazy(() =>
  import('@/components/sections/Timeline').then((m) => ({ default: m.Timeline })),
)
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
)

function Deferred({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div className="min-h-[60vh]" />}>{children}</Suspense>
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-canvas"
      >
        К содержимому
      </a>

      <Header />

      <main>
        <Hero />
        <SocialProof />
        <Metrics />
        <Deferred>
          <AiThesis />
        </Deferred>
        <Deferred>
          <Differentiation />
        </Deferred>
        <Deferred>
          <Flagship />
        </Deferred>
        <Deferred>
          <Process />
        </Deferred>
        <Deferred>
          <AiStack />
        </Deferred>
        <Deferred>
          <Projects />
        </Deferred>
        <Deferred>
          <Timeline />
        </Deferred>
        <Deferred>
          <Contact />
        </Deferred>
      </main>

      <Footer />
    </MotionConfig>
  )
}

export default App
