import { cn } from "@/lib/utils";

export function StatCard({
  value,
  label,
  suffix,
  className,
}: {
  value: string;
  label: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <p className="font-semibold text-gold tabular-nums tracking-tight text-3xl sm:text-4xl">
        {value}
        {suffix ? <span className="text-2xl sm:text-3xl">{suffix}</span> : null}
      </p>
      <p className="mt-2 text-xs font-semibold tracking-[0.16em] uppercase text-white/75">
        {label}
      </p>
    </div>
  );
}
