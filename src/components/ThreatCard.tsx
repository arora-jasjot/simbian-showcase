"use client";
import { ThreatInterface } from "@/types/Threat"
import Image from "next/image"
import { motion } from "framer-motion";
import { useMemo } from "react";


interface ThreatCardProps extends ThreatInterface {
  index: number;
  leftMargin?: boolean;
  includeAnimation?: boolean;
}

const ThreatCard = ({ icon, title, index, leftMargin = false, includeAnimation = false }: ThreatCardProps) => {
  
  // Lock the random value once
  const initialY = useMemo(() => {
    return -((Math.floor(Math.random() * 2) + 1) * 140);
  }, []);

  return (
    <motion.div
      key={index}
      initial={{ 
        opacity: includeAnimation ? 0 : 1, 
        y: includeAnimation ? initialY : 0, 
        x: includeAnimation ? (26 * (9 - index)) : 0 
      }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: includeAnimation ? 0.5 : 0, type: 'spring', stiffness: 50 }}
      className={`h-10 w-10 bg-white text-black rounded-md flex items-center justify-center shadow-lg border border-gray-200 ${leftMargin && index !== 0 ? '-ml-4' : ''}`}
      style={{ zIndex: 100 - index }}
    >
      <Image src={icon} width={24} height={24} alt={"Threat"} />
    </motion.div>
  )
}

export default ThreatCard;