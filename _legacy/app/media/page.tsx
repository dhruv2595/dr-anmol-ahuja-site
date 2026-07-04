import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ConditionCTA } from "@/components/ConditionCTA";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "News & Media",
  description: "Photos from conferences, medical events and professional gatherings.",
};

const gallery = [
  images.heroSurgicalTeam,
  images.heroTeamCircle,
  images.operatingTheatre,
  images.operatingTable,
  images.surgeryInProgress,
  images.consultingSurgeon,
  images.doctorConsultation,
  images.patientCheck,
  images.clinicReception,
  images.hospitalExterior,
  images.hospitalWard,
  images.diagnosticTeam,
];

export default function MediaPage() {
  return (
    <section className="mx-auto max-w-[1320px] px-[21px] py-[56px]">
      <SectionHeading eyebrow="News & Media" title="From conferences, camps and clinics." size="lg" />
      <p className="mt-[21px] max-w-[65ch] text-[17px] leading-[1.6] text-charcoal">
        A selection of moments from surgical conferences, medical events and professional gatherings
        Dr. Anmol Ahuja has taken part in.
      </p>

      <div className="mt-[42px] grid grid-cols-2 gap-[14px] sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((img, i) => (
          <div key={i} className="relative aspect-square overflow-hidden rounded-[14px] bg-linen">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-[56px]">
        <ConditionCTA message="Have a question? We are here to help." />
      </div>
    </section>
  );
}
