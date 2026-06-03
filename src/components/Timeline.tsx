import type { Member, Task } from '../types'
import { Avatar } from './Avatar'
import { columnMeta, daysUntil, formatDate, parseDate, priorityMeta } from '../utils'

interface TimelineProps {
  tasks: Task[]
  members: Member[]
  today: Date
}

const WINDOW_DAYS = 21

export function Timeline({ tasks, members, today }: TimelineProps) {
  // Day headers for the next three weeks.
  const days = Array.from({ length: WINDOW_DAYS }, (_, i) => {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
    return d
  })

  const upcoming = [...tasks]
    .filter((t) => t.status !== 'done')
    .sort((a, b) => parseDate(a.dueDate).getTime() - parseDate(b.dueDate).getTime())

  return (
    <section className="panel timeline" id="timeline" aria-label="Timeline">
      <header className="panel__head">
        <h3>Timeline</h3>
        <span className="panel__sub">Next 3 weeks</span>
      </header>

      <div className="timeline__scale" aria-hidden>
        {days.map((d, i) => {
          const isWeekStart = d.getDay() === 1
          const isToday = i === 0
          return (
            <div
              key={i}
              className={`timeline__day${isToday ? ' timeline__day--today' : ''}${
                isWeekStart ? ' timeline__day--week' : ''
              }`}
            >
              <span className="timeline__dow">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'][d.getDay()]}
              </span>
              <span className="timeline__dom">{d.getDate()}</span>
            </div>
          )
        })}
      </div>

      <ul className="timeline__rows">
        {upcoming.map((task) => {
          const offset = Math.max(0, Math.min(WINDOW_DAYS - 1, daysUntil(task.dueDate, today)))
          const left = (offset / WINDOW_DAYS) * 100
          const assignee = members.find((m) => m.id === task.assigneeIds[0])
          const accent = columnMeta[task.status].accent
          return (
            <li className="timeline__row" key={task.id}>
              <div className="timeline__track">
                <span className="timeline__line" />
                <div
                  className="timeline__pill"
                  style={{ left: `${left}%`, '--accent': accent } as React.CSSProperties}
                >
                  <span
                    className="timeline__prio"
                    style={{ background: priorityMeta[task.priority].color }}
                  />
                  <span className="timeline__name">{task.title}</span>
                  {assignee && <Avatar member={assignee} size={20} />}
                  <span className="timeline__date">{formatDate(task.dueDate)}</span>
                </div>
              </div>
            </li>
          )
        })}
        {upcoming.length === 0 && (
          <li className="column__empty">No upcoming deadlines 🎉</li>
        )}
      </ul>
    </section>
  )
}
