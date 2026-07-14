import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CertificateSection } from "@/components/CertificateSection";
import { UniquenessSection } from "@/components/UniquenessSection";
import { LegalModal, type LegalModalType } from "@/components/LegalModal";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useRepeatInView } from "@/hooks/use-repeat-in-view";

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
        content:
          "Master AI tools and decision-making to make your business competitive and future-proof.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const courses = [
  {
    n: "01",
    title: "AI Fundamentals for Business Decision-Makers",
    body: "Understand AI before you choose tools. Learn the mechanics, limits, privacy basics and decision-making models that matter for business use.",
    tag: "READINESS BRIEF",
    href: "https://learn.falcon.academy/course/ai-fundamentals-for-business-decision-makers",
  },
  {
    n: "02",
    title: "AI Tools & Practical Cases",
    body: "Move from generic prompting to evaluated tools. Compare vendors, use multimodal workflows, and build a practical tool portfolio for real tasks.",
    tag: "TOOL PORTFOLIO",
    href: "https://learn.falcon.academy/course/ai-tools-practical-cases",
  },
  {
    n: "03",
    title: "AI Agents & Automation",
    body: "Design AI workflows that do more than answer questions. Build agentic processes with controls, supervision and safe handoffs.",
    tag: "AGENTIC BLUEPRINT",
    href: "https://learn.falcon.academy/course/ai-agents-automation-design-a-safe-humansupervised-pilot",
  },
  {
    n: "04",
    title: "AI Strategy, Implementation & Operating Model",
    body: "Turn experiments into a governed operating model. Define rollout phases, ownership, policies and an implementation roadmap.",
    tag: "ROADMAP",
    href: "https://learn.falcon.academy/course/ai-strategy-governance-implementation",
  },
];

