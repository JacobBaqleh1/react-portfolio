/* eslint-disable react/prop-types */

export default function ProjectTechCategories({
  categories,
  badgeClassName = "bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold",
  labelClassName = "text-[10px] uppercase tracking-wide font-bold text-blue-500",
  className = "flex flex-wrap items-center gap-x-3 gap-y-1.5",
  layout = "inline",
}) {
  if (!categories?.length) return null;

  // Keep each label+badges group on one line; wrap groups as units
  // so categories never form a vertical column or squeezed multi-column grid.
  return (
    <div className={className}>
      {categories.map(({ label, items }) => (
        <div
          key={label}
          className="flex flex-nowrap items-center gap-1.5 shrink-0"
        >
          <span className={`${labelClassName} mb-0 shrink-0`}>
            {layout === "inline" ? `${label}:` : label}
          </span>
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
