import { learnWorldsAiFundamentalsUrl, learnWorldsCoursesUrl } from "@/lib/learnworlds";
import { Chevron } from "./chevron";
import { Reveal } from "./reveal";

export function FinalCTA() {
  return (
    <section className="section-pad bg-falcon-green">
      <div className="container-x text-center">
        <Reveal preset="clip-up">
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight text-white">
            Stop chaotic experiments.
            <br />
            Start systematic adoption.
          </h2>
        </Reveal>
        <Reveal preset="blur" delay={0.12} className="mx-auto mt-5 max-w-xl text-white/80">
          Join Falcon Innovation Academy and build your competitive advantage with AI.
        </Reveal>
        <Reveal preset="wipe-right" delay={0.2} className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={learnWorldsAiFundamentalsUrl}
            className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-bold text-falcon-green transition-colors hover:bg-falcon-sand"
          >
            START WITH FUNDAMENTALS <Chevron />
          </a>
          <a
            href={learnWorldsCoursesUrl}
            className="inline-flex items-center gap-2 border-2 border-white px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            VIEW ALL COURSES <Chevron />
          </a>
        </Reveal>
        <p className="mt-6 text-sm text-white/70">
          Access to materials for 6 months. Based in UAE, serving the world.
        </p>
      </div>
    </section>
  );
}
