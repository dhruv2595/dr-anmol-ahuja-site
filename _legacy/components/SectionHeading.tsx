import { PillBadge } from "./PillBadge";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  size = "md",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  as?: "h1" | "h2" | "h3";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleSize = size === "lg" ? "text-[44px] leading-[1.15] md:text-[60px] md:leading-[1.05]" : "text-[32px] leading-[1.2] md:text-[42px] md:leading-[1.2]";

  return (
    <div className={`flex flex-col gap-[14px] ${alignClass}`}>
      {eyebrow && <PillBadge>{eyebrow}</PillBadge>}
      <Tag className={`font-serif font-light text-forest-ink tracking-[-0.02em] ${titleSize}`}>
        {title}
      </Tag>
    </div>
  );
}
