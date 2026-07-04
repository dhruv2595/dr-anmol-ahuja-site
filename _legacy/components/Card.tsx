const surfaces = {
  "linen-white": "bg-linen-white border border-hairline-gray",
  "mint-veil": "bg-mint-veil",
  linen: "bg-linen",
  "sage-wash": "bg-sage-wash",
  "mist-blue": "bg-mist-blue",
};

export function Card({
  surface = "linen-white",
  padding = true,
  className = "",
  children,
}: {
  surface?: keyof typeof surfaces;
  padding?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-[14px] ${padding ? "p-[21px]" : ""} ${surfaces[surface]} ${className}`}>
      {children}
    </div>
  );
}
