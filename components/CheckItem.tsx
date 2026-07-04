import { iconMap, type IconName } from "@/components/icons";

export function CheckItem({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: IconName;
}) {
  const Icon = icon ? iconMap[icon] : null;
  return (
    <li className="flex items-start gap-3.5">
      {Icon ? (
        <span
          aria-hidden
          className="grid size-9 shrink-0 place-items-center rounded-pill bg-linen text-forest"
        >
          <Icon className="size-5" />
        </span>
      ) : (
        <span
          aria-hidden
          className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-nav bg-forest"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7.5 5.5 10.5 11.5 3.5"
              stroke="#fffefc"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
      <span className={`text-body-sm text-charcoal ${Icon ? "pt-1.5" : ""}`}>
        {children}
      </span>
    </li>
  );
}
