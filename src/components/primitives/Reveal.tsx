import { motion, type HTMLMotionProps } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

type Props = HTMLMotionProps<'div'>

/** Drop-in wrapper: fade + slide-up the first time it enters the viewport. */
export function Reveal({ children, ...rest }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
