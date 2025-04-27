import { WithSimbianProps } from '@/types/WithSimbianProps'
import FeaturesCard from '../FeaturesCard'
import { AnimatePresence, motion } from "motion/react"
import { positives } from '@/data/pros'

const Positives = ({ withSimbian }: WithSimbianProps) => {
  return (
    <AnimatePresence>
      {withSimbian && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex justify-start items-start flex-col gap-4 "
        >
          {positives.map(pro => (
            <FeaturesCard
              key={pro.id}
              icon={pro.icon}
              title={pro.title}
              high_priority={false}
              description={pro.description}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Positives