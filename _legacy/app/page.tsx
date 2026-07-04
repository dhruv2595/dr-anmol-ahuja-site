import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PillBadge } from "@/components/PillBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ConditionCTA } from "@/components/ConditionCTA";
import { CheckBadge } from "@/components/CheckBadge";
import { FeaturedTestimonials } from "@/components/FeaturedTestimonials";
import { ConcentricCircles, NestedCorners } from "@/components/graphics/LineArt";
import { homeContent } from "@/lib/content/home";
import { site } from "@/lib/site";
import { images, specialtyImages } from "@/lib/images";

const whyPoints = [
  "Fellowship-trained in minimal access & colorectal surgery",
  "Consultant at Sir Ganga Ram Hospital, New Delhi",
  "Laparoscopic-first — smaller incisions, less pain",
  "Published researcher in bariatric surgery",
  "Three clinics across Delhi, Noida & Roorkee",
  "Unhurried consultations, clear answers",
];

const cardTones = ["bg-mint-veil", "bg-mist-blue", "bg-sage-wash", "bg-mist-blue", "bg-mint-veil"];

export default function Home() {
  const [featured, ...supporting] = homeContent.testimonials;

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1320px] px-[21px] pt-[56px]">
        <PillBadge>{homeContent.heroEyebrow}</PillBadge>
        <h1 className="mt-[21px] max-w-[16ch] font-serif text-[52px] font-light leading-[1.03] tracking-[-0.02em] text-forest-ink md:text-[74px]">
          {homeContent.heroTitle}
        </h1>
        <div className="mt-[28px] flex flex-col gap-[28px] md:flex-row md:items-end md:justify-between">
          <p className="max-w-[54ch] text-[18px] leading-[1.5] text-charcoal">
            {homeContent.heroSubtitle}
          </p>
          <div className="flex shrink-0 flex-wrap gap-[14px]">
            <Button href="/book-an-appointment" withArrow>
              Book an Appointment
            </Button>
            <Button href="/about-us" variant="outline">
              Meet Dr. Ahuja
            </Button>
          </div>
        </div>

        <div className="mt-[42px] grid grid-cols-1 gap-[21px] md:grid-cols-[1fr_1.6fr]">
          <div className="relative hidden overflow-hidden rounded-[14px] bg-sage-wash md:block md:h-[440px]">
            <ConcentricCircles className="absolute inset-0 h-full w-full" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-mist-blue md:aspect-auto md:h-[440px]">
            <Image
              src={images.doctorConsultation.src}
              alt="Dr. Anmol Ahuja discussing a treatment plan with a patient"
              fill
              sizes="(min-width: 768px) 62vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── About the doctor ────────────────────────────────── */}
      <section className="mx-auto max-w-[1320px] px-[21px] py-[99px]">
        <div className="grid grid-cols-1 gap-[42px] lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-linen">
              <Image
                src={images.consultingSurgeon.src}
                alt="Portrait of Dr. Anmol Ahuja"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <PillBadge>Meet Your Surgeon</PillBadge>
            <h2 className="mt-[14px] font-serif text-[36px] font-light leading-[1.1] tracking-[-0.02em] text-forest-ink md:text-[48px]">
              {site.doctorName}
            </h2>
            <p className="mt-[16px] max-w-[50ch] text-[18px] leading-[1.55] text-charcoal">
              A laparoscopic, bariatric and colorectal surgeon at Sir Ganga Ram Hospital, New Delhi —
              fellowship-trained in minimal access surgery, with a laparoscopic-first approach to
              gentler recovery.
            </p>
            <div className="mt-[28px]">
              <Button href="/about-us" variant="outline" withArrow>
                Read full profile
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Specialities (bento) ────────────────────────────── */}
      <section className="bg-linen py-[99px]">
        <div className="mx-auto max-w-[1320px] px-[21px]">
          <Reveal>
            <SectionHeading eyebrow="Areas of Care" title="Five specialities, one careful approach." />
          </Reveal>
          <div className="mt-[42px] grid grid-cols-1 gap-[21px] md:grid-cols-2 lg:grid-cols-3">
            {homeContent.specialties.map((specialty, i) => {
              const specialtySlug = specialty.href.replace("/", "");
              const image = images[specialtyImages[specialtySlug] ?? "operatingTheatre"];
              const featuredCard = i === 0;
              return (
                <Reveal
                  key={specialty.title}
                  delayMs={i * 60}
                  className={featuredCard ? "md:col-span-2" : ""}
                >
                  <Link
                    href={specialty.href}
                    className={`group flex h-full overflow-hidden rounded-[14px] ${cardTones[i]} transition-transform duration-200 hover:-translate-y-[3px] ${
                      featuredCard ? "flex-col sm:flex-row" : "flex-col"
                    }`}
                  >
                    <div
                      className={`relative w-full shrink-0 ${
                        featuredCard ? "h-[200px] sm:h-auto sm:w-[45%]" : "h-[170px]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes={featuredCard ? "(min-width:1024px) 40vw, 100vw" : "(min-width:1024px) 33vw, 100vw"}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[11px] p-[24px]">
                      <h3 className="font-serif text-[24px] font-light text-forest-ink">{specialty.title}</h3>
                      <p className={`text-[15px] leading-[1.55] text-charcoal ${featuredCard ? "" : "line-clamp-4"}`}>
                        {specialty.description}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-[8px] pt-[9px] text-[15px] text-forest-ink">
                        Find out more
                        <svg width="16" height="12" viewBox="0 0 20 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-[4px]">
                          <path d="M1 7h17M12 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why choose (mist-blue band) ──────────────────────── */}
      <section className="relative overflow-hidden bg-mist-blue py-[99px]">
        <div className="relative mx-auto max-w-[1320px] px-[21px]">
          <div className="grid grid-cols-1 gap-[49px] lg:grid-cols-2 lg:gap-[70px]">
            <Reveal>
              <PillBadge tone="white">Why Patients Choose Dr. Ahuja</PillBadge>
              <h2 className="mt-[14px] max-w-[14ch] font-serif text-[36px] font-light leading-[1.1] tracking-[-0.02em] text-forest-ink md:text-[48px]">
                Experience you can trust.
              </h2>
              <p className="mt-[21px] max-w-[42ch] text-[16px] leading-[1.6] text-charcoal">
                From first consultation to recovery, your care is led personally — never handed off.
              </p>
              {/* Decorative accent — sits in normal document flow so it can
                  never overlap the checklist column. */}
              <div className="mt-[42px] hidden h-[140px] w-[220px] opacity-30 lg:block">
                <NestedCorners className="h-full w-full" />
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <ul className="grid grid-cols-1 gap-x-[42px] gap-y-[24px] sm:grid-cols-2">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-[14px]">
                    <CheckBadge size={30} />
                    <span className="pt-[3px] text-[16px] leading-[1.5] text-true-black">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────── */}
      <section className="py-[99px]">
        <div className="mx-auto max-w-[1320px] px-[21px]">
          <Reveal>
            <SectionHeading eyebrow="Patient Stories" title="Trusted by patients across Delhi NCR." />
          </Reveal>
          <div className="mt-[42px]">
            <Reveal>
              <FeaturedTestimonials featured={featured} supporting={supporting.slice(0, 3)} />
            </Reveal>
          </div>
          <div className="mt-[35px]">
            <Button href="/testimonials" variant="outline" withArrow>
              Read more patient stories
            </Button>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────────── */}
      <section className="mx-auto max-w-[1320px] px-[21px] pb-[99px]">
        <ConditionCTA />
      </section>
    </>
  );
}
