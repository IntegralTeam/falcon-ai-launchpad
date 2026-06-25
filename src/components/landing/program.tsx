import { COURSES } from "./landing-data";
import { Chevron } from "./chevron";
import { ScrollLayer, ScrollSection } from "./scroll-motion";

const COURSE_SCROLL_BAND = 0.1;

export function Program() {
  return (
    <ScrollSection id="courses" className="bg-falcon-ink text-white" height="220vh">
      <div className="container-x space-y-3 pb-[12vh] pt-[6vh] md:space-y-4 md:pt-[8vh]">
        <ScrollLayer className="max-w-2xl" inputRange={[0, 0.12, 0.28, 1]} y={[20, 6, 0, 0]}>
          <span className="eyebrow !bg-white/10 !text-falcon-gold">PROGRAM</span>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-tight">
            Four courses. One decision system.
          </h2>
          <p className="mt-3 text-white/65">
            Take them in sequence or jump in at the level that fits your team.
          </p>
        </ScrollLayer>

        <div className="mt-6 space-y-3 md:mt-8">
          {COURSES.map((course, index) => {
            const start = 0.08 + index * COURSE_SCROLL_BAND;
            const mid = start + COURSE_SCROLL_BAND * 0.45;
            const end = start + COURSE_SCROLL_BAND * 0.9;

            return (
              <ScrollLayer
                key={course.id}
                inputRange={[start, mid, end, 1]}
                y={[20, 4, 0, 0]}
                x={[index % 2 === 0 ? -12 : 12, 0, 0, 0]}
              >
                <a
                  id={course.id}
                  href={course.href}
                  className="group grid grid-cols-1 overflow-hidden border border-white/15 bg-white/5 transition-colors hover:border-falcon-green/40 hover:bg-white/10 md:grid-cols-[minmax(0,17.5rem)_1fr_auto]"
                >
                  <div className="overflow-hidden md:w-72 md:shrink-0">
                    <img
                      src={course.image}
                      alt=""
                      aria-hidden="true"
                      className="aspect-[400/269] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:p-6">
                    <span className="font-display text-3xl font-extrabold text-falcon-gold/50">{course.n}</span>
                    <p className="mt-2 text-[0.65rem] font-bold tracking-widest text-falcon-gold">{course.artifact}</p>
                    <h3 className="mt-2 text-lg font-bold leading-snug sm:text-xl">{course.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{course.tagline}</p>
                  </div>
                  <div className="flex items-center border-t border-white/10 px-5 py-4 md:border-l md:border-t-0 md:px-6">
                    <span className="text-sm font-bold text-falcon-green">
                      OPEN <Chevron />
                    </span>
                  </div>
                </a>
              </ScrollLayer>
            );
          })}
        </div>
      </div>
    </ScrollSection>
  );
}
