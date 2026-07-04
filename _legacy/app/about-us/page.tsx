import type { Metadata } from "next";
import Image from "next/image";
import { PillBadge } from "@/components/PillBadge";
import { Card } from "@/components/Card";
import { ConditionCTA } from "@/components/ConditionCTA";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { aboutContent } from "@/lib/content/about";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Dr. Anmol Ahuja",
  description:
    "Dr. Anmol Ahuja — Advanced Laparoscopic, Bariatric, Hernia and Colorectal Surgeon at Sir Ganga Ram Hospital, New Delhi. Education, awards, and publications.",
};

export default function AboutUsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-[21px] pt-[28px]">
        <div className="grid grid-cols-1 gap-[21px] overflow-hidden rounded-[14px] bg-linen lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-[260px] lg:min-h-full">
            <Image
              src={images.consultingSurgeon.src}
              alt={images.consultingSurgeon.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="p-[35px] md:p-[56px]">
            <PillBadge>About the Surgeon</PillBadge>
            <h1 className="mt-[14px] font-serif text-[40px] font-light leading-[1.1] tracking-[-0.02em] text-forest-ink md:text-[52px]">
              {site.doctorName}
            </h1>
            <p className="mt-[14px] text-[18px] leading-[1.5] text-charcoal">{site.role}</p>
            <p className="mt-[7px] text-[15px] text-graphite">{site.department}</p>
            <p className="mt-[14px] text-[15px] font-normal text-forest-ink">{site.qualifications}</p>
            <div className="mt-[28px]">
              <ConditionCTA compact message="Ready to schedule a consultation?" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
        <div className="grid grid-cols-1 gap-[42px] lg:grid-cols-2">
          <Reveal>
            <h2 className="text-[28px] font-normal text-forest-ink">Education</h2>
            <ul className="mt-[21px] flex flex-col gap-[18px]">
              {aboutContent.education.map((e) => (
                <li key={e.degree}>
                  <p className="text-[17px] font-normal text-true-black">{e.degree}</p>
                  <p className="text-[15px] text-charcoal">{e.institution}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={60}>
            <h2 className="text-[28px] font-normal text-forest-ink">Work Experience</h2>
            <ul className="mt-[21px] flex flex-col gap-[18px]">
              {aboutContent.workExperience.map((w) => (
                <li key={w.role}>
                  <p className="text-[17px] font-normal text-true-black">{w.role}</p>
                  <p className="text-[15px] text-charcoal">{w.place}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-linen py-[56px]">
        <div className="mx-auto max-w-[1320px] px-[21px]">
          <div className="grid grid-cols-1 gap-[21px] sm:grid-cols-2 lg:grid-cols-4">
            <Card surface="linen-white">
              <h3 className="text-[16px] font-normal text-forest-ink">Areas of Interest</h3>
              <ul className="mt-[14px] flex flex-col gap-[9px] text-[14px] text-charcoal">
                {aboutContent.interests.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Card>
            <Card surface="linen-white">
              <h3 className="text-[16px] font-normal text-forest-ink">Awards</h3>
              <ul className="mt-[14px] flex flex-col gap-[9px] text-[14px] text-charcoal">
                {aboutContent.awards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Card>
            <Card surface="linen-white">
              <h3 className="text-[16px] font-normal text-forest-ink">Conferences Conducted</h3>
              <ul className="mt-[14px] flex flex-col gap-[9px] text-[14px] text-charcoal">
                {aboutContent.conferencesConducted.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>
            <Card surface="linen-white">
              <h3 className="text-[16px] font-normal text-forest-ink">Faculty Lectures</h3>
              <ul className="mt-[14px] flex flex-col gap-[9px] text-[14px] text-charcoal">
                {aboutContent.facultyLectures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
        <h2 className="text-[28px] font-normal text-forest-ink">Publications</h2>
        <div className="mt-[21px] grid grid-cols-1 gap-[28px] lg:grid-cols-2">
          <div>
            <h3 className="text-[16px] font-normal text-charcoal">Books</h3>
            <ul className="mt-[9px] flex flex-col gap-[9px] text-[15px] leading-[1.6] text-charcoal">
              {aboutContent.publications.books.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[16px] font-normal text-charcoal">Journals</h3>
            <ul className="mt-[9px] flex flex-col gap-[9px] text-[15px] leading-[1.6] text-charcoal">
              {aboutContent.publications.journals.map((j) => (
                <li key={j}>{j}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-[21px] pb-[56px]">
        <ConditionCTA message="Ready to schedule a consultation?" />
      </section>
    </>
  );
}
