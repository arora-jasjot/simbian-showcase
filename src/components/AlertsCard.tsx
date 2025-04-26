import { AlertInterface } from "@/types/Alert";
import Image from "next/image";
import ThreatCard from "./ThreatCard";

const AlertsCard = ({ icon, title, count, threats, high_priority }: AlertInterface) => {
  return (
    <div className='w-full max-w-[300px]'>
      <div className='relative px-4 py-6'>
        <div className={`absolute inset-0 ${high_priority ? 'bg-[#ff000030]' : 'bg-[#b9b9b90f]'} backdrop-blur-sm rounded-md z-0`}></div>
        <div className={`relative z-10 ${high_priority ? 'text-red-500' : 'text-white'}`}>
          <div className='flex justify-between items-center'>
            <div className="flex justify-start items-center gap-4">
              <Image src={icon} width={20} height={20} alt='Alert-3' />
              <h3 className='text-lg'>{title}</h3>
            </div>
            <h1 className={`text-2xl font-semibold ${high_priority ? 'text-red-500' : 'text-[#49adff]'} mr-4`}>{count}</h1>
          </div>
          <div className='relative px-2 mt-1 w-full'>
            <div className='absolute inset-0 bg-[#d5d5d50f] backdrop-blur-sm rounded-md z-0'></div>
            <div className="flex z-10">
              {threats.map((threat, index) => (
                <ThreatCard key={threat.id} id={threat.id} icon={threat.icon} title={threat.title} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertsCard;
