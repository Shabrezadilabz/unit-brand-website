import { cn } from "@/lib/cn";

type Props = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  wordmark?: boolean;
  href?: string | null;
};

const sizes = { sm: 28, md: 36, lg: 48 } as const;

export function BrandLogo({
  variant = "dark",
  size = "md",
  className,
  wordmark = true,
}: Props) {
  const px = sizes[size];
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-xl";
  const wordmarkColor = variant === "light" ? "#FFFFFF" : "#0B1220";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="48" height="48" rx="13" fill="#00A3A0" />
        <circle
          cx="24"
          cy="24"
          r="13"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray="50 12"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="5" fill="white" />
        <path d="M24 11 L28 16 L24 14 L20 16 Z" fill="white" opacity="0.9" />
      </svg>
      {wordmark && (
        <span
          className={cn("font-bold tracking-tight", textSize)}
          style={{
            color: wordmarkColor,
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          UNIT
        </span>
      )}
    </span>
  );
}
