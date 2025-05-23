"use client";
import Image from "next/image";

import backgroundImage from '@/assets/background.png'
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react"


import { ClipLoader } from 'react-spinners'
import AlertsCard from '@/components/AlertsCard'
import Arrow from '@/components/Arrow'
import ThreatCard from '@/components/ThreatCard'
import { threats } from "@/data/threats";
import AlertProcessingWithoutSimbian from "@/components/WithoutSimbian/AlertProcessingWithoutSimbian";
import AlertProcessingWithSimbian from "@/components/WithSimbian/AlertProcessingWithSimbian";
import Negatives from "@/components/WithoutSimbian/Negatives";
import Positives from "@/components/WithSimbian/Positives";
import { useAlerts } from "@/context/data";
import WithoutSimbianHeader from "@/components/WithoutSimbian/Header";
import WithSimbianHeader from "@/components/WithSimbian/Header";
import useScrollDirection from "@/utils/useScrollDirection";
import { AlertInterface } from "@/types/Alert";

export default function Home() {


  const [withSimbian, setWithSimbian] = useState<boolean>(false)
  const { alerts, clearAlerts, resetAlerts } = useAlerts()

  useEffect(() => {
    if (withSimbian) {
      clearAlerts()
    }
    else {
      resetAlerts()
    }
  }, [withSimbian])
  const divRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollDirection(divRef);

  useEffect(() => {
    if (scrollDirection === "down") {
      setWithSimbian(true)
    } else if (scrollDirection === "up") {
      setWithSimbian(false)
    }
  }, [scrollDirection]);

  useEffect(() => {
    // Scroll to top whenever the `withSimbian` state changes
    if (divRef.current) {
      divRef.current.scrollTo(0, 0);
    }
  }, [withSimbian]);


  return (
    <main className="w-full h-screen overflow-hidden">
    <Image
      src={backgroundImage}
      alt="background"
      className="w-full min-h-full object-cover"
    />
    <motion.div
      initial={{ backgroundColor: "#020816CC" }}
      animate={{ backgroundColor: withSimbian ? "#620eab80" : "#020816CC" }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
    >
      <div
        ref={divRef}
        className="w-full h-full px-10 py-10 large:px-20 max-w-[1200px] m-auto overflow-auto"
      >
          <div className="relative">
            <WithoutSimbianHeader withSimbian={withSimbian} />
            <WithSimbianHeader withSimbian={withSimbian} />
            <div className={`${!withSimbian ? 'medium2:max-w-[60%] medium2:pt-0 small:pt-20 pt-40' : 'lg:max-w-[40%] medium2:max-w-[50%] medium2:pt-0 small:pt-20 pt-28'} duration-500`}>
              <div className='flex small:flex-col small:justify-start justify-center small:items-end items-center gap-2 w-full relative'>
                <AlertProcessingWithoutSimbian withSimbian={withSimbian} />
                <AlertProcessingWithSimbian withSimbian={withSimbian} />
                {threats.map((threat, index) => (
                  <ThreatCard key={threat.id} id={threat.id} icon={threat.icon} title={threat.title} index={index} />
                ))}
                <div
                  className="w-10 h-10 shrink-0 bg-white rounded-md flex justify-center items-center relative"
                >
                  <ClipLoader size={20} color="#4F80FF" />
                </div>
              </div>
              <div className={`flex justify-between items-start small:mt-20 ${!withSimbian ? 'mt-44' : 'mt-16'}`}>
                <div className='flex justify-start items-start flex-col gap-4 medium2:max-w-[400px] w-full'>
                  <Negatives withSimbian={withSimbian} />
                </div>
                <Arrow />
              </div>
            </div>
            <div
              className='medium2:max-w-[400px] medium2:absolute duration-500 small:mt-0 mt-24'
              style={{ top: '226px', left: 'calc(40% + 110px)' }}
            >
              <Positives withSimbian={withSimbian} />
            </div>
            <div className='flex flex-col justify-end gap-4 w-full max-w-[300px] small:min-w-[300px] medium2:absolute m-auto mt-10 medium2:m-0 duration-500' style={{ top: '200px', left: withSimbian ? '0px' : 'calc(60% + 40px)' }}>
              {alerts.map((alert: AlertInterface) => <AlertsCard key={alert.id} icon={alert.icon} count={alert.count} title={alert.title} high_priority={alert.high_priority} icon2={alert.icon2} withSimbian={withSimbian} threats={(alert.threats || [])} />)}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}