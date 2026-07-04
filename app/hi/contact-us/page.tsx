import type { Metadata } from "next";
import { PillBadge } from "@/components/PillBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckItem } from "@/components/CheckItem";
import { EnquiryForm } from "@/components/EnquiryForm";
import { iconMap, type IconName } from "@/components/icons";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "संपर्क व अपॉइंटमेंट — दिल्ली, नोएडा, रुड़की | डॉ. अनमोल आहूजा" },
  description:
    "डॉ. अनमोल आहूजा से अपॉइंटमेंट बुक करें। कॉल करें +91 98186 75150, WhatsApp करें, या पूछताछ भेजें। क्लिनिक: सर गंगा राम अस्पताल (दिल्ली), नोएडा व रुड़की।",
  alternates: {
    canonical: "/hi/contact-us",
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
    title: "कॉल",
    icon: "phone",
    body: "अपॉइंटमेंट और ज़रूरी सवालों के लिए सबसे तेज़ रास्ता।",
    links: site.phones.map((p) => ({ label: p.label, href: p.href })),
  },
  {
    title: "WhatsApp",
    icon: "chat",
    body: "कभी भी संदेश भेजें — विज़िट से पहले रिपोर्ट्स भेजने के लिए बढ़िया।",
    links: [{ label: "WhatsApp पर बात करें", href: whatsappHref() }],
  },
  {
    title: "ईमेल",
    icon: "mail",
    body: "विस्तृत सवालों, रेफ़रल और रिकॉर्ड्स के लिए।",
    links: [{ label: site.email, href: `mailto:${site.email}` }],
  },
];

const locations = [
  {
    city: "नई दिल्ली",
    name: "सर गंगा राम अस्पताल",
    address: "ओल्ड राजिंदर नगर, नई दिल्ली",
    mapsQuery: "Sir Ganga Ram Hospital, Old Rajinder Nagar, New Delhi",
  },
  {
    city: "नोएडा",
    name: "दिल्ली लैप्रोस्कोपिक सर्जरी क्लिनिक",
    address: "VBS मेडिक्स, D-148, ब्लॉक D, सेक्टर 51, नोएडा, उ.प्र. 201307",
    mapsQuery: "VBS Medics, D-148, Block D, Sector 51, Noida",
  },
  {
    city: "रुड़की",
    name: "आहूजा क्लिनिक",
    address: "पहाड़ी बाज़ार, रुड़की, उत्तराखंड",
    mapsQuery: "Ahuja Clinic, Pahari Bazar, Roorkee",
  },
];

export default function HindiContactPage() {
  return (
    <>
      {/* Intro + methods */}
      <section className="container-site pt-5 md:pt-8">
        <div className="rounded-card bg-mist px-6 py-12 md:px-12 md:py-16">
          <PillBadge tone="white">संपर्क</PillBadge>
          <h1 className="mt-5 max-w-2xl font-display text-heading-lg text-forest">
            अपॉइंटमेंट व सवाल
          </h1>
          <p className="mt-4 max-w-xl text-body text-charcoal">
            कॉल करें, WhatsApp करें या नीचे पूछताछ भेजें — फिर जो क्लिनिक
            आपके सबसे पास हो, वहाँ आ जाइए।
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
        <SectionHeading eyebrow="हमें कहाँ पाएँ" title="तीन क्लिनिक, एक ही प्रैक्टिस" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {locations.map((l) => (
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
                रास्ता देखें ↗
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
              eyebrow="पूछताछ"
              tone="white"
              title="बताइए, क्या परेशानी है"
              lede="छोटा-सा संदेश काफ़ी है — आगे का हम सँभाल लेंगे।"
            />
            <ul className="mt-8 space-y-4">
              <CheckItem>जवाब आम तौर पर एक कार्य-दिवस के भीतर</CheckItem>
              <CheckItem>विज़िट से पहले रिपोर्ट्स WhatsApp पर भेज सकते हैं</CheckItem>
              <CheckItem>दिल्ली, नोएडा और रुड़की में परामर्श</CheckItem>
            </ul>
          </div>
          <div className="rounded-card bg-canvas p-6 md:p-8">
            <EnquiryForm lang="hi" />
          </div>
        </div>
      </section>
    </>
  );
}
