type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-ink text-shadow-soft sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
        {description}
      </p>
    </div>
  );
}
