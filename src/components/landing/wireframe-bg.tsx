import { motion, useReducedMotion } from "framer-motion";

/** Decorative wireframe triangles — Hub71-inspired background layer. */
export function WireframeTriangles({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <motion.g
        initial={reduce ? false : { opacity: 0, x: 20 }}
        animate={reduce ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        fill="none"
        stroke="var(--falcon-green)"
        strokeWidth="1"
        opacity="0.12"
      >
        <polygon points="280,40 380,200 280,360" />
        <polygon points="220,80 320,200 220,320" />
        <polygon points="160,120 260,200 160,280" />
      </motion.g>
      <motion.g
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        fill="none"
        stroke="var(--falcon-gold)"
        strokeWidth="0.75"
        opacity="0.1"
      >
        <line x1="300" y1="60" x2="360" y2="180" />
        <line x1="300" y1="340" x2="360" y2="220" />
        <line x1="240" y1="100" x2="300" y2="200" />
        <line x1="240" y1="300" x2="300" y2="200" />
      </motion.g>
    </svg>
  );
}

/** Overlapping wireframe circles for accent blocks. */
export function WireframeCircles({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <circle cx="80" cy="100" r="50" fill="none" stroke="white" strokeWidth="1.5" opacity="0.35" />
      <circle cx="110" cy="100" r="50" fill="none" stroke="white" strokeWidth="1.5" opacity="0.25" />
      <circle cx="140" cy="100" r="50" fill="none" stroke="white" strokeWidth="1.5" opacity="0.15" />
    </svg>
  );
}
