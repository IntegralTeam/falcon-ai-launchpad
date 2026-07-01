import { createFileRoute } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falcon Innovation Academy — Learn AI as a Business Advantage" },
      {
        name: "description",
        content:
          "A practical four-course AI for Business program: fundamentals, tools, agents and implementation. Build real artifacts, not just prompts.",
      },
      { property: "og:title", content: "Falcon Innovation Academy — AI for Business" },
      {
        property: "og:description",
        content: "Master AI tools and decision-making to make your business competitive and future-proof.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const stats = [
  { dot: "bg-mint", label: "4 SEQUENTIAL COURSES" },
  { dot: "bg-sky", label: "REAL BUSINESS ARTIFACTS" },
  { dot: "bg-amber-400", label: "NO CODING REQUIRED" },
];

const courses = [
  {
    n: "01",
    tint: "bg-sky/25 group-hover:bg-sky/50",
    title: "AI Fundamentals for Business Decision-Makers",
    body: "Understand AI before you choose tools. Learn the mechanics, limits, privacy basics and decision-making models that matter for business use.",
    tag: "READINESS BRIEF",
  },
  {
    n: "02",
    tint: "bg-mint/40 group-hover:bg-mint/70",
    title: "AI Tools & Practical Cases",
    body: "Move from generic prompting to evaluated tools. Compare vendors, use multimodal workflows, and build a practical tool portfolio for real tasks.",
    tag: "TOOL PORTFOLIO",
  },
  {
    n: "03",
    tint: "bg-amber-200/60 group-hover:bg-amber-300/80",
    title: "AI Agents & Automation",
    body: "Design AI workflows that do more than answer questions. Build agentic processes with controls, supervision and safe handoffs.",
    tag: "AGENTIC BLUEPRINT",
  },
  {
    n: "04",
    tint: "bg-ink/10 group-hover:bg-ink/20",
    title: "AI Strategy, Implementation & Operating Model",
    body: "Turn experiments into a governed operating model. Define rollout phases, ownership, policies and an implementation roadmap.",
    tag: "ROADMAP",
  },
];

const outcomes = [
  { metric: "01", label: "AI Use-Case Readiness Brief" },
  { metric: "02", label: "Tool Portfolio" },
  { metric: "03", label: "Agentic Blueprint" },
  { metric: "04", label: "Implementation Roadmap" },
];

