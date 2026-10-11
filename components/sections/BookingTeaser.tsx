import { CalendarDays, MessagesSquare, Sparkles } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  { icon: MessagesSquare, title: "Tell us what you need", description: "Pick a service, or leave it open and we'll match you with the right specialist." },
  { icon: CalendarDays, title: "Choose your time", description: "Select a date and time that works, plus a preferred artist if you have one." },
  { icon: Sparkles, title: "We confirm within a day", description: "Our front desk follows up to lock in the details before your visit." },
];

export default function BookingTeaser() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Book Appointment"
          title="Three steps to your next appointment"
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 120} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-heading text-lg text-ink">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Button href="/booking" size="lg">
            Start Your Booking
          </Button>
        </div>
      </div>
    </section>
  );
}
