import type { Project } from '../types'

interface SidebarProps {
  projects: Project[]
  activeProjectId: string
  onSelectProject: (id: string) => void
}

const navItems = [
  { id: 'board', label: 'Board', icon: BoardIcon },
  { id: 'timeline', label: 'Timeline', icon: TimelineIcon },
  { id: 'team', label: 'Team', icon: TeamIcon },
]

export function Sidebar({ projects, activeProjectId, onSelectProject }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand__mark">HR</span>
        <div className="brand__text">
          <strong>People Hub</strong>
          <span>HR Workspace</span>
        </div>
      </div>

      <nav className="nav">
        <p className="nav__label">Workspace</p>
        {navItems.map((item, i) => {
          const Icon = item.icon
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__item${i === 0 ? ' nav__item--active' : ''}`}
            >
              <Icon />
              {item.label}
            </a>
          )
        })}
      </nav>

      <nav className="nav">
        <p className="nav__label">Projects</p>
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className={`nav__project${
              project.id === activeProjectId ? ' nav__project--active' : ''
            }`}
            onClick={() => onSelectProject(project.id)}
          >
            <span className="nav__dot" style={{ background: project.color }} />
            {project.name}
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="upsell">
          <strong>Need more seats?</strong>
          <p>Invite the wider people team to collaborate.</p>
          <button type="button" className="btn btn--soft">
            Invite people
          </button>
        </div>
      </div>
    </aside>
  )
}

function BoardIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <rect x="3" y="4" width="5" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      <rect x="10" y="4" width="5" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      <rect x="17" y="4" width="4" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function TimelineIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <path d="M4 7h10M4 12h14M4 17h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="14" cy="17" r="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M16 7a3 3 0 0 1 0 6M17 19a5.5 5.5 0 0 0-2.5-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
