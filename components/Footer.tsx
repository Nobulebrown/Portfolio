import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-5 pb-10 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-3 border-t-2 border-brand/50 pt-6 text-xs text-subtle sm:flex-row">
        <p>
          © 2026 <span className="text-brand">{profile.name}</span>. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
