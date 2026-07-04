import type { Metadata } from "next";
import { PillBadge } from "@/components/PillBadge";
import { EnquiryForm } from "@/components/EnquiryForm";
import { WhatsAppLink, WhatsAppButton } from "@/components/WhatsApp";
import { Waves, ConcentricCircles } from "@/components/graphics/LineArt";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Dr. Anmol Ahuja's clinics in Delhi, Noida and Roorkee — WhatsApp, phone, email and enquiry form.",
};

const locationTones = ["bg-sage-wash", "bg-mint-veil", "bg-linen"];

export default function ContactUsPage() {
  return (
    <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
      {/* Header row */}
      <div className="grid grid-cols-1 gap-[21px] lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-[14px] bg-forest-ink p-[35px] md:p-[49px]">
          <PillBadge tone="white">Get in Touch</PillBadge>
          <h1 className="mt-[16px] max-w-[16ch] font-serif text-[40px] font-light leading-[1.08] tracking-[-0.02em] text-linen-white md:text-[56px]">
            Let&apos;s talk about your care.
          </h1>
          <p className="mt-[16px] max-w-[46ch] text-[16px] leading-[1.6] text-sage-wash">
            Have a question or want to book a consultation? Message us on WhatsApp for the quickest
            reply, or use the form below.
          </p>
          <div className="mt-[28px] flex flex-wrap items-center gap-[16px]">
            <WhatsAppButton />
            <WhatsAppLink tone="onDark" label={site.phones[0]} />
          </div>
        </div>
        <div className="relative hidden overflow-hidden rounded-[14px] bg-mist-blue lg:block">
          <Waves className="absolute inset-0 h-full w-full" />
        </div>
      </div>

      {/* Locations */}
      <h2 className="mt-[70px] font-serif text-[28px] font-light text-forest-ink">Where to find us</h2>
      <div className="mt-[21px] grid grid-cols-1 gap-[21px] sm:grid-cols-3">
        {site.locations.map((loc, i) => (
          <div key={loc.name} className={`rounded-[14px] ${locationTones[i]} p-[24px]`}>
            <p className="text-[17px] text-forest-ink">{loc.name}</p>
            <p className="mt-[7px] text-[14px] leading-[1.55] text-charcoal">{loc.address}</p>
          </div>
        ))}
      </div>

      {/* Form + aside */}
      <div className="mt-[70px] grid grid-cols-1 gap-[42px] lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="relative overflow-hidden rounded-[14px] bg-linen p-[35px]">
          <ConcentricCircles className="pointer-events-none absolute -bottom-[80px] -left-[80px] h-[280px] w-[280px] opacity-40" />
          <div className="relative">
            <h2 className="font-serif text-[26px] font-light text-forest-ink">Prefer to reach out directly?</h2>
            <div className="mt-[24px] flex flex-col gap-[18px]">
              <div>
                <p className="text-[13px] uppercase tracking-[0.06em] text-graphite">WhatsApp / Call</p>
                <div className="mt-[6px] flex flex-col gap-[6px]">
                  <WhatsAppLink tone="forest" />
                  {site.phones[1] && (
                    <a
                      href={`tel:${site.phones[1].replace(/[^+\d]/g, "")}`}
                      className="text-[15px] text-charcoal hover:text-forest-ink"
                    >
                      {site.phones[1]}
                    </a>
                  )}
                </div>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-[0.06em] text-graphite">Email</p>
                <a href={`mailto:${site.email}`} className="mt-[6px] block text-[15px] text-forest-ink hover:underline">
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <EnquiryForm heading="Send us a message" />
      </div>
    </section>
  );
}
