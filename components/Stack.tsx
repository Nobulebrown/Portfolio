import SectionHeading from "@/components/SectionHeading";
import { sectionCopy, stackGroups } from "@/data/portfolio";

export default function Stack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading
        eyebrow={sectionCopy.stack.eyebrow}
        title={sectionCopy.stack.title}
        description={sectionCopy.stack.description}
      />

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {stackGroups.map((group) => (
          <div key={group.title} className="rounded-2xl panel-border p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-brand">{group.title}</h3>
              <span className="text-xs text-subtle">{group.items.length}</span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-brand/50 bg-surface-soft px-3 py-1.5 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
