import { ThreatInterface } from "@/types/Threat"
import Image from "next/image"

interface ThreatCardProps extends ThreatInterface {
  index: number;
  leftMargin?: boolean
}

const ThreatCard = ({ id, icon, title, index, leftMargin=false }: ThreatCardProps) => {
  return (
    <div
      key={id}
      className={`h-10 w-10 bg-white text-black rounded-md flex items-center justify-center shadow-lg border border-gray-200 ${leftMargin && index !== 0 ? '-ml-4' : ''}`}
      style={{ zIndex: 100 - index }}
    >
      <Image src={icon} width={24} height={24} alt={title} />
    </div>
  )
}

export default ThreatCard