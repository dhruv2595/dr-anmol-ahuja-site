export function PillBadge({
  children,
  tone = "mist",
}: {
  children: React.ReactNode;
  tone?: "mist" | "white";
}) {
  const toneClasses =
    tone === "mist" ? "bg-mist-blue text-forest-ink" : "bg-linen-white text-forest-ink";
  return (
    <span
      className={`inline-block rounded-[999px] px-[14px] py-[7px] text-[12px] leading-[1.5] ${toneClasses}`}
    >
      {children}
    </span>
  );
}
