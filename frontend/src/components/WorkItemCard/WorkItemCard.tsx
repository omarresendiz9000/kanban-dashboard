import type { WorkItem } from '../../types/workItem'
import './WorkItemCard.css'

interface WorkItemCardProps {
  workItem: WorkItem
  onEdit: (workItem: WorkItem) => void
  onDelete: (workItem: WorkItem) => void
}

function WorkItemCard({ workItem, onEdit, onDelete }: WorkItemCardProps) {
  return (
    <article className="work-item-card">
      <div className="work-item-card__meta">
        <span className="work-item-card__id">{workItem.id}</span>
        <span className={`priority priority--${workItem.priority}`}>
          {workItem.priority}
        </span>
      </div>
      <h3>{workItem.title}</h3>
      <p className="work-item-card__assignee">
        <span>Assignee</span>
        {workItem.assignee}
      </p>
      <div className="work-item-card__actions">
        <button
          className="work-item-card__edit"
          type="button"
          onClick={() => onEdit(workItem)}
        >
          Edit
        </button>
        <button
          className="work-item-card__delete"
          type="button"
          onClick={() => onDelete(workItem)}
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default WorkItemCard