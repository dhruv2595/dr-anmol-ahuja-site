"use client";

import { useEffect, useRef, useState } from "react";

/** Scroll-reveal wrapper: fades content up as it enters the viewport.
    Respects prefers-reduced-motion (shows instantly). Use `delay` (ms) to
    stagger siblings; `effect="draw"` also draws SVG paths inside (used for
    the line-art motifs). */
export function Reveal({
  children,
  className = "",
  delay = 0,
  effect = "fade",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  effect?: "fade" | "draw";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms`, animationDelay: `${delay}ms` } : undefined}
      className={`${className} ${effect === "draw" ? "reveal-draw" : ""} transition-all duration-700 ease-out will-change-transform ${
        shown ? "is-shown translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
