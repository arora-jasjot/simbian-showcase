import { FeatureInterface } from "@/types/Feature"
import Image from "next/image"

interface FeatureCardProps extends FeatureInterface{
  high_priority?: boolean;
}

const FeaturesCard = ({ icon, title, description, high_priority=false }: FeatureCardProps) => {
  return (
    <div className='w-full relative p-4'>
      <div className='absolute inset-0 bg-[#b9b9b90f] backdrop-blur-sm rounded-md z-0'></div>
      <div className='relative z-10 flex justify-start items-center gap-4'>
        <div className={`w-14 h-14  ${high_priority ? 'bg-[#731b1b3c]' : 'bg-gray-700'} flex justify-center items-center text-white rounded-md`}>
          <Image src={icon} width={20} height={20} alt={title} />
        </div>
        <div className='text-white'>
          <h3 className='font-medium text-sm'>{title}</h3>
          {description && <p className='text-xs font-light mt-1'>{description}</p>}
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard