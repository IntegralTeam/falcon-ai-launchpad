/** Sample certificate preview — Falcon Innovation Academy design */
export function CertificateCard({ className = "" }: { className?: string }) {
  return (
    <article
      className={`cert-card ${className}`.trim()}
      aria-label="Certificate of Completion template preview"
    >
      <img
        className="cert-card__image"
        src="/images/certificate-landing-exact.jpg"
        alt="Certificate of Completion — Falcon Innovation Academy sample"
        width={1024}
        height={723}
      />
    </article>
  );
}
