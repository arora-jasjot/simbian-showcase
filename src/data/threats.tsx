import { ThreatInterface } from "@/types/Threat";
import threatIcon1 from '@/assets/threats/threat-1.svg'
import threatIcon2 from '@/assets/threats/threat-2.svg'
import threatIcon3 from '@/assets/threats/threat-3.svg'

export const threats: ThreatInterface[] = [
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