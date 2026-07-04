import type { Metadata } from "next";
import { PillBadge } from "@/components/PillBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckItem } from "@/components/CheckItem";
import { EnquiryForm } from "@/components/EnquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { iconMap, type IconName } from "@/components/icons";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Appointments — Delhi, Noida, Roorkee",
  description:
    "Book an appointment with Dr. Anmol Ahuja. Call +91 98186 75150, WhatsApp, or send an enquiry. Clinics at Sir Ganga Ram Hospital (Delhi), Noida and Roorkee.",
  alternates: {
    canonical: "/contact-us",
    languages: { "en-IN": "/contact-us", "hi-IN": "/hi/contact-us" },
  },
};

const methods: {
  title: string;
  icon: IconName;
  body: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Call",
    icon: "phone",
    body: "Fastest for appointments and urgent questions.",
    links: site.phones.map((p) => ({ label: p.label, href: p.href })),
  },
  {
    title: "WhatsApp",
    icon: "chat",
    body: "Message anytime — good for sharing reports before a visit.",
    links: [{ label: `Chat on WhatsApp`, href: whatsappHref() }],
  },
  {
    title: "Email",
    icon: "mail",
    body: "For detailed queries, referrals and records.",
    links: [{ label: site.email, href: `mailto:${site.email}` }],
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${site.doctorName}`,
          url: `${site.url}/contact-us`,
        }}
      />

      {/* Intro + methods */}
      <section className="container-site pt-5 md:pt-8">
        <div className="rounded-card bg-mist px-6 py-12 md:px-12 md:py-16">
          <PillBadge tone="white">Contact</PillBadge>
          <h1 className="mt-5 max-w-2xl font-display text-heading-lg text-forest">
            Appointments &amp; questions
          </h1>
          <p className="mt-4 max-w-xl text-body text-charcoal">
            Call, WhatsApp or send an enquiry below — then visit whichever
            clinic is closest to you.
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {methods.map((m) => {
            const Icon = iconMap[m.icon];
            return (
            <div key={m.title} className="rounded-card bg-linen p-6 md:p-8">
              <span className="grid size-11 place-items-center rounded-pill bg-canvas text-forest">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-4 text-subheading text-forest">{m.title}</h2>
              <p className="mt-2 text-body-sm text-charcoal">{m.body}</p>
              <ul className="mt-5 space-y-2">
                {m.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-body-sm text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
                      {...(l.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
      </section>

      {/* Locations */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading
          eyebrow="Where to find us"
          title="Three clinics, one practice"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {site.locations.map((l) => (
            <div
              key={l.name}
              className="flex flex-col items-start rounded-card border border-hairline p-6 md:p-8"
            >
              <PillBadge>{l.city}</PillBadge>
              <h3 className="mt-4 text-subheading text-forest">{l.name}</h3>
              <p className="mt-2 grow text-body-sm text-charcoal">{l.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-body-sm text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                Get directions ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="container-site scroll-mt-24 pb-20 md:pb-28">
        <div className="grid gap-10 rounded-card bg-linen p-6 md:p-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Enquiry"
              tone="white"
              title="Tell us what's going on"
              lede="A short note is enough — we'll take it from there."
            />
            <ul className="mt-8 space-y-4">
              <CheckItem>Replies usually within one working day</CheckItem>
              <CheckItem>Share existing reports on WhatsApp before your visit</CheckItem>
              <CheckItem>Consultations in Delhi, Noida and Roorkee</CheckItem>
            </ul>
          </div>
          <div className="rounded-card bg-canvas p-6 md:p-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
