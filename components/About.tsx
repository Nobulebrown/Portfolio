import SectionHeading from "@/components/SectionHeading";
import { details, sectionCopy } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
        <div>
          <SectionHeading
            eyebrow={sectionCopy.about.eyebrow}
            title={sectionCopy.about.title}
            description={sectionCopy.about.description}
          />

          <div className="mt-7 rounded-xl panel-border panel-border-green p-5">
            <p className="text-sm leading-7 text-ink">
              <span className="mr-2" aria-hidden="true">
                💡
              </span>
              <strong>Currently:</strong> {sectionCopy.about.callout}
            </p>
          </div>

          <p className="mt-6 text-[15px] leading-7 text-muted">
            {sectionCopy.about.body}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl panel-border">
          <div className="border-b-2 border-brand/50 bg-surface-soft px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-subtle">
            Page properties
          </div>
          <dl className="divide-y divide-line">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="grid gap-1 px-5 py-3.5 sm:grid-cols-[110px_1fr] sm:gap-4"
              >
                <dt className="text-sm text-subtle">{detail.label}</dt>
                <dd className="text-sm text-ink">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
