"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-line rounded-salon bg-surface shadow-card">
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        return (
          <Reveal key={item.id} delay={i * 60}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg text-ink">{item.question}</span>
              <ChevronDown
                className={cn("h-5 w-5 shrink-0 text-primary transition-transform duration-300", isOpen && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden px-7 transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0">
                <p className="font-body text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
