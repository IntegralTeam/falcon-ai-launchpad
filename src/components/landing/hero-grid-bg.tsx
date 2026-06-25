/** Infinite grid net + node dots for the hero background. */
export function HeroGridBg() {
  return (
    <div className="hero-grid-ornament pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="hero-grid-ornament__plane hero-grid-ornament__plane--primary" />
      <div className="hero-grid-ornament__plane hero-grid-ornament__plane--fine" />
      <div className="hero-grid-ornament__plane hero-grid-ornament__plane--nodes" />
      <div className="hero-grid-ornament__vignette" />
    </div>
  );
}
