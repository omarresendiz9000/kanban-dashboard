import type { WorkItem } from '../types/workItem'

export const sampleWorkItems: readonly WorkItem[] = [
  {
    id: 'KAN-101',
    title: 'Define board workflow states',
    status: 'backlog',
    priority: 'high',
    assignee: 'Alex Morgan',
  },
  {
    id: 'KAN-102',
    title: 'Review dashboard navigation',
    status: 'ready',
    priority: 'medium',
    assignee: 'Jordan Lee',
  },
  {
    id: 'KAN-103',
    title: 'Build responsive board layout',
    status: 'in-progress',
    priority: 'critical',
    assignee: 'Taylor Smith',
  },
  {
    id: 'KAN-104',
    title: 'Validate column accessibility',
    status: 'review',
    priority: 'low',
    assignee: 'Morgan Chen',
  },
]