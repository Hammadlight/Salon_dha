import type { Metadata } from "next";
import pricingData from "@/data/pricing.json";
import type { PricingCategory } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";

const pricing = pricingData as PricingCategory[];

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing across hair, skin, bridal, nails, and spa services.",
};

export default function PricingPage() {
  return (
    <div className="bg-background">
      <div className="pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-content px-6">
          <SectionTitle
            eyebrow="Pricing"
            title="Transparent, appointment by appointment"
            description="Every price reflects the full appointment time listed — no rushed add-ons or surprise fees at checkout."
            align="center"
            className="mx-auto"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map((cat, i) => (
              <Reveal key={cat.category} delay={i * 100} className="rounded-salon bg-surface p-8 shadow-card">
                <h3 className="font-heading text-2xl italic text-primary">{cat.category}</h3>
                <div className="mt-6 space-y-5">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-4 border-b border-line pb-5 last:border-0 last:pb-0">
                      <div>
                        <p className="font-body text-sm font-semibold text-ink">{item.name}</p>
                        <p className="mt-0.5 font-body text-xs text-muted">{item.duration}</p>
                      </div>
                      <p className="font-heading text-lg text-ink">${item.price}</p>
                    </div>
                  ))}
                </div>
                <Button href="/booking" variant="outline" size="sm" className="mt-8 w-full justify-center">
                  Book from {cat.category}
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
