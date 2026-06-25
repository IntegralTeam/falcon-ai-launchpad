import chaosPathVideo from "@/assets/chaos-path.mp4";
import goodPathVideo from "@/assets/good-path.mp4";
import { Reveal } from "./reveal";

function VideoPanel({
  label,
  labelColor,
  title,
  body,
  videoSrc,
  videoLabel,
  borderAccent,
}: {
  label: string;
  labelColor: string;
  title: string;
  body: string;
  videoSrc: string;
  videoLabel: string;
  borderAccent: string;
}) {
  return (
    <div className="flex flex-col">
      <p className={`text-xs font-bold tracking-[0.2em] ${labelColor}`}>{label}</p>
      <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight sm:text-3xl">{title}</h3>
      <div
        className={`mt-4 overflow-hidden bg-falcon-ink`}
      >
        <div className="aspect-video w-full">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            aria-label={videoLabel}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{body}</p>
    </div>
  );
}

export function ChaosCapability() {
  return (
    <section id="solution" className="section-pad bg-falcon-sand">
      <div className="container-x">
        <Reveal preset="clip-up" className="max-w-3xl">
          <span className="eyebrow">FROM CHAOS TO CAPABILITY</span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight">
            Shift from chaotic experiments to{" "}
            <span className="text-falcon-green">deliberate capability</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 lg:gap-8">
          <Reveal preset="wipe-right">
            <VideoPanel
              label="THE CHAOS TODAY"
              labelColor="text-falcon-red"
              title="Random tools. No system."
              body="Teams experiment in silos. Data rules are unclear and need re-checking."
              videoSrc={chaosPathVideo}
              videoLabel="Scattered AI tools without a clear system"
              borderAccent="border-t-4 border-falcon-red"
            />
          </Reveal>
          <Reveal preset="wipe-right" delay={0.1}>
            <VideoPanel
              label="THE FALCON WAY"
              labelColor="text-falcon-green"
              title="One path. Built to last."
              body="Clear process. Verification and governance at every step."
              videoSrc={goodPathVideo}
              videoLabel="Structured path from fundamentals to business impact"
              borderAccent="border-t-4 border-falcon-green"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
