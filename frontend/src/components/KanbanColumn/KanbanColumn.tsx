import WorkItemCard from '../WorkItemCard/WorkItemCard'
import type { WorkItem } from '../../types/workItem'
import './KanbanColumn.css'

interface KanbanColumnProps {
  title: string
  workItems: readonly WorkItem[]
  onEdit: (workItem: WorkItem) => void
  onDelete: (workItem: WorkItem) => void
}

function KanbanColumn({ title, workItems, onEdit, onDelete }: KanbanColumnProps) {
  return (
    <article className="kanban-column">
      <header className="column-header">
        <h2>{title}</h2>
        <span
          className="column-count"
          aria-label={`${workItems.length} work items`}
        >
          {workItems.length}
        </span>
      </header>
      <div className="column-content">
        {workItems.length > 0 ? (
          workItems.map((workItem) => (
            <WorkItemCard
              key={workItem.id}
              workItem={workItem}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p>No work items</p>
        )}
      </div>
    </article>
  )
}

export default KanbanColumn