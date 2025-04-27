"use client";
import Image from "next/image";

import backgroundImage from '@/assets/background.png'
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react"

import ignoredAlerts from '@/assets/alerts/ignored.svg'
import closedAlerts from '@/assets/alerts/closed.svg'
import threatAlerts from '@/assets/alerts/threat.svg'
import threatNoneAlerts from '@/assets/alerts/threat-none.svg'
import threatIcon1 from '@/assets/threats/threat-1.svg'
import threatIcon2 from '@/assets/threats/threat-2.svg'
import threatIcon3 from '@/assets/threats/threat-3.svg'
import { ClipLoader } from 'react-spinners'
import AlertsCard from '@/components/AlertsCard'
import { AlertInterface } from '@/types/Alert'
import FeaturesCard from '@/components/FeaturesCard'
import { FeatureInterface } from '@/types/Feature'
import Arrow from '@/components/Arrow'
import alertCon from '@/assets/cons/alert.svg'
import screenCon from '@/assets/cons/screen.svg'
import closeCon from '@/assets/cons/close.svg'
import { ThreatInterface } from '@/types/Threat'
import ThreatCard from '@/components/ThreatCard'
import tickIcon from '@/assets/pros/tick.svg'
import personIcon from '@/assets/pros/person.svg'
import insightIcon from '@/assets/pros/insight.svg'
import documentIcon from '@/assets/pros/document.svg'

export default function Home() {
  const alerts: AlertInterface[] = [
    {
      id: 1,
      title: 'Ignored Alerts',
      icon: ignoredAlerts,
      count: 200
    },
    {
      id: 2,
      title: 'Wrongly Closed',
      icon: closedAlerts,
      count: 35
    },
    {
      id: 3,
      title: 'Active Threats',
      icon: threatAlerts,
      icon2: threatNoneAlerts,
      high_priority: true,
      count: 5
    },
  ]
  const negatives: FeatureInterface[] = [
    {
      id: 1,
      icon: closeCon,
      title: 'Wasting valuable analyst time on false positives'
    },
    {
      id: 2,
      icon: screenCon,
      title: 'Processing one alert at a time, missing the big picture'
    },
    {
      id: 3,
      icon: alertCon,
      title: 'More time fixing SOAR automation, less time on real threats'
    }
  ]
  const positives: FeatureInterface[] = [
    {
      id: 1,
      icon: personIcon,
      title: 'Less noise',
      description: '90% of alerts resolved automatically, 24/7'
    },
    {
      id: 2,
      icon: insightIcon,
      title: 'Holistic insight',
      description: 'Correlate alerts and your environment into the big picture'
    },
    {
      id: 3,
      icon: documentIcon,
      title: 'Adapts automatically',
      description: 'No SOAR needed. Investigate every alert, including new ones, with best of Simbian\'s knowledge and yours'
    }
  ]
  const threats: ThreatInterface[] = [
    {
      id: 1,
      icon: threatIcon1,
      title: `Threat 1`
    },
    {
      id: 2,
      icon: threatIcon2,
      title: `Threat 2`
    },
    {
      id: 3,
      icon: threatIcon3,
      title: `Threat 3`
    }
  ]
  const processingData = [
    {
      id: 1,
      title: 'Waiting for Analyst',
      description: 'Analyst is checking for other problems, hold on.',
      icon: ignoredAlerts,
      high_priority: false
    },
    {
      id: 2,
      title: 'Writing Query',
      description: 'Querying across so many tools gets complex..',
      icon: ignoredAlerts,
      high_priority: false
    },
    {
      id: 3,
      title: 'Asking ChatGPT',
      description: 'What does this powershell comman even mean?',
      icon: ignoredAlerts,
      high_priority: false
    },
    {
      id: 4,
      title: 'Asking Supervisor',
      description: 'The analyst is in training and need some help..',
      icon: ignoredAlerts,
      high_priority: false
    },
    {
      id: 5,
      title: 'Oops!',
      description: 'Mistook that one as fasle positive. You\'re only a human..',
      icon: ignoredAlerts,
      high_priority: false
    },
    {
      id: 6,
      title: 'Missed it!',
      description: 'We have more alerts than time to triage them.',
      icon: ignoredAlerts,
      high_priority: false
    },
  ]
  const [withSimbian, setWithSimbian] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % processingData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const getRandomThreats = (length: number): ThreatInterface[] => {
    const result: ThreatInterface[] = [];
    const _length = length > 10 ? 10 : length
    for (let i = 0; i < _length; i++) {
      const randomIndex = Math.floor(Math.random() * threats.length);
      result.push(threats[randomIndex]);
    }
  
    return result.slice(0, 10);
  };

  const currentFeature = processingData[currentIndex];
  return (
    <main className="w-full h-screen overflow-hidden">
      <Image src={backgroundImage} alt="background" />
      <motion.div
        initial={{ backgroundColor: "#020816CC" }}
        animate={{ backgroundColor: withSimbian ? "#7e22ce80" : "#020816CC" }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 w-full h-full overflow-auto px-20 py-10"
      >
        <div className="w-full h-full relative">
          <div className={`${!withSimbian ? 'max-w-[60%]' : 'max-w-[40%]'} duration-500`}>
            <div className='flex flex-col justify-start items-end gap-2 w-full relative'>
              <div className="absolute w-full right-0 top-[165px]">
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
                          className="w-full flex items-center translate-y-[-50%]"
                        >
                          <div className="w-full shrink">
                            <FeaturesCard
                              icon={currentFeature.icon}
                              title={currentFeature.title}
                              description={currentFeature.description}
                              high_priority={currentFeature.high_priority}
                            />
                          </div>

                          <div className="w-[15%] max-w-[200px] h-[1px] overflow-visible bg-[#616cd2] relative">
                            <div className="absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-3 h-3 rounded-full bg-[#616cd2]"></div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>}
                  </motion.div>
                </AnimatePresence>
              </div>
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
              {threats.map((threat, index) => (
                <ThreatCard key={threat.id} id={threat.id} icon={threat.icon} title={threat.title} index={index} />
              ))}
              <div
                onClick={() => setWithSimbian((simbian) => !simbian)}
                className="w-10 h-10 shrink-0 bg-white rounded-md flex justify-center items-center relative"
              >
                <ClipLoader size={20} color="#4F80FF" />
              </div>
            </div>
            <div className='flex justify-between items-start mt-20'>
              <div className='flex justify-start items-start flex-col gap-4 max-w-[400px]'>
                <AnimatePresence>
                  {!withSimbian &&
                    negatives.map(con => (
                      <motion.div
                        key={con.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
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
              </div>
              <Arrow />
            </div>
          </div>
          <div className='flex flex-col justify-end gap-4 w-fit min-w-[400px] absolute duration-500' style={{ top: '200px', left: withSimbian ? '40px' : 'calc(60% + 40px)' }}>
            {alerts.map((alert: any) => <AlertsCard key={alert.id} icon={alert.icon} count={alert.count} title={alert.title} high_priority={alert.high_priority} icon2={alert.icon2} withSimbian={withSimbian} threats={getRandomThreats(alert.count)} />)}
          </div>
          <div
            className='max-w-[400px] absolute duration-500'
            style={{ top: '226px', left: 'calc(40% + 116px)' }}
          >
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
          </div>
        </div>
      </motion.div>
    </main>
  );
}