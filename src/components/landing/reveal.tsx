import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const defaultViewport = { once: true, amount: 0.2 as const };

export type MotionPreset =
  | "rise"
  | "clip-up"
  | "clip-left"
  | "blur"
  | "scale-bl"
  | "scale-tr"
  | "wipe-right"
  | "drop";

const presets: Record<
  MotionPreset,
  { hidden: Record<string, number | string>; visible: Record<string, number | string> }
> = {
  rise: { hidden: { opacity: 0, y: 48 }, visible: { opacity: 1, y: 0 } },
  "clip-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  "clip-left": { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  blur: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  "scale-bl": { hidden: { opacity: 0, scale: 0.94, x: -16, y: 16 }, visible: { opacity: 1, scale: 1, x: 0, y: 0 } },
  "scale-tr": { hidden: { opacity: 0, scale: 0.94, x: 16, y: -16 }, visible: { opacity: 1, scale: 1, x: 0, y: 0 } },
  "wipe-right": { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  drop: { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
};

/** Scroll-triggered motion — safe on mobile (no clip-path). */
export function Reveal({
  children,
  className = "",
  delay = 0,
  preset = "rise",
  duration = 0.65,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  preset?: MotionPreset;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const p = presets[preset];

  return (
    <motion.div
      className={className}
      initial={reduce ? false : p.hidden}
      whileInView={reduce ? undefined : p.visible}
      viewport={defaultViewport}
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function RevealStagger({
  children,
  className = "",
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

export function CountUp({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

export { defaultViewport };
