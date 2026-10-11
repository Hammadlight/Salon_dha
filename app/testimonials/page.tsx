import type { Metadata } from "next";
import { Star } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import type { Testimonial } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const testimonials = testimonialsData as Testimonial[];

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what our clients say about their hair, skin, makeup, and bridal appointments.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-background pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Client Words"
          title="Trusted, appointment after appointment"
          align="center"
          className="mx-auto"
        />

        <Reveal className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4 rounded-pill border border-line bg-surface px-8 py-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="font-body text-sm text-muted">4.9 average from 600+ Google reviews</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={(i % 6) * 90} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="https://www.google.com/maps" variant="outline">
            Read All Reviews on Google
          </Button>
        </div>
      </div>
    </div>
  );
}
