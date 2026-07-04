import Image from "next/image";
import Link from "next/link";
import type { ConditionPage } from "@/lib/content/types";
import { images, specialtyImages } from "@/lib/images";
import { PillBadge } from "./PillBadge";
import { ConditionCTA } from "./ConditionCTA";
import { CheckBadge } from "./CheckBadge";
import { Reveal } from "./Reveal";

const clusterLabels: Record<string, string> = {
  "weight-loss-surgery": "Weight Loss Surgery",
  hernia: "Hernia",
  colorectal: "Colorectal Surgery",
  proctology: "Proctology",
  "mis-laparoscopic-surgery": "MIS & Laparoscopic Surgery",
};

export function ConditionTemplate({
  page,
  siblings,
}: {
  page: ConditionPage;
  siblings: ConditionPage[];
}) {
  const heroImage = images[specialtyImages[page.cluster] ?? "operatingTheatre"];

  return (
    <>
      <section className="mx-auto max-w-[1320px] px-[21px] pt-[28px]">
        <div className="grid grid-cols-1 gap-[21px] overflow-hidden rounded-[14px] bg-linen lg:grid-cols-[1.2fr_1fr]">
          <div className="p-[35px] md:p-[56px]">
            <PillBadge>{clusterLabels[page.cluster] ?? page.cluster}</PillBadge>
            <h1 className="mt-[14px] max-w-[22ch] font-serif text-[40px] font-light leading-[1.1] tracking-[-0.02em] text-forest-ink md:text-[52px]">
              {page.title}
            </h1>
            <div className="mt-[21px] flex max-w-[65ch] flex-col gap-[14px]">
              {page.intro.map((para, i) => (
                <p key={i} className="text-[18px] leading-[1.55] text-charcoal">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-[28px] max-w-[70ch]">
              <ConditionCTA compact />
            </div>
          </div>
          <div className="relative min-h-[240px] lg:min-h-full">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
        <div className="flex flex-col gap-[56px]">
          {page.sections.map((section, i) => (
            <Reveal key={section.heading} delayMs={Math.min(i * 40, 200)}>
              <div className="max-w-[75ch]">
                <h2 className="text-[26px] font-normal text-forest-ink md:text-[30px]">
                  {section.heading}
                </h2>
                {section.body?.map((para, j) => (
                  <p key={j} className="mt-[16px] text-[17px] leading-[1.65] text-charcoal">
                    {para}
                  </p>
                ))}
                {section.list && section.ordered && (
                  <ol className="mt-[21px] flex flex-col gap-[11px] text-[16px] leading-[1.6] text-true-black">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex gap-[11px]">
                        <span className="font-normal text-forest-ink">{k + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {section.list && !section.ordered && (
                  <ul className="mt-[21px] grid grid-cols-1 gap-[16px] sm:grid-cols-2">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-[11px]">
                        <CheckBadge size={26} />
                        <span className="text-[16px] leading-[1.5] text-true-black">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="border-t border-hairline-gray bg-linen py-[56px]">
          <div className="mx-auto max-w-[1320px] px-[21px]">
            <h2 className="text-[22px] font-normal text-forest-ink">
              Related conditions in {clusterLabels[page.cluster] ?? page.cluster}
            </h2>
            <ul className="mt-[21px] grid grid-cols-1 gap-[9px] sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((sibling) => (
                <li key={sibling.slug}>
                  <Link
                    href={`/${sibling.slug}`}
                    className="block rounded-[7px] bg-linen-white px-[16px] py-[13px] text-[15px] text-charcoal hover:text-forest-ink"
                  >
                    {sibling.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
        <ConditionCTA />
      </section>
    </>
  );
}
