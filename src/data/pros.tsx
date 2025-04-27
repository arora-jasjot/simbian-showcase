import { FeatureInterface } from "@/types/Feature";
import personIcon from '@/assets/pros/person.svg'
import insightIcon from '@/assets/pros/insight.svg'
import documentIcon from '@/assets/pros/document.svg'

export const positives: FeatureInterface[] = [
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