"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

const t = {
  en: { dark: "Dark mode", light: "Light mode" },
  hi: { dark: "डार्क मोड", light: "लाइट मोड" },
} as const;

export function ThemeToggle({ lang = "en" }: { lang?: Lang }) {
  // null until mounted — avoids hydration mismatch with the init script
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark ?? false}
      className="inline-flex items-center gap-2 rounded-pill border border-canvas/25 px-3.5 py-1.5 text-caption text-canvas/75 transition-colors hover:border-canvas/60 hover:text-canvas"
    >
      {dark ? (
        /* sun */
        <svg aria-hidden width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <circle cx="7" cy="7" r="3" />
          <path d="M7 .8v1.4M7 11.8v1.4M.8 7h1.4M11.8 7h1.4M2.6 2.6l1 1M10.4 10.4l1 1M11.4 2.6l-1 1M3.6 10.4l-1 1" />
        </svg>
      ) : (
        /* moon */
        <svg aria-hidden width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8.5A5.5 5.5 0 0 1 5.5 2 5.5 5.5 0 1 0 12 8.5Z" />
        </svg>
      )}
      {dark === null ? t[lang].dark : dark ? t[lang].light : t[lang].dark}
    </button>
  );
}
