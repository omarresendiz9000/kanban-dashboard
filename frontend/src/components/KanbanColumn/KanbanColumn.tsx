import './KanbanColumn.css'

interface KanbanColumnProps {
  title: string
}

function KanbanColumn({ title }: KanbanColumnProps) {
  return (
    <article className="kanban-column">
      <header className="column-header">
        <h2>{title}</h2>
        <span className="column-count" aria-label="0 work items">
          0
        </span>
      </header>
      <div className="column-content">
        <p>No work items</p>
      </div>
    </article>
  )
}

export default KanbanColumn