import type { FAQ } from "@/lib/content/faqs";

export function FAQAccordion({ faqs, idPrefix }: { faqs: FAQ[]; idPrefix: string }) {
  return (
    <div className="flex flex-col gap-[10px]">
      {faqs.map((faq, i) => {
        const id = `${idPrefix}-${i}`;
        return (
          <details
            key={id}
            className="group rounded-[12px] border border-hairline-gray bg-linen-white px-[20px] py-[18px] open:border-forest-ink/25"
          >
            <summary
              id={`${id}-summary`}
              className="flex cursor-pointer list-none items-center justify-between gap-[21px] text-[16px] leading-[1.4] text-true-black marker:content-none"
            >
              <span>{faq.q}</span>
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linen text-forest-ink transition-transform duration-200 group-open:rotate-180 group-open:bg-mint-veil"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-[14px] border-t border-hairline-gray pt-[14px] text-[15px] leading-[1.65] text-charcoal">
              {faq.a}
            </p>
          </details>
        );
      })}
    </div>
  );
}
