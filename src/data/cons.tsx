
import alertCon from '@/assets/cons/alert.svg'
import screenCon from '@/assets/cons/screen.svg'
import closeCon from '@/assets/cons/close.svg'
import { FeatureInterface } from '@/types/Feature'

export const negatives: FeatureInterface[] = [
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