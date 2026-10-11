"use client";

import { useMemo, useState } from "react";
import makeupData from "@/data/makeup.json";
import type { MakeupItem } from "@/types";
import MakeupCard from "@/components/ui/MakeupCard";
import { cn } from "@/lib/utils";

const items = makeupData as MakeupItem[];

const FILTERS = [
  "All",
  "Bridal",
  "Party",
  "Engagement",
  "Nikah",
  "Walima",
  "Reception",
  "HD Makeup",
  "Airbrush",
  "Festive",
  "Traditional",
  "Modern",
  "Luxury Bridal",
];

export default function MakeupClient() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.categories.includes(active));
  }, [active]);

  return (
    <div>
      <div className="mb-14 flex flex-wrap gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-pill border px-5 py-2 font-body text-xs uppercase tracking-eyebrow transition-colors",
              active === filter
                ? "border-primary bg-primary text-background"
                : "border-line text-muted hover:border-primary hover:text-primary"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-body text-sm text-muted">No looks match that filter yet — try another category.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <MakeupCard key={item.id} item={item} delay={(i % 6) * 90} />
          ))}
        </div>
      )}
    </div>
  );
}
