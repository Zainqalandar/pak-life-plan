import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.22em] uppercase",
            light ? "text-gold-light" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <div
        className={cn(
          "mb-5 h-px w-12 bg-gold",
          align === "center" && "mx-auto"
        )}
      />
      <h2
        className={cn(
          "text-3xl font-semibold sm:text-4xl",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-muted-gray"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
