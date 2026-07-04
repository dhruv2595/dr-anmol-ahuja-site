import { Card } from "./Card";
import type { Testimonial } from "@/lib/content/testimonials";

// A restrained testimonial layout: one featured quote alongside a small
// supporting column, rather than a wall of equal cards.
export function FeaturedTestimonials({
  featured,
  supporting,
}: {
  featured: Testimonial;
  supporting: Testimonial[];
}) {
  return (
    <div className="grid grid-cols-1 gap-[21px] lg:grid-cols-[1.4fr_1fr]">
      <Card surface="sage-wash" className="flex flex-col justify-between gap-[35px] p-[35px] md:p-[49px]">
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-hidden="true">
          <path
            d="M0 32V18C0 8 6 1.5 16 0l2 6C12 7.5 9 11 8.5 15H16v17H0zm22 0V18C22 8 28 1.5 38 0l2 6c-6 1.5-9 5-9.5 9H38v17H22z"
            fill="var(--color-forest-ink)"
            opacity="0.9"
          />
        </svg>
        <p className="font-serif text-[26px] font-light leading-[1.3] text-forest-ink md:text-[30px]">
          {featured.quote}
        </p>
        <p className="text-[15px] text-forest-ink">— {featured.name}</p>
      </Card>

      <div className="flex flex-col gap-[21px]">
        {supporting.map((t) => (
          <Card key={t.name} surface="linen" className="flex flex-col gap-[11px]">
            <p className="text-[15px] leading-[1.5] text-charcoal">&ldquo;{t.quote}&rdquo;</p>
            <p className="text-[13px] text-forest-ink">— {t.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
