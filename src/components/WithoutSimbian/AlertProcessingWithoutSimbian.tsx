import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react";
import FeaturesCard from "../FeaturesCard";
import { processingData } from "@/data/processingWithoutSimbian";
import { WithSimbianProps } from "@/types/WithSimbianProps";

const AlertProcessingWithoutSimbian = ({ withSimbian }: WithSimbianProps ) => {

  const [windowHeight, setWindowHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % processingData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  const currentFeature = processingData[currentIndex];
  return (
    <div className="absolute w-full right-0 small:top-[165px] bottom-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={withSimbian ? 'hidden' : 'block'}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -windowHeight }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative w-full"
        >
          {!withSimbian && <div
            className="absolute top-0 left-0 w-full"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentFeature.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full flex small:flex-row flex-col-reverse small:items-center items-end small:translate-y-[-50%] translate-y-10"
              >
                <div className="w-full shrink">
                  <FeaturesCard
                    icon={currentFeature.icon}
                    title={currentFeature.title}
                    description={currentFeature.description}
                    high_priority={currentFeature.high_priority}
                  />
                </div>

                <div className="w-[15%] max-w-[200px] h-[1px] overflow-visible bg-[#616cd2] relative small:block hidden">
                  <div className="absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-3 h-3 rounded-full bg-[#616cd2]"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AlertProcessingWithoutSimbian