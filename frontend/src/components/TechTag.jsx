import { iconFor } from '../data/icons.js'

export default function TechTag({ name }) {
  const icon = iconFor(name)

  return (
    <span className="tag tag-icon">
      {icon && (
        <span className="tag-icon-chip">
          <img src={icon} alt="" width="14" height="14" loading="lazy" />
        </span>
      )}
      {name}
    </span>
  )
}
