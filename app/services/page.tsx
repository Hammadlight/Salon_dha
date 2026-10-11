import type { Metadata } from "next";
import { Suspense } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description: "Browse our full menu of hair, skin, bridal, makeup, nail, and spa services with transparent pricing and duration.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Our Menu"
          title="Services"
          description="Every service is booked with a specific specialist, at a pace that leaves room for a real consultation before we begin."
        />
        <div className="mt-14">
          <Suspense fallback={null}>
            <ServicesClient />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
