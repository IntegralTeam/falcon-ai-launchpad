import { useCallback, useEffect, useRef, useState } from "react";

import { COURSES } from "./landing-data";

/** Interactive 3D course fan — move cursor horizontally to browse all four courses. */
export function Hero3DStack() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 4, y: -8 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % COURSES.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [hovering]);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const index = Math.min(COURSES.length - 1, Math.max(0, Math.floor(px * COURSES.length)));
    setActiveIndex(index);
    setTilt({ x: 6 + py * -10, y: -12 + (px - 0.5) * 14 });
  }, []);

  const onLeave = useCallback(() => {
    setHovering(false);
    setTilt({ x: 4, y: -8 });
  }, []);

  return (
    <div className="w-full">
      <div
        ref={wrapRef}
        className="hero-3d-stage relative mx-auto flex h-[15rem] w-full max-w-md items-center justify-center sm:h-[19rem] md:h-[22rem]"
        onMouseMove={onMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={onLeave}
        aria-label="Explore the four-course learning path"
      >
        <div
          className="hero-3d-scene relative h-52 w-48 sm:h-56 sm:w-52"
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
          {COURSES.map((course, index) => {
            const offset = index - activeIndex;
            const depth = 200 - Math.abs(offset) * 42;
            const shiftX = offset * 34;
            const rotateY = offset * -22;
            const scale = index === activeIndex ? 1 : 0.94;
            const opacity = Math.abs(offset) > 2 ? 0.35 : 1 - Math.abs(offset) * 0.18;

            return (
              <div
                key={course.id}
                className="hero-3d-card absolute inset-0 border border-border bg-white shadow-[0_20px_50px_-18px_rgba(31,41,55,0.4)] transition-[transform,opacity] duration-300"
                style={{
                  transform: `translateX(${shiftX}px) translateZ(${depth}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex: 10 - Math.abs(offset),
                  borderTopWidth: "4px",
                  borderTopColor:
                    index === 0
                      ? "var(--falcon-gold)"
                      : index === 1
                        ? "var(--falcon-green)"
                        : index === 2
                          ? "var(--falcon-ink)"
                          : "var(--falcon-red)",
                }}
              >
                <div className="flex h-full flex-col justify-between p-4 sm:p-5">
                  <span className="font-display text-3xl font-extrabold text-falcon-gold/35 sm:text-4xl">
                    {course.n}
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-bold tracking-widest text-muted-foreground sm:text-[0.65rem]">
                      {course.artifact.toUpperCase()}
                    </p>
                    <p className="mt-1.5 text-xs font-bold leading-snug sm:text-sm">{course.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step picker — works on mobile and desktop */}
      {/* <div className="mt-4 flex items-center justify-center gap-0 border border-border">
        {COURSES.map((course, index) => (
          <button
            key={course.id}
            type="button"
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 border-r border-border px-2 py-2.5 text-center text-[0.65rem] font-bold tracking-wide transition-colors last:border-r-0 sm:px-3 sm:text-xs ${
              index === activeIndex
                ? "bg-falcon-green text-white"
                : "bg-white text-muted-foreground hover:bg-falcon-sand"
            }`}
            aria-pressed={index === activeIndex}
            aria-label={`Course ${course.n}: ${course.title}`}
          >
            {course.n}
          </button>
        ))}
      </div> */}
    </div>
  );
}
