"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";

/* Verbatim patient reviews from the practice's original site. */
const reviews = [
  {
    name: "Himani Som",
    text: "Thank you for your tremendous skill in performing my operation. Your talent and caring manner is a credit to the medical profession.",
  },
  {
    name: "Omi Kumar",
    text: "He has in-depth knowledge and made us understand things in a very clear, crisp manner. The way he interacts with his patients separates him from others.",
  },
  {
    name: "Shristi Srivastava",
    text: "One of the finest surgeons in Delhi NCR. He took care of each and every bit till the affected area was cured, end to end. Highly recommended!",
  },
  {
    name: "Shweta Verma",
    text: "Best at his work, highly knowledgeable surgeon — best doctor we ever had.",
  },
  {
    name: "Vivek Tiwari",
    text: "Very supportive, friendly nature and expertise in his area. He understands our concerns and gives the best suggestion accordingly.",
  },
];

const avatarTones = ["bg-sage", "bg-mist", "bg-mint", "bg-linen", "bg-sage"];

const ui = {
  en: {
    onGoogle: "on Google",
    prev: "Previous review",
    next: "Next review",
    patient: "patient",
  },
  hi: {
    onGoogle: "Google पर",
    prev: "पिछली समीक्षा",
    next: "अगली समीक्षा",
    patient: "मरीज़",
  },
} as const;

function Stars({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }, (_, k) => (
        <svg key={k} aria-hidden width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
          <path d="M6 .8l1.55 3.32 3.65.44-2.7 2.5.72 3.6L6 8.86l-3.22 1.8.72-3.6-2.7-2.5 3.65-.44L6 .8Z" />
        </svg>
      ))}
    </span>
  );
}

const chevronRotation = {
  up: "rotate-180",
  down: "",
  left: "rotate-90",
  right: "-rotate-90",
} as const;

function Chevron({ dir }: { dir: keyof typeof chevronRotation }) {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={chevronRotation[dir]}
    >
      <path
        d="m4 6 4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Positions along the ")" arc — ends flush left, centre bulging right.
   Items animate between these as the carousel rotates: enter from above,
   slide top → centre → bottom, exit below. x = curve position minus avatar
   radius so each avatar sits centred on the line. */
const slotPos = {
  enter: { x: -16, y: -40, opacity: 0, big: false, dim: false },
  top: { x: 22, y: 62, opacity: 1, big: false, dim: true },
  center: { x: 32, y: 190, opacity: 1, big: true, dim: false },
  bottom: { x: 22, y: 318, opacity: 1, big: false, dim: true },
  exit: { x: -16, y: 420, opacity: 0, big: false, dim: false },
} as const;

function slotFor(rel: number, len: number): keyof typeof slotPos {
  if (rel === 0) return "center";
  if (rel === 1) return "top";
  if (rel === len - 1) return "bottom";
  if (rel === 2) return "enter";
  return "exit";
}

