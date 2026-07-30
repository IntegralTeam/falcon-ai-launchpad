import { useRepeatInView } from "@/hooks/use-repeat-in-view";

const differentiators = [
  {
    n: "01",
    title: "ROI over Algorithms",
    body: "We skip the math. You'll calculate cost-benefit before writing a single line of pseudo-code.",
  },
  {
    n: "02",
    title: "Hype to Hard Truths",
    body: "We expose what GenAI can't do. So you never get blindsided by your own tech team.",
  },
  {
    n: "03",
    title: "Pilot to Production",
    body: "Not just theory. Get a vendor selection matrix and a change-management roadmap.",
  },
  {
    n: "04",
    title: "Bridge the Gap",
    body: "Speak your data scientists' language fluently — so you lead with authority, not questions.",
  },
] as const;

/** Why Falcon — photo split + differentiators (FEI corporate pattern) */
export function UniquenessSection() {
  const [sectionRef, sectionInView] = useRepeatInView<HTMLElement>();

  return (
    <section
      id="why"
      ref={sectionRef}
      data-in-view={sectionInView ? "true" : "false"}
      className="why-split"
      aria-labelledby="why-title"
    >
      <div className="why-photo reveal reveal-left">
        <img
          src="/images/practical.jpg"
          alt="Instructor leading a professional class"
          loading="lazy"
        />
        <div className="why-photo-label">
          <span>Built for decision-makers</span>
          <b>4 principles</b>
        </div>
      </div>

      <div className="why-copy">
        <div
          className="why-copy-inner reveal reveal-right"
          style={{ ["--reveal-delay" as string]: "100ms" }}
        >
          <p className="section-kicker">Built for decision-makers</p>
          <h2 id="why-title">
            Not your
            <br />
            average AI course
          </h2>
          <p className="lead-serif">
            Four principles that separate business-ready AI education from hype-driven tutorials.
          </p>

          <div className="why-points">
            {differentiators.map((item) => (
              <article className="why-point" key={item.n}>
                <span>{item.n}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
