import Image from "next/image";
import { theme } from "@/config/theme";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function OurStory() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-salon shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
              alt={`Inside ${theme.salonName} studio`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionTitle
            eyebrow="Our Story"
            title="Built from one chair, grown by referral."
          />
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted">
            {theme.salonName} opened as a single styling chair in a shared
            studio, built on the idea that a great appointment is unhurried
            and specific to the person in the seat — never a template.
            Fifteen years later, the philosophy hasn&apos;t changed, even as
            the studio has grown to a full team of specialists across hair,
            skin, and makeup.
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted">
            Today, most of what fills our calendar still comes from clients
            telling a friend — which is the only kind of growth we&apos;ve
            ever really chased.
          </p>
          <Button href="/about" variant="outline" className="mt-8">
            Read Our Full Story
          </Button>
        </div>
      </div>
    </section>
  );
}
