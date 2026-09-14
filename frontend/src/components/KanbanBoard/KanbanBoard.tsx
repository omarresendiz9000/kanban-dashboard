import { useState } from 'react'
import CreateWorkItemForm from '../CreateWorkItemForm/CreateWorkItemForm'
import { sampleWorkItems } from '../../data/sampleWorkItems'
import type { NewWorkItem, WorkItem, WorkflowStatus } from '../../types/workItem'
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
  const [workItems, setWorkItems] = useState<readonly WorkItem[]>(
    sampleWorkItems,
  )
  const [isCreateFormVisible, setIsCreateFormVisible] = useState(false)

  const handleCreateWorkItem = (newWorkItem: NewWorkItem) => {
    const id = `KAN-${crypto.randomUUID().slice(0, 8).toUpperCase()}`

    setWorkItems((currentWorkItems) => [
      ...currentWorkItems,
      { id, ...newWorkItem },
    ])
    setIsCreateFormVisible(false)
  }

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
        <div className="board-header-actions">
          <span className="board-status">Board view</span>
          <button
            className="create-work-item-button"
            type="button"
            onClick={() => setIsCreateFormVisible(true)}
          >
            Create work item
          </button>
        </div>
      </header>

      {isCreateFormVisible && (
        <CreateWorkItemForm
          onCreate={handleCreateWorkItem}
          onCancel={() => setIsCreateFormVisible(false)}
        />
      )}

      <section className="board-columns" aria-label="Kanban workflow columns">
        {workflowColumns.map((column) => (
          <KanbanColumn
            key={column.status}
            title={column.title}
            workItems={workItems.filter(
              (workItem) => workItem.status === column.status,
            )}
          />
        ))}
      </section>
    </main>
  )
}

export default KanbanBoard