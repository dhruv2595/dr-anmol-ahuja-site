import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PillBadge } from "@/components/PillBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckItem } from "@/components/CheckItem";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { AssessmentTool } from "@/components/AssessmentTool";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Reveal } from "@/components/Reveal";
import { ConvergingLines } from "@/components/graphics/LineArt";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Laparoscopic & Bariatric Surgeon in Delhi NCR | Dr. Anmol Ahuja",
  description:
    "Advanced laparoscopic, bariatric, hernia and colorectal surgery in Delhi, Noida and Roorkee. Dr. Anmol Ahuja, Sir Ganga Ram Hospital — book a consultation.",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "hi-IN": "/hi" },
  },
};

const stats = [
  { value: "1–2 days", label: "most patients go home after surgery" },
  { value: "80–90%", label: "of excess weight typically lost after weight-loss surgery" },
  { value: "3", label: "clinics — Delhi, Noida and Roorkee" },
  { value: "4", label: "research papers in the journal Obesity Surgery" },
];

const steps = [
  {
    n: "01",
    title: "Consult",
    body: "Bring your reports. You'll get a clear diagnosis and every option explained in plain language — surgery is only one of them.",
  },
  {
    n: "02",
    title: "Plan",
    body: "If surgery is right for you, you'll know exactly what will happen, how long you'll be in hospital, and what recovery looks like.",
  },
  {
    n: "03",
    title: "Recover",
    body: "Most patients are home within a day or two. We stay with you through follow-up until you're fully back to your routine.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Physician",
          name: site.doctorName,
          url: site.url,
          description: `${site.role} at ${site.hospital}, consulting in Delhi, Noida and Roorkee.`,
          medicalSpecialty: ["Surgical", "Bariatric", "Gastroenterologic"],
          telephone: "+91-9818675150",
          email: site.email,
          address: site.locations.map((l) => ({
            "@type": "PostalAddress",
            name: l.name,
            streetAddress: l.address,
            addressLocality: l.city,
            addressCountry: "IN",
          })),
          sameAs: [site.social.facebook, site.social.twitter],
        }}
      />

      {/* Hero */}
      <section className="container-site pt-8 md:pt-12">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="flex grow flex-col items-start rounded-card bg-sage px-6 py-10 md:px-12 md:py-12">
              <PillBadge tone="white">
                Sir Ganga Ram Hospital · New Delhi
              </PillBadge>
              <h1 className="mt-5 max-w-xl font-display text-heading-lg text-forest">
                Advanced laparoscopic &amp; bariatric surgeon in Delhi NCR
              </h1>
              <p className="mt-auto max-w-lg pt-8 text-body text-charcoal">
                Gallstones, hernia, piles, or weight that won&apos;t budge —
                get a straight answer about what&apos;s wrong, and modern
                treatment that gets you back to your life in days. Questions
                first?{" "}
                <a
                  href={site.phones[0].href}
                  className="whitespace-nowrap text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
                >
                  Call {site.phones[0].label}
                </a>
              </p>
            </div>
            <Link
              href="/contact-us#enquiry"
              className="group flex items-center justify-between rounded-card bg-forest px-7 py-6 text-body text-canvas transition-colors hover:bg-forest-bright"
            >
              <span>Book an appointment</span>
              <svg
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M4 14h20M16 6l8 8-8 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={150} className="relative min-h-80 overflow-hidden rounded-card lg:min-h-0">
            <Image
              src={images.heroPatients.src}
              alt={images.heroPatients.alt}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <p className="absolute bottom-4 left-4 rounded-pill bg-canvas/90 px-4 py-1.5 text-body-sm text-forest">
              Consultations in Delhi · Noida · Roorkee
            </p>
          </Reveal>
        </div>
      </section>

      {/* Meet the doctor */}
      <section className="container-site pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal className="relative min-h-[26rem] overflow-hidden rounded-card lg:min-h-[32rem]">
            <Image
              src={images.drAnmolAhuja.src}
              alt={images.drAnmolAhuja.alt}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-[center_30%]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Your surgeon"
              eyebrowStyle="pill"
              title="Meet Dr. Anmol Ahuja"
              lede="Consultant surgeon at Sir Ganga Ram Hospital, New Delhi — trained in India and Taiwan, and focused entirely on advanced laparoscopic care."
            />
            <p className="mt-5 max-w-xl text-body-sm text-charcoal">
              Patients describe him as someone who explains things clearly and
              never rushes a decision. Surgery is only ever recommended when
              it&apos;s genuinely the best option for you.
            </p>
            <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              <CheckItem icon="hospital">Consultant, Sir Ganga Ram Hospital, New Delhi</CheckItem>
              <CheckItem icon="award">Fellowships in advanced &amp; colorectal surgery</CheckItem>
              <CheckItem icon="book">
                Research published in <em>Obesity Surgery</em>
              </CheckItem>
              <CheckItem icon="pin">Consults in Delhi, Noida and Roorkee</CheckItem>
            </ul>
            <div className="mt-8">
              <Button href="/about-us">More about Dr. Ahuja</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom checker */}
      <section id="symptom-checker" className="container-site scroll-mt-24 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Symptom checker"
          eyebrowStyle="pill"
          title="Not sure what's wrong?"
          lede="Answer two quick questions. We'll point you to the right information — and to the doctor, if you want."
        />
        <Reveal delay={120} className="mt-10">
          <AssessmentTool />
        </Reveal>
        <p className="mt-8 text-body-sm text-graphite">
          Or browse by specialty:{" "}
          {[
            { label: "Weight loss", href: "/weight-loss-surgery" },
            { label: "Hernia", href: "/hernia" },
            { label: "Colon & rectum", href: "/colorectal" },
            { label: "Piles & anorectal", href: "/proctology" },
            { label: "Gallbladder & digestive", href: "/mis-laparoscopic-surgery" },
          ].map((l, i, arr) => (
            <span key={l.href}>
              <Link
                href={l.href}
                className="text-forest underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
              >
                {l.label}
              </Link>
              {i < arr.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      </section>

      {/* Statement */}
      <section aria-label="Our promise" className="bg-mist text-forest">
        <div className="container-site pt-16 md:pt-24">
          <Reveal>
            <p className="max-w-4xl font-display text-heading-lg">
              Surgery shouldn&apos;t put your life on hold. Most of our
              patients are up and walking the same evening — and home within a
              day or two.
            </p>
          </Reveal>
        </div>
        <Reveal effect="draw" className="mt-10 md:mt-14">
          <ConvergingLines className="h-28 w-full md:h-40" />
        </Reveal>
        <div aria-hidden className="h-10 md:h-16" />
      </section>

      {/* Patient journey */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading eyebrow="What to expect" title="Three steps, no surprises" />
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n}>
              <Reveal
                delay={i * 130}
                className="h-full rounded-card border border-hairline p-6 md:p-8"
              >
                <p aria-hidden className="text-body-sm text-forest/50">{s.n}</p>
                <h3 className="mt-2 text-subheading text-forest">{s.title}</h3>
                <p className="mt-3 text-body-sm text-charcoal">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Stats — proof, before the social proof */}
      <section className="container-site pb-20 md:pb-28" aria-label="The practice in numbers">
        <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-card bg-forest sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="p-7 md:p-9">
              <p className="text-heading-lg font-light text-canvas">{s.value}</p>
              <p className="mt-3 text-body-sm text-canvas/70">{s.label}</p>
            </li>
          ))}
        </ul>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="container-site pb-20 md:pb-28">
        <SectionHeading eyebrow="Patient stories" title="In their words" />
        <Reveal delay={100} className="mt-12">
          <TestimonialCarousel />
        </Reveal>
      </section>

      <CtaBand
        title="Talk to Dr. Ahuja about your options"
        sub="Book a consultation in Delhi, Noida or Roorkee — or call first if you just have questions."
      />
    </>
  );
}
