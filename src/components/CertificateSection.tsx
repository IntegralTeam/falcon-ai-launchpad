import logoSvg from "@/assets/logo.svg";
import { Skeleton } from "@/components/ui/skeleton";
import { useRepeatInView } from "@/hooks/use-repeat-in-view";

/** Certificate showcase — text panel left, stylized certificate preview right */
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
              After successfully completing a course, learners receive a Certificate of Completion
              issued by Falcon Expert Institute FZ-LLC.
            </p>
          </div>
        </div>

        {/* Right — stylized certificate preview with mint glow */}
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
              className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-black/10 bg-white shadow-[0_32px_100px_-16px_rgba(10,10,10,0.4)] flex flex-col items-start justify-start gap-5 px-10 py-10"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              <img
                src={logoSvg}
                alt="Falcon Academy"
                className="w-[min(50%,15.4rem)] h-auto shrink-0"
              />
              <h3 className="text-left text-[clamp(1.35rem,3.2vw,2.5rem)] font-extrabold uppercase tracking-[0.04em] leading-[1.05] text-ink shrink-0">
                Certificate of Completion
              </h3>

              {/* Skeleton fields — certificate layout without placeholder copy */}
              <div className="flex flex-col flex-1 w-full gap-5 min-h-0">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-2 w-14 rounded-full bg-black/[0.07]" />
                  <Skeleton className="h-3.5 w-[58%] rounded-full bg-black/10" />
                </div>

                <div className="flex flex-col gap-2">
                  <Skeleton className="h-2 w-20 rounded-full bg-black/[0.07]" />
                  <Skeleton className="h-3 w-[72%] rounded-full bg-black/10" />
                  <Skeleton className="h-3 w-[48%] rounded-full bg-black/[0.08]" />
                </div>

                <div className="flex-1 min-h-2" />

                <div className="flex justify-between items-end gap-8 w-full">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-2 w-16 rounded-full bg-black/[0.07]" />
                    <Skeleton className="h-2.5 w-24 rounded-full bg-black/10" />
                  </div>
                  <div className="flex flex-col gap-2 items-end flex-1 max-w-[9rem]">
                    <Skeleton className="h-px w-full rounded-full bg-black/15" />
                    <Skeleton className="h-2 w-20 rounded-full bg-black/[0.07]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
