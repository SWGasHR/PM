import type { Member, Task } from '../types'
import { AvatarStack } from './Avatar'
import { dueLabel, daysUntil, priorityMeta } from '../utils'

interface TaskCardProps {
  task: Task
  members: Member[]
  today: Date
  onOpen: (task: Task) => void
}

export function TaskCard({ task, members, today, onOpen }: TaskCardProps) {
  const assignees = task.assigneeIds
    .map((id) => members.find((m) => m.id === id))
    .filter((m): m is Member => Boolean(m))
  const priority = priorityMeta[task.priority]
  const overdue = task.status !== 'done' && daysUntil(task.dueDate, today) < 0

  return (
    <article
      className="card"
      role="button"
      tabIndex={0}
      onClick={() => onOpen(task)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(task)
        }
      }}
    >
      <div className="card__top">
        <span className="chip" style={{ '--chip': priority.color } as React.CSSProperties}>
          {priority.label}
        </span>
        {task.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <h4 className="card__title">{task.title}</h4>
      <p className="card__desc">{task.description}</p>

      <div className="progress">
        <div className="progress__bar">
          <span style={{ width: `${task.progress}%` }} />
        </div>
        <span className="progress__value">{task.progress}%</span>
      </div>

      <div className="card__foot">
        <span className={`due${overdue ? ' due--late' : ''}`}>
          <CalendarDot />
          {dueLabel(task.dueDate, today)}
        </span>
        <AvatarStack members={assignees} size={26} />
      </div>
    </article>
  )
}

function CalendarDot() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
