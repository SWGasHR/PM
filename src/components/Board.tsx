import type { ColumnId, Member, Task } from '../types'
import { TaskCard } from './TaskCard'
import { columnMeta } from '../utils'

interface BoardProps {
  tasks: Task[]
  members: Member[]
  today: Date
  onOpenTask: (task: Task) => void
}

const order: ColumnId[] = ['todo', 'in-progress', 'done']

export function Board({ tasks, members, today, onOpenTask }: BoardProps) {
  return (
    <section className="board" id="board" aria-label="HR task board">
      {order.map((columnId) => {
        const meta = columnMeta[columnId]
        const columnTasks = tasks.filter((t) => t.status === columnId)
        return (
          <div className="column" key={columnId}>
            <header className="column__head">
              <span className="column__dot" style={{ background: meta.accent }} />
              <h3>{meta.title}</h3>
              <span className="column__count">{columnTasks.length}</span>
            </header>

            <div className="column__list">
              {columnTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  members={members}
                  today={today}
                  onOpen={onOpenTask}
                />
              ))}
              {columnTasks.length === 0 && (
                <p className="column__empty">Nothing here yet</p>
              )}
            </div>
          </div>
        )
      })}
    </section>
  )
}
