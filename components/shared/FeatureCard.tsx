import { cn } from "@/lib/utils";

export function FeatureCard({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <article
      className={cn(
        "group border border-border bg-white p-6 shadow-[0_12px_40px_-28px_rgba(6,69,43,0.45)] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(6,69,43,0.55)] sm:p-8",
        className
      )}
    >
      {children}
      <h3 className="mt-4 text-lg font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-gray">{description}</p>
    </article>
  );
}
