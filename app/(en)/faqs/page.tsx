import type { Metadata } from "next";
import { PillBadge } from "@/components/PillBadge";
import { FAQExplorer } from "@/components/FAQExplorer";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { faqCategories } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "FAQs — Surgery Questions Answered",
  description:
    "Answers to common questions about weight-loss surgery, hernia repair, gallbladder removal, piles treatment and recovery — from Dr. Anmol Ahuja, Delhi NCR.",
  alternates: { canonical: "/faqs" },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqCategories.flatMap((c) =>
            c.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          ),
        }}
      />

      <section className="container-site pt-5 md:pt-8">
        <div className="rounded-card bg-mist px-6 py-12 text-center md:px-12 md:py-14">
          <PillBadge tone="white">FAQs</PillBadge>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-heading-lg text-forest">
            Your questions, answered plainly
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-body text-charcoal">
            Search the doubts patients ask most — about surgery, recovery,
            eating, and getting back to life.
          </p>
        </div>
      </section>

      <section className="container-site pb-20 pt-6 md:pb-28">
        <FAQExplorer />
      </section>

      <CtaBand
        title="Question not on the list?"
        sub="Ask it in a consultation — no question is too small when it's your body."
      />
    </>
  );
}
