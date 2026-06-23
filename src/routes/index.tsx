import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import falconNavbarLogo from "../assets/falcon-navbar-logo.png";
import falconLogoCircle from "../assets/falcon-logo-circle.png";
import falconLogoFull from "../assets/falcon-logo.jpeg";
import audienceSectionImage from "../assets/audience-section.png";
import chaosPathImage from "../assets/chaos-path.png";
import goodPathImage from "../assets/good-path.png";
import courseAgentsImage from "../assets/agents.png";
import courseFundamentalsImage from "../assets/fundamentals.png";
import courseStrategyImage from "../assets/strategy.png";
import courseToolsImage from "../assets/tools.png";
import {
  learnWorldsAiFundamentalsUrl,
  learnWorldsCourseUrls,
  learnWorldsCoursesUrl,
} from "../lib/learnworlds";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Falcon Innovation Academy — Learn AI as a Business Advantage" },
      { name: "description", content: "A practical four-course AI for Business program: fundamentals, tools, agents and implementation. Build real artifacts, not just prompts." },
      { property: "og:title", content: "Falcon Innovation Academy — AI for Business" },
      { property: "og:description", content: "Master AI tools and decision-making to make your business competitive and future-proof." },
    ],
  }),
  component: Landing,
});

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <img
        src={falconNavbarLogo}
        alt="Falcon Innovation Academy"
        className="h-8 w-auto"
      />
    </div>
  );
}

const PRIVACY_POLICY_SECTIONS = [
  {
    title: "Who we are",
    body: "Falcon Expert Institute FZ-LLC (“Falcon Innovation Academy”, “we”, “us”) operates online business education programs from Ras Al Khaimah Economic Zone (RAKEZ), United Arab Emirates. Educational Licence No. 52001001.",
  },
  {
    title: "Information we collect",
    body: "When you enroll, contact us, or use our website, we may collect your name, email address, company details, billing information, course progress, and communications you send to us. We also collect limited technical data such as IP address, browser type, and usage analytics to keep the platform secure and improve our services.",
  },
  {
    title: "How we use your information",
    body: "We use personal data to provide access to courses, process enrollments, respond to inquiries, issue certificates or records of completion, improve program content, and comply with applicable law. We do not sell your personal information to third parties.",
  },
  {
    title: "Sharing and processors",
    body: "We may share data with trusted service providers that help us deliver our programs—such as learning platforms, payment processors, email tools, and hosting providers—only as needed to operate Falcon Innovation Academy. These providers are required to protect your data and use it solely for the services they provide to us.",
  },
  {
    title: "Data retention",
    body: "We retain personal information for as long as needed to deliver courses, maintain business records, resolve disputes, and meet legal obligations. When data is no longer required, we delete or anonymize it where reasonably possible.",
  },
  {
    title: "Your rights",
    body: "Depending on applicable law, you may request access to, correction of, or deletion of your personal data, or object to certain processing. To exercise these rights, contact us at info@falcon.academy. We will respond within a reasonable timeframe.",
  },
  {
    title: "Security",
    body: "We apply administrative, technical, and organizational measures designed to protect personal data against unauthorized access, loss, or misuse. No online system is completely secure, so please use strong passwords and protect your account credentials.",
  },
  {
    title: "Updates",
    body: "We may update this Privacy Policy from time to time. The latest version will always be available on falcon.academy. Material changes will be reflected by updating the effective date below.",
  },
];

