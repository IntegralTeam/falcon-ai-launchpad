/** Trailing chevron used on CTAs and nav links (Hub71-style). */
export function Chevron({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-block transition-transform group-hover:translate-x-0.5 ${className}`} aria-hidden="true">
      &gt;
    </span>
  );
}
