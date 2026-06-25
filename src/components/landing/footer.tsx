import { learnWorldsCourseUrls } from "@/lib/learnworlds";
import { BrandLogo } from "./brand";
import { LegalModal, useLegalModal } from "./legal-modal";

export function Footer() {
  const { legalModal, setLegalModal } = useLegalModal();

  return (
    <footer className="border-t border-border bg-white">
      <LegalModal
        type={legalModal}
        open={legalModal !== null}
        onOpenChange={(open) => {
          if (!open) setLegalModal(null);
        }}
      />
      <div className="container-x grid gap-8 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <div className="mt-3 max-w-sm space-y-1 text-sm text-muted-foreground">
            <p>Falcon Innovation Academy is a trading brand operated by Falcon Expert Institute FZ-LLC.</p>
            <p>VUNE3122, Compass building, AL Hulaila Industrial Zone-FZ, RAK, UAE.</p>
            <p>Educational Licence No 52001001.</p>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest text-muted-foreground">PROGRAM</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={learnWorldsCourseUrls.aiFundamentals} className="hover:text-falcon-green">
                AI Fundamentals
              </a>
            </li>
            <li>
              <a href={learnWorldsCourseUrls.aiTools} className="hover:text-falcon-green">
                Tools & Cases
              </a>
            </li>
            <li>
              <a href={learnWorldsCourseUrls.aiAgents} className="hover:text-falcon-green">
                Agents & Automation
              </a>
            </li>
            <li>
              <a href={learnWorldsCourseUrls.aiStrategy} className="hover:text-falcon-green">
                Strategy & Roadmap
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest text-muted-foreground">COMPANY</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <button type="button" onClick={() => setLegalModal("privacy")} className="hover:text-falcon-green">
                Privacy Policy
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setLegalModal("terms")} className="hover:text-falcon-green">
                Terms of Use
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setLegalModal("refund")} className="hover:text-falcon-green">
                Refund & Cancellation Policy
              </button>
            </li>
            <li>
              <a href="mailto:info@falcon.academy" className="hover:text-falcon-green">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Falcon Expert Institute FZ-LLC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
