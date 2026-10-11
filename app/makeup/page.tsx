import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import MakeupClient from "./MakeupClient";

export const metadata: Metadata = {
  title: "Makeup Catalogue",
  description: "Browse bridal, party, and festive makeup looks with before/after comparisons, products used, pricing, and duration.",
};

export default function MakeupPage() {
  return (
    <div className="bg-background pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Makeup Catalogue"
          title="Find your look"
          description="Filter by occasion or style to browse looks our artists have created, each with the products used and a before/after comparison."
        />
        <div className="mt-14">
          <MakeupClient />
        </div>
      </div>
    </div>
  );
}
