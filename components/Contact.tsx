import { profile, sectionCopy, socials } from "@/data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-5 pb-16 sm:px-8 sm:pb-20"
    >
      <div className="rounded-3xl panel-border panel-border-surface glow-strong px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="text-3xl" aria-hidden="true">
          👋
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-ink text-shadow-soft sm:text-4xl">
          {sectionCopy.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-7 text-muted">
          {sectionCopy.contact.description}
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-flex w-full max-w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-brand-deep sm:w-auto"
        >
          <span className="break-all">{profile.email}</span>
          <span aria-hidden="true">→</span>
        </a>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
