import { useState } from "react";

import { FAQS } from "./landing-data";
import { Reveal } from "./reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal preset="clip-left">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight">
            Before you enroll.
          </h2>
        </Reveal>

        <div className="space-y-0">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} preset="rise" delay={i * 0.04}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="block w-full border-b border-border text-left"
                >
                  <div className="flex items-center justify-between gap-4 py-5">
                    <span className="font-semibold">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center border border-border text-lg leading-none transition-colors ${
                        isOpen ? "border-falcon-green bg-falcon-green text-white" : ""
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="border-l-4 border-falcon-green pb-5 pl-4 text-muted-foreground">{f.a}</p>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
