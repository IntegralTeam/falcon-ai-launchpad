import sectionImg from "@/assets/section-img.jpg";
import { useRepeatInView } from "@/hooks/use-repeat-in-view";

const differentiators = [
  {
    n: "01",
    tint: "bg-sky/25",
    title: "ROI over Algorithms",
    body: "We skip the math. You'll calculate cost-benefit before writing a single line of pseudo-code.",
  },
  {
    n: "02",
    tint: "bg-mint/40",
    title: "Hype to Hard Truths",
    body: "We expose what GenAI can't do. So you never get blindsided by your own tech team.",
  },
  {
    n: "03",
    tint: "bg-amber-200/60",
    title: "Pilot to Production",
    body: "Not just theory. Get a vendor selection matrix and a change-management roadmap.",
  },
  {
    n: "04",
    tint: "bg-ink/10",
    title: "Bridge the Gap",
    body: "Speak your data scientists' language fluently — so you lead with authority, not questions.",
  },
] as const;

/** What sets Falcon AI courses apart — full-viewport split with background illustration */
export function UniquenessSection() {
  const [sectionRef, sectionInView] = useRepeatInView<HTMLElement>();

  return (
    <section
      id="why"
      ref={sectionRef}
      data-in-view={sectionInView ? "true" : "false"}
      className="relative min-h-screen lg:h-screen border-y border-black/10 overflow-hidden bg-offwhite"
    >
      {/* Full-height illustration — natural aspect ratio, 20% larger, anchored left */}
      <div
        className="absolute inset-y-0 left-0 z-0 flex h-full w-full items-center overflow-hidden lg:w-[58%] pointer-events-none"
        aria-hidden
      >
        <img
          src={sectionImg}
          alt=""
          className="h-full w-auto max-w-none origin-left scale-[1.2] object-contain object-left"
          loading="lazy"
        />
        <div className="absolute inset-y-0 right-0 w-36 lg:w-56 bg-gradient-to-r from-transparent via-offwhite/25 to-offwhite/90" />
      </div>

      {/* Right content panel — soft horizontal blend */}
      <div className="absolute inset-y-0 right-0 z-0 hidden w-[52%] bg-gradient-to-r from-transparent via-offwhite/75 to-offwhite/95 lg:block" />

      <div className="relative z-10 mx-auto flex h-full min-h-screen max-w-[1440px] flex-col px-8 lg:min-h-0 lg:h-full">
        {/* Header — original top row with frosted overlay for readability */}
        <div className="relative shrink-0 py-10 lg:py-12">
          {/* Frosted header — 20% more transparent, soft fade into illustration */}
          <div className="pointer-events-none absolute -inset-x-8 -bottom-14 top-0">
            <div className="h-full bg-offwhite/[0.48] backdrop-blur-lg [mask-image:linear-gradient(to_bottom,black_0%,black_45%,rgba(0,0,0,0.6)_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_45%,rgba(0,0,0,0.6)_70%,transparent_100%)]" />
          </div>
          <div className="relative flex items-end justify-between gap-6 flex-wrap">
            <h2 className="reveal reveal-left text-[clamp(1.75rem,4.2vw,3.85rem)] font-extrabold tracking-tighter uppercase leading-[0.85]">
              Not your <br />
              average AI course
            </h2>
            <div
              className="reveal reveal-right max-w-sm"
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 block mb-2 italic">
                // Built for decision-makers
              </span>
              <p className="text-sm text-black/60 leading-snug">
                Four principles that separate business-ready AI education from hype-driven tutorials.
              </p>
            </div>
          </div>
        </div>

        {/* Body — illustration visible left, cards right */}
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-8 pb-10 lg:grid-cols-2 lg:gap-10 lg:pb-12">
          <div className="hidden lg:block" aria-hidden />

          <div className="flex items-center">
            <div
              className="reveal reveal-right grid w-full grid-cols-1 gap-px border border-black/5 bg-black/5 sm:grid-cols-2"
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              {differentiators.map((item, i) => (
                <article
                  key={item.n}
                  className="reveal reveal-scale bg-offwhite p-5 md:p-6 flex flex-col"
                  style={{ ["--reveal-delay" as string]: `${140 + i * 70}ms` }}
                >
                  <div className={`size-8 flex items-center justify-center mb-3 ${item.tint}`}>
                    <span className="text-ink font-extrabold text-xs">{item.n}</span>
                  </div>
                  <h3 className="text-base font-extrabold tracking-tight mb-1.5">{item.title}</h3>
                  <p className="text-sm text-black/60 leading-snug">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