const faqs = [
  {
    q: "Do I need technical experience?",
    a: "No. The program is built for business learners. You learn concepts only at the level needed to make decisions.",
  },
  {
    q: "Is this only about ChatGPT?",
    a: "No. The programme covers a range of practical AI tools and business applications, not only one platform.",
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

const navigationLinks = [
  { href: "#program", label: "Solution" },
  { href: "#courses", label: "Courses" },
  { href: "#corporate", label: "Corporate" },
  { href: "#certificate", label: "Certificate" },
  { href: "#faq", label: "FAQ" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Home() {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [programRef, programInView] = useRepeatInView<HTMLElement>();
  const [coursesRef, coursesInView] = useRepeatInView<HTMLElement>();
  const [faqRef, faqInView] = useRepeatInView<HTMLElement>();
  const [ctaRef, ctaInView] = useRepeatInView<HTMLElement>();

  return (
    <div className="min-h-screen bg-warm-white text-ink">
      <LegalModal
        type={legalModal}
        open={legalModal !== null}
        onOpenChange={(open) => {
          if (!open) setLegalModal(null);
        }}
      />

      {/* Institution strip + sticky header */}
      <div className="institution-bar" id="top">
        <div className="page-shell institution-bar-inner">
          <p>UAE-based · AI Education</p>
          <div>
            <span>4 Sequential Courses</span>
            <span>Real Business Artifacts</span>
            <span>No Coding Required</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="page-shell header-main">
          <a className="logo-link" href="#top" aria-label="Falcon Innovation Academy home">
            <img
              className="full-logo"
              src="/images/falcon-logo-horizontal.png"
              alt="Falcon Expert Institute — Knowledge. Intelligence. Impact."
            />
          </a>

          <div className="desktop-navigation">
            <nav className="main-nav" aria-label="Primary navigation">
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a className="header-cta" href="https://learn.falcon.academy/courses">
              Explore Courses <Arrow />
            </a>

            <div className="mobile-nav-trigger">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-navy"
                  >
                    <span>Menu</span>
                    <span className="text-xl font-normal" aria-hidden>
                      ☰
                    </span>
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[88vw] max-w-sm border-l border-line bg-warm-white px-6 py-16"
                >
                  <SheetTitle className="text-left text-sm font-bold uppercase tracking-[0.28em] text-navy">
                    Navigation
                  </SheetTitle>
                  <div className="mt-10 flex flex-col gap-5">
                    {navigationLinks.map((link) => (
                      <SheetClose key={link.href} asChild>
                        <a
                          href={link.href}
                          className="text-lg font-semibold tracking-tight text-navy transition-colors hover:text-green"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </div>
                  <SheetClose asChild>
                    <a
                      href="https://learn.falcon.academy/courses"
                      className="button button-navy mt-10 w-full justify-center"
                    >
                      Explore Courses <Arrow />
                    </a>
                  </SheetClose>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Split photo hero — Academy pitch, FEI atmosphere */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <p className="eyebrow">
              <span>UAE-based</span> · AI Education
            </p>
            <h1 id="hero-title">
              Learn AI as a<br />
              business <em>advantage</em>
              <br />
              not a buzzword.
            </h1>
            <p className="hero-lead">
              A practical four-course program for business owners, managers, consultants and
              analysts who want to understand AI, choose the right tools, build real workflows and
              safely adopt AI agents.
            </p>
            <div className="hero-actions">
              <a
                className="button button-navy"
                href="https://learn.falcon.academy/course/ai-fundamentals-for-business-decision-makers"
              >
                Start with AI Fundamentals <Arrow />
              </a>
              <a className="text-link" href="#courses">
                See full program <span>→</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="uae-rule" aria-hidden="true">
                <i></i>
                <b></b>
              </span>
              <p>
                Falcon Innovation Academy is operated by Falcon Expert Institute FZ-LLC, a
                UAE-licensed E-Training Institute. RAKEZ Educational Licence No. 52001001.
              </p>
            </div>
          </div>
        </div>
        <figure className="hero-image">
          <img src="/images/hero-uae.jpg" alt="UAE skyline viewed across the waterfront" />
          <figcaption>
            <span>United Arab Emirates</span>
            <span>UAE&nbsp;&nbsp;·&nbsp;&nbsp;GCC</span>
          </figcaption>
        </figure>
      </section>

      {/* Program mission + image collage */}
      <section
        id="program"
        ref={programRef}
        data-in-view={programInView ? "true" : "false"}
        className="mission-section"
        aria-labelledby="program-title"
      >
        <div className="page-shell mission-grid">
          <div className="mission-copy reveal reveal-left">
            <p className="section-kicker light-kicker">From chaos to capability</p>
            <h2 id="program-title">
              Shift from the chaotic use of AI tools to the deliberate construction of processes.
            </h2>
            <span className="accent-rule" aria-hidden="true">
              <i></i>
              <b></b>
            </span>
            <p className="mission-lead">
              Falcon Innovation Academy is a practical AI for Business program. You leave with real
              business artifacts, not just prompts.
            </p>
            <div className="mission-stats" aria-label="Program highlights">
              <div>
                <strong>4</strong>
                <span>Sequential courses</span>
              </div>
              <div>
                <strong>Real</strong>
                <span>Business artifacts</span>
              </div>
              <div>
                <strong>Safe</strong>
                <span>Agent adoption</span>
              </div>
              <div>
                <strong>UAE</strong>
                <span>Based AI Education</span>
              </div>
            </div>
            <a className="light-link" href="#courses">
              See full program <Arrow />
            </a>
          </div>
          <div className="mission-collage reveal reveal-right" aria-label="Falcon learning community">
            <figure className="mission-main-image">
              <img src="/images/mission.jpg" alt="Multicultural professional team collaborating" />
              <figcaption>International expertise. Regional ambition.</figcaption>
            </figure>
            <figure className="mission-small-image">
              <img src="/images/uae-home.jpg" alt="UAE city skyline" />
              <figcaption>01 / The UAE</figcaption>
            </figure>
            <figure className="mission-small-image second">
              <img src="/images/practical.jpg" alt="Professional classroom" />
              <figcaption>02 / Applied learning</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Curriculum — numbered course grid */}
      <section
        id="courses"
        ref={coursesRef}
        data-in-view={coursesInView ? "true" : "false"}
        className="courses-section"
        aria-labelledby="courses-title"
      >
        <div className="page-shell">
          <div className="courses-heading">
            <div className="reveal reveal-left">
              <p className="section-kicker">Sequence · 01 → 04</p>
              <h2 id="courses-title">
                The
                <br />
                Curriculum
              </h2>
            </div>
            <div
              className="courses-intro reveal reveal-right"
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              <p className="lead-serif">
                Four sequential courses. Take them in order. Stop when you have what you need — or
                go all the way to a deployable plan.
              </p>
            </div>
          </div>

          <div className="course-list">
            {courses.map((course, i) => (
              <a
                className="course-item reveal"
                href={course.href}
                key={course.n}
                style={{ ["--reveal-delay" as string]: `${100 + i * 70}ms` }}
              >
                <span className="course-number">{course.n}</span>
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.body}</p>
                  <span className="course-tag">{course.tag}</span>
                </div>
                <span className="course-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <UniquenessSection />

      {/* Corporate learning — from Expert Institute pattern */}
      <section
        id="corporate"
        className="corporate-section"
        aria-labelledby="corporate-title"
      >
        <div className="corporate-photo">
          <img
            src="/images/corporate-uae.png"
            alt="UAE professionals participating in a corporate learning workshop"
            loading="lazy"
          />
          <div className="corporate-photo-label">
            <span>Tailored programmes</span>
            <b>Team · Leadership · Enterprise</b>
          </div>
        </div>
        <div className="corporate-copy">
          <div className="corporate-copy-inner">
            <p className="section-kicker">For organisations</p>
            <h2 id="corporate-title">
              Corporate Learning
              <br />
              & Certification
            </h2>
            <p className="lead-serif">
              Falcon works with companies, government entities and professional teams to design
              tailored learning programmes aligned with their strategic priorities.
            </p>
            <p>
              Corporate programmes can combine self-paced learning, instructor-led sessions,
              practical workshops, assessments and company-specific case studies.
            </p>
            <p>
              Training can be delivered for individual teams, leadership groups or
              organisation-wide capability development.
            </p>
            <a className="button button-outline" href="mailto:info@falcon.academy">
              Discuss Corporate Training <Arrow />
            </a>
          </div>
        </div>
      </section>

      <CertificateSection />

      {/* FAQ */}
      <section
        id="faq"
        ref={faqRef}
        data-in-view={faqInView ? "true" : "false"}
        className="faq-section"
        aria-labelledby="faq-title"
      >
        <div className="page-shell faq-grid">
          <div className="reveal reveal-left">
            <p className="section-kicker">Common questions</p>
            <h2 id="faq-title">Ask before you enrol.</h2>
            <p>
              Still unsure? Reach out and we will help you choose the right entry course for your
              role.
            </p>
            <a className="text-link" href="mailto:info@falcon.academy" style={{ marginTop: 28 }}>
              info@falcon.academy
            </a>
          </div>

          <div className="faq-list reveal reveal-right">
            {faqs.map((f, i) => (
              <details key={f.q} className="faq-item" open={i === 0}>
                <summary>
                  {f.q}
                  <b aria-hidden="true">+</b>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="apply"
        ref={ctaRef}
        data-in-view={ctaInView ? "true" : "false"}
        className="final-cta"
        aria-labelledby="cta-title"
      >
        <div className="page-shell final-cta-grid">
          <div className="reveal reveal-left">
            <p className="section-kicker light-kicker">Course 01 · Entry point</p>
            <h2 id="cta-title">
              Start with AI Fundamentals.
              <br />
              Leave with a decision framework.
            </h2>
          </div>
          <div
            className="final-cta-copy reveal reveal-right"
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <p>
              Covered topics include tokens, context windows, embeddings, hosted vs self-hosted
              models, prompting, verification and privacy — explained for decision-makers.
            </p>
            <div className="final-actions">
              <a
                className="button button-white"
                href="https://learn.falcon.academy/course/ai-fundamentals-for-business-decision-makers"
              >
                Enroll in Course 1 <Arrow />
              </a>
              <a className="button button-ghost" href="https://learn.falcon.academy/courses">
                See full program <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="page-shell footer-top">
          <div className="footer-brand">
            <a href="#top" aria-label="Falcon Innovation Academy home">
              <img
                className="footer-logo"
                src="/images/falcon-logo-horizontal-light.png"
                alt="Falcon Expert Institute — Knowledge. Intelligence. Impact."
              />
            </a>
            <p>Falcon Innovation Academy is a brand operated by Falcon Expert Institute FZ-LLC.</p>
            <p>VUNE3122, Compass building, AL Hulaila Industrial Zone-FZ, RAK, UAE.</p>
            <p>Educational Licence No 52001001.</p>
          </div>
          <div className="footer-column">
            <h3>Program</h3>
            <a href="https://learn.falcon.academy/course/ai-fundamentals-for-business-decision-makers">
              AI Fundamentals
            </a>
            <a href="https://learn.falcon.academy/course/ai-tools-practical-cases">Tools & Cases</a>
            <a href="https://learn.falcon.academy/course/ai-agents-automation-design-a-safe-humansupervised-pilot">
              Agents & Automation
            </a>
            <a href="https://learn.falcon.academy/course/ai-strategy-governance-implementation">
              Strategy & Roadmap
            </a>
            <a href="#corporate">Corporate Training</a>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <button type="button" onClick={() => setLegalModal("privacy")}>
              Privacy Policy
            </button>
            <button type="button" onClick={() => setLegalModal("terms")}>
              Terms of Use
            </button>
            <button type="button" onClick={() => setLegalModal("refund")}>
              Refund & Cancellation Policy
            </button>
            <a href="mailto:info@falcon.academy">Contact</a>
          </div>
        </div>
        <div className="page-shell footer-bottom">
          <p>© 2026 Falcon Expert Institute FZ-LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
