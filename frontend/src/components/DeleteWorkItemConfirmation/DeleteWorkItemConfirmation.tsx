import type { WorkItem } from '../../types/workItem'
import './DeleteWorkItemConfirmation.css'

interface DeleteWorkItemConfirmationProps {
  workItem: WorkItem
  onConfirm: () => void
  onCancel: () => void
}

function DeleteWorkItemConfirmation({
  workItem,
  onConfirm,
  onCancel,
}: DeleteWorkItemConfirmationProps) {
  return (
    <div
      className="delete-confirmation-overlay"
      role="presentation"
    >
      <section
        className="delete-confirmation"
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-confirmation-title"
        aria-describedby="delete-confirmation-description"
      >
        <p className="delete-confirmation__eyebrow">DESTRUCTIVE ACTION</p>
        <h2 id="delete-confirmation-title">Delete work item?</h2>
        <p id="delete-confirmation-description">
          This will permanently remove <strong>{workItem.id}</strong> and its
          details from the board.
        </p>
        <p className="delete-confirmation__item-title">{workItem.title}</p>
        <div className="delete-confirmation__actions">
          <button
            className="delete-confirmation__cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="delete-confirmation__confirm"
            type="button"
            onClick={onConfirm}
          >
            Confirm Delete
          </button>
        </div>
      </section>
    </div>
  )
}

export default DeleteWorkItemConfirmation