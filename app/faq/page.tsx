import type { Metadata } from "next";
import faqData from "@/data/faq.json";
import type { FaqItem } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CTA from "@/components/sections/CTA";

const faqs = faqData as FaqItem[];

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about booking, cancellations, on-location services, and payments.",
};

export default function FaqPage() {
  return (
    <div className="bg-background">
      <div className="pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-3xl px-6">
          <SectionTitle
            eyebrow="Support"
            title="Frequently Asked Questions"
            description="Can't find what you're looking for? Reach out directly and our front desk will help."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
