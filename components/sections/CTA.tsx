import { theme } from "@/config/theme";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <p className="eyebrow !text-accent">Ready When You Are</p>
        <h2 className="mt-4 font-heading text-4xl italic text-background md:text-5xl">
          Let&apos;s find your next appointment.
        </h2>
        <p className="mt-5 font-body text-base text-secondary/80">
          Book online in a couple of minutes, or reach us directly on
          WhatsApp at {theme.contact.phoneDisplay} for same-week openings.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/booking" size="lg">
            Book Appointment
          </Button>
          <Button
            href={`https://wa.me/${theme.contact.whatsapp}`}
            variant="outline"
            size="lg"
            showArrow={false}
            className="!border-secondary !text-secondary hover:!bg-secondary hover:!text-ink"
          >
            Message on WhatsApp
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
