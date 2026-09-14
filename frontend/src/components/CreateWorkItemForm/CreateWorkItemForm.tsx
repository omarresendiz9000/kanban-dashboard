import { useState, type FormEvent } from 'react'
import type {
  NewWorkItem,
  Priority,
  WorkflowStatus,
} from '../../types/workItem'
import './CreateWorkItemForm.css'

interface CreateWorkItemFormProps {
  onCreate: (workItem: NewWorkItem) => void
  onCancel: () => void
}

interface FormValues {
  title: string
  description: string
  priority: Priority | ''
  assignee: string
  status: WorkflowStatus | ''
}

const priorityOptions: readonly { value: Priority; label: string }[] = [
  { value: 'critical', label: 'Critical' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
]

const statusOptions: readonly { value: WorkflowStatus; label: string }[] = [
  { value: 'backlog', label: 'Backlog' },
  { value: 'ready', label: 'Ready' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'review', label: 'Review' },
  { value: 'done', label: 'Done' },
]

const initialFormValues: FormValues = {
  title: '',
  description: '',
  priority: '',
  assignee: '',
  status: '',
}

function CreateWorkItemForm({
  onCreate,
  onCancel,
}: CreateWorkItemFormProps) {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues)
  const [error, setError] = useState('')

  const updateField = <Field extends keyof FormValues>(
    field: Field,
    value: FormValues[Field],
  ) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }))
    setError('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !formValues.title.trim() ||
      !formValues.priority ||
      !formValues.assignee.trim() ||
      !formValues.status
    ) {
      setError('Complete the title, priority, assignee, and status fields.')
      return
    }

    onCreate({
      title: formValues.title.trim(),
      description: formValues.description.trim() || undefined,
      priority: formValues.priority,
      assignee: formValues.assignee.trim(),
      status: formValues.status,
    })
  }

  return (
    <form className="create-work-item-form" onSubmit={handleSubmit} noValidate>
      <div className="form-header">
        <div>
          <p className="form-eyebrow">NEW WORK ITEM</p>
          <h2>Create work item</h2>
        </div>
        <button className="form-close" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>

      <div className="form-fields">
        <label>
          Title <span aria-hidden="true">*</span>
          <input
            value={formValues.title}
            onChange={(event) => updateField('title', event.target.value)}
            placeholder="Enter a work item title"
          />
        </label>

        <label>
          Description
          <textarea
            value={formValues.description}
            onChange={(event) =>
              updateField('description', event.target.value)
            }
            placeholder="Add context for the team"
            rows={3}
          />
        </label>

        <label>
          Priority <span aria-hidden="true">*</span>
          <select
            value={formValues.priority}
            onChange={(event) =>
              updateField('priority', event.target.value as Priority | '')
            }
          >
            <option value="">Select priority</option>
            {priorityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Assignee <span aria-hidden="true">*</span>
          <input
            value={formValues.assignee}
            onChange={(event) => updateField('assignee', event.target.value)}
            placeholder="Enter an assignee"
          />
        </label>

        <label>
          Status <span aria-hidden="true">*</span>
          <select
            value={formValues.status}
            onChange={(event) =>
              updateField('status', event.target.value as WorkflowStatus | '')
            }
          >
            <option value="">Select status</option>
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}

      <div className="form-actions">
        <button className="form-secondary-action" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="form-primary-action" type="submit">
          Save work item
        </button>
      </div>
    </form>
  )
}

export default CreateWorkItemForm