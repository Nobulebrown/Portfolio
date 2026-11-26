import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { projects, sectionCopy } from "@/data/portfolio";

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
        <SectionHeading
          eyebrow={sectionCopy.work.eyebrow}
          title={sectionCopy.work.title}
          description={sectionCopy.work.description}
        />
        <Link
          href="#work"
          className="inline-flex w-fit shrink-0 text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-brand"
        >
          {sectionCopy.work.allLink}
        </Link>
      </div>

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group overflow-hidden rounded-2xl panel-border panel-hover transition duration-200 hover:-translate-y-0.5"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-brand/50 bg-surface">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                <span className="shrink-0 pt-1 text-xs text-subtle">{project.year}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-2 py-1 text-[11px] font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
