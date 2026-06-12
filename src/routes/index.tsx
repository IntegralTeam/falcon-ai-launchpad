import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import falconNavbarLogo from "../assets/falcon-navbar-logo.png";
import falconLogoMini from "../assets/falcon-logo-mini.png";
import { learnWorldsAiFundamentalsUrl, learnWorldsCoursesUrl } from "../lib/learnworlds";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falcon Academy — Learn AI as a Business Advantage" },
      { name: "description", content: "A practical four-course AI for Business program: fundamentals, tools, agents and implementation. Build real artifacts, not just prompts." },
      { property: "og:title", content: "Falcon Academy — AI for Business" },
      { property: "og:description", content: "Master AI tools and decision-making to make your business competitive and future-proof." },
    ],
  }),
  component: Landing,
});

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#program", label: "Program" },
    { href: "#courses", label: "Courses" },
    { href: "#results", label: "Results" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="container-x flex items-center justify-between py-3.5">
        <a href="#top" className="flex items-center">
          <img
            src={falconNavbarLogo}
            alt="Falcon Academy"
            className="h-9 w-auto"
          />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a href={learnWorldsAiFundamentalsUrl} className="btn-accent !py-2.5 !px-4 text-sm">
            Enroll in AI Fundamentals
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-md border border-border p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="block h-0.5 w-5 bg-foreground" />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col gap-3 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href={learnWorldsAiFundamentalsUrl} onClick={() => setOpen(false)} className="btn-accent">
              Enroll in AI Fundamentals
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function CheckDot() {
  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-falcon-green/15 text-falcon-green">
      <svg viewBox="0 0 20 20" className="h-3 w-3 fill-current">
        <path d="M7.6 13.2 4.4 10l-1.2 1.2 4.4 4.4 9.2-9.2-1.2-1.2z" />
      </svg>
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-falcon-sand to-white" />
      <div className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-falcon-red" />
            <span className="h-2.5 w-2.5 rounded-full bg-falcon-gold" />
            <span className="h-2.5 w-2.5 rounded-full bg-falcon-green" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">AI Workflow · Live</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Use cases", value: "12", tone: "green" },
            { label: "Tools tested", value: "8", tone: "gold" },
            { label: "Pilots", value: "3", tone: "ink" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-border p-3">
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div
                className="mt-1 text-2xl font-extrabold"
                style={{
                  color:
                    s.tone === "green"
                      ? "var(--falcon-green)"
                      : s.tone === "gold"
                      ? "var(--falcon-gold)"
                      : "var(--falcon-ink)",
                }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-3">
          {[
            { name: "Contract review · Claude", pct: 82, color: "var(--falcon-green)" },
            { name: "Sales draft · ChatGPT", pct: 64, color: "var(--falcon-gold)" },
            { name: "Internal RAG · Self-hosted", pct: 41, color: "var(--falcon-ink)" },
          ].map((b) => (
            <div key={b.name}>
              <div className="flex items-center justify-between text-xs font-medium">
                <span>{b.name}</span>
                <span className="text-muted-foreground">{b.pct}%</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-muted">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${b.pct}%`, backgroundColor: b.color }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-falcon-sand p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Approval gate</div>
            <div className="mt-1 text-sm font-semibold">Human-in-the-loop ✓</div>
          </div>
          <div className="rounded-lg bg-falcon-sand p-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Data class</div>
            <div className="mt-1 text-sm font-semibold">Confidential · API</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(199,161,90,0.18), transparent 70%), radial-gradient(50% 50% at 10% 90%, rgba(0,132,61,0.12), transparent 70%)",
        }}
      />
      <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-falcon-gold" />
            UAE-based · Globally trusted
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Learn to use AI as a <span className="text-falcon-green">business advantage</span> — not a buzzword.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A practical four-course program for business owners, managers, consultants and analysts who want to
            understand AI, choose the right tools, build real workflows and safely adopt AI agents.
          </p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            From AI fundamentals to hands-on tool use, agentic workflows and implementation planning — learn how
            models work, how to compare tools, prompt effectively, verify outputs, and decide when AI should
            (or should not) be used.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={learnWorldsAiFundamentalsUrl} className="btn-primary">Start with AI Fundamentals</a>
            <a href={learnWorldsCoursesUrl} className="btn-gold">Explore full program</a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckDot /> 4 sequential courses</div>
            <div className="flex items-center gap-2"><CheckDot /> Real business artifacts</div>
            <div className="flex items-center gap-2"><CheckDot /> No coding required</div>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function ProblemSolution() {
  const problems = [
    "We test AI tools randomly",
    "Unclear what data we can upload to AI models",
    "AI outputs need hours of re-verification",
    "No governance — everyone does their own thing",
  ];
  const solutions = [
    "Systematic path: Fundamentals → Tools → Agents → Strategy",
    "Verification checklists and data safety rules",
    "Practical artifacts: Readiness Brief, Tool Portfolio, Roadmap",
    "Human-in-the-loop design across every workflow",
  ];
  return (
    <section className="section-pad bg-falcon-sand">
      <div className="container-x grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-8">
          <span className="eyebrow" style={{ background: "rgba(200,16,46,0.10)", color: "var(--falcon-red)" }}>
            The chaos today
          </span>
          <h3 className="mt-4 text-2xl font-bold">What teams sound like without a system</h3>
          <ul className="mt-6 space-y-4">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-falcon-red/10 text-falcon-red font-bold">
                  ✕
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-falcon-green/25 bg-white p-8 shadow-[var(--shadow-elevate)]">
          <span className="eyebrow" style={{ background: "rgba(0,132,61,0.10)", color: "var(--falcon-green)" }}>
            The Falcon Academy way
          </span>
          <h3 className="mt-4 text-2xl font-bold">A clear path to capable, safe adoption</h3>
          <ul className="mt-6 space-y-4">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckDot />
                <span className="text-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    ["Teaches one tool", "Teaches durable decision-making across tools"],
    ["Only prompts", "Models, tools, workflows, deployment, verification"],
    ["Hype language", "Practical business judgment"],
    ["Ends with a quiz", "Ends with business artifacts (brief, roadmap)"],
    ["Jumps to automation", "Builds readiness before agents and automation"],
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why we are different</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Most courses teach you which buttons to press.{" "}
            <span className="text-falcon-green">We teach you how to decide.</span>
          </h2>
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-1 bg-falcon-sand text-sm font-semibold uppercase tracking-wide sm:grid-cols-2">
            <div className="p-4 text-muted-foreground">Typical AI course</div>
            <div className="border-t border-border p-4 text-falcon-green sm:border-l sm:border-t-0">
              Falcon Academy
            </div>
          </div>
          {rows.map(([a, b], i) => (
            <div key={i} className="grid grid-cols-1 border-t border-border bg-white sm:grid-cols-2">
              <div className="p-5 text-muted-foreground line-through decoration-falcon-red/40">{a}</div>
              <div className="border-t border-border p-5 font-medium sm:border-l sm:border-t-0">
                <span className="mr-2 text-falcon-green">✓</span>
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconBlueprint() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 8h18M8 21V8M14 12h4M14 16h4" />
    </svg>
  );
}
function IconABTest() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="8" height="16" rx="1.5" />
      <rect x="13" y="4" width="8" height="16" rx="1.5" />
      <path d="M5 9h4M15 9h4M5 13h4M15 13h4" />
    </svg>
  );
}
function IconGearEye() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </svg>
  );
}
function IconMapFlags() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  );
}

