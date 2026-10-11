import { Star } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import type { Testimonial } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Reveal from "@/components/ui/Reveal";

const testimonials = testimonialsData as Testimonial[];

export default function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Client Words"
          title="Trusted, appointment after appointment"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 100} />
          ))}
        </div>

        <Reveal className="mx-auto mt-14 flex max-w-md items-center justify-center gap-4 rounded-pill border border-line bg-surface px-8 py-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="font-body text-sm text-muted">
            4.9 average from 600+ Google reviews
          </p>
        </Reveal>
      </div>
    </section>
  );
}
