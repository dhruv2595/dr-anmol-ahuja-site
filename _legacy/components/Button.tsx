import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "group inline-flex items-center justify-center gap-[10px] rounded-[14px] text-[15px] font-normal transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-ink";

const variants = {
  primary: "bg-forest-ink text-linen-white px-[22px] py-[13px] hover:bg-forest-ink-light",
  white: "bg-linen-white text-forest-ink px-[22px] py-[13px] hover:bg-linen",
  outline: "border border-forest-ink text-forest-ink px-[22px] py-[13px] hover:bg-linen",
  ghost: "text-forest-ink px-[14px] py-[9px] hover:bg-linen",
};

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-200 group-hover:translate-x-[4px]"
    >
      <path
        d="M1 7h17M12 1l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CommonProps = {
  variant?: keyof typeof variants;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", withArrow, className = "", children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
        {withArrow && <ArrowIcon />}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {withArrow && <ArrowIcon />}
    </button>
  );
}