const COURSES = [
  { id: "course-1", n: "01", title: "AI Fundamentals for Business Decision-Makers", tagline: "Understand AI before you choose tools.", artifact: "AI Use-Case Readiness Brief", Icon: IconBlueprint },
  { id: "course-2", n: "02", title: "AI Tools & Practical Cases", tagline: "Move from AI understanding to practical tool use.", artifact: "AI Tool Testing Portfolio", Icon: IconABTest },
  { id: "course-3", n: "03", title: "AI Agents & Automation", tagline: "Design AI workflows that do more than answer questions.", artifact: "Agentic Workflow Blueprint", Icon: IconGearEye },
  { id: "course-4", n: "04", title: "AI Strategy, Implementation & Operating Model", tagline: "Turn AI experiments into responsible business capability.", artifact: "Business AI Implementation Roadmap", Icon: IconMapFlags },
];

function Program() {
  return (
    <section id="program" className="section-pad bg-falcon-sand">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Program roadmap</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Four courses. One <span className="text-falcon-green">decision-making system</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Take them in sequence or jump in at the level that fits your team.
          </p>
        </div>
        <div id="courses" className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COURSES.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevate)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold text-falcon-gold/80">{c.n}</span>
                <div className="rounded-xl bg-falcon-sand p-2.5 text-falcon-green"><c.Icon /></div>
              </div>
              <h3 className="mt-5 text-lg font-bold leading-tight">{c.title}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">{c.tagline}</p>
              <div className="mt-5 rounded-lg border border-dashed border-falcon-gold/50 bg-falcon-gold/5 p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-falcon-gold">Final artifact</div>
                <div className="mt-1 text-sm font-semibold">{c.artifact}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-2 last:border-0 last:pb-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-semibold">{value}</span>
    </div>
  );
}

