import type { Metadata } from "next";
import { PillBadge } from "@/components/PillBadge";
import { EnquiryForm } from "@/components/EnquiryForm";
import { WhatsAppLink } from "@/components/WhatsApp";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book an appointment with Dr. Anmol Ahuja — Laparoscopic, Bariatric & Colorectal Surgeon in Delhi, Noida and Roorkee.",
};

export default function BookAppointmentPage() {
  return (
    <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
      <div className="grid grid-cols-1 gap-[42px] lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="rounded-[14px] bg-sage-wash p-[35px] md:p-[42px]">
          <PillBadge tone="white">Book An Appointment</PillBadge>
          <h1 className="mt-[14px] font-serif text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-forest-ink md:text-[44px]">
            Visit us anytime.
          </h1>
          <p className="mt-[16px] text-[17px] leading-[1.5] text-charcoal">{site.tagline}</p>

          <div className="mt-[28px] flex flex-col gap-[18px] border-t border-forest-ink/15 pt-[21px]">
            <div>
              <p className="text-[13px] font-normal text-forest-ink">Call or WhatsApp</p>
              <WhatsAppLink tone="forest" className="mt-[4px]" />
            </div>
            <div>
              <p className="text-[13px] font-normal text-forest-ink">Write Us</p>
              <a href={`mailto:${site.email}`} className="mt-[4px] block text-[15px] text-charcoal hover:text-forest-ink">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-[13px] font-normal text-forest-ink">Primary Location</p>
              <p className="mt-[4px] text-[15px] text-charcoal">
                {site.locations[0].name}, {site.locations[0].address}
              </p>
            </div>
          </div>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
