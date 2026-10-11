"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import servicesData from "@/data/services.json";
import teamData from "@/data/team.json";
import type { Service, TeamMember } from "@/types";
import Button from "@/components/ui/Button";

const services = servicesData as Service[];
const team = teamData as TeamMember[];

const inputClasses =
  "w-full rounded-2xl border border-line bg-background px-5 py-3.5 font-body text-sm text-ink placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Wire this handler up to your booking backend (Cal.com, a CRM, or an email API).
    // The UI is fully functional; only the network call needs to be connected.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="rounded-salon bg-surface p-12 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
        <h3 className="mt-6 font-heading text-2xl text-ink">Request received.</h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-muted">
          Thank you for booking with us. Our front desk will confirm your
          appointment time by phone or email within one business day.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-8"
          showArrow={false}
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-salon bg-surface p-8 shadow-card md:grid-cols-2 md:p-12">
      <div className="md:col-span-2">
        <label className="mb-2 block font-body text-xs uppercase tracking-eyebrow text-muted">Full Name</label>
        <input required type="text" name="name" placeholder="Jane Doe" className={inputClasses} />
      </div>

      <div>
        <label className="mb-2 block font-body text-xs uppercase tracking-eyebrow text-muted">Phone</label>
        <input required type="tel" name="phone" placeholder="(555) 123-4567" className={inputClasses} />
      </div>

      <div>
        <label className="mb-2 block font-body text-xs uppercase tracking-eyebrow text-muted">Email</label>
        <input required type="email" name="email" placeholder="jane@email.com" className={inputClasses} />
      </div>

      <div>
        <label className="mb-2 block font-body text-xs uppercase tracking-eyebrow text-muted">Service</label>
        <select name="service" defaultValue={preselected} className={inputClasses}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} — ${s.price}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block font-body text-xs uppercase tracking-eyebrow text-muted">Preferred Artist</label>
        <select name="artist" className={inputClasses}>
          <option value="">No preference</option>
          {team.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name} — {member.role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block font-body text-xs uppercase tracking-eyebrow text-muted">Preferred Date</label>
        <input required type="date" name="date" className={inputClasses} />
      </div>

      <div>
        <label className="mb-2 block font-body text-xs uppercase tracking-eyebrow text-muted">Preferred Time</label>
        <input required type="time" name="time" className={inputClasses} />
      </div>

      <div className="md:col-span-2">
        <label className="mb-2 block font-body text-xs uppercase tracking-eyebrow text-muted">Notes</label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Anything we should know before your visit — allergies, inspiration photos, timing constraints."
          className={inputClasses}
        />
      </div>

      <div className="md:col-span-2">
        <Button type="submit" size="lg" className="w-full justify-center" showArrow={false}>
          {submitting ? "Submitting…" : "Confirm Appointment Request"}
        </Button>
      </div>
    </form>
  );
}
