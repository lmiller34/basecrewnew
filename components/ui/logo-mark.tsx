import { cn } from "@/lib/utils";

/**
 * Basecrew wordmark icon: three dots in a tight cluster, reusing the same
 * green/blue/orange palette already established by the trail-rating badge
 * system elsewhere on the site. Reads as "a crew, gathered at a base" —
 * intentionally people-coded rather than gear-coded, since Basecrew (unlike
 * the old Basecrew dot) is meant to foreground staff, not just equipment.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <circle cx="6" cy="13" r="3.4" fill="#2FAE66" />
      <circle cx="14" cy="13" r="3.4" fill="#3E7CFF" />
      <circle cx="10" cy="6.5" r="3.4" fill="#FF6B35" />
    </svg>
  );
}
