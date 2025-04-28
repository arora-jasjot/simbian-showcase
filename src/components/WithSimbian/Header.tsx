import { WithSimbianProps } from '@/types/WithSimbianProps'
import { AnimatePresence, motion } from "motion/react"

const WithSimbianHeader = ({ withSimbian }: WithSimbianProps) => {
  return (
    <AnimatePresence>
      {withSimbian && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute top-0 left-0 text-white"
        >
          <h1 className='font-semibold text-2xl'>With Simbian</h1>
          <p className='font-medium text-base my-3'>Relax. Our Al Agents will take it from here.</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WithSimbianHeader