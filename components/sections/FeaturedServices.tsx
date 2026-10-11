import servicesData from "@/data/services.json";
import type { Service } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";

const services = servicesData as Service[];
const featuredIds = ["hair-color", "hd-makeup", "bridal-makeup"];

export default function FeaturedServices() {
  const featured = featuredIds
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is Service => Boolean(s));

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="What We Do"
            title="Signature Services"
            description="A curated selection from our full menu — each appointment tailored in the room, not just on the price list."
          />
          <Button href="/services" variant="ghost">
            View Full Menu
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
