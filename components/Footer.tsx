import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";
import { specialtyClusters } from "@/lib/nav";
import { ThemeToggle } from "./ThemeToggle";
import type { Lang } from "@/lib/i18n";

const t = {
  en: {
    role: site.role,
    dept: `${site.department}, ${site.hospital}`,
    specialties: "Specialties",
    pages: "Pages",
    reach: "Reach us",
    links: [
      { label: "Home", href: "/" },
      { label: "About Dr. Ahuja", href: "/about-us" },
      { label: "Symptom checker", href: "/#symptom-checker" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact & locations", href: "/contact-us" },
      { label: "Book an appointment", href: "/contact-us#enquiry" },
    ],
    whatsapp: "WhatsApp",
    rights: "All rights reserved.",
    doctor: site.doctorName,
    cities: site.cities,
    clusterLabel: (label: string) => label,
  },
  hi: {
    role: "लैप्रोस्कोपिक, बैरिएट्रिक, हर्निया व कोलोरेक्टल सर्जन",
    dept: "जनरल व लैप्रोस्कोपिक सर्जरी विभाग, सर गंगा राम अस्पताल, नई दिल्ली",
    specialties: "विशेषज्ञताएँ",
    pages: "पेज",
    reach: "संपर्क करें",
    links: [
      { label: "होम", href: "/hi" },
      { label: "डॉ. आहूजा का परिचय", href: "/hi/about-us" },
      { label: "लक्षण जाँच", href: "/hi#symptom-checker" },
      { label: "सवाल-जवाब (FAQs)", href: "/faqs" },
      { label: "संपर्क व पते", href: "/hi/contact-us" },
      { label: "अपॉइंटमेंट बुक करें", href: "/hi/contact-us#enquiry" },
    ],
    whatsapp: "व्हाट्सऐप",
    rights: "सर्वाधिकार सुरक्षित।",
    doctor: "डॉ. अनमोल आहूजा",
    cities: "दिल्ली · नोएडा · रुड़की",
    clusterLabel: (label: string) =>
      ({
        "Weight Loss Surgery": "वज़न घटाने की सर्जरी",
        Hernia: "हर्निया",
        "Colorectal Surgery": "कोलोरेक्टल सर्जरी",
        Proctology: "प्रोक्टोलॉजी",
        "MIS & Laparoscopic Surgery": "लैप्रोस्कोपिक सर्जरी",
      })[label] ?? label,
  },
} as const;

export function Footer({ lang = "en" }: { lang?: Lang }) {
  const s = t[lang];
  return (
    <footer className="bg-forest text-canvas">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="font-display text-heading-sm">{s.doctor}</p>
          <p className="mt-3 text-body-sm text-canvas/75">{s.role}</p>
          <p className="mt-1 text-body-sm text-canvas/75">{s.dept}</p>
          <p className="mt-4 text-caption text-canvas/60">
            {site.qualifications.join(" · ")}
          </p>
        </div>

        <nav aria-label="Footer specialties">
          <p className="text-caption uppercase tracking-wide text-canvas/60">
            {s.specialties}
          </p>
          <ul className="mt-4 space-y-2.5 text-body-sm">
            {specialtyClusters.map((c) => (
              <li key={c.href}>
                <Link className="hover:underline" href={c.href}>
                  {s.clusterLabel(c.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer pages">
          <p className="text-caption uppercase tracking-wide text-canvas/60">{s.pages}</p>
          <ul className="mt-4 space-y-2.5 text-body-sm">
            {s.links.map((l) => (
              <li key={l.href}>
                <Link className="hover:underline" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-caption uppercase tracking-wide text-canvas/60">{s.reach}</p>
          <ul className="mt-4 space-y-2.5 text-body-sm">
            {site.phones.map((p) => (
              <li key={p.href}>
                <a className="hover:underline" href={p.href}>{p.label}</a>
              </li>
            ))}
            <li>
              <a className="hover:underline" href={whatsappHref()}>{s.whatsapp}</a>
            </li>
            <li>
              <a className="hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="pt-2 text-canvas/75">{s.cities}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-canvas/15">
        <div className="container-site flex flex-col gap-3 py-6 text-caption text-canvas/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {s.doctor}. {s.rights}</p>
          <div className="flex flex-wrap items-center gap-4">
            <ThemeToggle lang={lang} />
            <a className="hover:text-canvas" href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="hover:text-canvas" href={site.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
