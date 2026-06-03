import { useEffect } from 'react'
import type { Member, Task } from '../types'
import { Avatar } from './Avatar'
import { columnMeta, dueLabel, formatDate, priorityMeta } from '../utils'

interface TaskModalProps {
  task: Task | null
  members: Member[]
  today: Date
  onClose: () => void
  onToggleSubtask: (taskId: string, subtaskId: string) => void
}

export function TaskModal({ task, members, today, onClose, onToggleSubtask }: TaskModalProps) {
  useEffect(() => {
    if (!task) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [task, onClose])

  if (!task) return null

  const assignees = task.assigneeIds
    .map((id) => members.find((m) => m.id === id))
    .filter((m): m is Member => Boolean(m))
  const priority = priorityMeta[task.priority]
  const column = columnMeta[task.status]
  const doneCount = task.subtasks.filter((s) => s.done).length

  return (
    <div className="overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={task.title}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal__head">
          <div className="modal__head-tags">
            <span className="status-pill" style={{ '--accent': column.accent } as React.CSSProperties}>
              <span className="status-pill__dot" />
              {column.title}
            </span>
            <span className="chip" style={{ '--chip': priority.color } as React.CSSProperties}>
              {priority.label} priority
            </span>
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <h2 className="modal__title">{task.title}</h2>
        <p className="modal__desc">{task.description}</p>

        <div className="modal__grid">
          <div className="modal__field">
            <span className="modal__label">Due date</span>
            <strong>{formatDate(task.dueDate)}</strong>
            <span className="modal__hint">{dueLabel(task.dueDate, today)}</span>
          </div>
          <div className="modal__field">
            <span className="modal__label">Progress</span>
            <div className="progress">
              <div className="progress__bar">
                <span style={{ width: `${task.progress}%` }} />
              </div>
              <span className="progress__value">{task.progress}%</span>
            </div>
          </div>
        </div>

        <div className="modal__section">
          <span className="modal__label">Assignees</span>
          <div className="modal__assignees">
            {assignees.map((m) => (
              <div className="assignee" key={m.id}>
                <Avatar member={m} size={32} />
                <div>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="modal__section">
          <div className="modal__section-head">
            <span className="modal__label">Subtasks</span>
            <span className="modal__hint">
              {doneCount}/{task.subtasks.length} done
            </span>
          </div>
          <ul className="checklist">
            {task.subtasks.map((s) => (
              <li key={s.id}>
                <label className={`check${s.done ? ' check--done' : ''}`}>
                  <input
                    type="checkbox"
                    checked={s.done}
                    onChange={() => onToggleSubtask(task.id, s.id)}
                  />
                  <span className="check__box" />
                  {s.label}
                </label>
              </li>
            ))}
            {task.subtasks.length === 0 && <li className="modal__hint">No subtasks</li>}
          </ul>
        </div>

        <div className="modal__tags">
          {task.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
