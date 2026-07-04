import { Card } from "./Card";

export function TestimonialCard({
  name,
  quote,
  surface = "mint-veil",
}: {
  name: string;
  quote: string;
  surface?: "mint-veil" | "linen" | "linen-white";
}) {
  return (
    <Card surface={surface} className="flex h-full flex-col justify-between gap-[21px]">
      <p className="text-[18px] leading-[1.4] text-charcoal">&ldquo;{quote}&rdquo;</p>
      <p className="text-[14px] font-normal text-forest-ink">{name}</p>
    </Card>
  );
}
