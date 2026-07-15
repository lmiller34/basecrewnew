import { cn } from "@/lib/utils";

type Rating = "easy" | "intermediate" | "expert";

const config: Record<Rating, { label: string; color: string; shape: React.ReactNode }> = {
  easy: {
    label: "Everyday",
    color: "text-piste-green",
    shape: <circle cx="6" cy="6" r="5" fill="currentColor" />,
  },
  intermediate: {
    label: "Core workflow",
    color: "text-piste-blue",
    shape: <rect x="1.3" y="1.3" width="9.4" height="9.4" fill="currentColor" />,
  },
  expert: {
    label: "Advanced",
    color: "text-piste-black",
    shape: <polygon points="6,0 12,6 6,12 0,6" fill="currentColor" />,
  },
};

export function TrailBadge({
  rating,
  className,
}: {
  rating: Rating;
  className?: string;
}) {
  const c = config[rating];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-mist",
        className
      )}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" className={c.color}>
        {c.shape}
      </svg>
      {c.label}
    </span>
  );
}
