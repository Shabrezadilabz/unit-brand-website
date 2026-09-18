import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function BrandLogo({
  className,
  markClassName,
  wordmark = true,
  href = "/",
}: {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
  href?: string | null;
}) {
  const inner = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/unit-logo.png"
        alt="UNIT"
        width={40}
        height={40}
        className={cn("h-9 w-9 rounded-[10px] shadow-[var(--shadow-soft)]", markClassName)}
        priority
      />
      {wordmark && (
        <span className="display text-[1.35rem] font-bold tracking-[-0.05em] text-ink">UNIT</span>
      )}
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} aria-label="UNIT home" className="inline-flex">
      {inner}
    </Link>
  );
}
