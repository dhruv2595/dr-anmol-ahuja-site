import { Button } from "./Button";
import { WhatsAppLink } from "./WhatsApp";
import { NestedCorners } from "./graphics/LineArt";

// Dark forest-ink conversion banner (Ease "Bring ease back into patient care" style).
export function ConditionCTA({
  compact = false,
  message = "Ready to take the first step?",
  subtext = "Book a consultation with Dr. Ahuja, or send a quick message on WhatsApp.",
}: {
  compact?: boolean;
  message?: string;
  subtext?: string;
}) {
  if (compact) {
    // Inline, lighter treatment for use mid-page (e.g. under a hero intro).
    // Message stacks above a wrapping button row so it never depends on the
    // width of whatever column it's dropped into.
    return (
      <div className="rounded-[14px] border border-hairline-gray bg-linen-white p-[21px]">
        <div className="flex items-center gap-[12px]">
          <span
            aria-hidden="true"
            className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-mint-veil text-forest-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0v9l5 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="text-[16px] text-forest-ink">{message}</p>
        </div>
        <div className="mt-[16px] flex flex-wrap items-center gap-[18px]">
          <Button href="/book-an-appointment" withArrow>
            Book an Appointment
          </Button>
          <WhatsAppLink tone="brand" label="WhatsApp" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[14px] bg-forest-ink px-[35px] py-[49px] md:px-[56px] md:py-[70px]">
      <NestedCorners className="pointer-events-none absolute -right-[40px] -top-[40px] hidden h-[280px] w-[380px] opacity-30 [--color-forest-ink:var(--color-sage-wash)] md:block" />
      <div className="relative max-w-[26ch]">
        <h2 className="font-serif text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-linen-white md:text-[48px]">
          {message}
        </h2>
        <p className="mt-[16px] max-w-[46ch] text-[16px] leading-[1.6] text-sage-wash">{subtext}</p>
        <div className="mt-[28px] flex flex-wrap items-center gap-[14px]">
          <Button href="/book-an-appointment" variant="white" withArrow>
            Book an Appointment
          </Button>
          <WhatsAppLink tone="onDark" label="Message on WhatsApp" />
        </div>
      </div>
    </div>
  );
}
