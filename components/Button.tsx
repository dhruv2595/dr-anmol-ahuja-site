import Link from "next/link";

type Variant = "primary" | "outline" | "onDark";

const styles: Record<Variant, string> = {
  primary: "bg-forest text-canvas hover:bg-forest-bright",
  outline: "border border-forest/25 text-forest hover:border-forest",
  onDark: "bg-canvas text-forest hover:bg-linen",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
}) {
  const className = `group inline-flex items-center gap-2.5 rounded-card px-5 py-3 text-body-sm transition-colors ${styles[variant]}`;
  const inner = (
    <>
      <span>{children}</span>
      <svg
        aria-hidden
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M2 7h10M7.5 2.5 12 7l-4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