function Results() {
  return (
    <section id="results" className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">What you will build</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            A portfolio of <span className="text-falcon-green">working business artifacts</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
            <div className="text-xs font-bold uppercase tracking-wider text-falcon-gold">Artifact · 01</div>
            <h3 className="mt-1 text-xl font-bold">AI Use-Case Readiness Brief</h3>
            <div className="mt-4 space-y-3 rounded-xl bg-falcon-sand p-4 text-sm">
              <Row label="Workflow" value="Vendor contract review" />
              <Row label="Data sensitivity" value="Confidential — legal" />
              <Row label="Model category" value="Hosted API · enterprise tier" />
              <Row label="Human review" value="Required before sign-off" />
              <Row label="Next steps" value="Pilot with 10 contracts · 4 weeks" />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
            <div className="text-xs font-bold uppercase tracking-wider text-falcon-gold">Artifact · 02</div>
            <h3 className="mt-1 text-xl font-bold">AI Tool Testing Portfolio</h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-border text-sm">
              <div className="grid grid-cols-3 bg-falcon-sand p-3 font-semibold">
                <div>Criterion</div>
                <div>ChatGPT</div>
                <div>Claude</div>
              </div>
              {[
                ["Clause extraction", "Good", "Excellent"],
                ["Tone control", "Excellent", "Good"],
                ["Long contracts", "Limited", "Strong"],
                ["Risk flagging", "Good", "Excellent"],
              ].map((r) => (
                <div key={r[0]} className="grid grid-cols-3 border-t border-border p-3">
                  <div className="text-muted-foreground">{r[0]}</div>
                  <div>{r[1]}</div>
                  <div className="font-semibold text-falcon-green">{r[2]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
            <div className="text-xs font-bold uppercase tracking-wider text-falcon-gold">Artifact · 03</div>
            <h3 className="mt-1 text-xl font-bold">Agentic Workflow Blueprint</h3>
            <div className="mt-6 flex items-center justify-between gap-2 text-xs font-semibold">
              {["User", "Agent", "Approval", "Action"].map((s, i) => (
                <div key={s} className="flex flex-1 items-center">
                  <div
                    className={`flex-1 rounded-lg border p-3 text-center ${
                      i === 2
                        ? "border-falcon-gold bg-falcon-gold/10 text-falcon-ink"
                        : "border-border bg-falcon-sand"
                    }`}
                  >
                    {s}
                  </div>
                  {i < 3 && <span className="px-1 text-muted-foreground">→</span>}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Every agent runs through approval gates and risk controls before any external action.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
            <div className="text-xs font-bold uppercase tracking-wider text-falcon-gold">Artifact · 04</div>
            <h3 className="mt-1 text-xl font-bold">Business AI Implementation Roadmap</h3>
            <div className="mt-6 space-y-3">
              {[
                { phase: "Phase 1 · Discovery", w: "20%", color: "var(--falcon-green)" },
                { phase: "Phase 2 · Pilots", w: "45%", color: "var(--falcon-gold)" },
                { phase: "Phase 3 · Governance", w: "70%", color: "var(--falcon-ink)" },
                { phase: "Phase 4 · Scale", w: "95%", color: "var(--falcon-red)" },
              ].map((p) => (
                <div key={p.phase}>
                  <div className="flex justify-between text-xs font-semibold">
                    <span>{p.phase}</span>
                    <span className="text-muted-foreground">{p.w}</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-muted">
                    <div className="h-full rounded-full" style={{ width: p.w, backgroundColor: p.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center italic text-muted-foreground">
          These are not homework. You finish the program with working documents you can apply immediately.
        </p>
      </div>
    </section>
  );
}

function Audience() {
  const personas = [
    { icon: "👑", title: "Business owners & founders" },
    { icon: "🧭", title: "Managers & team leads" },
    { icon: "📊", title: "Consultants & analysts" },
    { icon: "📣", title: "Marketing & sales professionals" },
    { icon: "⚙️", title: "Operations & project managers" },
    { icon: "🤝", title: "HR & people ops" },
  ];
  return (
    <section className="section-pad bg-falcon-sand">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Who it is for</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Built for ambitious professionals who want to{" "}
            <span className="text-falcon-green">level up</span> or start a new venture.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <div
              key={p.title}
              className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 transition-all hover:border-falcon-green/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-falcon-green/10 text-2xl">
                {p.icon}
              </div>
              <div className="min-w-0 font-semibold">{p.title}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
          You do not need to be technical. You do need to make better decisions about AI.
        </p>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    "Explain AI systems in plain business language",
    "Compare LLMs, RAG, agents, APIs, self-hosted options",
    "Match AI tools to business workflows",
    "Write prompts that produce useful outputs",
    "Evaluate AI outputs for accuracy, bias and privacy risks",
    "Build prompt libraries and review habits",
    "Design AI-assisted workflows with human-in-the-loop",
    "Prepare AI pilots with success criteria and governance",
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Capabilities you gain</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            What learners will be able to do
          </h2>
        </div>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-x-10 gap-y-4 md:grid-cols-2">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckDot />
              <span className="text-foreground">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      <div className="mt-1 rounded-lg border border-border bg-falcon-sand px-3 py-2.5 text-sm text-muted-foreground">
        {placeholder}
      </div>
    </label>
  );
}

function Course1Deep() {
  return (
    <section id="enroll" className="section-pad bg-falcon-ink text-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow" style={{ background: "rgba(199,161,90,0.18)", color: "var(--falcon-gold)" }}>
            Course 01 · Entry point
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Start with AI Fundamentals — leave with a{" "}
            <span className="text-falcon-gold">ready-to-use decision framework</span>.
          </h2>
          <p className="mt-5 text-white/75">
            Covered topics include tokens, context windows, embeddings, hosted vs self-hosted models, prompting,
            verification and privacy — explained for decision-makers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={learnWorldsAiFundamentalsUrl} className="btn-accent">Enroll in Course 1</a>
            <a href={learnWorldsCoursesUrl} className="btn-gold" style={{ color: "white", borderColor: "var(--falcon-gold)" }}>
              See full program
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Access to materials for 6 months.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-6 text-foreground shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-falcon-gold">
              AI Use-Case Readiness Brief
            </div>
            <div className="text-xs text-muted-foreground">Preview</div>
          </div>
          <div className="mt-4 space-y-4 text-sm">
            <Field label="Workflow" placeholder="e.g. Inbound lead qualification" />
            <Field label="Data sensitivity" placeholder="Public · Internal · Confidential" />
            <Field label="Model category" placeholder="Hosted · API · Self-hosted" />
            <Field label="Human verification needed" placeholder="When and by whom" />
            <Field label="Expected benefit" placeholder="Time saved · quality gained" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const groups = [
    { title: "For individuals", icon: "🎯", points: ["Confidence with AI", "Better decisions", "Verification skills", "Career value"] },
    { title: "For managers", icon: "🧩", points: ["Team adoption without chaos", "Clear tool evaluation", "Higher productivity"] },
    { title: "For business owners", icon: "🏛️", points: ["Time & cost savings", "A real roadmap", "Staff readiness", "Safe adoption"] },
  ];
  return (
    <section className="section-pad bg-falcon-sand">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Business benefits</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Value at every level</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-white p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-falcon-green/10 text-2xl">
                {g.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-falcon-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Do I need technical experience?", a: "No. The program is built for business learners. You learn concepts only at the level needed to make decisions." },
  { q: "Is this only about ChatGPT?", a: "No. We cover multimodal tools, RAG systems, APIs, open-source models, self-hosted AI, agents and automation." },
  { q: "Is AI automation safe for confidential business data?", a: "Yes — the program teaches you to choose between hosted, API and on-premise options, and how to implement human review gates and data handling rules." },
  { q: "Will I learn to build AI agents?", a: "Yes, but only after building the judgment to use them safely. Course 3 focuses on agentic workflows with controls." },
  { q: "What do I leave with?", a: "Four practical artifacts: Readiness Brief, Tool Portfolio, Agentic Blueprint and Implementation Roadmap — plus the skills to keep using them." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Honest answers, before you enroll.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Still unsure? Reach out and we will help you choose the right entry course for your role.
          </p>
        </div>
        <div className="divide-y divide-border rounded-2xl border border-border bg-white">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full text-left"
              >
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <span className="font-semibold">{f.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border transition-[transform,background-color,border-color,color] ${
                      isOpen ? "rotate-45 border-falcon-green bg-falcon-green text-white" : ""
                    }`}
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                      <path
                        d="M6 1.5v9M1.5 6h9"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                {isOpen && <div className="px-6 pb-5 text-muted-foreground">{f.a}</div>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad bg-falcon-sand">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-falcon-gold/30 bg-white p-10 text-center md:p-16">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(40% 60% at 90% 0%, rgba(199,161,90,0.18), transparent 70%), radial-gradient(40% 60% at 0% 100%, rgba(0,132,61,0.12), transparent 70%)",
            }}
          />
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Stop chaotic experiments. <br className="hidden sm:block" />
            Start <span className="text-falcon-green">systematic AI adoption</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Join Falcon Academy and build your competitive advantage with AI.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={learnWorldsAiFundamentalsUrl} className="btn-primary">Start with AI Fundamentals</a>
            <a href={learnWorldsCoursesUrl} className="btn-gold">View all courses</a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Access to materials for 6 months. Based in UAE, serving the world.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-x grid gap-8 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex flex-col items-start gap-3">
            <img
              src={falconLogoMini}
              alt=""
              aria-hidden="true"
              className="h-15 w-auto"
            />
            <img
              src={falconNavbarLogo}
              alt="Falcon Academy"
              className="h-8 w-auto max-w-[220px]"
            />
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Practical AI for Business. Built in the UAE, designed for ambitious teams worldwide.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">Dubai, United Arab Emirates</div>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Program</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={learnWorldsAiFundamentalsUrl} className="hover:text-falcon-green">AI Fundamentals</a></li>
            <li><a href={learnWorldsCoursesUrl} className="hover:text-falcon-green">Tools & Cases</a></li>
            <li><a href={learnWorldsCoursesUrl} className="hover:text-falcon-green">Agents & Automation</a></li>
            <li><a href={learnWorldsCoursesUrl} className="hover:text-falcon-green">Strategy & Roadmap</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-falcon-green">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-falcon-green">Terms of Use</a></li>
            <li><a href="#" className="hover:text-falcon-green">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Falcon Expert Institute FZ-LLC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <Comparison />
        <Program />
        <Results />
        <Audience />
        <Outcomes />
        <Course1Deep />
        <Benefits />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
