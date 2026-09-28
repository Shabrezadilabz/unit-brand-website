import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  wordmark?: boolean;
  /** Show “Be a Brand” under the mark (nav/footer usually false) */
  tagline?: boolean;
};

const sizes = { sm: 28, md: 36, lg: 48 } as const;

/** B&B mark + champagne serif wordmark */
export function BrandLogo({
  variant = "dark",
  size = "md",
  className,
  wordmark = true,
  tagline = false,
}: Props) {
  const px = sizes[size];
  const textSize = size === "sm" ? "text-2xl" : size === "lg" ? "text-4xl" : "text-[1.75rem]";
  const wordmarkColor = variant === "light" ? "#F5E6C8" : "#1a1208";
  const tagColor = variant === "light" ? "rgba(232,201,154,0.7)" : "#A67C3D";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/bb-logo.png"
        alt="B&B"
        width={px}
        height={Math.round(px * (256 / 361))}
        className="rounded-lg object-cover"
        style={{
          width: px,
          height: Math.round(px * (256 / 361)),
          boxShadow:
            variant === "light"
              ? "0 0 0 1px rgba(201,162,74,0.25)"
              : "0 4px 14px rgba(15,10,5,0.18)",
        }}
        priority
      />
      {wordmark && (
        <span className="flex flex-col leading-none min-w-0">
          <span
            className={cn(textSize)}
            style={{
              color: wordmarkColor,
              fontFamily: "var(--font-bb), 'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            B&B
          </span>
          {tagline ? (
            <span
              className="mt-1 text-[9px] font-semibold uppercase"
              style={{ color: tagColor, letterSpacing: "0.28em" }}
            >
              Be a Brand
            </span>
          ) : null}
        </span>
      )}
    </span>
  );
}
