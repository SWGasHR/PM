import type { Member, Project, Task } from '../types'

export const members: Member[] = [
  {
    id: 'm1',
    name: 'Ava Thompson',
    role: 'HR Director',
    gradient: ['#7c6cf6', '#a78bfa'],
  },
  {
    id: 'm2',
    name: 'Noah Patel',
    role: 'Recruiter',
    gradient: ['#34d399', '#22d3ee'],
  },
  {
    id: 'm3',
    name: 'Mia Chen',
    role: 'People Ops',
    gradient: ['#f472b6', '#fb7185'],
  },
  {
    id: 'm4',
    name: 'Leo Garcia',
    role: 'L&D Specialist',
    gradient: ['#fbbf24', '#fb923c'],
  },
  {
    id: 'm5',
    name: 'Zoe Williams',
    role: 'HR Coordinator',
    gradient: ['#60a5fa', '#818cf8'],
  },
]

export const projects: Project[] = [
  { id: 'p1', name: 'Q3 Hiring Plan', color: '#7c6cf6' },
  { id: 'p2', name: 'Onboarding Revamp', color: '#34d399' },
  { id: 'p3', name: 'Performance Reviews', color: '#f472b6' },
  { id: 'p4', name: 'Wellbeing Program', color: '#fbbf24' },
]

export const tasks: Task[] = [
  {
    id: 't1',
    title: 'Draft Q3 headcount proposal',
    description:
      'Compile hiring needs from each department head and turn them into a single headcount proposal for finance sign-off.',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-06-09',
    assigneeIds: ['m1', 'm2'],
    tags: ['Hiring', 'Finance'],
    progress: 60,
    subtasks: [
      { id: 's1', label: 'Collect department requests', done: true },
      { id: 's2', label: 'Align on salary bands', done: true },
      { id: 's3', label: 'Review with finance', done: false },
    ],
  },
  {
    id: 't2',
    title: 'Refresh new-hire onboarding deck',
    description:
      'Update the onboarding slides with the new brand, add the benefits walkthrough, and trim the legal section.',
    status: 'todo',
    priority: 'medium',
    dueDate: '2026-06-15',
    assigneeIds: ['m5'],
    tags: ['Onboarding'],
    progress: 10,
    subtasks: [
      { id: 's1', label: 'Apply new brand template', done: false },
      { id: 's2', label: 'Add benefits section', done: false },
    ],
  },
  {
    id: 't3',
    title: 'Schedule mid-year review cycle',
    description:
      'Set up the review windows, notify managers, and open the self-assessment forms in the HRIS.',
    status: 'todo',
    priority: 'high',
    dueDate: '2026-06-06',
    assigneeIds: ['m3', 'm1'],
    tags: ['Reviews', 'Process'],
    progress: 0,
    subtasks: [
      { id: 's1', label: 'Define review windows', done: false },
      { id: 's2', label: 'Draft manager comms', done: false },
      { id: 's3', label: 'Open self-assessment forms', done: false },
    ],
  },
  {
    id: 't4',
    title: 'Run wellbeing pulse survey',
    description:
      'Launch the monthly anonymous pulse survey and prepare a short highlights summary for the leadership sync.',
    status: 'in-progress',
    priority: 'low',
    dueDate: '2026-06-11',
    assigneeIds: ['m4'],
    tags: ['Wellbeing', 'Survey'],
    progress: 45,
    subtasks: [
      { id: 's1', label: 'Finalize questions', done: true },
      { id: 's2', label: 'Send to all staff', done: false },
    ],
  },
  {
    id: 't5',
    title: 'Close two engineering offers',
    description:
      'Send final offer letters to the backend and platform candidates and confirm start dates.',
    status: 'done',
    priority: 'high',
    dueDate: '2026-05-29',
    assigneeIds: ['m2'],
    tags: ['Hiring'],
    progress: 100,
    subtasks: [
      { id: 's1', label: 'Backend offer signed', done: true },
      { id: 's2', label: 'Platform offer signed', done: true },
    ],
  },
  {
    id: 't6',
    title: 'Publish updated PTO policy',
    description:
      'Roll out the revised paid-time-off policy in the handbook and announce it in the all-hands channel.',
    status: 'done',
    priority: 'medium',
    dueDate: '2026-05-25',
    assigneeIds: ['m3', 'm5'],
    tags: ['Policy'],
    progress: 100,
    subtasks: [{ id: 's1', label: 'Handbook updated', done: true }],
  },
  {
    id: 't7',
    title: 'Book L&D workshop facilitators',
    description:
      'Confirm external facilitators for the Q3 leadership workshops and lock in the venue dates.',
    status: 'todo',
    priority: 'medium',
    dueDate: '2026-06-20',
    assigneeIds: ['m4', 'm1'],
    tags: ['L&D'],
    progress: 5,
    subtasks: [
      { id: 's1', label: 'Shortlist facilitators', done: false },
      { id: 's2', label: 'Confirm budget', done: false },
    ],
  },
  {
    id: 't8',
    title: 'Audit candidate pipeline data',
    description:
      'Clean up stale candidate records in the ATS and tag the active pipeline for the weekly hiring report.',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2026-06-13',
    assigneeIds: ['m2', 'm5'],
    tags: ['Hiring', 'Data'],
    progress: 30,
    subtasks: [
      { id: 's1', label: 'Archive inactive candidates', done: true },
      { id: 's2', label: 'Tag active pipeline', done: false },
    ],
  },
]
