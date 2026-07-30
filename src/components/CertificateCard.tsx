/** HTML certificate card — full FEI logo top-right, title left, body as skeletons */
export function CertificateCard({ className = "" }: { className?: string }) {
  return (
    <article
      className={`cert-card ${className}`.trim()}
      aria-label="Certificate of Completion template preview"
    >
      <img
        className="cert-card__logo"
        src="/images/falcon-logo-horizontal.png"
        alt="Falcon Expert Institute"
      />

      <header className="cert-card__header">
        <h2 className="cert-card__title">
          Certificate of
          <br />
          Completion
        </h2>
      </header>

      {/* Skeleton lines stand in for recipient name + course title */}
      <div className="cert-card__body" aria-hidden="true">
        <span className="cert-skel cert-skel--sm" />
        <span className="cert-skel cert-skel--lg" />
        <span className="cert-skel cert-skel--xl" />
        <span className="cert-skel cert-skel--md" />
      </div>

      <footer className="cert-card__footer" aria-hidden="true">
        <div className="cert-card__meta">
          <div className="cert-card__rule" />
          <span className="cert-skel cert-skel--meta" />
          <span className="cert-skel cert-skel--meta-sm" />
        </div>
        <div className="cert-card__meta cert-card__meta--end">
          <div className="cert-card__rule" />
          <span className="cert-skel cert-skel--meta" />
          <span className="cert-skel cert-skel--meta-sm" />
        </div>
      </footer>
    </article>
  );
}
