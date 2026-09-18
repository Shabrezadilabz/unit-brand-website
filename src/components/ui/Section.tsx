import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 lg:py-28", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-leaf">{children}</p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  body,
  dark,
}: {
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1
        className={cn(
          "display text-[clamp(2.4rem,6vw,4.6rem)] font-bold",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
          dark ? "text-white/75" : "text-ink-soft",
        )}
      >
        {body}
      </p>
    </div>
  );
}
