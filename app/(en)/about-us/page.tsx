import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { images } from "@/lib/images";
import { PillBadge } from "@/components/PillBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "About Dr. Anmol Ahuja | Laparoscopic Surgeon, Sir Ganga Ram Hospital",
  },
  description:
    "Dr. Anmol Ahuja's training, fellowships, research and experience — DNB, FNB minimal access surgery, colorectal fellowship (Taiwan), published in Obesity Surgery.",
  alternates: {
    canonical: "/about-us",
    languages: { "en-IN": "/about-us", "hi-IN": "/hi/about-us" },
  },
};

const education = [
  {
    degree: "MBBS",
    place: "Thanjavur Medical College, Tamil Nadu",
  },
  {
    degree: "DNB, General Surgery",
    place: "Deen Dayal Upadhyay Hospital, New Delhi",
  },
  {
    degree: "FNB, Minimal Access Surgery",
    place: "ILS Hospitals, Kolkata",
  },
  {
    degree: "Fellowship, MIS Colorectal Surgery",
    place: "China Medical University Hospital, Taichung, Taiwan",
  },
];

const experience = [
  {
    role: "Consultant — General & Laparoscopic Surgery",
    place: "Sir Ganga Ram Hospital, New Delhi",
    current: true,
  },
  {
    role: "Junior Consultant",
    place: "ILS Hospitals, Kolkata",
    current: false,
  },
  {
    role: "Senior Resident — General & Minimal Access Surgery",
    place: "BL Kapur Superspeciality Hospital, New Delhi",
    current: false,
  },
  {
    role: "Senior Resident — General Surgery",
    place: "Guru Gobind Singh Govt Hospital, New Delhi",
    current: false,
  },
];

const focusAreas = [
  "Minimal access surgery",
  "Bariatric surgery",
  "Coloproctology",
  "Hernia surgery",
  "Endoscopic surgery",
];

const publications = [
  {
    title: "Sleeve gastrectomy vs gastric bypass — trial results",
    venue: "Obesity Surgery, 2017 & 2018",
  },
  {
    title: "Predicting diabetes remission after surgery",
    venue: "Obesity Surgery, 2018",
  },
  {
    title: "Bypass limb length — nutrition & weight-loss outcomes",
    venue: "Obesity Surgery, 2018",
  },
  {
    title: "Pre-operative evaluation of the obese patient",
    venue: "Book chapter, ASOCON 2017",
  },
];

const awards = [
  "First prize, video presentation — OSSI 2018, Chennai",
  "Silver medal, surgical quiz — GI Surgicon 2017, New Delhi",
  "Poster presentation award — ACRSICON 2017, Coimbatore",
];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="container-site pt-5 md:pt-8">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col items-start justify-center rounded-card bg-linen px-6 py-12 md:px-12 md:py-16">
            <PillBadge tone="white">About</PillBadge>
            <h1 className="mt-5 font-display text-heading-lg text-forest">
              {site.doctorName}
            </h1>
            <p className="mt-2 text-subheading text-charcoal">{site.role}</p>
            <p className="mt-6 max-w-xl text-body text-charcoal">
              Consultant surgeon at Sir Ganga Ram Hospital, New Delhi —
              treating hernia, gallbladder, piles, colorectal and weight-related
              conditions. Trained in India and Taiwan.
            </p>
            <div className="mt-8">
              <Button href="/contact-us#enquiry">Book a consultation</Button>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-card lg:min-h-0">
            <Image
              src={images.drAnmolAhuja.src}
              alt={images.drAnmolAhuja.alt}
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>

        {/* Quick facts strip */}
        <dl className="mt-4 grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-3">
          <div className="bg-canvas p-6">
            <dt className="text-body-sm text-graphite">Current post</dt>
            <dd className="mt-1 text-body-sm text-ink">
              {site.department}, {site.hospital}
            </dd>
          </div>
          <div className="bg-canvas p-6">
            <dt className="text-body-sm text-graphite">Qualifications</dt>
            <dd className="mt-1 text-body-sm text-ink">
              {site.qualifications.join(" · ")}
            </dd>
          </div>
          <div className="bg-canvas p-6">
            <dt className="text-body-sm text-graphite">Consulting in</dt>
            <dd className="mt-1 text-body-sm text-ink">{site.cities}</dd>
          </div>
        </dl>
      </section>

      {/* Education & experience */}
      <section className="container-site py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <SectionHeading eyebrow="Training" title="Education" />
            <ol className="mt-10 border-l border-hairline">
              {education.map((e) => (
                <li key={e.degree} className="relative pb-8 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-1.5 size-2.5 rounded-pill bg-forest"
                  />
                  <p className="text-body text-ink">{e.degree}</p>
                  <p className="mt-1 text-body-sm text-graphite">{e.place}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Practice" title="Experience" />
            <ol className="mt-10 border-l border-hairline">
              {experience.map((e) => (
                <li key={e.role} className="relative pb-8 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className={`absolute -left-[5px] top-1.5 size-2.5 rounded-pill ${
                      e.current ? "bg-forest" : "bg-mist"
                    }`}
                  />
                  <p className="text-body text-ink">
                    {e.role}
                    {e.current ? (
                      <span className="ml-2 inline-block rounded-pill bg-sage px-2.5 py-0.5 align-middle text-caption text-forest">
                        Current
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-body-sm text-graphite">{e.place}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="container-site pb-20 md:pb-28">
        <div className="rounded-card bg-sage px-6 py-12 md:px-12 md:py-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              eyebrow="Focus"
              tone="white"
              title="Areas of special interest"
            />
            <ul className="flex flex-wrap gap-3">
              {focusAreas.map((f) => (
                <li
                  key={f}
                  className="rounded-pill bg-canvas px-5 py-2.5 text-body-sm text-forest"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research & recognition */}
      <section className="container-site pb-20 md:pb-28">
        <SectionHeading
          eyebrow="On the record"
          title="Research & recognition"
          lede="Selected highlights — full list on request."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-card border border-hairline p-6 md:p-8">
            <h3 className="text-caption uppercase tracking-wide text-graphite">
              Publications
            </h3>
            <ul className="mt-5 divide-y divide-hairline">
              {publications.map((p) => (
                <li key={p.title} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-body-sm text-ink">{p.title}</p>
                  <p className="mt-1 text-caption text-graphite">{p.venue}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-card bg-mint p-6 md:p-8">
              <h3 className="text-caption uppercase tracking-wide text-forest/70">
                Awards
              </h3>
              <ul className="mt-5 space-y-3">
                {awards.map((a) => (
                  <li key={a} className="text-body-sm text-charcoal">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card bg-linen p-6 md:p-8">
              <h3 className="text-caption uppercase tracking-wide text-forest/70">
                Teaching
              </h3>
              <p className="mt-4 text-body-sm text-charcoal">
                Faculty at national workshops on hernia, bariatric and
                anorectal surgery. Volunteers at charitable surgery camps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a diagnosis and want a surgical opinion?"
        sub="Bring your reports to a consultation — you'll leave knowing your options."
      />
    </>
  );
}
