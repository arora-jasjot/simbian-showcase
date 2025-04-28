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
    <div className="absolute w-full medium2:left-full small:top-[165px] small:bottom-auto bottom-[-80px] small:translate-y-0">
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
            <div className="w-full flex medium2:flex-row flex-row-reverse items-center translate-y-[-50%]">
              <div className='small:block hidden lg:w-[150px] medium2:w-[20px] w-[15%] medium2:max-w-auto max-w-[200px] h-[1px] overflow-visible bg-[#61d26e] relative'>
                <div className='absolute medium2:right-0 left-0 medium2:left-auto top-[50%] medium2:translate-x-[50%] translate-x-[-50%] translate-y-[-50%] w-3 h-3 rounded-full bg-[#61d26e] z-10'></div>
              </div>
              <div className='w-full shrink relative'>
                <div className="absolute top-0 left-0 w-full translate-y-[-50%] lg:min-w-[400px]">
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