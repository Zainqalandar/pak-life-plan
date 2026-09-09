import Link from "next/link";
import { cn } from "@/lib/utils";

export function StateLifeLogo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3", className)}
      aria-label="State Life Insurance Corporation of Pakistan home"
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center border",
          inverted
            ? "border-gold/70 bg-forest-deep text-gold-light"
            : "border-gold bg-forest text-gold-light"
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-6" fill="none">
          <path
            d="M16 4 6 8.5V15c0 6.2 4.1 11.7 10 13.5C21.9 26.7 26 21.2 26 15V8.5L16 4Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path d="M16 11v10M12 16h8" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "text-[11px] font-semibold tracking-[0.18em] uppercase",
            inverted ? "text-gold-light" : "text-gold"
          )}
        >
          State Life
        </span>
        <span
          className={cn(
            "truncate text-sm font-semibold",
            inverted ? "text-white" : "text-forest-deep"
          )}
        >
          Insurance Corporation of Pakistan
        </span>
      </span>
    </Link>
  );
}