export function TestimonialCarousel({ lang = "en" }: { lang?: Lang }) {
  const s = ui[lang];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const id = setInterval(() => setIndex((v) => (v + 1) % reviews.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  const go = (delta: number) => {
    setPaused(true);
    setIndex((v) => (v + delta + reviews.length) % reviews.length);
  };

  const active = reviews[index];

  const navBtn =
    "grid size-11 place-items-center rounded-pill border border-forest/25 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-canvas";

  return (
    <div
      className="grid gap-6 lg:grid-cols-[380px_1fr_auto] lg:gap-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Avatar arc — reviewers travel down the line-art curve */}
      <div className="relative hidden h-[380px] overflow-hidden lg:block">
        <svg
          aria-hidden
          className="absolute left-0 top-0 h-full w-[76px] text-forest/25"
          viewBox="0 0 76 380"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M4 -20 C84 110 84 270 4 400"
            stroke="currentColor"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {reviews.map((r, i) => {
          const rel = (i - index + reviews.length) % reviews.length;
          const slot = slotFor(rel, reviews.length);
          const p = slotPos[slot];
          const isCentre = slot === "center";
          const visible = slot === "top" || slot === "center" || slot === "bottom";
          return (
            <button
              key={r.name}
              type="button"
              tabIndex={visible && !isCentre ? 0 : -1}
              aria-hidden={!visible}
              onClick={() => {
                if (slot === "top") go(1);
                else if (slot === "bottom") go(-1);
                else setPaused(true);
              }}
              className={`group absolute flex -translate-y-1/2 items-center gap-3.5 text-left transition-all duration-700 ease-in-out ${
                visible ? "" : "pointer-events-none"
              }`}
              style={{ left: p.x, top: p.y, opacity: p.opacity }}
            >
              {/* Opaque avatar with a canvas ring so the arc passes behind it */}
              <span
                className={`grid shrink-0 place-items-center rounded-pill font-display text-forest ring-4 ring-canvas transition-all duration-700 ${
                  avatarTones[i % avatarTones.length]
                } ${p.big ? "size-16 text-subheading" : "size-10 text-body-sm"}`}
              >
                {r.name.charAt(0)}
              </span>
              <span
                className={`transition-opacity duration-700 ${
                  p.dim ? "opacity-55 group-hover:opacity-100" : ""
                }`}
              >
                <span
                  className={`block text-ink transition-all duration-700 ${
                    p.big ? "text-body" : "text-caption"
                  }`}
                >
                  {r.name}
                </span>
                <span className="mt-0.5 flex items-center gap-1.5 text-caption text-graphite">
                  <Stars className="text-forest" /> 5.0 {s.onGoogle}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Active quote with decorative mark */}
      <div className="flex items-center">
        <figure key={index} className="flex animate-[fade-up_.5s_ease] gap-4 py-2 md:gap-6" lang="en">
          <span
            aria-hidden
            className="shrink-0 font-display text-[56px] leading-none text-sage md:text-[72px]"
          >
            &ldquo;
          </span>
          <span>
            <blockquote className="max-w-2xl pt-3 font-display text-heading-sm text-forest md:pt-5">
              {active.text}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                aria-hidden
                className={`grid size-10 shrink-0 place-items-center rounded-pill font-display text-body text-forest lg:hidden ${
                  avatarTones[index % avatarTones.length]
                }`}
              >
                {active.name.charAt(0)}
              </span>
              <span>
                <span className="block text-body-sm text-ink">
                  {active.name} — {s.patient}
                </span>
                <span className="mt-0.5 flex items-center gap-1.5 text-caption text-graphite">
                  <Stars className="text-forest" /> 5.0 {s.onGoogle}
                </span>
              </span>
            </figcaption>
          </span>
        </figure>
      </div>

      {/* Navigators — vertical beside the arc on desktop, horizontal below on smaller screens */}
      <div className="hidden flex-col items-center justify-center gap-3 lg:flex">
        <button type="button" onClick={() => go(-1)} className={navBtn}>
          <span className="sr-only">{s.prev}</span>
          <Chevron dir="up" />
        </button>
        <span className="text-caption text-graphite">
          {index + 1}/{reviews.length}
        </span>
        <button type="button" onClick={() => go(1)} className={navBtn}>
          <span className="sr-only">{s.next}</span>
          <Chevron dir="down" />
        </button>
      </div>
      <div className="flex items-center gap-3 lg:hidden">
        <button type="button" onClick={() => go(-1)} className={navBtn}>
          <span className="sr-only">{s.prev}</span>
          <Chevron dir="left" />
        </button>
        <button type="button" onClick={() => go(1)} className={navBtn}>
          <span className="sr-only">{s.next}</span>
          <Chevron dir="right" />
        </button>
        <span className="text-caption text-graphite">
          {index + 1}/{reviews.length}
        </span>
      </div>
    </div>
  );
}
