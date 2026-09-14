import { sampleWorkItems } from '../../data/sampleWorkItems'
import type { WorkflowStatus } from '../../types/workItem'
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import './KanbanBoard.css'

interface WorkflowColumn {
  status: WorkflowStatus
  title: string
}

const workflowColumns: readonly WorkflowColumn[] = [
  { status: 'backlog', title: 'Backlog' },
  { status: 'ready', title: 'Ready' },
  { status: 'in-progress', title: 'In Progress' },
  { status: 'review', title: 'Review' },
  { status: 'done', title: 'Done' },
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
        {workflowColumns.map((column) => (
          <KanbanColumn
            key={column.status}
            title={column.title}
            workItems={sampleWorkItems.filter(
              (workItem) => workItem.status === column.status,
            )}
          />
        ))}
      </section>
    </main>
  )
}

export default KanbanBoard