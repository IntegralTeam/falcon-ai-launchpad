import { useRepeatInView } from "@/hooks/use-repeat-in-view";
import { CertificateCard } from "@/components/CertificateCard";

/** Certificate showcase — copy left, HTML certificate card right (not an image) */
export function CertificateSection() {
  const [sectionRef, sectionInView] = useRepeatInView<HTMLElement>();

  return (
    <section
      id="certificate"
      ref={sectionRef}
      data-in-view={sectionInView ? "true" : "false"}
      className="certificate-section"
      aria-labelledby="certificate-title"
    >
      <div className="page-shell certificate-grid">
        <div className="certificate-copy reveal reveal-left">
          <p className="section-kicker">Proof of completion</p>
          <h2 id="certificate-title">Documents after training</h2>
          <p>
            After completing each course, you receive an official Certificate of Completion
            confirming the skills acquired — verifiable online with a unique certificate ID.
          </p>
          <p>Licensed by Falcon Expert Institute FZ-LLC · No. 52001001</p>
          <a
            href="#certificate-sample"
            className="button button-outline"
            style={{ marginTop: 32 }}
          >
            View sample certificate <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div
          id="certificate-sample"
          className="certificate-frame reveal reveal-right"
          style={{ ["--reveal-delay" as string]: "140ms" }}
        >
          <CertificateCard />
        </div>
      </div>
    </section>
  );
}
