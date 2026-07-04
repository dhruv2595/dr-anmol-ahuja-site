const tones = {
  mist: "bg-mist text-forest",
  white: "bg-canvas text-forest",
  sage: "bg-sage text-forest",
} as const;

export function PillBadge({
  children,
  tone = "mist",
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-4 py-1.5 text-body-sm ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
