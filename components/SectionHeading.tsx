import { PillBadge } from "./PillBadge";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  eyebrowStyle = "text",
  title,
  lede,
  align = "left",
  tone = "mist",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  /** "pill" is the design's signature badge — use sparingly. "text" is a quiet label. */
  eyebrowStyle?: "pill" | "text";
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "mist" | "white" | "sage";
  as?: "h1" | "h2";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  return (
    <Reveal
      className={`flex max-w-3xl flex-col gap-3.5 ${alignCls} ${align === "center" ? "mx-auto" : ""}`}
    >
      {eyebrow ? (
        eyebrowStyle === "pill" ? (
          <PillBadge tone={tone}>{eyebrow}</PillBadge>
        ) : (
          <p className="text-body-sm uppercase tracking-wider text-forest/70">
            {eyebrow}
          </p>
        )
      ) : null}
      <Tag className="font-display text-heading text-forest">{title}</Tag>
      {lede ? <p className="text-body text-graphite">{lede}</p> : null}
    </Reveal>
  );
}
