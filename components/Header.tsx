"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, profile } from "@/data/portfolio";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-soft/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#top"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-[11px] font-semibold tracking-tight text-white">
            {profile.initials}
          </span>
          <span className="text-sm font-medium text-brand">{profile.name}</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-md panel-border px-3.5 py-1.5 text-sm font-medium text-ink transition hover:opacity-90 sm:inline-flex"
          >
            Get in touch
          </a>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md panel-border text-ink transition hover:opacity-90 sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t-2 border-brand/50 bg-surface-soft/95 px-5 py-4 sm:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 inline-flex items-center justify-center rounded-md panel-border px-3.5 py-2 text-sm font-medium text-ink transition hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      ) : null}

      <div className="h-0.5 bg-brand/50 shadow-[0_0_10px_rgba(11,61,46,0.18)]" />
    </header>
  );
}
