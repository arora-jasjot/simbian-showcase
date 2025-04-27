import ignoredAlerts from '@/assets/alerts/ignored.svg'

export const processingData = [
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