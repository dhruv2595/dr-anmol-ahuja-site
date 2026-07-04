export function CheckBadge({ size = 32 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-[7px] bg-forest-ink"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8.5L6.5 12L13 4.5"
          stroke="#fffefc"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FeatureListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-[14px]">
      <CheckBadge />
      <span className="pt-[4px] text-[16px] leading-[1.5] text-true-black">{children}</span>
    </li>
  );
}
