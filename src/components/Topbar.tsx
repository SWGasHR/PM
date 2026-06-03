import type { Member } from '../types'
import { AvatarStack } from './Avatar'

interface TopbarProps {
  projectName: string
  members: Member[]
  stats: { total: number; done: number; dueSoon: number }
}

export function Topbar({ projectName, members, stats }: TopbarProps) {
  const pct = stats.total === 0 ? 0 : Math.round((stats.done / stats.total) * 100)
  return (
    <header className="topbar">
      <div className="topbar__title">
        <p className="topbar__crumb">HR Workspace · {projectName}</p>
        <h1>Project Dashboard</h1>
      </div>

      <div className="topbar__right">
        <label className="search">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <input type="text" placeholder="Search tasks…" />
        </label>

        <div className="topbar__stats">
          <Stat label="Tasks" value={stats.total} />
          <Stat label="Done" value={`${pct}%`} accent="#34d399" />
          <Stat label="Due soon" value={stats.dueSoon} accent="#fb7185" />
        </div>

        <AvatarStack members={members} size={32} max={4} />

        <button type="button" className="btn btn--primary">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          New task
        </button>
      </div>
    </header>
  )
}

function Stat({ label, value, accent }: { label: string; value: string | number; accent?: string }) {
  return (
    <div className="stat">
      <span className="stat__value" style={accent ? { color: accent } : undefined}>
        {value}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  )
}
