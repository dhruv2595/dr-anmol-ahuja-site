"use client";

import { useMemo, useState } from "react";
import type { FAQCategory } from "@/lib/content/faqs";
import { FAQAccordion } from "./FAQAccordion";

export function FAQSearch({ categories }: { categories: FAQCategory[] }) {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("All");

  const catNames = ["All", ...categories.map((c) => c.category)];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => activeCat === "All" || c.category === activeCat)
      .map((c) => ({
        ...c,
        faqs: q
          ? c.faqs.filter(
              (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
            )
          : c.faqs,
      }))
      .filter((c) => c.faqs.length > 0);
  }, [query, activeCat, categories]);

  const totalMatches = filtered.reduce((n, c) => n + c.faqs.length, 0);

  return (
    <div>
      {/* Search + filter card */}
      <div className="rounded-[16px] bg-linen p-[21px] md:p-[24px]">
        <div className="relative">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute left-[16px] top-1/2 -translate-y-1/2 text-graphite"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <label htmlFor="faq-search" className="sr-only">
            Search questions
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions — e.g. recovery, gastric sleeve, hernia…"
            className="w-full rounded-[12px] border border-hairline-gray bg-linen-white py-[14px] pl-[46px] pr-[16px] text-[16px] text-true-black placeholder:text-graphite focus-visible:outline-2 focus-visible:outline-forest-ink"
          />
        </div>

        <div className="mt-[16px] flex flex-wrap gap-[9px]">
          {catNames.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setActiveCat(name)}
              aria-pressed={activeCat === name}
              className={`rounded-[999px] px-[16px] py-[8px] text-[13px] transition-colors ${
                activeCat === name
                  ? "bg-forest-ink text-linen-white"
                  : "bg-linen-white text-charcoal hover:bg-mint-veil"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {query && (
          <p className="mt-[16px] text-[13px] text-graphite" aria-live="polite">
            {totalMatches} {totalMatches === 1 ? "result" : "results"} for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {/* Results */}
      <div className="mt-[49px] flex flex-col gap-[49px]">
        {filtered.length === 0 && (
          <p className="text-[16px] text-charcoal">
            No questions match your search. Try a different term, or{" "}
            <a href="/book-an-appointment" className="text-forest-ink underline">
              ask us directly
            </a>
            .
          </p>
        )}
        {filtered.map((category) => (
          <div key={category.category}>
            <h2 className="text-[22px] text-forest-ink">{category.category}</h2>
            <div className="mt-[18px]">
              <FAQAccordion faqs={category.faqs} idPrefix={category.category} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