const TERMS_OF_USE_SECTIONS = [
  {
    title: "Agreement",
    body: "By accessing falcon.academy or enrolling in our programs, you agree to these Terms of Use. If you do not agree, please do not use the site or purchase courses.",
  },
  {
    title: "Educational services",
    body: "Falcon Innovation Academy provides online business education in artificial intelligence and related topics. Course materials are for learning and professional development. They do not constitute legal, financial, tax, or regulated professional advice.",
  },
  {
    title: "Accounts and enrollment",
    body: "You are responsible for the accuracy of information you provide and for maintaining the confidentiality of your account credentials. Access to paid content is granted for the period stated at purchase unless otherwise specified.",
  },
  {
    title: "Acceptable use",
    body: "You may not misuse the platform, attempt unauthorized access, copy or redistribute course materials except as permitted, use content to build competing products, or upload unlawful, harmful, or infringing material.",
  },
  {
    title: "Intellectual property",
    body: "All course content, branding, graphics, and materials on this site are owned by Falcon Expert Institute FZ-LLC or its licensors and are protected by intellectual property laws. You receive a limited, non-transferable license to use materials for personal or internal business learning only.",
  },
  {
    title: "Payments and refunds",
    body: "Fees, billing terms, and any refund eligibility are disclosed at the point of purchase on our learning platform. Unless required by applicable consumer law, fees for digital educational content may be non-refundable once access is granted.",
  },
  {
    title: "Disclaimer",
    body: "Programs are provided on an “as is” basis. We do not guarantee specific business outcomes, job placement, revenue increases, or error-free operation of third-party AI tools discussed in our courses.",
  },
  {
    title: "Limitation of liability",
    body: "To the fullest extent permitted by law, Falcon Expert Institute FZ-LLC is not liable for indirect, incidental, or consequential damages arising from your use of the site or courses. Our total liability for any claim shall not exceed the amount you paid for the relevant course in the twelve months preceding the claim.",
  },
  {
    title: "Governing law",
    body: "These Terms are governed by the laws of the United Arab Emirates. Disputes shall be subject to the exclusive jurisdiction of the courts of the UAE, unless mandatory consumer protections in your country provide otherwise.",
  },
  {
    title: "Contact",
    body: "Questions about these Terms may be sent to info@falcon.academy.",
  },
];

const REFUND_POLICY_SECTIONS = [
  {
    title: "Scope",
    body: "This Refund & Cancellation Policy applies to purchases of online courses, bundles, subscriptions, and related digital educational products sold by Falcon Expert Institute FZ-LLC (“Falcon Innovation Academy”, “we”, “us”) through our LearnWorlds learning platform at learn.falcon.academy. By completing a purchase, you acknowledge that you have read and agree to this Policy.",
  },
  {
    title: "Payment processing",
    body: "Payments are processed through LearnWorlds using supported payment gateways, including Stripe (card payments, Apple Pay, Google Pay, and selected local methods) and, where offered, PayPal. We do not store full card details on our servers. All transactions are subject to the applicable terms of LearnWorlds and the relevant payment processor.",
  },
  {
    title: "Digital products and immediate access",
    body: "Our products are digital educational services. Upon successful payment, access to course materials is typically granted immediately or shortly thereafter. Because content is delivered electronically, refund eligibility may be limited once you have accessed, downloaded, or substantially used course materials.",
  },
  {
    title: "Refunds we may grant",
    body: "We may approve a full or partial refund, at our reasonable discretion, where: (a) you request a refund within fourteen (14) days of purchase and have not completed more than twenty percent (20%) of the purchased course or program; (b) you were charged in error or charged twice for the same product; (c) technical issues on our platform prevented reasonable access and we cannot resolve them within a reasonable time; or (d) applicable consumer protection law in your jurisdiction requires a refund.",
  },
  {
    title: "When refunds are not available",
    body: "Except where required by law, we do not grant refunds if: (a) the refund request is made after the eligibility period above; (b) you have substantially accessed, completed, or downloaded course content; (c) you purchased during a clearly marked non-refundable promotion; (d) the request relates to change of mind after meaningful use of the product; or (e) the payment method or processor no longer supports automated refunds (for example, certain bank-transfer methods).",
  },
  {
    title: "How refunds are processed (LearnWorlds & Stripe)",
    body: "Approved refunds are issued through LearnWorlds to the original payment method used at checkout. For Stripe card payments, refunds are normally processed to the same card; Stripe does not return its original processing fees to merchants, and that limitation may affect the net amount recoverable in partial-refund scenarios. Refunds via supported processors are generally available within one hundred eighty (180) days of the original payment. Processing may take up to seven (7) business days to appear, depending on your bank or card issuer.",
  },
  {
    title: "Credit notes and access after refund",
    body: "When a refund is issued through LearnWorlds, a refund record and, where invoicing is enabled, a credit note may be generated for accounting purposes. We may revoke or restrict course access upon a full refund. Refund and unenrollment are separate actions; where appropriate, we may unenroll you from the refunded product.",
  },
  {
    title: "Subscriptions and instalment plans",
    body: "If you purchase a subscription or instalment plan, you may cancel future renewals through your LearnWorlds account or by contacting us before the next billing date. Cancellation stops future charges but does not automatically refund fees already paid for the current billing period unless required by law or expressly stated at purchase. Trial periods, if offered, must be cancelled before renewal to avoid charge.",
  },
  {
    title: "How to request a refund or cancellation",
    body: "To request a refund or cancel a subscription, email info@falcon.academy from the email address used at purchase. Include your full name, order date, product name, and reason for the request. We may ask for additional information to verify the purchase and review usage records maintained by LearnWorlds.",
  },
  {
    title: "Response times",
    body: "We aim to acknowledge refund requests within three (3) business days and to complete approved refunds within fourteen (14) calendar days of confirming eligibility, in line with common e-commerce practice and our payment platform capabilities. If additional review is required, we will notify you of the delay.",
  },
  {
    title: "Chargebacks and disputes",
    body: "If you initiate a chargeback or payment dispute with your bank or card issuer before contacting us, we may suspend account access while the dispute is investigated. We encourage you to contact us first so we can resolve legitimate concerns promptly. For digital products, payment processors such as Stripe may require evidence of account access and policy acceptance when reviewing disputes.",
  },
  {
    title: "Changes and contact",
    body: "We may update this Policy from time to time. The version published on falcon.academy at the time of your request applies unless mandatory law provides otherwise. Questions: info@falcon.academy.",
  },
];

function LegalModal({
  type,
  open,
  onOpenChange,
}: {
  type: "privacy" | "terms" | "refund" | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const titles = {
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    refund: "Refund & Cancellation Policy",
  } as const;

  const sections =
    type === "privacy"
      ? PRIVACY_POLICY_SECTIONS
      : type === "terms"
        ? TERMS_OF_USE_SECTIONS
        : type === "refund"
          ? REFUND_POLICY_SECTIONS
          : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{type ? titles[type] : ""}</DialogTitle>
          <DialogDescription>
            Falcon Expert Institute FZ-LLC · Effective {new Date().getFullYear()}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5 pr-1 text-sm text-foreground">
          {sections.map((section) => (
            <section key={section.title}>
              <h3 className="font-semibold">{section.title}</h3>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#solution", label: "Solution" },
    { href: "#courses", label: "Courses" },
    { href: "#results", label: "Results" },
    { href: "#faq", label: "FAQ" },
  ];

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-[110] border-b border-border/60 bg-background/85 backdrop-blur-md">
        <nav className="container-x flex items-center justify-between py-3.5">
          <a href="#top" className="flex items-center" onClick={closeMenu}>
            <BrandLogo />
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
            <a href={learnWorldsCoursesUrl} className="btn-accent !py-2.5 !px-4 text-sm">
              Explore Courses
            </a>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden rounded-md border border-border p-2.5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-foreground" />
                <span className="block h-0.5 w-5 bg-foreground" />
                <span className="block h-0.5 w-5 bg-foreground" />
              </div>
            )}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div
            className="mobile-menu-backdrop absolute inset-0"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <nav className="container-x relative flex h-full flex-col justify-between py-8 pt-24">
            <ul className="divide-y divide-border/70">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={closeMenu}
                    className="block py-5 text-xl font-semibold tracking-tight text-foreground transition-colors active:text-falcon-green"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-3 pt-8">
              <a
                href={learnWorldsCoursesUrl}
                onClick={closeMenu}
                className="btn-accent w-full justify-center !py-4 text-base"
              >
                Explore Courses
              </a>
              <a
                href={learnWorldsAiFundamentalsUrl}
                onClick={closeMenu}
                className="btn-gold w-full justify-center !py-4 text-base"
              >
                Enroll in AI Fundamentals
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
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

const PIPELINE_STAGES = ["Intake", "AI draft", "Verify", "Approve"] as const;

const WORKFLOW_SCENES = [
  {
    name: "Contract review",
    stage: 2,
    confidence: 86,
    gate: "Human review",
    dataClass: "Confidential",
    queued: 2,
    active: 1,
    doneToday: 14,
    activity: "Vendor NDA — 2 clauses flagged for legal review",
  },
  {
    name: "Sales proposal",
    stage: 1,
    confidence: 68,
    gate: "AI drafting",
    dataClass: "Internal",
    queued: 3,
    active: 2,
    doneToday: 14,
    activity: "Q2 revenue forecast — first draft generating",
  },
  {
    name: "Support triage",
    stage: 3,
    confidence: 94,
    gate: "Approved",
    dataClass: "Public FAQ",
    queued: 1,
    active: 0,
    doneToday: 16,
    activity: "Refund policy answer — verified and sent",
  },
] as const;

const ACTIVITY_FEED = [
  "NDA clause check — approved · 2m ago",
  "Vendor terms — awaiting review · now",
  "Q2 forecast — AI drafting · now",
  "Refund policy — verified · 4m ago",
  "Budget memo — queued · 6m ago",
  "Client brief — approved · 11m ago",
] as const;

const SCENE_CYCLE_MS = 4200;
const SCENE_FADE_MS = 320;

function HeroVisual() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [sceneVisible, setSceneVisible] = useState(true);

  useEffect(() => {
    let fadeTimeout: number | undefined;

    const interval = window.setInterval(() => {
      setSceneVisible(false);
      fadeTimeout = window.setTimeout(() => {
        setSceneIndex((current) => (current + 1) % WORKFLOW_SCENES.length);
        setSceneVisible(true);
      }, SCENE_FADE_MS);
    }, SCENE_CYCLE_MS);

    return () => {
      window.clearInterval(interval);
      if (fadeTimeout !== undefined) window.clearTimeout(fadeTimeout);
    };
  }, []);

  const scene = WORKFLOW_SCENES[sceneIndex];
  const tickerItems = [...ACTIVITY_FEED, ...ACTIVITY_FEED];

  return (
    <div className="relative shrink-0">
      <div className="absolute -inset-3 -z-10 rounded-[1.5rem] bg-gradient-to-br from-falcon-sand to-white lg:-inset-6 lg:rounded-[2rem]" />
      <div className="rounded-xl border border-border bg-white p-4 shadow-[var(--shadow-card)] lg:rounded-2xl lg:p-6">
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3 lg:pb-4">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-falcon-red lg:h-3 lg:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-falcon-gold lg:h-3 lg:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-falcon-green lg:h-3 lg:w-3" />
          </div>
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground lg:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="hero-live-ping absolute inline-flex h-full w-full rounded-full bg-falcon-green opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-falcon-green" />
            </span>
            AI Workflow · Live
          </span>
        </div>

        <div
          className={`mt-4 transition-opacity duration-300 lg:mt-6 ${sceneVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              {/* <div className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground lg:text-xs">
                Active pipeline
              </div> */}
              <div className="truncate text-sm font-bold lg:text-base">{scene.name}</div>
            </div>
            <span className="shrink-0 rounded-full bg-falcon-green/10 px-2 py-0.5 text-[0.65rem] font-semibold text-falcon-green lg:px-2.5 lg:py-1 lg:text-xs">
              {scene.gate}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-0.5 lg:mt-4 lg:gap-1">
            {PIPELINE_STAGES.map((stage, index) => {
              const isComplete = index < scene.stage;
              const isActive = index === scene.stage;
              return (
                <Fragment key={stage}>
                  <div
                    className={`min-w-0 flex-1 rounded-md border px-0.5 py-1.5 text-center text-[0.55rem] font-semibold leading-tight sm:text-[0.6rem] lg:px-1 lg:py-2 lg:text-[0.7rem] ${
                      isActive
                        ? "hero-stage-active border-falcon-green/40 bg-falcon-green/10 text-falcon-green"
                        : isComplete
                          ? "border-falcon-green/20 bg-falcon-green/5 text-falcon-green"
                          : "border-border bg-muted/40 text-muted-foreground"
                    }`}
                  >
                    {isComplete ? "✓ " : ""}
                    {stage}
                  </div>
                  {index < PIPELINE_STAGES.length - 1 && (
                    <div
                      className={`h-0.5 w-2 shrink-0 rounded-full sm:w-3 ${
                        index < scene.stage ? "bg-falcon-green/50" : "bg-border"
                      }`}
                    />
                  )}
                </Fragment>
              );
            })}
          </div>

          <div className="mt-4 lg:mt-5">
            <div className="flex items-center justify-between text-xs font-medium lg:text-sm">
              <span>Verification confidence</span>
              <span className="tabular-nums text-muted-foreground">{scene.confidence}%</span>
            </div>
            <div className="relative mt-1.5 h-2 overflow-hidden rounded-full bg-muted lg:mt-2 lg:h-2.5">
              <div
                className="relative h-full rounded-full bg-falcon-green transition-[width] duration-700 ease-out"
                style={{ width: `${scene.confidence}%` }}
              >
                <span className="hero-confidence-shimmer absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 lg:mt-5 lg:gap-3">
            {[
              { label: "Queued", value: scene.queued, tone: "gold" },
              { label: "In progress", value: scene.active, tone: "green" },
              { label: "Done today", value: scene.doneToday, tone: "ink" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border p-2 text-center lg:p-2.5">
                <div className="text-[0.65rem] leading-tight text-muted-foreground lg:text-xs">{stat.label}</div>
                <div
                  className="mt-0.5 text-xl font-extrabold tabular-nums transition-all duration-500 lg:text-2xl"
                  style={{
                    color:
                      stat.tone === "green"
                        ? "var(--falcon-green)"
                        : stat.tone === "gold"
                          ? "var(--falcon-gold)"
                          : "var(--falcon-ink)",
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-lg bg-falcon-sand/80 px-2.5 py-2 text-[0.7rem] leading-snug text-foreground lg:mt-4 lg:px-3 lg:py-2.5 lg:text-xs">
            <span className="font-semibold text-falcon-green">Now · </span>
            {scene.activity}
          </div>
        </div>

        <div className="mt-4 border-t border-border pt-3 lg:mt-5 lg:pt-4">
          <div className="flex items-center justify-between gap-2 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground lg:text-xs">
            <span>Recent activity</span>
            <span className="rounded bg-muted px-1.5 py-0.5 normal-case tracking-normal text-[0.6rem] lg:text-[0.65rem]">
              {scene.dataClass}
            </span>
          </div>
          <div className="relative mt-2 h-9 overflow-hidden lg:h-10">
            <div className="hero-activity-ticker">
              {tickerItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex h-9 items-center text-[0.7rem] text-muted-foreground lg:h-10 lg:text-xs"
                >
                  <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-falcon-green/70" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden lg:min-h-0"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, rgba(199,161,90,0.18), transparent 70%), radial-gradient(50% 50% at 10% 90%, rgba(0,132,61,0.12), transparent 70%)",
        }}
      />
      <div className="container-x flex flex-1 flex-col justify-between gap-6 py-8 md:gap-8 lg:grid lg:flex-none lg:items-center lg:gap-12 lg:py-16 lg:grid-cols-[1.05fr_0.95fr] xl:py-24">
        <div className="flex flex-col">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-falcon-gold" />
            UAE-based · Globally trusted
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
            Learn to use AI as a <span className="text-falcon-green">business advantage</span> — not a buzzword.
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:mt-6 md:text-lg">
            A practical four-course program for business owners, managers, consultants and analysts who want to
            understand AI, choose the right tools, build real workflows and safely adopt AI agents.
          </p>
          <p className="mt-4 hidden max-w-xl text-base text-muted-foreground md:block">
            From AI fundamentals to hands-on tool use, agentic workflows and implementation planning — learn how
            models work, how to compare tools, prompt effectively, verify outputs, and decide when AI should
            (or should not) be used.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a href={learnWorldsAiFundamentalsUrl} className="btn-primary justify-center sm:justify-start">
              Start with AI Fundamentals
            </a>
            <a href={learnWorldsCoursesUrl} className="btn-gold justify-center sm:justify-start">
              Explore full program
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:mt-8 sm:gap-x-6 sm:gap-y-3 sm:text-sm">
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
    <section id="solution" className="section-pad bg-falcon-sand">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <span className="eyebrow">From chaos to capability</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Shift from the chaotic use of AI tools to the {" "}
            <span className="text-falcon-green">deliberate construction of processes.</span>
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border bg-white">
          <img
            src={chaosPathImage}
            alt="Scattered AI tools without a clear system"
            className="aspect-[4/3] w-full object-cover object-center"
          />
          <div className="p-8">
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
        </div>
        <div className="overflow-hidden rounded-2xl border border-falcon-green/25 bg-white shadow-[var(--shadow-elevate)]">
          <img
            src={goodPathImage}
            alt="Structured path from fundamentals to business impact"
            className="aspect-[4/3] w-full object-cover object-center"
          />
          <div className="p-8">
            <span className="eyebrow" style={{ background: "rgba(0,132,61,0.10)", color: "var(--falcon-green)" }}>
              The Falcon Innovation Academy way
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
        <div className="mx-auto mt-10 max-w-[785px] overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-1 bg-falcon-sand text-xs font-semibold uppercase tracking-wide sm:grid-cols-2">
            <div className="px-4 py-2.5 text-muted-foreground">Typical AI course</div>
            <div className="border-t border-border px-4 py-2.5 text-falcon-green sm:border-l sm:border-t-0">
              Falcon Innovation Academy
            </div>
          </div>
          {rows.map(([a, b], i) => (
            <div key={i} className="grid grid-cols-1 border-t border-border bg-white text-sm sm:grid-cols-2">
              <div className="px-4 py-2.5 text-muted-foreground line-through decoration-falcon-red/40">{a}</div>
              <div className="border-t border-border px-4 py-2.5 font-medium sm:border-l sm:border-t-0">
                <span className="mr-1.5 text-falcon-green">✓</span>
                {b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const COURSES = [
  { id: "course-1", n: "01", title: "AI Fundamentals for Business Decision-Makers", tagline: "Understand AI before you choose tools.", artifact: "AI Use-Case Readiness Brief", image: courseFundamentalsImage, href: learnWorldsCourseUrls.aiFundamentals },
  { id: "course-2", n: "02", title: "AI Tools & Practical Cases", tagline: "Move from AI understanding to practical tool use.", artifact: "AI Tool Testing Portfolio", image: courseToolsImage, href: learnWorldsCourseUrls.aiTools },
  { id: "course-3", n: "03", title: "AI Agents & Automation", tagline: "Design AI workflows that do more than answer questions.", artifact: "Agentic Workflow Blueprint", image: courseAgentsImage, href: learnWorldsCourseUrls.aiAgents },
  { id: "course-4", n: "04", title: "AI Strategy, Implementation & Operating Model", tagline: "Turn AI experiments into responsible business capability.", artifact: "Business AI Implementation Roadmap", image: courseStrategyImage, href: learnWorldsCourseUrls.aiStrategy },
];

function Program() {
  return (
    <section id="courses" className="section-pad bg-falcon-sand">
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
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COURSES.map((c) => (
            <a
              key={c.id}
              id={c.id}
              href={c.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:border-falcon-green/30 hover:shadow-[var(--shadow-elevate)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-falcon-green focus-visible:ring-offset-2"
            >
              <img
                src={c.image}
                alt=""
                aria-hidden="true"
                className="aspect-[400/269] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="font-display text-3xl font-extrabold text-falcon-gold/80">{c.n}</span>
                <h3 className="mt-4 text-lg font-bold leading-tight">{c.title}</h3>
                <p className="mt-2 text-sm italic text-muted-foreground">{c.tagline}</p>
                <div className="mt-5 rounded-lg border border-dashed border-falcon-gold/50 bg-falcon-gold/5 p-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-falcon-gold">Final artifact</div>
                  <div className="mt-1 text-sm font-semibold">{c.artifact}</div>
                </div>
              </div>
            </a>
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

        <p className="mx-auto mt-10 text-center italic text-muted-foreground">
          These are not homework. You finish the program with working documents you can apply immediately.
        </p>
      </div>
    </section>
  );
}

function Audience() {
  const personas = [
    {
      icon: "👑",
      title: "Business owners & founders",
      description: "Make smarter decisions and unlock new growth with AI.",
    },
    {
      icon: "🧭",
      title: "Managers & team leads",
      description: "Empower your team and improve productivity with AI tools.",
    },
    {
      icon: "📊",
      title: "Consultants & analysts",
      description: "Deliver deeper insights and automate complex analysis.",
    },
    {
      icon: "📣",
      title: "Marketing & sales professionals",
      description: "Create better content, generate leads, and close more deals.",
    },
    {
      icon: "⚙️",
      title: "Operations & project managers",
      description: "Streamline workflows and manage projects more efficiently.",
    },
    {
      icon: "🤝",
      title: "HR & people ops",
      description: "Enhance recruitment, engagement, and people development.",
    },
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

        <div className="relative mx-auto mt-12 max-w-6xl">
          <div className="aspect-[700/261] overflow-hidden rounded-3xl border border-border/50 shadow-[var(--shadow-card)]">
            <img
              src={audienceSectionImage}
              alt="Professionals collaborating on AI strategy in a modern office"
              className="size-full object-cover object-top"
            />
          </div>

          <div className="relative z-10 -mt-8 px-1 sm:-mt-10 md:-mt-12 lg:px-2">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {personas.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 text-left shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-falcon-green/30"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-falcon-green/10 text-2xl">
                    {p.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-snug">{p.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-muted-foreground">
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

function UaeFlagStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-3 w-10 overflow-hidden rounded-sm border border-border/60 ${className}`} aria-hidden="true">
      <span className="flex-1 bg-[#00843D]" />
      <span className="flex-1 bg-white" />
      <span className="flex-1 bg-[#1F2937]" />
      <span className="w-1 bg-[#C8102E]" />
    </div>
  );
}

function ShieldBadge() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
      <path
        d="M24 4 8 10v12c0 10.5 6.8 18.2 16 22 9.2-3.8 16-11.5 16-22V10L24 4Z"
        fill="color-mix(in oklab, var(--falcon-green) 12%, white)"
        stroke="var(--falcon-green)"
        strokeWidth="1.5"
      />
      <path
        d="M17 24.5 21.5 29 31 19.5"
        fill="none"
        stroke="var(--falcon-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Certification() {
  const credentials = [
    {
      label: "Educational licence",
      value: "No. 52001001",
      detail: "Issued for regulated training & professional education",
      accent: "var(--falcon-gold)",
    },
    {
      label: "Registered entity",
      value: "Falcon Expert Institute FZ-LLC",
      detail: "Ras Al Khaimah Economic Zone (RAKEZ)",
      accent: "var(--falcon-green)",
    }
  ];

  return (
    <section id="certification" className="section-pad relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 100% 0%, rgba(0,132,61,0.08), transparent 65%), radial-gradient(45% 50% at 0% 100%, rgba(199,161,90,0.12), transparent 70%)",
        }}
      />
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <span className="eyebrow">
              Licensed in the UAE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A <span className="text-falcon-green">certified academy</span> — we want to build trust with you.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Falcon Expert Institute FZ-LLC is a registered educational provider in the United Arab Emirates,
              operating under Educational Licence No. 52001001 from Ras Al Khaimah Economic Zone (RAKEZ).
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Officially licensed for business and professional education",
                "Structured programs with defined learning outcomes",
                "Transparent legal entity — enrol with confidence",
                "UAE standards of governance and accountability",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckDot />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-falcon-sand to-white" />
            <div className="overflow-hidden rounded-2xl border border-falcon-gold/30 bg-white shadow-[var(--shadow-card)]">
              <div className="relative bg-falcon-sand/30 px-6 py-8">
                <img
                  src={falconLogoFull}
                  alt="Falcon Expert Institute"
                  className="mx-auto w-full max-w-md object-contain"
                />
              </div>

              <div className="grid gap-px bg-border sm:grid-cols-2">
                {credentials.map((item) => (
                  <div key={item.label} className="bg-white p-4">
                    <div
                      className="mb-2 h-1 w-8 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm font-bold leading-snug">{item.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
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
            Join Falcon Innovation Academy and build your competitive advantage with AI.
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
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | "refund" | null>(null);

  return (
    <footer className="border-t border-border bg-white">
      <LegalModal
        type={legalModal}
        open={legalModal !== null}
        onOpenChange={(open) => {
          if (!open) setLegalModal(null);
        }}
      />
      <div className="container-x grid gap-8 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <div className="mt-3 max-w-sm space-y-1 text-sm text-muted-foreground">
            <p>Falcon Innovation Academy is a trading brand operated by Falcon Expert Institute FZ-LLC.</p>
            <p>VUNE3122, Compass building, AL Hulaila Industrial Zone-FZ, RAK, UAE.</p>
            <p>Educational Licence No 52001001.</p>
          </div>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Program</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={learnWorldsCourseUrls.aiFundamentals} className="hover:text-falcon-green">AI Fundamentals</a></li>
            <li><a href={learnWorldsCourseUrls.aiTools} className="hover:text-falcon-green">Tools & Cases</a></li>
            <li><a href={learnWorldsCourseUrls.aiAgents} className="hover:text-falcon-green">Agents & Automation</a></li>
            <li><a href={learnWorldsCourseUrls.aiStrategy} className="hover:text-falcon-green">Strategy & Roadmap</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <button
                type="button"
                onClick={() => setLegalModal("privacy")}
                className="hover:text-falcon-green"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setLegalModal("terms")}
                className="hover:text-falcon-green"
              >
                Terms of Use
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setLegalModal("refund")}
                className="hover:text-falcon-green"
              >
                Refund & Cancellation Policy
              </button>
            </li>
            <li>
              <a href="mailto:info@falcon.academy" className="hover:text-falcon-green">
                Contact
              </a>
            </li>
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
        <Certification />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
