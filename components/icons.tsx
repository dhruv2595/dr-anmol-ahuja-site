/* Minimal stroke icons, drawn to match the design system: 1.6px strokes,
   round caps, currentColor. Sized by the parent via className. */

function Svg({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

/** Belly / digestion — torso silhouette with navel */
export function IconStomach({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M8.5 3.5c-.4 3.8-3 5.6-3 9a6.5 6.5 0 0 0 13 0c0-3.4-2.6-5.2-3-9" />
      <path d="M12 13.5v.01" />
      <path d="M9.5 20.5h5" />
    </Svg>
  );
}

/** Sitting discomfort / anorectal */
export function IconSeat({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M6 12V9a6 6 0 0 1 12 0v3" />
      <rect x="3.5" y="12" width="17" height="5" rx="2.5" />
      <path d="M6.5 17v2.5M17.5 17v2.5" />
    </Svg>
  );
}

/** Lump / bulge on a surface */
export function IconBump({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M3 15.5h4.5c1.1 0 1.6-.6 2.1-1.6l.9-1.9c.6-1.2 2.4-1.2 3 0l.9 1.9c.5 1 1 1.6 2.1 1.6H21" />
      <path d="M12 8.5v.01" />
    </Svg>
  );
}

/** Weighing scale */
export function IconScale({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <rect x="4" y="4" width="16" height="16" rx="3.5" />
      <path d="M8.5 11a4.8 4.8 0 0 1 7 0" />
      <path d="m12 11 1.8-2" />
    </Svg>
  );
}

/** Question mark */
export function IconQuestion({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.6 9.5a2.4 2.4 0 1 1 3.4 2.2c-.8.4-1 .9-1 1.8" />
      <path d="M12 16.5v.01" />
    </Svg>
  );
}

/** Droplet — gallbladder / digestion */
export function IconDrop({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M12 3.5s5.5 6 5.5 10a5.5 5.5 0 0 1-11 0c0-4 5.5-10 5.5-10Z" />
    </Svg>
  );
}

/** Colon-ish loop */
export function IconColon({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M8 5h8.5a3.5 3.5 0 0 1 0 7H9a3.5 3.5 0 0 0 0 7h7" />
      <path d="M19 19v.01" />
    </Svg>
  );
}

/** Phone handset */
export function IconPhone({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M5.5 4h2.7l1.6 4.2-2 1.6a12.5 12.5 0 0 0 6.4 6.4l1.6-2L20 15.8v2.7A1.8 1.8 0 0 1 18.2 20 15.5 15.5 0 0 1 4 5.8 1.8 1.8 0 0 1 5.5 4Z" />
    </Svg>
  );
}

/** Chat bubble */
export function IconChat({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8.5L4 22V11.5a7.5 7.5 0 0 1 7.5-7.5h1A7.5 7.5 0 0 1 20 11.5Z" />
      <path d="M9 11.5h6" />
    </Svg>
  );
}

/** Envelope */
export function IconMail({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </Svg>
  );
}

/** Check circle — result reassurance */
export function IconCheckCircle({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5.5" />
    </Svg>
  );
}

/** Hospital building with a cross */
export function IconHospital({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M4.5 20V8.5l7.5-4 7.5 4V20" />
      <path d="M3.5 20h17" />
      <path d="M12 9.5v4M10 11.5h4" />
      <path d="M9.5 20v-3.5h5V20" />
    </Svg>
  );
}

/** Award medal — fellowships / credentials */
export function IconAward({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.4 7.8 20l4.2-2.2L16.2 20 15 13.4" />
    </Svg>
  );
}

/** Open journal — research / publications */
export function IconBook({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M7 4h11v16H7a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2Z" />
      <path d="M8.5 8h6M8.5 11h6" />
    </Svg>
  );
}

/** Location pin — clinics / cities */
export function IconPin({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path d="M12 21s6-5.2 6-10a6 6 0 0 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.3" />
    </Svg>
  );
}

export type IconName =
  | "stomach"
  | "seat"
  | "bump"
  | "scale"
  | "question"
  | "drop"
  | "colon"
  | "phone"
  | "chat"
  | "mail"
  | "hospital"
  | "award"
  | "book"
  | "pin";

export const iconMap: Record<IconName, (p: { className?: string }) => React.ReactNode> = {
  stomach: IconStomach,
  seat: IconSeat,
  bump: IconBump,
  scale: IconScale,
  question: IconQuestion,
  drop: IconDrop,
  colon: IconColon,
  phone: IconPhone,
  chat: IconChat,
  mail: IconMail,
  hospital: IconHospital,
  award: IconAward,
  book: IconBook,
  pin: IconPin,
};
