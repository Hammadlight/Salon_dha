"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/types";
import Lightbox from "@/components/ui/Lightbox";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function GalleryGrid({
  items,
  showFilters = false,
  limit,
}: {
  items: GalleryItem[];
  showFilters?: boolean;
  limit?: number;
}) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const list = active === "All" ? items : items.filter((i) => i.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [items, active, limit]);

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap gap-3">
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
      )}

      <div className="columns-2 gap-5 md:columns-3 [&>*]:mb-5">
        {filtered.map((item, i) => (
          <Reveal key={item.id} delay={(i % 6) * 90} className="break-inside-avoid">
            <button
              onClick={() => setLightboxIndex(i)}
              className="img-zoom group relative block w-full overflow-hidden rounded-salon shadow-card"
              style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/5" }}
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/70 to-transparent p-4 text-left text-xs text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered.map((i) => ({ src: i.image, caption: i.caption }))}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
