export type ColumnId = 'todo' | 'in-progress' | 'done'

export type Priority = 'low' | 'medium' | 'high'

export interface Member {
  id: string
  name: string
  role: string
  /** Two-tone gradient for the avatar, expressed as [from, to]. */
  gradient: [string, string]
}

export interface Task {
  id: string
  title: string
  description: string
  status: ColumnId
  priority: Priority
  /** ISO date string (YYYY-MM-DD). */
  dueDate: string
  /** Member ids assigned to this task. */
  assigneeIds: string[]
  tags: string[]
  /** 0–100 completion estimate, used on the card and in the modal. */
  progress: number
  subtasks: { id: string; label: string; done: boolean }[]
}

export interface Project {
  id: string
  name: string
  color: string
}
