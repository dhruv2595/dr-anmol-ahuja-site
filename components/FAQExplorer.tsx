"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { faqCategories } from "@/lib/content/faqs";
import { site, whatsappHref } from "@/lib/site";

/* ---------- search helpers ---------- */

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "ig"));
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="rounded-[3px] bg-sage/70 px-0.5 text-forest">
            {p}
          </mark>
        ) : (
          p
        ),
      )}
    </>
  );
}

/* ---------- data shaping ---------- */

const allFaqs = faqCategories.flatMap((c) =>
  c.faqs.map((f) => ({ ...f, category: c.category })),
);

const categories = faqCategories.map((c) => ({
  name: c.category,
  count: c.faqs.length,
}));

/* ---------- UI bits ---------- */

function FAQItem({
  q,
  a,
  query,
  category,
  showCategory,
}: {
  q: string;
  a: string;
  query: string;
  category: string;
  showCategory: boolean;
}) {
  return (
    <details
      // Remount when a search starts/changes so matches open automatically
      key={`${q}-${query ? "open" : "closed"}`}
      open={query ? true : undefined}
      className="group rounded-card border border-hairline bg-canvas transition-colors open:border-forest/30"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left md:px-6 [&::-webkit-details-marker]:hidden">
        <span>
          {showCategory ? (
            <span className="mb-1 block text-caption text-graphite">{category}</span>
          ) : null}
          <span className="text-body text-ink">
            <Highlight text={q} query={query} />
          </span>
        </span>
        <span
          aria-hidden
          className="grid size-8 shrink-0 place-items-center rounded-pill bg-linen text-forest transition-transform duration-200 group-open:rotate-45"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 2v10M2 7h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </summary>
      <p className="border-t border-hairline px-5 py-4 text-body-sm text-charcoal md:px-6">
        <Highlight text={a} query={query} />
      </p>
    </details>
  );
}

/* ---------- main component ---------- */

export function FAQExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    let items = allFaqs;
    if (category) items = items.filter((f) => f.category === category);
    if (!q) return items;
    return items
      .map((f) => {
        const inQ = f.q.toLowerCase().includes(q);
        const inA = f.a.toLowerCase().includes(q);
        return { ...f, score: inQ ? 2 : inA ? 1 : 0 };
      })
      .filter((f) => f.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [q, category]);

  const searching = q.length > 0;
  const browsingAll = !searching && !category;

  const pill = (active: boolean) =>
    `shrink-0 rounded-pill px-4 py-2 text-body-sm transition-colors ${
      active
        ? "bg-forest text-canvas"
        : "border border-hairline text-charcoal hover:border-forest hover:text-forest"
    }`;

  return (
    <div>
      {/* Sticky search toolbar */}
      <div className="sticky top-16 z-30 -mx-5 border-b border-hairline bg-canvas/95 px-5 py-4 backdrop-blur md:top-20 md:-mx-10 md:px-10">
        <div className="relative mx-auto max-w-2xl">
          <svg
            aria-hidden
            className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-graphite/60"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="m12.5 12.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <label htmlFor="faq-search" className="sr-only">
            Search the FAQs
          </label>
          <input
            id="faq-search"
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setQuery("")}
            placeholder="Type your doubt — “alcohol”, “recovery time”, “pregnancy”…"
            className="w-full rounded-pill border border-hairline bg-canvas py-3.5 pl-12 pr-12 text-body text-ink placeholder:text-graphite/50 focus:border-forest [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-pill text-graphite transition-colors hover:bg-linen hover:text-forest"
            >
              <span className="sr-only">Clear search</span>
              <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          ) : null}
        </div>

        {/* Category pills */}
        <div className="mx-auto mt-3.5 flex max-w-4xl gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-center">
          <button type="button" onClick={() => setCategory(null)} className={pill(category === null)}>
            All ({allFaqs.length})
          </button>
          {categories.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setCategory(category === c.name ? null : c.name)}
              className={pill(category === c.name)}
            >
              {c.name} ({c.count})
            </button>
          ))}
        </div>
      </div>

      {/* Result count for screen readers + sighted users while filtering */}
      <p aria-live="polite" className="mt-6 text-body-sm text-graphite">
        {searching || category
          ? `${results.length} of ${allFaqs.length} answers${searching ? ` for “${query.trim()}”` : ""}`
          : `${allFaqs.length} answers · tap a question to open it`}
      </p>

      {/* Results */}
      {results.length === 0 ? (
        <div className="mt-8 rounded-card bg-linen p-8 text-center md:p-12">
          <p className="font-display text-heading-sm text-forest">
            No answer for that yet — but we're easy to reach
          </p>
          <p className="mx-auto mt-3 max-w-md text-body-sm text-charcoal">
            Your question is probably a quick one for the doctor. Ask it directly,
            or try the two-question symptom checker.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappHref(`Hello, I have a question: ${query.trim()}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-card bg-forest px-5 py-3 text-body-sm text-canvas transition-colors hover:bg-forest-bright"
            >
              Ask on WhatsApp
            </a>
            <a
              href={site.phones[0].href}
              className="rounded-card border border-forest/25 px-5 py-3 text-body-sm text-forest transition-colors hover:border-forest"
            >
              Call {site.phones[0].label}
            </a>
            <Link
              href="/#symptom-checker"
              className="text-body-sm text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
            >
              Try the symptom checker
            </Link>
          </div>
        </div>
      ) : browsingAll ? (
        /* Grouped view while browsing */
        <div className="mt-4 space-y-10">
          {faqCategories.map((c) => (
            <section key={c.category} aria-label={c.category}>
              <h2 className="font-display text-heading-sm text-forest">{c.category}</h2>
              <div className="mt-4 space-y-3">
                {c.faqs.map((f) => (
                  <FAQItem
                    key={f.q}
                    q={f.q}
                    a={f.a}
                    query=""
                    category={c.category}
                    showCategory={false}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        /* Flat ranked list while searching / filtering */
        <div className="mt-4 space-y-3">
          {results.map((f) => (
            <FAQItem
              key={f.q}
              q={f.q}
              a={f.a}
              query={q}
              category={f.category}
              showCategory={!category}
            />
          ))}
        </div>
      )}
    </div>
  );
}
