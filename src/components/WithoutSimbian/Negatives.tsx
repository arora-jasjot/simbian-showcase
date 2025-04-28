import { negatives } from '@/data/cons'
import { WithSimbianProps } from '@/types/WithSimbianProps'
import FeaturesCard from '../FeaturesCard'
import { AnimatePresence, motion } from "motion/react"

const Negatives = ({ withSimbian }: WithSimbianProps) => {
  return (
    <AnimatePresence>
    {!withSimbian &&
      negatives.map(con => (
        <motion.div
          key={con.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='w-full'
        >
          <FeaturesCard
            icon={con.icon}
            title={con.title}
            high_priority={true}
          />
        </motion.div>
      ))
    }
  </AnimatePresence>
  )
}

export default Negatives