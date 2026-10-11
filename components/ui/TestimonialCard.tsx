import Image from "next/image";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import Reveal from "./Reveal";

export default function TestimonialCard({ testimonial, delay = 0 }: { testimonial: Testimonial; delay?: number }) {
  return (
    <Reveal delay={delay} className="flex h-full flex-col rounded-salon bg-background p-8 shadow-card">
      <Quote className="h-7 w-7 text-accent/60" />
      <p className="mt-4 flex-1 font-heading text-lg italic leading-relaxed text-ink">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-line pt-6">
        <div className="relative h-11 w-11 overflow-hidden rounded-full">
          <Image src={testimonial.image} alt={testimonial.name} fill sizes="44px" className="object-cover" />
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="font-body text-xs text-muted">{testimonial.service}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
