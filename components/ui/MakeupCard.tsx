"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Clock } from "lucide-react";
import type { MakeupItem } from "@/types";
import Button from "./Button";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export default function MakeupCard({ item, delay = 0 }: { item: MakeupItem; delay?: number }) {
  const [showAfter, setShowAfter] = useState(true);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <Reveal delay={delay} className="flex h-full flex-col overflow-hidden rounded-salon bg-surface shadow-card">
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={showAfter ? item.afterImage : item.beforeImage}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-opacity duration-500"
        />
        <button
          onClick={() => setShowAfter((v) => !v)}
          className="absolute left-4 top-4 rounded-pill bg-background/90 px-3 py-1.5 font-body text-[0.65rem] font-semibold uppercase tracking-eyebrow text-ink"
        >
          {showAfter ? "After" : "Before"} · tap to compare
        </button>
        <button
          onClick={() => setWishlisted((v) => !v)}
          aria-label="Add to wishlist"
          className="absolute right-4 top-4 rounded-full bg-background/90 p-2.5 text-ink"
        >
          <Heart className={cn("h-4 w-4", wishlisted && "fill-primary text-primary")} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap gap-1.5">
          {item.categories.slice(0, 3).map((cat) => (
            <span key={cat} className="rounded-pill bg-background px-2.5 py-1 font-body text-[0.6rem] uppercase tracking-wide text-muted">
              {cat}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-heading text-xl text-ink">{item.name}</h3>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted">{item.description}</p>

        <p className="mt-4 font-body text-xs uppercase tracking-eyebrow text-muted">Products Used</p>
        <p className="mt-1 font-body text-xs text-ink/70">{item.products.join(" · ")}</p>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-5">
          <div>
            <p className="font-heading text-2xl text-primary">${item.price}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted">
              <Clock className="h-3.5 w-3.5" /> {item.duration}
            </p>
          </div>
          <Button href={`/booking?service=${item.id}`} size="sm">
            Book Now
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
