import { learnWorldsAiFundamentalsUrl, learnWorldsCoursesUrl } from "@/lib/learnworlds";
import { Chevron } from "./chevron";
import { Hero3DStack } from "./hero-3d-stack";
import { HeroGridBg } from "./hero-grid-bg";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#fff_42%,var(--falcon-sand)_100%)]" />
      <HeroGridBg />

      <div className="container-x grid min-h-0 flex-1 grid-cols-1 items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:grid-cols-2 lg:gap-12 lg:py-12">
        <div className="order-2 flex flex-col lg:order-1">
          <Reveal preset="clip-left" delay={0.05}>
            <span className="eyebrow">UAE-BASED · GLOBALLY TRUSTED</span>
          </Reveal>
          <Reveal preset="clip-up" delay={0.12}>
            <h1 className="mt-4 text-[clamp(2rem,7vw,4rem)] font-extrabold leading-[0.95] tracking-tight sm:mt-5">
              Learn AI as a
              <br />
              <span className="gradient-text-green">business advantage</span>
              <br />
              - not a buzzword
            </h1>
          </Reveal>
          <Reveal preset="blur" delay={0.2}>
            <p className="mt-4 max-w-md text-base text-muted-foreground sm:mt-6 sm:text-lg">
              Four courses. Four artifacts. One governed path from experiment to capability.
            </p>
          </Reveal>
          <Reveal preset="wipe-right" delay={0.28} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a href={learnWorldsAiFundamentalsUrl} className="btn-primary group justify-center">
              START WITH FUNDAMENTALS <Chevron />
            </a>
            <a href={learnWorldsCoursesUrl} className="btn-gold group justify-center">
              VIEW FULL PROGRAM <Chevron />
            </a>
          </Reveal>
        </div>

        <Reveal preset="scale-tr" delay={0.15} className="order-1 lg:order-2">
          <Hero3DStack />
        </Reveal>
      </div>
    </section>
  );
}
