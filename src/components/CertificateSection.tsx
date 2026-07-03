import certificateImg from "@/assets/certificate.png";
import { useRepeatInView } from "@/hooks/use-repeat-in-view";

/** Certificate showcase — text panel left, sample certificate preview right */
export function CertificateSection() {
  const [sectionRef, sectionInView] = useRepeatInView<HTMLElement>();

  return (
    <section
      id="certificate"
      ref={sectionRef}
      data-in-view={sectionInView ? "true" : "false"}
      className="pt-12 pb-24 md:pt-16 md:pb-32 px-8 max-w-[1440px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-10 lg:gap-12 items-stretch">
        {/* Left — dark editorial card */}
        <div className="reveal reveal-left relative overflow-hidden rounded-2xl bg-ink px-10 py-12 md:px-12 md:py-14 flex flex-col justify-center">
          <div className="absolute inset-0 bg-diagonal-lines-dense opacity-40 pointer-events-none" />
          <div className="relative">
            <span className="text-mint text-[10px] font-extrabold uppercase tracking-[0.3em] block mb-6 italic">
              // Proof of completion
            </span>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9]">
              Documents after training
            </h2>
            <p className="mt-6 text-white/55 text-base md:text-lg leading-relaxed max-w-lg">
              After completing each course, you receive an official Certificate of Completion
              confirming the skills acquired — verifiable online with a unique certificate ID.
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-mint text-sm md:text-base font-semibold underline underline-offset-4 decoration-mint/50 hover:decoration-mint transition-colors"
            >
              Licensed by Falcon Expert Institute FZ-LLC · No. 52001001
            </a>
            <a
              href={certificateImg}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-sm border border-white/30 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
            >
              View sample certificate
            </a>
          </div>
        </div>

        {/* Right — certificate preview with mint glow */}
        <div
          className="reveal reveal-right relative flex items-stretch justify-center"
          style={{ ["--reveal-delay" as string]: "140ms" }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 rounded-3xl bg-mint/30 blur-3xl scale-95 pointer-events-none" />
          <div className="absolute inset-0 rounded-3xl bg-sky/20 blur-2xl scale-100 pointer-events-none" />

          {/* Certificate frame — full column width */}
          <div className="relative w-full flex items-center">
            <div
              className="relative w-full rounded-sm overflow-hidden border border-black/10 bg-white shadow-[0_32px_100px_-16px_rgba(10,10,10,0.4)]"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <img
                src={certificateImg}
                alt="Falcon Innovation Academy Certificate of Completion — Course 01 AI Fundamentals for Business Decision-Makers"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>

            {/* Verified badge */}
            <div
              className="reveal reveal-scale absolute -bottom-4 -left-2 md:-left-6 flex items-center gap-2 bg-ink text-white px-4 py-2 rounded-sm shadow-lg"
              style={{ ["--reveal-delay" as string]: "360ms" }}
            >
              <span className="size-1.5 rounded-full bg-mint animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Verifiable online
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
