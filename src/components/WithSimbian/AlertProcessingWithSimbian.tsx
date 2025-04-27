import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react";
import FeaturesCard from "../FeaturesCard";
import tickIcon from '@/assets/pros/tick.svg'
import { WithSimbianProps } from "@/types/WithSimbianProps";

const AlertProcessingWithSimbian = ({ withSimbian }: WithSimbianProps) => {

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  return (
    <div className="absolute w-full left-full top-[165px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={withSimbian ? 'hidden' : 'block'}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -windowHeight }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative w-full"
        >
          {withSimbian && <div
            className="absolute top-0 left-0 w-full"
          >
            <div className="w-full flex items-center translate-y-[-50%]">
              <div className='w-[150px] h-[1px] overflow-visible bg-[#61d26e] relative'>
                <div className='absolute right-0 top-[50%] translate-x-[50%] translate-y-[-50%] w-3 h-3 rounded-full bg-[#61d26e] z-10'></div>
              </div>
              <div className='w-full shrink relative'>
                <div className="absolute top-0 left-0 w-full translate-y-[-50%] max-w-[500px]">
                  <FeaturesCard icon={tickIcon} title={'Triaged & Reported'} description={'The SOC Agent handled investigation and reporting.'} high_priority={false} />
                </div>
              </div>
            </div>
          </div>}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AlertProcessingWithSimbian