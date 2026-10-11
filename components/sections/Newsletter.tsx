"use client";

import { useState, type FormEvent } from "react";
import { Mail, Check } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your email provider (Mailchimp, Klaviyo, etc.) — form only manages UI state for now.
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col items-center gap-6 rounded-salon border border-secondary/15 bg-background/5 px-8 py-10 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <p className="font-heading text-2xl italic text-background">Beauty notes, monthly.</p>
        <p className="mt-1 font-body text-sm text-secondary/70">
          Seasonal trends, booking openings, and studio news — no spam, unsubscribe anytime.
        </p>
      </div>

      {submitted ? (
        <p className="flex items-center gap-2 rounded-pill bg-accent/20 px-6 py-3 text-sm text-accent">
          <Check className="h-4 w-4" /> You&apos;re on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
          <div className="relative flex-1">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary/50" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded-pill border border-secondary/20 bg-transparent py-3 pl-11 pr-4 text-sm text-background placeholder:text-secondary/50 focus:border-accent focus:outline-none"
            />
          </div>
          <Button type="submit" size="md" showArrow={false}>
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}
