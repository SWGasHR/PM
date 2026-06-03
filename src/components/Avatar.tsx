import type { Member } from '../types'
import { initials } from '../utils'

interface AvatarProps {
  member: Member
  size?: number
  ring?: boolean
}

export function Avatar({ member, size = 34, ring = false }: AvatarProps) {
  const [from, to] = member.gradient
  return (
    <span
      className={`avatar${ring ? ' avatar--ring' : ''}`}
      title={`${member.name} · ${member.role}`}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      {initials(member.name)}
    </span>
  )
}

interface AvatarStackProps {
  members: Member[]
  size?: number
  max?: number
}

export function AvatarStack({ members, size = 30, max = 4 }: AvatarStackProps) {
  const shown = members.slice(0, max)
  const extra = members.length - shown.length
  return (
    <div className="avatar-stack">
      {shown.map((m) => (
        <Avatar key={m.id} member={m} size={size} ring />
      ))}
      {extra > 0 && (
        <span
          className="avatar avatar--ring avatar--extra"
          style={{ width: size, height: size, fontSize: size * 0.38 }}
        >
          +{extra}
        </span>
      )}
    </div>
  )
}
