export type WorkflowStatus =
  | 'backlog'
  | 'ready'
  | 'in-progress'
  | 'review'
  | 'done'

export type Priority = 'critical' | 'high' | 'medium' | 'low'

export interface WorkItem {
  id: string
  title: string
  status: WorkflowStatus
  priority: Priority
  assignee: string
}