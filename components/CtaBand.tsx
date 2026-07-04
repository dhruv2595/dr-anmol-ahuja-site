import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { ArcLines } from "./graphics/LineArt";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

const t = {
  en: {
    title: "Ready to talk it through?",
    sub: "Book a consultation, or call to discuss your reports first.",
    book: "Book an appointment",
    call: "Call",
    bookHref: "/contact-us#enquiry",
    ariaLabel: "Book an appointment",
  },
  hi: {
    title: "बात करके तय करना चाहेंगे?",
    sub: "परामर्श बुक करें, या पहले अपनी रिपोर्ट्स पर बात करने के लिए कॉल करें।",
    book: "अपॉइंटमेंट बुक करें",
    call: "कॉल करें",
    bookHref: "/hi/contact-us#enquiry",
    ariaLabel: "अपॉइंटमेंट बुक करें",
  },
} as const;

export function CtaBand({
  lang = "en",
  title,
  sub,
}: {
  lang?: Lang;
  title?: string;
  sub?: string;
}) {
  const s = t[lang];
  return (
    <section aria-label={s.ariaLabel} className="container-site pb-20 md:pb-28">
      <Reveal className="grid overflow-hidden rounded-card md:grid-cols-[1.6fr_1fr]">
        <div className="bg-linen px-6 py-12 md:px-12 md:py-16">
          <h2 className="max-w-lg font-display text-heading-lg text-forest">
            {title ?? s.title}
          </h2>
          <p className="mt-4 max-w-md text-body text-charcoal">{sub ?? s.sub}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={s.bookHref}>{s.book}</Button>
            <a
              href={site.phones[0].href}
              className="rounded-card px-2 py-3 text-body-sm text-forest underline decoration-forest/30 underline-offset-4 transition-colors hover:decoration-forest"
            >
              {s.call} {site.phones[0].label}
            </a>
          </div>
        </div>
        <div className="hidden items-end justify-end bg-mist text-forest md:flex">
          <ArcLines className="h-full max-h-80 w-full" />
        </div>
      </Reveal>
    </section>
  );
}
