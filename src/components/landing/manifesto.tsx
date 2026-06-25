import audienceSectionImage from "@/assets/audience-section.png";
import { ScrollLayer, ScrollSection, ScrollSticky } from "./scroll-motion";

export function Manifesto() {
  return (
    <ScrollSection id="manifesto" className="border-t border-border bg-white" height="180vh">
      <ScrollSticky className="!items-start">
        <div className="container-x w-full">
          <div className="grid items-center gap-4 md:grid-cols-12 md:gap-6">
            <ScrollLayer
              className="relative overflow-hidden border border-border md:col-span-7"
              inputRange={[0, 0.5, 1]}
              y={[16, 0, -12]}
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[26rem]">
                <img
                  src={audienceSectionImage}
                  alt="Professionals collaborating on AI strategy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-falcon-ink/60 via-falcon-ink/10 to-transparent" />
                <p className="absolute bottom-0 left-0 p-5 font-display text-3xl font-extrabold leading-none text-white md:p-8 md:text-5xl">
                  We are
                  <br />
                  Falcon
                </p>
              </div>
            </ScrollLayer>

            <div className="flex flex-col gap-4 md:col-span-5">
              <ScrollLayer inputRange={[0, 0.4, 0.75, 1]} y={[20, 6, 0, -4]} x={[10, 3, 0, 0]}>
                <div className="border border-border bg-falcon-red p-6 text-white md:p-8">
                  <p className="font-display text-xl font-extrabold leading-tight md:text-2xl">
                    We&apos;re building the judgment to use it now.
                  </p>
                </div>
              </ScrollLayer>

              <ScrollLayer inputRange={[0.06, 0.42, 0.78, 1]} y={[18, 5, 0, -3]} x={[-10, -3, 0, 0]}>
                <div className="border border-border bg-white p-6 md:p-8">
                  <h2 className="font-display text-xl font-extrabold leading-tight md:text-2xl">
                    We&apos;re not waiting for AI to mature.
                  </h2>
                </div>
              </ScrollLayer>

              <ScrollLayer inputRange={[0.12, 0.48, 0.84, 1]} y={[16, 4, 0, -2]} x={[8, 2, 0, 0]}>
                <div className="border border-border bg-falcon-sand p-6 md:p-8">
                  <p className="text-base leading-relaxed md:text-lg">
                    A practical AI program for business owners, managers, consultants and analysts —
                    built for judgment, not hype.
                  </p>
                </div>
              </ScrollLayer>
            </div>
          </div>
        </div>
      </ScrollSticky>
    </ScrollSection>
  );
}
