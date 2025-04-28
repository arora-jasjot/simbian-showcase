import Image from 'next/image'
import linkImage from '@/assets/cta-link.svg'
import { WithSimbianProps } from '@/types/WithSimbianProps'
import { AnimatePresence, motion } from "motion/react"

const WithoutSimbianHeader = ({ withSimbian }: WithSimbianProps) => {
  return (
    <AnimatePresence>
      {!withSimbian && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute top-0 left-0 right-auto medium2:left-auto medium2:right-0 large2:max-w-[400px] medium2:max-w-[250px] max-w-full"
        >
          <h1 className='medium2:text-end text-[#4F80FF] font-semibold text-2xl'>Without Simbian</h1>
          <p className='medium2:text-end text-white font-medium text-base my-2'>If this sounds all too familiar, you might want to...</p>
          <button className='bg-white px-3 py-2 rounded-full flex justify-center items-center gap-2 medium2:ml-auto font-semibold cursor-pointer text-sm'>Book a Demo <Image src={linkImage} alt='link' className='w-6' /></button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WithoutSimbianHeader