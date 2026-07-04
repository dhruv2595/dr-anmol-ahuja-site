"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { specialtyClusters, clusterTaglines } from "@/lib/nav";
import { switchLangPath, homeHref, type Lang } from "@/lib/i18n";
import { iconMap, type IconName } from "@/components/icons";

const clusterIcons: Record<string, IconName> = {
  "/weight-loss-surgery": "scale",
  "/hernia": "bump",
  "/colorectal": "colon",
  "/proctology": "seat",
  "/mis-laparoscopic-surgery": "drop",
};

const t = {
  en: {
    tagline: "Laparoscopic & Bariatric Surgeon",
    specialties: "Specialties",
    nav: [
      { label: "About", href: "/about-us" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact-us" },
    ],
    book: "Book an appointment",
    call: "Call",
    overview: "Overview →",
    notSure: "Not sure where to look?",
    twoQuestions: "Answer two quick questions",
    checkerHref: "/#symptom-checker",
    orCall: "Or call",
    bookHref: "/contact-us#enquiry",
    otherLang: "हिन्दी",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    clusterLabel: (label: string) => label,
    clusterTagline: (href: string) => clusterTaglines[href],
    overviewSuffix: "— overview",
  },
  hi: {
    tagline: "लैप्रोस्कोपिक व बैरिएट्रिक सर्जन",
    specialties: "विशेषज्ञताएँ",
    nav: [
      { label: "परिचय", href: "/hi/about-us" },
      { label: "सवाल-जवाब", href: "/faqs" },
      { label: "संपर्क", href: "/hi/contact-us" },
    ],
    book: "अपॉइंटमेंट बुक करें",
    call: "कॉल करें",
    overview: "पूरी जानकारी →",
    notSure: "समझ नहीं आ रहा कहाँ देखें?",
    twoQuestions: "दो छोटे सवालों के जवाब दें",
    checkerHref: "/hi#symptom-checker",
    orCall: "या कॉल करें",
    bookHref: "/hi/contact-us#enquiry",
    otherLang: "English",
    openMenu: "मेन्यू खोलें",
    closeMenu: "मेन्यू बंद करें",
    clusterLabel: (label: string) => hiClusterLabels[label] ?? label,
    clusterTagline: (href: string) => hiClusterTaglines[href] ?? clusterTaglines[href],
    overviewSuffix: "— पूरी जानकारी",
  },
} as const;

const hiClusterLabels: Record<string, string> = {
  "Weight Loss Surgery": "वज़न घटाने की सर्जरी",
  Hernia: "हर्निया",
  "Colorectal Surgery": "कोलोरेक्टल सर्जरी",
  Proctology: "प्रोक्टोलॉजी",
  "MIS & Laparoscopic Surgery": "लैप्रोस्कोपिक सर्जरी",
};

const hiClusterTaglines: Record<string, string> = {
  "/weight-loss-surgery": "वज़न जो कम नहीं होता",
  "/hernia": "गाँठ और उभार",
  "/colorectal": "आँत व मलाशय की समस्याएँ",
  "/proctology": "बवासीर, फ़िशर वग़ैरह",
  "/mis-laparoscopic-surgery": "पित्ताशय, अपेंडिक्स व पाचन",
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const underlineLink =
  "relative py-2 text-body-sm text-charcoal transition-colors hover:text-forest " +
  "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-forest after:transition-all after:duration-200 hover:after:w-full";

export function Header({ lang = "en" }: { lang?: Lang }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeCluster, setActiveCluster] = useState(0);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const s = t[lang];

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

  const active = specialtyClusters[activeCluster];
  const langSwitchHref = switchLangPath(pathname, lang === "en" ? "hi" : "en");

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-6 md:grid md:h-20 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href={homeHref(lang)}
          className="flex flex-col leading-none md:justify-self-start"
          aria-label={`${site.doctorName} — home`}
        >
          <span className="font-display text-subheading text-forest">
            {site.doctorName}
          </span>
          <span className="mt-1 hidden text-caption text-graphite sm:block">
            {s.tagline}
          </span>
        </Link>

        {/* Desktop nav */}
        <div ref={megaRef} className="hidden md:block">
          <nav aria-label="Main" className="flex items-center gap-7">
            <div onMouseEnter={openMega} onMouseLeave={scheduleClose}>
              <button
                type="button"
                aria-expanded={megaOpen}
                aria-controls="mega-menu"
                onClick={openMega}
                className={`flex items-center gap-1.5 ${underlineLink} ${megaOpen ? "text-forest" : ""}`}
              >
                {s.specialties}
                <Chevron open={megaOpen} />
              </button>
            </div>
            {s.nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`${underlineLink} ${pathname === l.href ? "text-forest after:w-full" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Scrim — dims the page so the open menu is unmistakable */}
          {megaOpen ? (
            <div
              aria-hidden
              onClick={() => setMegaOpen(false)}
              className="fixed inset-0 -z-10 bg-forest/25"
            />
          ) : null}

          {/* Mega menu panel */}
          <div
            id="mega-menu"
            hidden={!megaOpen}
            onMouseEnter={openMega}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full pt-2"
          >
            <div className="container-site">
              <div
                className="overflow-hidden rounded-card border border-hairline bg-canvas shadow-[0_28px_64px_-16px_rgba(15,62,23,0.28)]"
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest("a")) setMegaOpen(false);
                }}
              >
                <div className="grid lg:grid-cols-[340px_1fr]">
                  <ul className="border-b border-hairline bg-linen/40 p-3 lg:border-b-0 lg:border-r">
                    {specialtyClusters.map((c, i) => {
                      const Icon = iconMap[clusterIcons[c.href]];
                      const isActive = i === activeCluster;
                      return (
                        <li key={c.href}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveCluster(i)}
                            onFocus={() => setActiveCluster(i)}
                            onClick={() => setActiveCluster(i)}
                            className={`flex w-full items-center gap-3.5 rounded-nav px-3.5 py-3 text-left transition-colors ${
                              isActive ? "bg-forest" : "hover:bg-mint"
                            }`}
                          >
                            <span
                              className={`grid size-10 shrink-0 place-items-center rounded-pill transition-colors ${
                                isActive ? "bg-canvas/20 text-canvas" : "bg-linen text-forest"
                              }`}
                            >
                              <Icon className="size-5" />
                            </span>
                            <span className="grow">
                              <span
                                className={`block text-body-sm ${isActive ? "text-canvas" : "text-ink"}`}
                              >
                                {s.clusterLabel(c.label)}
                              </span>
                              <span
                                className={`mt-0.5 block text-caption ${
                                  isActive ? "text-canvas/70" : "text-graphite"
                                }`}
                              >
                                {s.clusterTagline(c.href)}
                              </span>
                            </span>
                            <svg
                              aria-hidden
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              className={`shrink-0 text-canvas transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                            >
                              <path
                                d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="p-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="font-display text-subheading text-forest">
                        {s.clusterLabel(active.label)}
                      </p>
                      <Link
                        href={active.href}
                        className="whitespace-nowrap text-body-sm text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
                      >
                        {s.overview}
                      </Link>
                    </div>
                    <ul className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                      {active.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="-mx-2.5 block rounded-nav px-2.5 py-1.5 text-body-sm text-charcoal transition-colors hover:bg-linen hover:text-forest"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-linen/40 px-7 py-4">
                  <p className="text-body-sm text-charcoal">
                    {s.notSure}{" "}
                    <Link
                      href={s.checkerHref}
                      className="text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
                    >
                      {s.twoQuestions}
                    </Link>
                  </p>
                  <a href={site.phones[0].href} className="text-body-sm text-graphite hover:text-forest">
                    {s.orCall} {site.phones[0].label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-5 md:flex md:justify-self-end">
          <Link
            href={langSwitchHref}
            className="rounded-pill border border-hairline px-3.5 py-1.5 text-body-sm text-charcoal transition-colors hover:border-forest hover:text-forest"
            lang={lang === "en" ? "hi" : "en"}
          >
            {s.otherLang}
          </Link>
          <a
            href={site.phones[0].href}
            className="hidden text-body-sm text-charcoal transition-colors hover:text-forest lg:block"
          >
            {site.phones[0].label}
          </a>
          <Link
            href={s.bookHref}
            className="rounded-card bg-forest px-5 py-2.5 text-body-sm text-canvas transition-colors hover:bg-forest-bright"
          >
            {s.book}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={langSwitchHref}
            className="rounded-pill border border-hairline px-3 py-1.5 text-body-sm text-charcoal"
            lang={lang === "en" ? "hi" : "en"}
          >
            {s.otherLang}
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-nav text-forest"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">{mobileOpen ? s.closeMenu : s.openMenu}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              {mobileOpen ? (
                <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-hairline bg-canvas px-5 pb-8 pt-2 md:hidden"
        >
          <p className="px-2 pt-3 text-caption uppercase tracking-wide text-graphite">
            {s.specialties}
          </p>
          <ul className="mt-1">
            {specialtyClusters.map((cluster) => (
              <li key={cluster.href} className="border-b border-hairline last:border-0">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-3 [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="block text-body text-charcoal">
                        {s.clusterLabel(cluster.label)}
                      </span>
                      <span className="block text-caption text-graphite">
                        {s.clusterTagline(cluster.href)}
                      </span>
                    </span>
                    <span className="text-forest transition-transform duration-200 group-open:rotate-180">
                      <Chevron open={false} />
                    </span>
                  </summary>
                  <ul className="pb-3 pl-4">
                    <li>
                      <Link href={cluster.href} className="block py-2 text-body-sm text-forest">
                        {s.clusterLabel(cluster.label)} {s.overviewSuffix}
                      </Link>
                    </li>
                    {cluster.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block py-2 text-body-sm text-graphite">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
          <ul className="mt-2 flex flex-col">
            {s.nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="block px-2 py-3 text-body text-charcoal"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-3 border-t border-hairline pt-4">
            <Link
              href={s.bookHref}
              className="rounded-card bg-forest px-5 py-3 text-center text-body-sm text-canvas"
            >
              {s.book}
            </Link>
            <a href={site.phones[0].href} className="text-center text-body-sm text-charcoal">
              {s.call} {site.phones[0].label}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
