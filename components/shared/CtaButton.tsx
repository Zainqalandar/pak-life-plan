import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-forest text-white hover:bg-forest-deep border-transparent shadow-[0_10px_24px_-16px_rgba(11,94,58,0.9)]",
  outline:
    "bg-transparent text-forest border-forest hover:bg-forest hover:text-white",
  light:
    "bg-white text-forest-deep border-transparent hover:bg-ivory",
  ghost:
    "bg-transparent text-white border-white/40 hover:bg-white/10",
} as const;

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 w-full items-center justify-center border px-7 text-sm font-semibold tracking-wide transition-colors sm:w-auto",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
