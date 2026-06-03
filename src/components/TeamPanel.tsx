import type { Member, Task } from '../types'
import { Avatar } from './Avatar'

interface TeamPanelProps {
  members: Member[]
  tasks: Task[]
}

export function TeamPanel({ members, tasks }: TeamPanelProps) {
  return (
    <section className="panel team" id="team" aria-label="Team">
      <header className="panel__head">
        <h3>Team</h3>
        <span className="panel__sub">{members.length} people</span>
      </header>

      <ul className="team__list">
        {members.map((member) => {
          const assigned = tasks.filter((t) => t.assigneeIds.includes(member.id))
          const active = assigned.filter((t) => t.status !== 'done').length
          return (
            <li key={member.id} className="team__row">
              <Avatar member={member} size={40} />
              <div className="team__info">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
              <div className="team__load" title={`${active} active task(s)`}>
                <span className="team__load-num">{active}</span>
                <span className="team__load-label">active</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
