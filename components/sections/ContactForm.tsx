"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const inputClasses =
  "w-full rounded-2xl border border-line bg-background px-5 py-3.5 font-body text-sm text-ink placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Wire this up to your email or CRM endpoint — UI state is fully handled.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-salon bg-surface p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
        <h3 className="mt-5 font-heading text-xl text-ink">Message sent.</h3>
        <p className="mt-2 font-body text-sm text-muted">
          Thank you for reaching out — we typically reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-salon bg-surface p-8 shadow-card md:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <input required type="text" placeholder="Full name" className={inputClasses} />
        <input required type="email" placeholder="Email address" className={inputClasses} />
      </div>
      <input type="tel" placeholder="Phone (optional)" className={inputClasses} />
      <input type="text" placeholder="Subject" className={inputClasses} />
      <textarea rows={5} required placeholder="How can we help?" className={inputClasses} />
      <Button type="submit" size="lg" className="justify-center" showArrow={false}>
        Send Message
      </Button>
    </form>
  );
}
