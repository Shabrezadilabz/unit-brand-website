"use client";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className ?? ""}`} aria-hidden>
      <div className="marquee-track gap-10 px-4">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="display whitespace-nowrap text-sm font-bold uppercase tracking-[0.18em] text-ink/35"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
