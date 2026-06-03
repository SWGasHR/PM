import type { ColumnId, Priority } from './types'

export function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const monthShort = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

/** Parse a YYYY-MM-DD string as a *local* date (avoids UTC off-by-one). */
export function parseDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function formatDate(iso: string): string {
  const date = parseDate(iso)
  return `${monthShort[date.getMonth()]} ${date.getDate()}`
}

/** Whole-day difference between a due date and "today". Negative = overdue. */
export function daysUntil(iso: string, today: Date): number {
  const due = parseDate(iso)
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  const ms = due.getTime() - start.getTime()
  return Math.round(ms / 86_400_000)
}

export function dueLabel(iso: string, today: Date): string {
  const diff = daysUntil(iso, today)
  if (diff === 0) return 'Due today'
  if (diff === 1) return 'Due tomorrow'
  if (diff === -1) return '1 day overdue'
  if (diff < 0) return `${Math.abs(diff)} days overdue`
  return `Due in ${diff} days`
}

export const columnMeta: Record<ColumnId, { title: string; accent: string }> = {
  todo: { title: 'To Do', accent: '#94a3b8' },
  'in-progress': { title: 'In Progress', accent: '#7c6cf6' },
  done: { title: 'Done', accent: '#34d399' },
}

export const priorityMeta: Record<Priority, { label: string; color: string }> = {
  low: { label: 'Low', color: '#60a5fa' },
  medium: { label: 'Medium', color: '#fbbf24' },
  high: { label: 'High', color: '#fb7185' },
}
