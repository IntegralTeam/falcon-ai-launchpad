import { useEffect, useRef, useState } from "react";

import falconLogoFull from "@/assets/falcon-logo.jpeg";
import { COMPARISON_ROWS, TRUST_POINTS } from "./landing-data";
import { Reveal } from "./reveal";

const ROW_STAGGER_MS = 130;

function ComparisonRow({
  left,
  right,
  index,
  tableVisible,
}: {
  left: string;
  right: string;
  index: number;
  tableVisible: boolean;
}) {
  const rowDelay = index * ROW_STAGGER_MS;
  const strikeDelay = rowDelay + 180;
  const winDelay = rowDelay + 420;

  return (
    <div
      className={`comparison-row grid grid-cols-1 border-t border-border bg-white text-sm sm:grid-cols-2 ${
        tableVisible ? "comparison-row-visible" : ""
      }`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground">
        <span className="comparison-negate text-falcon-red" style={{ transitionDelay: `${rowDelay}ms` }}>
          ✕
        </span>
        <span className="comparison-strike-wrap">
          {left}
          <span className="comparison-strike-line" style={{ transitionDelay: `${strikeDelay}ms` }} />
        </span>
      </div>
      <div
        className="comparison-win border-t border-border px-4 py-2.5 font-medium sm:border-l sm:border-t-0"
        style={{ transitionDelay: `${winDelay}ms` }}
      >
        <span className="comparison-check mr-1.5 text-falcon-green" style={{ transitionDelay: `${winDelay + 60}ms` }}>
          ✓
        </span>
        {right}
      </div>
    </div>
  );
}

function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const element = ref.current;
    if (!element || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
}

export function Trust() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="trust" className="section-pad bg-falcon-sand">
      <div className="container-x">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal preset="clip-up">
              <span className="eyebrow">LICENSED IN THE UAE</span>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight">
                A <span className="text-falcon-green">certified expert institute</span> — built on trust.
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Falcon Expert Institute FZ-LLC is a registered educational provider in the United Arab Emirates,
                operating under Educational Licence No. 52001001 from Ras Al Khaimah Economic Zone (RAKEZ).
              </p>
            </Reveal>

            <Reveal preset="blur" delay={0.12} className="mt-8">
              <p className="text-lg font-semibold">
                Most courses teach which buttons to press.{" "}
                <span className="text-falcon-green">We teach how to decide.</span>
              </p>
            </Reveal>

            {/* <div
              ref={ref}
              className={`comparison-table mt-6 overflow-hidden border border-border ${visible ? "comparison-table-visible" : ""}`}
            >
              <div className="grid grid-cols-1 bg-falcon-ink text-xs font-bold tracking-widest text-white sm:grid-cols-2">
                <div className="px-4 py-2.5">TYPICAL AI COURSE</div>
                <div className="border-t border-white/20 px-4 py-2.5 text-falcon-green sm:border-l sm:border-t-0">
                  FALCON INNOVATION ACADEMY
                </div>
              </div>
              {COMPARISON_ROWS.map(([left, right], index) => (
                <ComparisonRow key={left} left={left} right={right} index={index} tableVisible={visible} />
              ))}
            </div> */}
          </div>

          <Reveal preset="scale-tr" delay={0.1}>
            <div className="overflow-hidden border border-falcon-gold/40 bg-white">
              <div className="bg-falcon-sand/40 px-6 py-8">
                <img
                  src={falconLogoFull}
                  alt="Falcon Expert Institute"
                  className="mx-auto w-full max-w-md object-contain"
                />
              </div>
              <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {TRUST_POINTS.map((item) => (
                  <div key={item.label} className="bg-white p-4">
                    <div className="mb-2 h-1 w-8" style={{ backgroundColor: item.accent }} />
                    <div className="text-[0.65rem] font-bold tracking-widest text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-bold leading-snug">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
