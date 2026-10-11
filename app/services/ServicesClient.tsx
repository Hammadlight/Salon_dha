"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import servicesData from "@/data/services.json";
import type { Service } from "@/types";
import ServiceCard from "@/components/ui/ServiceCard";
import { cn } from "@/lib/utils";

const services = servicesData as Service[];

export default function ServicesClient() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category") ?? "All";
  const categories = useMemo(() => ["All", ...Array.from(new Set(services.map((s) => s.category)))], []);
  const [active, setActive] = useState(initial);

  const filtered = active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-pill border px-5 py-2 font-body text-xs uppercase tracking-eyebrow transition-colors",
              active === cat
                ? "border-primary bg-primary text-background"
                : "border-line text-muted hover:border-primary hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service, i) => (
          <ServiceCard key={service.id} service={service} delay={(i % 6) * 90} />
        ))}
      </div>
    </div>
  );
}
