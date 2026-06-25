import { ARTIFACT_SHOWCASE } from "./landing-data";
import { Reveal, RevealItem, RevealStagger } from "./reveal";

export function Artifacts() {
  return (
    <section id="artifacts" className="section-pad bg-white">
      <div className="container-x">
        <Reveal preset="clip-up" className="max-w-2xl">
          <span className="eyebrow">WHAT YOU BUILD</span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight">
            Real artifacts. <span className="text-falcon-green">Not homework.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Four working documents you can apply immediately after each course.
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.07}>
          {ARTIFACT_SHOWCASE.map((item) => (
            <RevealItem key={item.n}>
              <div className={`flex gap-5 border border-border p-6 ${item.bg}`}>
                <span
                  className="shrink-0 font-display text-4xl font-extrabold leading-none sm:text-5xl"
                  style={{ color: item.accent }}
                >
                  {item.n}
                </span>
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-bold tracking-widest text-muted-foreground">FINAL ARTIFACT</p>
                  <h3 className="mt-1 text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.hook}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
