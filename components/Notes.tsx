import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { notes, sectionCopy } from "@/data/portfolio";

export default function Notes() {
  return (
    <section
      id="notes"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
        <SectionHeading
          eyebrow={sectionCopy.notes.eyebrow}
          title={sectionCopy.notes.title}
          description={sectionCopy.notes.description}
        />
        <Link
          href="#notes"
          className="inline-flex w-fit shrink-0 text-sm font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-brand"
        >
          {sectionCopy.notes.allLink}
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl panel-border">
        {notes.map((note) => (
          <Link
            key={note.title}
            href={note.href}
            className="group flex items-center gap-4 border-b-2 border-brand/50 px-4 py-4 transition-colors last:border-b-0 hover:bg-surface-soft sm:px-5"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface text-base">
              <span aria-hidden="true">{note.emoji}</span>
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{note.title}</p>
              <p className="mt-0.5 truncate text-xs text-subtle">
                {note.description}
              </p>
            </div>
            <time
              dateTime={note.dateTime}
              className="hidden shrink-0 text-xs text-subtle sm:block"
            >
              {note.date}
            </time>
            <span
              aria-hidden="true"
              className="shrink-0 text-sm text-subtle transition-colors group-hover:text-brand"
            >
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
