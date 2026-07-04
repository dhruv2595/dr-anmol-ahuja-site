import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { PillBadge } from "@/components/PillBadge";
import { blogPosts } from "@/lib/content/blog";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Clear, calm articles on laparoscopic, bariatric, colorectal and proctology care from Dr. Anmol Ahuja.",
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
      <SectionHeading eyebrow="Blog" title="Guidance, in plain language." size="lg" />
      <p className="mt-[21px] max-w-[60ch] text-[17px] leading-[1.6] text-charcoal">
        Short reads on conditions, procedures and recovery — written to help you make informed
        decisions about your care.
      </p>

      <div className="mt-[42px] grid grid-cols-1 gap-[28px] sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          const image = images[post.imageKey];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-[14px] bg-linen-white transition-colors hover:bg-linen"
            >
              <div className="relative h-[190px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[11px] p-[21px]">
                <div className="flex items-center gap-[9px]">
                  <PillBadge>{post.category}</PillBadge>
                  <span className="text-[12px] text-graphite">{post.readingTime}</span>
                </div>
                <h2 className="text-[20px] leading-[1.25] text-forest-ink">{post.title}</h2>
                <p className="text-[15px] leading-[1.55] text-charcoal">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-[7px] pt-[9px] text-[15px] text-forest-ink">
                  Read article
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-[3px]">→</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
