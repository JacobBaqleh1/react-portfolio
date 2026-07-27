/* eslint-disable react/prop-types */

export default function ProjectTechCategories({
  categories,
  badgeClassName = "bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold",
  labelClassName = "text-[10px] uppercase tracking-wide font-bold text-blue-500 mb-1",
  className = "space-y-2",
  layout = "stacked",
}) {
  if (!categories?.length) return null;

  if (layout === "inline") {
    return (
      <div className={className}>
        {categories.map(({ label, items }) => (
          <div key={label} className="flex flex-wrap items-center gap-1.5">
            <span className={`${labelClassName} mb-0 shrink-0`}>{label}:</span>
            {items.map((tech) => (
              <span key={tech} className={badgeClassName}>
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {categories.map(({ label, items }) => (
        <div key={label}>
          <p className={labelClassName}>{label}</p>
          <div className="flex flex-wrap gap-1.5">
            {items.map((tech) => (
              <span key={tech} className={badgeClassName}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
