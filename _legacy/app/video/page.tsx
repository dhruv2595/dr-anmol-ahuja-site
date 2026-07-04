import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ConditionCTA } from "@/components/ConditionCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Doctors' Video",
  description: "Video testimonials from patients treated by Dr. Anmol Ahuja.",
};

const videoThumbnails = [images.patientCheck, images.doctorConsultation, images.consultingSurgeon, images.heroTeamCircle];

export default function VideoPage() {
  return (
    <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
      <SectionHeading eyebrow="Doctors' Video" title="Video testimonials." size="lg" />
      <p className="mt-[21px] max-w-[65ch] text-[17px] leading-[1.6] text-charcoal">
        Recorded patient testimonials are available to view during your clinic visit.
      </p>

      <div className="mt-[42px] grid grid-cols-1 gap-[21px] sm:grid-cols-2">
        {videoThumbnails.map((img, i) => (
          <div key={i} className="relative aspect-video overflow-hidden rounded-[14px] bg-linen">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-true-black/20">
              <span
                aria-hidden="true"
                className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-linen-white/90"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="#0f3e17" />
                </svg>
              </span>
            </div>
            <div className="absolute bottom-[14px] left-[14px] rounded-[999px] bg-linen-white px-[12px] py-[5px] text-[12px] font-normal text-forest-ink">
              Patient Testimonial
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[56px]">
        <ConditionCTA message="Have a question? We are here to help." />
      </div>
    </section>
  );
}
