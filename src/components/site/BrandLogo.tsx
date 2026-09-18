import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  wordmark?: boolean;
};

const sizes = { sm: 28, md: 36, lg: 48 } as const;

/** Stitch app icon + stylish UNIT wordmark */
export function BrandLogo({
  variant = "dark",
  size = "md",
  className,
  wordmark = true,
}: Props) {
  const px = sizes[size];
  const textSize = size === "sm" ? "text-2xl" : size === "lg" ? "text-4xl" : "text-3xl";
  const wordmarkColor = variant === "light" ? "#FFFFFF" : "#0F766E";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/unit-logo.png"
        alt=""
        width={px}
        height={px}
        className="rounded-[22%]"
        priority
      />
      {wordmark && (
        <span
          className={cn("leading-none", textSize)}
          style={{
            color: wordmarkColor,
            fontFamily: "var(--font-unit), Caveat, cursive",
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          UNIT
        </span>
      )}
    </span>
  );
}
