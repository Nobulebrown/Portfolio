import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${profile.coverImage})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-surface-soft/60" />

      <div className="relative mx-auto max-w-5xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="relative order-1 mx-auto w-full max-w-[11rem] sm:max-w-sm md:order-2 md:max-w-none">
            <div className="absolute -inset-3 rounded-full bg-subtle/20 blur-md" />
            <div className="relative overflow-hidden rounded-full">
              <Image
                src={profile.image}
                alt={`${profile.name} portrait`}
                width={640}
                height={640}
                sizes="(max-width: 640px) 176px, (max-width: 768px) 384px, 380px"
                className="aspect-square w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 rounded-lg panel-border px-3 py-2 text-xs font-semibold text-ink md:left-5 md:block md:translate-x-0">
              📍 {profile.location}
            </div>
          </div>

          <div className="order-2 text-center md:order-1 md:text-left">
            <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full panel-border px-3 py-1.5 text-center text-xs font-semibold text-ink md:justify-start">
              <span className="h-2 w-2 rounded-full bg-brand-accent" />
              {profile.availability}
            </div>

            <h1 className="mt-5 text-[2.25rem] font-bold leading-[1.05] tracking-[-0.045em] text-brand [text-shadow:0_2px_4px_rgba(15,23,42,0.22),0_8px_24px_rgba(11,61,46,0.22)] sm:mt-6 sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-medium leading-8 text-ink sm:text-2xl">
              {profile.role}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-[15px] font-semibold leading-7 text-ink md:mx-0">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <Link
                href="#work"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep sm:w-auto"
              >
                View selected work
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-full items-center justify-center rounded-lg panel-border px-4 py-2.5 text-sm font-medium text-ink transition hover:opacity-90 sm:w-auto"
              >
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
