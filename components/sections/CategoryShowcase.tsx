import servicesData from "@/data/services.json";
import type { Service } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const services = servicesData as Service[];

type CategoryShowcaseProps = {
  category: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
  reverse?: boolean;
};

export default function CategoryShowcase({
  category,
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  reverse = false,
}: CategoryShowcaseProps) {
  const items = services.filter((s) => s.category === category).slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section className={cn("py-24 md:py-32", reverse ? "bg-surface" : "bg-background")}>
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
          <Button href={ctaHref} variant="ghost">
            {ctaLabel}
          </Button>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
