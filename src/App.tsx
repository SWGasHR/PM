import { useMemo, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { Board } from './components/Board'
import { TeamPanel } from './components/TeamPanel'
import { Timeline } from './components/Timeline'
import { TaskModal } from './components/TaskModal'
import { members, projects, tasks as initialTasks } from './data/mockData'
import type { Task } from './types'
import { daysUntil } from './utils'

// Fixed "today" so the demo data always reads sensibly.
const TODAY = new Date(2026, 5, 3)

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  const [openTaskId, setOpenTaskId] = useState<string | null>(null)

  const openTask = openTaskId ? tasks.find((t) => t.id === openTaskId) ?? null : null
  const activeProject = projects.find((p) => p.id === activeProjectId) ?? projects[0]

  const stats = useMemo(() => {
    const done = tasks.filter((t) => t.status === 'done').length
    const dueSoon = tasks.filter(
      (t) => t.status !== 'done' && daysUntil(t.dueDate, TODAY) <= 3,
    ).length
    return { total: tasks.length, done, dueSoon }
  }, [tasks])

  const toggleSubtask = (taskId: string, subtaskId: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task
        const subtasks = task.subtasks.map((s) =>
          s.id === subtaskId ? { ...s, done: !s.done } : s,
        )
        const completed = subtasks.filter((s) => s.done).length
        const progress =
          subtasks.length > 0
            ? Math.round((completed / subtasks.length) * 100)
            : task.progress
        return { ...task, subtasks, progress }
      }),
    )
  }

  return (
    <div className="app">
      <Sidebar
        projects={projects}
        activeProjectId={activeProjectId}
        onSelectProject={setActiveProjectId}
      />

      <main className="main">
        <Topbar projectName={activeProject.name} members={members} stats={stats} />

        <div className="content">
          <Board
            tasks={tasks}
            members={members}
            today={TODAY}
            onOpenTask={(t) => setOpenTaskId(t.id)}
          />

          <div className="content__side">
            <Timeline tasks={tasks} members={members} today={TODAY} />
            <TeamPanel members={members} tasks={tasks} />
          </div>
        </div>
      </main>

      <TaskModal
        task={openTask}
        members={members}
        today={TODAY}
        onClose={() => setOpenTaskId(null)}
        onToggleSubtask={toggleSubtask}
      />
    </div>
  )
}
