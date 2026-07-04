import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { FeaturedTestimonials } from "@/components/FeaturedTestimonials";
import { Card } from "@/components/Card";
import { ConditionCTA } from "@/components/ConditionCTA";
import { writtenTestimonials } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description: "In their own words — what patients say about their care with Dr. Anmol Ahuja.",
};

export default function TestimonialsPage() {
  const [featured, ...rest] = writtenTestimonials;
  const supporting = rest.slice(0, 3);
  const remaining = rest.slice(3);

  return (
    <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
      <SectionHeading eyebrow="Patient Stories" title="In their own words." size="lg" />

      <div className="mt-[42px]">
        <FeaturedTestimonials featured={featured} supporting={supporting} />
      </div>

      <div className="mt-[21px] columns-1 gap-[21px] sm:columns-2 lg:columns-3 [&>*]:mb-[21px] [&>*]:break-inside-avoid">
        {remaining.map((t) => (
          <Card key={t.name} surface="linen-white" className="flex flex-col gap-[11px]">
            <p className="text-[15px] leading-[1.55] text-charcoal">&ldquo;{t.quote}&rdquo;</p>
            <p className="text-[13px] text-forest-ink">— {t.name}</p>
          </Card>
        ))}
      </div>

      <div className="mt-[56px]">
        <ConditionCTA message="Ready to book your consultation?" />
      </div>
    </section>
  );
}
