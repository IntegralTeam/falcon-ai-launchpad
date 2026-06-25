import { learnWorldsAiFundamentalsUrl, learnWorldsCoursesUrl } from "@/lib/learnworlds";
import { Chevron } from "./chevron";
import { Reveal } from "./reveal";

export function Enroll() {
  return (
    <section id="enroll" className="section-pad bg-falcon-ink text-white">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal preset="clip-left">
          <span className="eyebrow" style={{ background: "rgba(199,161,90,0.18)", color: "var(--falcon-gold)" }}>
            COURSE 01 · ENTRY POINT
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight">
            Start with Fundamentals. Leave with a{" "}
            <span className="text-falcon-gold">decision framework</span>.
          </h2>
          <p className="mt-5 text-white/75">
            Tokens, context windows, embeddings, hosted vs self-hosted models, prompting, verification and
            privacy — explained for decision-makers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={learnWorldsAiFundamentalsUrl} className="btn-accent group">
              ENROLL IN COURSE 1 <Chevron />
            </a>
            <a
              href={learnWorldsCoursesUrl}
              className="btn-gold group"
              style={{ color: "white", borderColor: "var(--falcon-gold)" }}
            >
              SEE FULL PROGRAM <Chevron />
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">Access to materials for 6 months.</p>
        </Reveal>

        <Reveal preset="scale-tr" delay={0.12}>
          <div className="enroll-tilt-card border border-white/15 bg-white p-6 text-foreground sm:p-8">
            <p className="text-xs font-bold tracking-[0.2em] text-falcon-gold">YOUR FIRST ARTIFACT</p>
            <h3 className="mt-3 font-display text-xl font-extrabold leading-tight sm:text-2xl">
              AI Use-Case Readiness Brief
            </h3>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Workflow scoped. Data classified. Human review defined. Pilot recommended.
            </p>
            <div className="mt-8 flex gap-8 border-t border-border pt-6">
              <div>
                <p className="font-display text-3xl font-extrabold text-falcon-green sm:text-4xl">6</p>
                <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-muted-foreground">MONTHS ACCESS</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-falcon-gold sm:text-4xl">01</p>
                <p className="mt-1 text-[0.65rem] font-bold tracking-widest text-muted-foreground">ARTIFACT DONE</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
