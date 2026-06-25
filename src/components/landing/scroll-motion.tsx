import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { createContext, useContext, useRef, type ReactNode } from "react";

const ScrollSectionContext = createContext<MotionValue<number> | null>(null);

/** Pads or trims output ranges so they match inputRange length (framer-motion requirement). */
function normalizeRange(values: number[] | undefined, length: number, fill: number) {
  if (!values || values.length === 0) {
    return Array.from({ length }, () => fill);
  }
  if (values.length === length) {
    return values;
  }
  if (values.length > length) {
    return values.slice(0, length);
  }
  const last = values[values.length - 1] ?? fill;
  return [...values, ...Array.from({ length: length - values.length }, () => last)];
}

/** Tall section — scroll progress flows from start to end of the section. */
export function ScrollSection({
  children,
  className = "",
  height = "220vh",
  id,
}: {
  children: ReactNode;
  className?: string;
  height?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} id={id} className={className} style={{ height }}>
      <ScrollSectionContext.Provider value={scrollYProgress}>{children}</ScrollSectionContext.Provider>
    </section>
  );
}

/** Pins content while the parent ScrollSection scrolls through. */
export function ScrollSticky({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`sticky top-14 flex min-h-[calc(100vh-3.5rem)] items-center overflow-hidden py-10 md:top-16 md:min-h-[calc(100vh-4rem)] ${className}`}
    >
      {children}
    </div>
  );
}

type ScrollLayerProps = {
  children: ReactNode;
  className?: string;
  inputRange?: number[];
  y?: number[];
  x?: number[];
  /** Omit to keep full opacity — only position drifts with scroll. */
  opacity?: number[];
  scale?: number[];
};

/** Child layer animated by parent ScrollSection progress (scroll-linked, not one-shot). */
export function ScrollLayer({
  children,
  className = "",
  inputRange = [0, 0.35, 0.7, 1],
  y: yRange = [28, 8, 0, 0],
  x: xRange,
  opacity: opacityRange,
  scale: scaleRange,
}: ScrollLayerProps) {
  const reduce = useReducedMotion();
  const progress = useContext(ScrollSectionContext);
  const fallback = useMotionValue(1);
  const source = progress ?? fallback;

  const y = useTransform(source, inputRange, normalizeRange(yRange, inputRange.length, 0));
  const x = useTransform(source, inputRange, normalizeRange(xRange, inputRange.length, 0));
  const scale = useTransform(source, inputRange, normalizeRange(scaleRange, inputRange.length, 1));
  const opacity = useTransform(
    source,
    inputRange,
    normalizeRange(opacityRange, inputRange.length, 1),
  );

  if (reduce || !progress) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{
        y,
        x,
        scale,
        ...(opacityRange ? { opacity } : {}),
      }}
    >
      {children}
    </motion.div>
  );
}

/** Single element animated by its own scroll position in the viewport. */
export function ScrollReveal({
  children,
  className = "",
  yFrom = 24,
  xFrom = 0,
}: {
  children: ReactNode;
  className?: string;
  yFrom?: number;
  xFrom?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.7"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [yFrom, 0]);
  const x = useTransform(scrollYProgress, [0, 1], [xFrom, 0]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y, x }}>
      {children}
    </motion.div>
  );
}
