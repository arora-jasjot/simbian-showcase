import React from 'react'
import linkImage from '@/assets/cta-link.svg'
import Image from 'next/image'

import ignoredAlerts from '@/assets/alerts/ignored.svg'
import closedAlerts from '@/assets/alerts/closed.svg'
import threatNoneAlerts from '@/assets/alerts/threat-none.svg'
import threatIcon1 from '@/assets/threats/threat-1.svg'
import threatIcon2 from '@/assets/threats/threat-2.svg'
import threatIcon3 from '@/assets/threats/threat-3.svg'
import { ClipLoader } from 'react-spinners'
import AlertsCard from './AlertsCard'
import { AlertInterface } from '@/types/Alert'
import FeaturesCard from './FeaturesCard'
import { FeatureInterface } from '@/types/Feature'
import Arrow from './Arrow'
import alertCon from '@/assets/cons/alert.svg'
import screenCon from '@/assets/cons/screen.svg'
import closeCon from '@/assets/cons/close.svg'
import { ThreatInterface } from '@/types/Threat'
import ThreatCard from './ThreatCard'

import tickIcon from '@/assets/pros/tick.svg'
import personIcon from '@/assets/pros/person.svg'
import insightIcon from '@/assets/pros/insight.svg'
import documentIcon from '@/assets/pros/document.svg'

const WithSimbianSection = () => {
  const alerts: AlertInterface[] = [
    {
      id: 1,
      title: 'Ignored Alerts',
      icon: ignoredAlerts,
      count: 0
    },
    {
      id: 2,
      title: 'Wrongly Closed',
      icon: closedAlerts,
      count: 0
    },
    {
      id: 3,
      title: 'Active Threats',
      icon: threatNoneAlerts,
      high_priority: false,
      count: 0
    },
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
  const discoveredThreats: ThreatInterface[] = [
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
  return (
    <div className='w-full min-h-screen'>
      <div className='m-auto relative p-10'>
        <div className='absolute top-10 left-10 text-white'>
          <h1 className='font-semibold text-4xl'>With Simbian</h1>
          <p className='font-medium text-lg my-6'>Relax. Our Al Agents will take it from here.</p>
        </div>
        <div className='grid grid-cols-5 mt-[100px] gap-10 items-stretch'>
          <div className='col-span-2 flex flex-col justify-end gap-8'>
            {alerts.map((alert: any) => <AlertsCard key={alert.id} icon={alert.icon} count={alert.count} title={alert.title} high_priority={alert.high_priority} threats={[]} />)}
          </div>
          <div className='col-span-3'>
            <div className='flex flex-col justify-start items-start gap-6 w-full'>
              {discoveredThreats.map((threat, index) => (
                <ThreatCard key={threat.id} id={threat.id} icon={threat.icon} title={threat.title} index={index} />
              ))}
              <div className='flex justify-center items-center w-full'>
                <div className='w-10 h-10 shrink-0 bg-white rounded-md flex justify-center items-center'>
                  <ClipLoader size={20} color='#4F80FF' />
                </div>
                <div className='w-[150px] h-[1px] overflow-visible bg-[#61d26e] relative'>
                  <div className='absolute right-0 top-[50%] translate-x-[50%] translate-y-[-50%] w-3 h-3 rounded-full bg-[#61d26e] z-10'></div>
                </div>
                <div className='w-full shrink relative'>
                  <div className="absolute top-0 left-0 w-full translate-y-[-50%] max-w-[500px]">
                    <FeaturesCard icon={tickIcon} title={'Triaged & Reported'} description={'The SOC Agent handled investigation and reporting.'} high_priority={false} />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-start items-center mt-14'>
              <Arrow />
              <div className='flex justify-start items-start flex-col gap-8 max-w-[400px] ml-[136px]'>
                {positives.map(pro => <FeaturesCard key={pro.id} icon={pro.icon} title={pro.title} high_priority={false} description={pro.description} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithSimbianSection