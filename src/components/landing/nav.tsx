import { useEffect, useState } from "react";

import { learnWorldsAiFundamentalsUrl, learnWorldsCoursesUrl } from "@/lib/learnworlds";
import { BrandLogo } from "./brand";
import { Chevron } from "./chevron";

const NAV_LINKS = [
  { href: "#courses", label: "PROGRAM", bg: "bg-falcon-green", hover: "hover:bg-falcon-green-dark" },
  { href: "#artifacts", label: "ARTIFACTS", bg: "bg-falcon-gold", hover: "hover:brightness-95" },
  { href: "#who", label: "WHO IT'S FOR", bg: "bg-falcon-green", hover: "hover:bg-falcon-ink/90" },
  { href: "#faq", label: "FAQ", bg: "bg-falcon-gold", hover: "hover:bg-falcon-red-dark" },
] as const;

function FixedEnrollPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={learnWorldsAiFundamentalsUrl}
      className={`group fixed right-0 top-1/2 z-[105] hidden -translate-y-1/2 bg-falcon-green px-3 py-5 text-[0.65rem] font-bold tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-falcon-green-dark lg:block ${
        visible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0"
      }`}
      style={{ writingMode: "vertical-rl" }}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      START COURSE 01 <Chevron className="inline" />
    </a>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = NAV_LINKS;

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
      <FixedEnrollPill />
      <header className="sticky top-0 z-[110] shrink-0 bg-background">
        <nav className="container-x flex items-stretch justify-between">
          <a href="#top" className="flex items-center py-3.5" onClick={closeMenu}>
            <BrandLogo />
          </a>

          <div className="hidden items-stretch lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`flex items-center px-5 text-[0.7rem] font-bold tracking-wide text-white transition-colors xl:px-6 xl:text-xs ${l.bg} ${l.hover}`}
              >
                {l.label}
              </a>
            ))}
            {/* <a
              href={learnWorldsCoursesUrl}
              className="btn-accent flex items-center !rounded-none !px-6 !py-0 text-xs xl:!px-8"
            >
              EXPLORE COURSES
            </a> */}
          </div>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="my-2 border border-border bg-falcon-ink p-2.5 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
              </div>
            )}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-menu-backdrop absolute inset-0" onClick={closeMenu} aria-hidden="true" />
          <nav className="container-x relative flex h-full flex-col justify-between py-8 pt-24">
            <ul className="divide-y divide-border">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={closeMenu}
                    className="block py-5 text-lg font-bold tracking-tight text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-3 pt-8">
              <a href={learnWorldsCoursesUrl} onClick={closeMenu} className="btn-accent group w-full justify-center !py-4">
                EXPLORE COURSES <Chevron />
              </a>
              <a
                href={learnWorldsAiFundamentalsUrl}
                onClick={closeMenu}
                className="btn-gold group w-full justify-center !py-4"
              >
                START COURSE 01 <Chevron />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
