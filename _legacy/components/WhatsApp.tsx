import { site } from "@/lib/site";

const waNumber = site.phones[0].replace(/[^\d]/g, ""); // e.g. 919818675150
export const whatsappHref = `https://wa.me/${waNumber}`;

function WhatsAppGlyph({ className = "", size = 18 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.65.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.56-.48-.49-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.77.36-.27.29-1.01.99-1.01 2.41 0 1.42 1.04 2.8 1.18 2.99.15.19 2.04 3.12 4.95 4.38.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34zM12.04 21.5h-.01c-1.75 0-3.47-.47-4.97-1.36l-.36-.21-3.7.97.99-3.61-.23-.37a9.4 9.4 0 01-1.44-5.01c0-5.2 4.24-9.43 9.45-9.43 2.52 0 4.89.98 6.67 2.77a9.36 9.36 0 012.76 6.67c0 5.2-4.24 9.43-9.43 9.43zM20.52 3.49A11.77 11.77 0 0012.04.01C5.5.01.18 5.33.18 11.86c0 2.09.55 4.13 1.59 5.93L.08 24l6.35-1.66a11.85 11.85 0 005.61 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.47-8.42z" />
    </svg>
  );
}

// A WhatsApp contact link. `tone` picks a color appropriate to the background.
export function WhatsAppLink({
  className = "",
  tone = "brand",
  label,
}: {
  className?: string;
  tone?: "brand" | "onDark" | "forest";
  label?: string;
}) {
  const toneClass =
    tone === "onDark"
      ? "text-linen-white hover:text-linen"
      : tone === "forest"
      ? "text-forest-ink hover:text-forest-ink-light"
      : "text-[#25D366] hover:opacity-90";

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-[9px] text-[15px] transition-colors ${toneClass} ${className}`}
    >
      <WhatsAppGlyph size={18} />
      <span>{label ?? site.phones[0]}</span>
    </a>
  );
}

// Filled circular WhatsApp badge (brand green), for stronger CTAs.
export function WhatsAppButton({
  className = "",
  label = "Chat on WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-[10px] rounded-[14px] bg-[#25D366] px-[18px] py-[12px] text-[15px] text-white transition-transform hover:-translate-y-[1px] ${className}`}
    >
      <WhatsAppGlyph size={20} />
      {label}
    </a>
  );
}

export { WhatsAppGlyph };