const faqs = [
  {
    q: "Do I need technical experience?",
    a: "No. The program is built for business learners. You learn concepts only at the level needed to make decisions.",
  },
  {
    q: "Is this only about ChatGPT?",
    a: "No. We cover multimodal tools, RAG systems, APIs, open-source models, self-hosted AI, agents and automation.",
  },
  {
    q: "Is AI automation safe for confidential business data?",
    a: "Yes — the program teaches you to choose between hosted, API and on-premise options, and how to implement human review gates and data handling rules.",
  },
  {
    q: "Will I learn to build AI agents?",
    a: "Yes, but only after building the judgment to use them safely. Course 3 focuses on agentic workflows with controls.",
  },
  {
    q: "What do I leave with?",
    a: "Four practical artifacts: Readiness Brief, Tool Portfolio, Agentic Blueprint and Implementation Roadmap — plus the skills to keep using them.",
  },
];
function HeroCraft() {
  return (
    <div className="relative hidden lg:block">
      {/* Halo blur */}
      <div className="absolute inset-8 rounded-full bg-mint/40 blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -top-6 -right-8 size-24 rounded-full bg-sky/50 blur-2xl pointer-events-none" />

      {/* 3D rotating isometric wireframe */}
      <div className="relative perspective-scene aspect-square w-full max-w-[520px] mx-auto">
        {/* Ambient thin ring */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full text-ink/70 animate-float"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="200" cy="200" r="180" className="opacity-20" />
          <circle cx="200" cy="200" r="150" className="opacity-15" strokeDasharray="2 4" />
          <circle cx="200" cy="200" r="120" className="opacity-10" />
          {/* Corner ticks */}
          {[0, 90, 180, 270].map((r) => (
            <g key={r} transform={`rotate(${r} 200 200)`}>
              <line x1="200" y1="12" x2="200" y2="26" strokeWidth="1.5" />
            </g>
          ))}
        </svg>

        {/* Rotating cube stack */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative animate-spin-y" style={{ width: 260, height: 260 }}>
            {/* Cube 1 - large */}
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                width: 200,
                height: 200,
                transformStyle: "preserve-3d",
                transform: "translate3d(-50%, -50%, 0)",
              }}
            >
              <div className="face-3d" style={{ transform: "translateZ(100px)" }} />
              <div className="face-3d" style={{ transform: "rotateY(180deg) translateZ(100px)" }} />
              <div className="face-3d" style={{ transform: "rotateY(90deg) translateZ(100px)" }} />
              <div className="face-3d" style={{ transform: "rotateY(-90deg) translateZ(100px)" }} />
              <div
                className="face-3d"
                style={{
                  transform: "rotateX(90deg) translateZ(100px)",
                  background:
                    "linear-gradient(135deg, rgba(181,234,215,0.35), rgba(160,196,255,0.15))",
                }}
              />
              <div className="face-3d" style={{ transform: "rotateX(-90deg) translateZ(100px)" }} />
            </div>

            {/* Cube 2 — offset small */}
            <div
              className="absolute"
              style={{
                width: 90,
                height: 90,
                left: "78%",
                top: "18%",
                transformStyle: "preserve-3d",
                transform: "translate3d(-50%, -50%, 120px)",
              }}
            >
              <div
                className="face-3d"
                style={{
                  transform: "translateZ(45px)",
                  background: "rgba(10,10,10,0.9)",
                  borderColor: "rgba(10,10,10,1)",
                }}
              />
              <div className="face-3d" style={{ transform: "rotateY(180deg) translateZ(45px)" }} />
              <div className="face-3d" style={{ transform: "rotateY(90deg) translateZ(45px)" }} />
              <div className="face-3d" style={{ transform: "rotateY(-90deg) translateZ(45px)" }} />
              <div className="face-3d" style={{ transform: "rotateX(90deg) translateZ(45px)" }} />
              <div className="face-3d" style={{ transform: "rotateX(-90deg) translateZ(45px)" }} />
            </div>

            {/* Cube 3 — bottom-left accent */}
            <div
              className="absolute"
              style={{
                width: 56,
                height: 56,
                left: "12%",
                top: "82%",
                transformStyle: "preserve-3d",
                transform: "translate3d(-50%, -50%, -80px)",
              }}
            >
              <div
                className="face-3d"
                style={{
                  transform: "translateZ(28px)",
                  background: "var(--mint)",
                  borderColor: "rgba(10,10,10,0.85)",
                }}
              />
              <div className="face-3d" style={{ transform: "rotateY(180deg) translateZ(28px)" }} />
              <div className="face-3d" style={{ transform: "rotateY(90deg) translateZ(28px)" }} />
              <div className="face-3d" style={{ transform: "rotateY(-90deg) translateZ(28px)" }} />
              <div className="face-3d" style={{ transform: "rotateX(90deg) translateZ(28px)" }} />
              <div className="face-3d" style={{ transform: "rotateX(-90deg) translateZ(28px)" }} />
            </div>
          </div>
        </div>

        {/* Overlay SVG connectors + labels */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
        >
          <g stroke="#0a0a0a" strokeWidth="1">
            <path
              d="M 60 340 L 140 260"
              className="animate-draw"
              style={{ ["--dash" as string]: "160" }}
            />
            <path
              d="M 340 90 L 270 150"
              className="animate-dash"
              style={{ animationDelay: "0.4s" }}
            />
          </g>
          <g fontFamily="ui-monospace, Menlo, monospace" fontSize="9" fontWeight="700" fill="#0a0a0a">
            <text x="18" y="352" letterSpacing="2">
              INPUT · 01
            </text>
            <text x="278" y="82" letterSpacing="2">
              AGENT · 02
            </text>
            <text x="300" y="360" letterSpacing="2" fill="#0a0a0a" opacity="0.5">
              OUTPUT · 03
            </text>
          </g>
          {/* Corner brackets */}
          <g stroke="#0a0a0a" strokeWidth="1.5" opacity="0.6">
            <path d="M 8 8 L 8 28 M 8 8 L 28 8" />
            <path d="M 392 8 L 392 28 M 392 8 L 372 8" />
            <path d="M 8 392 L 8 372 M 8 392 L 28 392" />
            <path d="M 392 392 L 392 372 M 392 392 L 372 392" />
          </g>
        </svg>

        {/* Live badge */}
        <div className="absolute -bottom-2 left-2 flex items-center gap-2 bg-ink text-white px-3 py-1.5 rounded-sm">
          <span className="size-1.5 rounded-full bg-mint animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
            AI Workflow · Live
          </span>
        </div>
      </div>
    </div>
  );
}


/** Brand mark: wordmark + UAE flag accent stripes */
function FalconLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col leading-none ${className}`}>
      <span className="text-[1.35rem] font-extrabold tracking-tighter italic text-ink">
        FALCON<span className="text-muted-foreground">.</span>ACADEMY
      </span>
      <div className="mt-1.5 flex items-center gap-1">
        <span className="h-[3px] w-8 bg-uae-red" />
        <span className="h-[3px] w-8 bg-uae-green" />
        <span className="h-[3px] w-8 bg-uae-black" />
      </div>
    </div>
  );
}

function Home() {
  const navigationLinks = [
    { href: "#program", label: "Solution" },
    { href: "#courses", label: "Courses" },
    { href: "#outcomes", label: "Results" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-offwhite text-ink font-sora">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-offwhite/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-5">
          <div className="flex items-center space-x-12">
            <a href="#">
              <FalconLogo />
            </a>
            <div className="hidden md:flex space-x-8 text-[12px] font-semibold uppercase tracking-widest">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-black/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://learn.falcon.academy/courses"
              className="hidden md:inline-block px-5 py-2.5 bg-ink text-offwhite text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-black/80 transition-colors"
            >
              Explore Courses
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="flex size-10 items-center justify-center rounded-sm bg-ink text-white transition-colors hover:bg-black/80 md:hidden"
                >
                  <span className="relative block w-5">
                    <span className="mb-1 block h-0.5 bg-white" />
                    <span className="mb-1 block h-0.5 bg-white" />
                    <span className="block h-0.5 bg-white" />
                  </span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88vw] max-w-sm border-l border-black/10 bg-offwhite px-6 py-16">
                <SheetTitle className="text-left text-sm font-bold uppercase tracking-[0.28em] text-ink">
                  Navigation
                </SheetTitle>
                <div className="mt-10 flex flex-col gap-5">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-black/60"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <a
                  href="https://learn.falcon.academy/courses"
                  className="mt-10 inline-flex w-full items-center justify-center rounded-sm bg-ink px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-offwhite transition-colors hover:bg-black/80"
                >
                  Explore Courses
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-24 px-8 max-w-[1440px] mx-auto min-h-[92vh] flex flex-col justify-between overflow-hidden">
        <div className="absolute top-20 right-0 w-1/2 h-full opacity-25 pointer-events-none bg-grid-lines" />
        <div className="absolute -bottom-32 -left-32 w-[720px] h-[720px] bg-diagonal-line pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-12 items-center animate-enter">
          <div>
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-black/10 bg-white/60">
              <span className="size-2 rounded-full bg-mint" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                UAE-based · Globally trusted
              </span>
            </div>

            <h1 className="text-[clamp(2.75rem,6.6vw,6.75rem)] leading-[0.88] font-extrabold tracking-tighter uppercase text-balance">
              Learn AI as a<br />
              business{" "}
              <span
                aria-hidden
                className="inline-flex h-[0.9em] overflow-hidden align-baseline translate-y-[0.08em]"
              >
                <span className="animate-word-cycle flex flex-col">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink via-black/40 to-ink">
                    advantage
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink via-black/40 to-ink">
                    workflow
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink via-black/40 to-ink">
                    edge
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink via-black/40 to-ink">
                    moat
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink via-black/40 to-ink">
                    advantage
                  </span>
                </span>
              </span>
              <span className="sr-only">advantage, workflow, edge, moat</span>
              <br />
              not a{" "}
              <span className="underline decoration-sky decoration-[10px] underline-offset-[10px]">
                buzzword
              </span>
              .
            </h1>

            <div className="mt-10 flex flex-wrap gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center space-x-2 bg-white px-4 py-2 border border-black/5 rounded-full"
                >
                  <div className={`size-2 rounded-full ${s.dot}`} />
                  <span className="text-[11px] font-bold tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3D animated composition — right */}
          <HeroCraft />
        </div>

        <div className="relative z-10 mt-16 grid md:grid-cols-[auto_1fr] gap-10 md:items-end">
          <a
            href="https://learn.falcon.academy/course/ai-fundamentals-for-business-decision-makers"
            className="inline-block px-12 py-6 bg-mint text-ink font-extrabold text-sm uppercase tracking-[0.2em] rounded-sm hover:translate-x-2 transition-transform duration-300"
          >
            Start with AI Fundamentals →
          </a>
          <p className="max-w-md text-sm font-medium leading-relaxed text-black/60">
            A practical four-course program for business owners, managers, consultants and
            analysts who want to understand AI, choose the right tools, build real workflows
            and safely adopt AI agents.
          </p>
        </div>
      </header>


      {/* Program overview — dark break */}
      <section id="program" className="w-full bg-ink py-32 px-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-diagonal-lines-dense opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">
          <div>
            <span className="text-sky text-xs font-extrabold uppercase tracking-[0.3em] block mb-6 italic">
              // From chaos to capability
            </span>
            <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-[0.95] tracking-tighter">
              Shift from the chaotic use of AI tools to the deliberate construction of processes.
            </h2>
            <p className="text-white/55 mt-8 text-lg max-w-md leading-relaxed">
              Falcon Innovation Academy is a practical AI for Business program. You leave with
              real business artifacts, not just prompts.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="text-sky text-3xl font-extrabold">4</div>
                <div className="text-white/40 text-[10px] uppercase font-bold mt-1 tracking-widest">
                  Sequential courses
                </div>
              </div>
              <div>
                <div className="text-mint text-3xl font-extrabold">Real</div>
                <div className="text-white/40 text-[10px] uppercase font-bold mt-1 tracking-widest">
                  Business artifacts
                </div>
              </div>
              <div>
                <div className="text-white text-3xl font-extrabold">Safe</div>
                <div className="text-white/40 text-[10px] uppercase font-bold mt-1 tracking-widest">
                  Agent adoption
                </div>
              </div>
              <div>
                <div className="text-white text-3xl font-extrabold">UAE</div>
                <div className="text-white/40 text-[10px] uppercase font-bold mt-1 tracking-widest">
                  Based, globally trusted
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square bg-white/[0.03] outline-1 -outline-offset-1 outline-white/10 rounded-sm grid place-items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-lines opacity-[0.06]" />
              {/* Live workflow diagram */}
              <div className="relative z-10 w-[85%] space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">
                    AI Workflow · Live
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-mint animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-mint">
                      Verified
                    </span>
                  </span>
                </div>
                <div className="text-white text-2xl font-extrabold tracking-tight">
                  Contract review
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Intake", "AI draft", "Verify", "Approve"].map((step, i) => (
                    <span
                      key={step}
                      className={`px-3 py-1.5 rounded-sm text-[11px] font-bold uppercase tracking-wider ${
                        i < 3
                          ? "bg-mint text-ink"
                          : "border border-white/20 text-white/60"
                      }`}
                    >
                      {i < 3 ? "✓ " : ""}
                      {step}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                    <span>Verification confidence</span>
                    <span>86%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[86%] bg-mint rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[
                    { l: "Queued", v: "2", c: "text-white" },
                    { l: "In progress", v: "1", c: "text-sky" },
                    { l: "Done today", v: "14", c: "text-mint" },
                  ].map((t) => (
                    <div
                      key={t.l}
                      className="border border-white/10 rounded-sm p-3 text-center"
                    >
                      <div className={`text-2xl font-extrabold ${t.c}`}>{t.v}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-white/40 mt-1">
                        {t.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-mint p-8 hidden md:block max-w-[240px]">
              <div className="text-ink font-extrabold text-xl leading-none italic">
                "AI you can actually ship."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses ladder */}
      <section id="courses" className="py-32 px-8 max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between mb-20 gap-8 flex-wrap">
          <h2 className="text-[clamp(3rem,7vw,7rem)] font-extrabold tracking-tighter uppercase leading-[0.8]">
            The <br />
            Curriculum
          </h2>
          <div className="max-w-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 block mb-3">
              Sequence · 01 → 04
            </span>
            <p className="text-sm text-black/60 leading-relaxed">
              Four sequential courses. Take them in order. Stop when you have what you need — or
              go all the way to a deployable plan.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-black/5 border border-black/5">
          {courses.map((c) => (
            <div
              key={c.n}
              className="bg-offwhite p-10 group cursor-pointer hover:bg-white transition-colors flex flex-col"
            >
              <div
                className={`size-12 rounded-sm flex items-center justify-center mb-12 transition-colors ${c.tint}`}
              >
                <span className="text-ink font-extrabold">{c.n}</span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-4">{c.title}</h3>
              <p className="text-sm text-black/60 mb-8 leading-relaxed flex-1">{c.body}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  {c.tag}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest">→</span>
              </div>
              <div className="h-px w-0 group-hover:w-full bg-ink transition-all duration-500 mt-6" />
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="px-8 pb-32">
        <div className="max-w-[1440px] mx-auto border-t border-black/10 pt-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter uppercase leading-[0.9] max-w-3xl">
              Working business artifacts. <br />
              <span className="text-black/40">Not just prompts.</span>
            </h2>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
              What you will build
            </span>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-black/5 border border-black/5">
            {outcomes.map((o) => (
              <div key={o.label} className="bg-offwhite p-12">
                <div className="text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tighter leading-none">
                  {o.metric}
                </div>
                <div className="mt-6 text-sm font-semibold text-black/60 max-w-xs">
                  {o.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-y border-black/10 py-32 px-8">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 block mb-6 italic">
              // Common questions
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter uppercase leading-[0.9]">
              Ask before <br />
              you enrol.
            </h2>
            <p className="text-sm text-black/60 mt-8 max-w-sm leading-relaxed">
              Still unsure? Reach out and we will help you choose the right entry course for
              your role.
            </p>
            <a
              href="mailto:info@falcon.academy"
              className="inline-block mt-8 text-xs font-bold uppercase tracking-widest border-b-2 border-ink pb-1 hover:border-mint transition-colors"
            >
              info@falcon.academy
            </a>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((f, i) => (
              <details key={f.q} className="group py-6" open={i === 0}>
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-xl font-extrabold tracking-tight pr-8">{f.q}</span>
                  <span className="size-8 shrink-0 rounded-full border border-black/15 grid place-items-center text-lg group-open:bg-mint group-open:border-mint transition-colors">
                    <span className="group-open:rotate-45 transition-transform">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm text-black/60 max-w-2xl leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="py-32 px-8 max-w-[1440px] mx-auto">
        <div className="border border-black/10 p-12 md:p-20 bg-mint/30 relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-diagonal-line pointer-events-none opacity-70" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/50 block mb-6">
                Course 01 · Entry point
              </span>
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold tracking-tighter uppercase leading-[0.9]">
                Start with AI Fundamentals. <br />
                Leave with a decision framework.
              </h2>
              <p className="text-sm text-black/70 mt-6 max-w-md leading-relaxed">
                Covered topics include tokens, context windows, embeddings, hosted vs
                self-hosted models, prompting, verification and privacy — explained for
                decision-makers.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://learn.falcon.academy/course/ai-fundamentals-for-business-decision-makers"
                className="inline-block px-12 py-6 bg-ink text-offwhite font-extrabold text-sm uppercase tracking-[0.2em] rounded-sm hover:translate-x-2 transition-transform duration-300 text-center"
              >
                Enroll in Course 1 →
              </a>
              <a
                href="https://learn.falcon.academy/courses"
                className="inline-block px-12 py-6 bg-transparent border border-ink/20 text-ink font-extrabold text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-white transition-colors text-center"
              >
                See full program
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10">
        <div className="flex overflow-hidden py-6 bg-ink text-white">
          <div className="flex shrink-0 items-center whitespace-nowrap uppercase text-[11px] font-bold tracking-[0.4em] opacity-80 animate-marquee">
            {Array.from({ length: 2 }).flatMap(() => [
              "AI as a business advantage",
              "*",
              "Not a buzzword",
              "*",
              "UAE-based · globally trusted",
              "*",
              "Real business artifacts",
              "*",
              "Falcon Innovation Academy",
              "*",
            ]).map((t, i) => (
              <span key={i} className="px-8">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-8 py-20 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <span className="text-3xl font-extrabold tracking-tighter italic">FALCON.</span>
            <p className="mt-6 text-sm text-black/50 max-w-sm leading-relaxed font-semibold">
              Falcon Innovation Academy is a trading brand operated by Falcon Expert Institute
              FZ-LLC.
            </p>
            <p className="mt-3 text-sm text-black/50 max-w-sm leading-relaxed font-semibold">
              VUNE3122, Compass building, AL Hulaila Industrial Zone-FZ, RAK, UAE.
            </p>
            <p className="mt-3 text-sm text-black/50 max-w-sm leading-relaxed font-semibold">
              Educational Licence No 52001001.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-extrabold tracking-widest uppercase mb-6">
              Program
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href="https://learn.falcon.academy/course/ai-fundamentals-for-business-decision-makers"
                  className="hover:text-black/60 transition-colors"
                >
                  AI Fundamentals
                </a>
              </li>
              <li>
                <a
                  href="https://learn.falcon.academy/course/ai-tools-practical-cases"
                  className="hover:text-black/60 transition-colors"
                >
                  Tools & Cases
                </a>
              </li>
              <li>
                <a
                  href="https://learn.falcon.academy/course/ai-agents-automation-design-a-safe-humansupervised-pilot"
                  className="hover:text-black/60 transition-colors"
                >
                  Agents & Automation
                </a>
              </li>
              <li>
                <a
                  href="https://learn.falcon.academy/course/ai-strategy-governance-implementation"
                  className="hover:text-black/60 transition-colors"
                >
                  Strategy & Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-extrabold tracking-widest uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button type="button" className="hover:text-black/60 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-black/60 transition-colors">
                  Terms of Use
                </button>
              </li>
              <li>
                <button type="button" className="hover:text-black/60 transition-colors">
                  Refund & Cancellation Policy
                </button>
              </li>
              <li>
                <a href="mailto:info@falcon.academy" className="hover:text-black/60 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-8 py-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-black/40">
            © 2026 Falcon Expert Institute FZ-LLC. All rights reserved.
          </span>
          <div className="flex gap-6 text-[10px] font-bold tracking-widest uppercase text-black/40" />
        </div>
      </footer>
    </div>
  );
}
