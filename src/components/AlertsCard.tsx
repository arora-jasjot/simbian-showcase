import { AlertInterface } from "@/types/Alert";
import Image from "next/image";
import ThreatCard from "./ThreatCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThreatInterface } from "@/types/Threat";

interface AlertCardProps extends AlertInterface{
  withSimbian?: boolean;
  threats: ThreatInterface[]
}

const AlertsCard = ({ icon, title, count, threats, high_priority, icon2, withSimbian=false }: AlertCardProps) => {
  const [isRedBackground, setIsRedBackground] = useState(false);
  useEffect(() => {
    if (!withSimbian && high_priority) {
      const interval = setInterval(() => {
        setIsRedBackground(prev => !prev);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [high_priority]);

  return (
    <div className='w-full max-w-[300px]'>
      <div className='relative px-4 py-6'>
        {high_priority ? (
          <motion.div
            className="absolute inset-0 backdrop-blur-sm rounded-md z-0"
            animate={{
              backgroundColor: !withSimbian && isRedBackground 
                ? "rgba(185, 28, 28, 0.1)"
                : "rgba(229, 231, 235, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200/10 backdrop-blur-sm rounded-md z-0"></div>
        )}

        <div className={`relative z-10 ${withSimbian ? 'text-white' : high_priority ? (isRedBackground ? 'text-red-500' : 'text-white') : 'text-white'}`}>
          <div className='flex justify-between items-center'>
            <div className="flex justify-start items-center gap-4">
              <Image src={!withSimbian && isRedBackground ? icon : (icon2 || icon)} width={20} height={20} alt='Alert-3' />
              <h3 className='text-lg'>{title}</h3>
            </div>
            <h1 className={`text-2xl font-semibold ${withSimbian ? 'text-[#61d26e]' : high_priority ? (isRedBackground ? 'text-red-500' : 'text-white') : 'text-[#49adff]'} mr-4`}>
              {count}
            </h1>
          </div>
          <div className='relative px-2 mt-1 w-full'>
            <div className='absolute inset-0 bg-gray-500/10 backdrop-blur-xl rounded-md z-0'></div>
            <div className="flex z-10 h-10 w-full">
              {threats.map((threat, index) => (
                <ThreatCard 
                  key={index} 
                  id={threat.id} 
                  icon={threat.icon} 
                  title={threat.title} 
                  index={index} 
                  leftMargin={true}
                  includeAnimation={title === 'Active Threats' && index > 4}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AlertsCard;