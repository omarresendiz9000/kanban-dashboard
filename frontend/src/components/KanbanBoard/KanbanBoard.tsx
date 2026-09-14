import KanbanColumn from '../KanbanColumn/KanbanColumn'
import './KanbanBoard.css'

type WorkflowColumn = 'Backlog' | 'Ready' | 'In Progress' | 'Review' | 'Done'

const workflowColumns: readonly WorkflowColumn[] = [
  'Backlog',
  'Ready',
  'In Progress',
  'Review',
  'Done',
]

function KanbanBoard() {
  return (
    <main className="kanban-board">
      <header className="board-header">
        <div>
          <p className="board-eyebrow">WORK MANAGEMENT</p>
          <h1>Kanban Board</h1>
          <p className="board-description">
            Track work across the team workflow.
          </p>
        </div>
        <span className="board-status">Board view</span>
      </header>

      <section className="board-columns" aria-label="Kanban workflow columns">
        {workflowColumns.map((title) => (
          <KanbanColumn key={title} title={title} />
        ))}
      </section>
    </main>
  )
}

export default KanbanBoard