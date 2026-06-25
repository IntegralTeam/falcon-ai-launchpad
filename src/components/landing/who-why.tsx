import audienceSectionImage from "@/assets/audience-section.png";
import { BENEFIT_GROUPS, OUTCOME_PILLARS, PERSONAS } from "./landing-data";
import { Reveal, RevealItem, RevealStagger } from "./reveal";

export function WhoWhy() {
  return (
    <>
      <section id="who" className="section-pad bg-falcon-sand">
        <div className="container-x">
          <Reveal preset="rise" className="max-w-2xl">
            <span className="eyebrow">WHO IT&apos;S FOR</span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight">
              Built for <span className="text-falcon-green">decision-makers</span> — not developers.
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-0 border border-border sm:grid-cols-4">
            <div className="relative col-span-2 overflow-hidden border-b border-border sm:col-span-4">
              <img
                src={audienceSectionImage}
                alt="Professionals collaborating on AI strategy"
                className="aspect-[700/261] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-falcon-ink/70 via-falcon-ink/20 to-transparent" />
              <p className="absolute bottom-0 left-0 max-w-xs p-5 font-display text-lg font-extrabold text-white sm:text-2xl">
                Ambitious professionals. One shared goal: better AI decisions.
              </p>
            </div>

            {PERSONAS.map((persona) => (
              <div
                key={persona.label}
                className={`flex min-h-[7.5rem] flex-col justify-between border-b border-border p-4 sm:min-h-[8.5rem] sm:border-r sm:p-5 ${persona.bg} ${persona.text} col-span-2 sm:col-span-1 ${persona.span}`}
              >
                <span className="font-display text-base font-extrabold leading-tight sm:text-xl">
                  {persona.label}
                </span>
                <span className="mt-2 text-xs font-semibold leading-snug opacity-90 sm:mt-3 sm:text-sm">
                  {persona.hook}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-white">
        <div className="container-x">
          <Reveal preset="rise" className="max-w-2xl">
            <span className="eyebrow">WHAT YOU GAIN</span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold leading-tight">
              Stop guessing. <span className="text-falcon-green">Lead</span> every AI decision.
            </h2>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.08}>
            {OUTCOME_PILLARS.map((pillar) => (
              <RevealItem key={pillar.n}>
                <div
                  className="flex h-full flex-col border border-border bg-falcon-sand p-6"
                  style={{ borderTopWidth: "4px", borderTopColor: pillar.accent }}
                >
                  <span className="font-display text-3xl font-extrabold text-falcon-gold/40">{pillar.n}</span>
                  <h3 className="mt-3 text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-falcon-gold">{pillar.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.lines[0]}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-falcon-sand">
        <div className="container-x">
          <Reveal preset="rise" className="max-w-2xl">
            <span className="eyebrow">BUSINESS BENEFITS</span>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold leading-tight">
              Value at <span className="text-falcon-green">every level</span>
            </h2>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-4 lg:grid-cols-3" stagger={0.1}>
            {BENEFIT_GROUPS.map((group) => (
              <RevealItem key={group.title}>
                <div
                  className={`flex h-full flex-col border border-border bg-white p-6 ${
                    group.featured ? "border-t-4 border-t-falcon-gold" : ""
                  }`}
                >
                  <p className="text-[0.65rem] font-bold tracking-widest text-muted-foreground">
                    {group.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-bold">{group.title}</h3>
                  <p className="mt-3 flex-1 text-sm font-semibold leading-snug">{group.headline}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`tag-chip text-[0.55rem] ${
                          group.featured
                            ? "border-falcon-gold text-falcon-gold"
                            : "border-falcon-green text-falcon-green"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p
                    className={`mt-5 text-xs font-bold tracking-widest ${
                      group.featured ? "text-falcon-gold" : "text-falcon-green"
                    }`}
                  >
                    {group.outcome}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
