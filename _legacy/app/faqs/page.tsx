import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQSearch } from "@/components/FAQSearch";
import { ConditionCTA } from "@/components/ConditionCTA";
import { faqCategories } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about weight loss surgery, hernia, colorectal, proctology and laparoscopic surgery.",
};

export default function FAQsPage() {
  return (
    <section className="mx-auto max-w-[900px] px-[21px] py-[56px]">
      <SectionHeading eyebrow="Frequently Asked Questions" title="Answers before you visit." size="lg" />
      <p className="mt-[21px] max-w-[60ch] text-[17px] leading-[1.6] text-charcoal">
        Search common questions, or browse by speciality. Can&apos;t find what you need? We&apos;re a
        message away.
      </p>

      <div className="mt-[42px]">
        <FAQSearch categories={faqCategories} />
      </div>

      <div className="mt-[70px]">
        <ConditionCTA
          message="Still have a question?"
          subtext="Send a quick message on WhatsApp, or book a consultation with Dr. Ahuja."
        />
      </div>
    </section>
  );
}
