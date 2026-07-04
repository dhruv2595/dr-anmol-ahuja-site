import { whatsappHref, WhatsAppGlyph } from "./WhatsApp";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-hairline-gray bg-linen-white/95 backdrop-blur md:hidden">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-[9px] border-r border-hairline-gray py-[14px] text-[14px] font-normal text-[#25D366]"
      >
        <WhatsAppGlyph size={18} />
        WhatsApp
      </a>
      <a
        href="/book-an-appointment"
        className="flex flex-1 items-center justify-center bg-forest-ink py-[14px] text-[14px] font-normal text-linen-white"
      >
        Book Appointment
      </a>
    </div>
  );
}
