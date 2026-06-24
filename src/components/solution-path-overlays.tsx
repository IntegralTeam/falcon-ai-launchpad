import type { ReactNode } from "react";

/* Normalized 0–100 coords — shared by SVG geometry and HTML label placement */

const CHAOS_TOOLS = [
  { label: "ChatGPT", x: 14, y: 10 },
  { label: "Claude", x: 86, y: 12 },
  { label: "Gemini", x: 52, y: 8 },
  { label: "Midjourney", x: 10, y: 40 },
  { label: "Copilot", x: 50, y: 38 },
  { label: "Perplexity", x: 88, y: 42 },
  { label: "Notion AI", x: 22, y: 68 },
  { label: "Others", x: 78, y: 70 },
] as const;

const CHAOS_LINES: [number, number, number, number, number][] = [
  [14, 16, 50, 38, 16],
  [50, 38, 52, 8, 14],
  [52, 8, 86, 12, 15],
  [14, 16, 10, 40, 18],
  [10, 40, 22, 68, 16],
  [22, 68, 50, 38, 20],
  [50, 38, 88, 42, 17],
  [88, 42, 78, 70, 14],
  [14, 16, 86, 12, 22],
  [10, 40, 88, 42, 24],
  [22, 68, 78, 70, 18],
  [52, 8, 78, 70, 21],
  [50, 38, 48, 24, 10],
  [48, 24, 86, 12, 16],
  [50, 38, 30, 52, 14],
  [30, 52, 10, 40, 12],
  [50, 38, 70, 52, 13],
  [70, 52, 88, 42, 11],
  [48, 24, 52, 8, 9],
  [50, 38, 48, 62, 15],
  [48, 62, 22, 68, 13],
  [48, 62, 78, 70, 14],
];

const CHAOS_JUNCTIONS = [
  { x: 50, y: 38, r: 2.4 },
  { x: 48, y: 24, r: 1.9 },
  { x: 30, y: 52, r: 1.7 },
  { x: 70, y: 52, r: 1.7 },
  { x: 48, y: 62, r: 1.6 },
] as const;

function chaosCubicPath(x1: number, y1: number, x2: number, y2: number, bend: number, flip: boolean) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const px = (-dy / len) * bend * (flip ? 1 : -1);
  const py = (dx / len) * bend * (flip ? 1 : -1);
  const c1x = x1 + dx * 0.18 + px;
  const c1y = y1 + dy * 0.18 + py;
  const c2x = x1 + dx * 0.82 + px * 0.65;
  const c2y = y1 + dy * 0.82 + py * 0.65;
  return `M ${x1} ${y1} C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${x2} ${y2}`;
}

const GOOD_PATH_D = "M 8 88 C 14 84, 18 78, 24 72 S 38 60, 42 54 S 52 44, 60 36 S 66 26, 72 20";

const GOOD_DOT_R = 2.9;
const GOOD_LABEL_W = 65;
const GOOD_LABEL_H = 16;
const GOOD_LABEL_GAP = 4;

const GOOD_STEPS = [
  {
    x: 8,
    y: 90,
    title: "FUNDAMENTALS",
    sub: "Build the right foundation",
    step: 1,
  },
  {
    x: 24,
    y: 72,
    title: "TOOLS",
    sub: "Select trusted tools",
    step: 2,
  },
  {
    x: 42,
    y: 54,
    title: "AGENTS",
    sub: "Design and scale agents",
    step: 3,
  },
  {
    x: 60,
    y: 37,
    title: "STRATEGY",
    sub: "Align with business goals",
    step: 4,
  },
  {
    x: 72,
    y: 20,
    title: "DESTINATION",
    sub: "Business Impact",
    step: 5,
    isDestination: true,
  },
] as const;

function goodLabelPosition(x: number, y: number) {
  return {
    labelX: x + GOOD_DOT_R + GOOD_LABEL_GAP,
    labelY: y - GOOD_LABEL_H / 2,
  };
}

function OverlayFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-[4%] top-[4%] bottom-[32%] sm:inset-x-[5%] sm:top-[5%] sm:bottom-[30%]"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function ChaosToolPill({ label, x, y, driftClass }: { label: string; x: number; y: number; driftClass: string }) {
  return (
    <div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
    >
      <div
        className={`chaos-node ${driftClass} relative whitespace-nowrap rounded-full bg-white/95 px-2.5 py-1 text-[0.6rem] font-semibold text-foreground shadow-sm sm:px-3 sm:py-1.5 sm:text-[0.65rem]`}
      >
        {label}
        <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-sm bg-falcon-red text-[0.45rem] font-bold leading-none text-white sm:h-3 sm:w-3 sm:text-[0.5rem]">
          !
        </span>
      </div>
    </div>
  );
}

function GoodStep({
  x,
  y,
  labelX,
  labelY,
  title,
  sub,
  step,
  isDestination,
}: {
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  title: string;
  sub: string;
  step: number;
  isDestination?: boolean;
}) {
  return (
    <g className={`good-step good-step-${step}`}>
      <g transform={`translate(${x} ${y})`}>
        <circle r={GOOD_DOT_R} fill="#00843D" />
        <path
          d="M-1.4 0 L0.3 1.4 1.8 -0.8"
          fill="none"
          stroke="white"
          strokeWidth={0.65}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g transform={`translate(${labelX} ${labelY})`}>
        <rect width={GOOD_LABEL_W} height={GOOD_LABEL_H} rx={2.4} fill="white" fillOpacity={0.7} />
        <text
          x={2.5}
          y={6}
          fill="#00843D"
          fontSize={5}
          fontWeight={800}
          letterSpacing={0.04}
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        >
          {title}
        </text>
        <text
          x={2.5}
          y={12.5}
          fill="#6B7280"
          fontSize={5}
          fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        >
          {sub}
        </text>
      </g>
    </g>
  );
}

export function ChaosPathOverlay({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <OverlayFrame>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <marker id="chaos-arrow" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
              <path d="M0 0 L4 2 L0 4 Z" fill="#C8102E" fillOpacity={0.85} />
            </marker>
          </defs>
          <g className="chaos-lines">
            {CHAOS_LINES.map(([x1, y1, x2, y2, bend], index) => (
              <path
                key={`${x1}-${y1}-${x2}-${y2}-${index}`}
                d={chaosCubicPath(x1, y1, x2, y2, bend, index % 2 === 0)}
                className="chaos-line"
                style={{ animationDelay: `${-(index * 0.35)}s` }}
                markerEnd="url(#chaos-arrow)"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>
          <g className="chaos-junctions">
            {CHAOS_TOOLS.map((tool) => (
              <circle
                key={`anchor-${tool.label}`}
                cx={tool.x}
                cy={tool.y}
                r={1.8}
                className="chaos-anchor-node"
              />
            ))}
            {CHAOS_JUNCTIONS.map((hub, index) => (
              <circle
                key={`hub-${hub.x}-${hub.y}`}
                cx={hub.x}
                cy={hub.y}
                r={hub.r}
                className="chaos-junction-node"
                style={{ animationDelay: `${-(index * 0.5)}s` }}
              />
            ))}
          </g>
        </svg>
        {CHAOS_TOOLS.map((tool, index) => (
          <ChaosToolPill
            key={tool.label}
            label={tool.label}
            x={tool.x}
            y={tool.y}
            driftClass={`chaos-node-${(index % 4) + 1}`}
          />
        ))}
      </OverlayFrame>
    </div>
  );
}

export function GoodPathOverlay({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <OverlayFrame>
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <marker
              id="good-path-end"
              markerUnits="userSpaceOnUse"
              markerWidth="5"
              markerHeight="5"
              refX="5"
              refY="2.5"
              orient="auto"
            >
              <path d="M0 0 L5 2.5 L0 5 Z" fill="var(--falcon-green)" />
            </marker>
          </defs>
          <path
            d={GOOD_PATH_D}
            className="good-route-mask"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={GOOD_PATH_D}
            className="good-route-path"
            markerEnd="url(#good-path-end)"
            vectorEffect="non-scaling-stroke"
          />
          {GOOD_STEPS.map((step) => {
            const { labelX, labelY } = goodLabelPosition(step.x, step.y);
            return (
              <GoodStep
                key={step.title}
                x={step.x}
                y={step.y}
                labelX={labelX}
                labelY={labelY}
                title={step.title}
                sub={step.sub}
                step={step.step}
                isDestination={"isDestination" in step && step.isDestination}
              />
            );
          })}
        </svg>
      </OverlayFrame>
    </div>
  );
}
