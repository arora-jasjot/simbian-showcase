import React from 'react'
import linkImage from '@/assets/cta-link.svg'
import Image from 'next/image'

import ignoredAlerts from '@/assets/alerts/ignored.svg'
import closedAlerts from '@/assets/alerts/closed.svg'
import threatAlerts from '@/assets/alerts/threat.svg'
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

const WithoutSimbianSection = () => {
  const alerts: AlertInterface[] = [
    {
      id: 1,
      title: 'Ignored Alerts',
      icon: ignoredAlerts,
      count: 5,
      threats: [
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
        },
        {
          id: 4,
          icon: threatIcon1,
          title: `Threat 4`
        },
        {
          id: 5,
          icon: threatIcon2,
          title: `Threat 5`
        }
      ]
    },
    {
      id: 2,
      title: 'Wrongly Closed',
      icon: closedAlerts,
      count: 10,
      threats: [
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
        },
        {
          id: 4,
          icon: threatIcon1,
          title: `Threat 4`
        },
        {
          id: 5,
          icon: threatIcon2,
          title: `Threat 5`
        },
        {
          id: 6,
          icon: threatIcon1,
          title: `Threat 1`
        },
        {
          id: 7,
          icon: threatIcon2,
          title: `Threat 2`
        },
        {
          id: 8,
          icon: threatIcon3,
          title: `Threat 3`
        },
        {
          id: 9,
          icon: threatIcon1,
          title: `Threat 4`
        },
        {
          id: 10,
          icon: threatIcon2,
          title: `Threat 5`
        }
      ]
    },
    {
      id: 3,
      title: 'Active Threats',
      icon: threatAlerts,
      high_priority: true,
      count: 3,
      threats: [
        {
          id: 1,
          icon: threatIcon1,
          title: `Threat 1`
        },
        {
          id: 2,
          icon: threatIcon2,
          title: `Threat 2`
        }
      ]
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
    <div className='w-full min-h-screen bg-[#1a294e]'>
      <div className='m-auto relative p-10'>
        <div className='absolute top-10 right-10'>
          <h1 className='text-end text-[#4F80FF] font-semibold text-4xl'>Without Simbian</h1>
          <p className='text-end text-[#616cd2] font-medium text-lg my-6'>If this sounds all too familiar, you might want to...</p>
          <button className='bg-white px-4 py-3 rounded-full flex justify-center items-center gap-2 ml-auto font-semibold cursor-pointer'>Book a Demo <Image src={linkImage} alt='link' className='w-6' /></button>
        </div>
        <div className='grid grid-cols-5 mt-[100px] gap-10 items-stretch'>
          <div className='col-span-3'>
            <div className='flex flex-col justify-start items-end gap-6 w-full'>
              {discoveredThreats.map((threat, index) => (
                <ThreatCard key={threat.id} id={threat.id} icon={threat.icon} title={threat.title} index={index} />
              ))}
              <div className='flex justify-center items-center w-full'>
                <div className='w-full shrink relative'>
                  <div className="absolute top-0 left-0 w-full translate-y-[-50%]">
                    <FeaturesCard icon={ignoredAlerts} title={'Writing Query'} description={'Querying across so many tools gets complex...'} high_priority={false} />
                  </div>
                </div>
                <div className='w-[15%] max-w-[200px] h-[1px] overflow-visible bg-[#616cd2] relative'>
                  <div className='absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-3 h-3 rounded-full bg-[#616cd2]'></div>
                </div>
                <div className='w-10 h-10 shrink-0 bg-white rounded-md flex justify-center items-center'>
                  <ClipLoader size={20} color='#4F80FF' />
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center mt-20'>
              <div className='flex justify-start items-start flex-col gap-8 max-w-[400px]'>
                {negatives.map(con => <FeaturesCard key={con.id} icon={con.icon} title={con.title} high_priority={true} />)}
              </div>
              <Arrow />
            </div>
          </div>
          <div className='col-span-2 flex flex-col justify-end gap-8'>
            {alerts.map((alert: any) => <AlertsCard key={alert.id} icon={alert.icon} threats={alert.threats} count={alert.count} title={alert.title} high_priority={alert.high_priority} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithoutSimbianSection