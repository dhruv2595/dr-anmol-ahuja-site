"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { specialtyClusters } from "@/lib/nav";
import { Button } from "./Button";

const clusterBlurbs: Record<string, string> = {
  "Weight Loss Surgery": "Bariatric & metabolic surgery for lasting weight loss.",
  Hernia: "Laparoscopic repair for every type of hernia.",
  "Colorectal Surgery": "Diagnosis and surgery for colon & rectal conditions.",
  Proctology: "Gentle care for anal, rectal and pilonidal conditions.",
  "MIS & Laparoscopic Surgery": "Keyhole surgery across the abdomen.",
};

export function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function closeSoon() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  }

  const activeCluster = specialtyClusters[active];

  return (
    <div ref={containerRef} className="static" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-[6px] rounded-[7px] px-[12px] py-[8px] text-[15px] transition-colors ${
          open ? "text-forest-ink" : "text-charcoal hover:text-forest-ink"
        }`}
      >
        Specialities
        <svg
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[72px] z-40 border-b border-hairline-gray bg-linen-white">
          <div className="mx-auto max-w-[1100px] px-[21px] py-[28px]">
            <div className="grid grid-cols-[300px_1fr] overflow-hidden rounded-[14px] border border-hairline-gray">
              {/* Left: categories (key fields) */}
              <ul className="flex flex-col gap-[2px] bg-linen p-[14px]" role="menu">
                {specialtyClusters.map((cluster, i) => (
                  <li key={cluster.href} role="none">
                    <Link
                      href={cluster.href}
                      role="menuitem"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-[7px] px-[14px] py-[12px] text-[15px] transition-colors ${
                        active === i
                          ? "bg-linen-white text-forest-ink"
                          : "text-charcoal hover:bg-linen-white hover:text-forest-ink"
                      }`}
                    >
                      {cluster.label}
                      <span aria-hidden="true" className={active === i ? "opacity-100" : "opacity-30"}>
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right: sub-items for the hovered category */}
              <div className="bg-linen-white p-[28px]">
                <div className="mb-[16px] flex items-baseline justify-between gap-[14px]">
                  <div>
                    <Link
                      href={activeCluster.href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-[22px] font-light text-forest-ink hover:underline"
                    >
                      {activeCluster.label}
                    </Link>
                    <p className="mt-[2px] text-[13px] text-graphite">{clusterBlurbs[activeCluster.label]}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-x-[21px] gap-y-[4px]">
                  {activeCluster.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-[7px] px-[11px] py-[8px] text-[14px] leading-[1.4] text-charcoal transition-colors hover:bg-linen hover:text-forest-ink"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-[21px] flex items-center justify-between border-t border-hairline-gray pt-[18px]">
                  <span className="text-[13px] text-graphite">Not sure where to start?</span>
                  <Button href="/book-an-appointment" variant="ghost" withArrow>
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
