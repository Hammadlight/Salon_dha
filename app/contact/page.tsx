import type { Metadata } from "next";
import { Phone, Mail, MapPin, Instagram, Facebook, Music2 } from "lucide-react";
import { theme } from "@/config/theme";
import faqData from "@/data/faq.json";
import type { FaqItem } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/sections/ContactForm";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const faqs = faqData as FaqItem[];

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${theme.salonName} — phone, WhatsApp, email, location, and working hours.`,
};

export default function ContactPage() {
  return (
    <div className="bg-background pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Get in Touch"
          title="We'd love to hear from you"
          description="Reach us directly, or send a message below and our front desk will follow up within one business day."
        />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="space-y-4">
              <a href={`tel:${theme.contact.phone}`} className="flex items-center gap-4 rounded-2xl bg-surface p-5 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-body text-xs uppercase tracking-eyebrow text-muted">Call Us</p>
                  <p className="font-heading text-lg text-ink">{theme.contact.phoneDisplay}</p>
                </div>
              </a>

              <a href={`https://wa.me/${theme.contact.whatsapp}`} className="flex items-center gap-4 rounded-2xl bg-surface p-5 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-body text-xs uppercase tracking-eyebrow text-muted">WhatsApp</p>
                  <p className="font-heading text-lg text-ink">Message Us Directly</p>
                </div>
              </a>

              <a href={`mailto:${theme.contact.email}`} className="flex items-center gap-4 rounded-2xl bg-surface p-5 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-body text-xs uppercase tracking-eyebrow text-muted">Email</p>
                  <p className="font-heading text-lg text-ink">{theme.contact.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl bg-surface p-5 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-body text-xs uppercase tracking-eyebrow text-muted">Visit Us</p>
                  <p className="font-heading text-lg text-ink">{theme.contact.address}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {theme.socialLinks.instagram && (
                  <a href={theme.socialLinks.instagram} className="rounded-full border border-line p-3 text-ink hover:border-primary hover:text-primary">
                    <Instagram className="h-5 w-5" />
                  </a>
                )}
                {theme.socialLinks.facebook && (
                  <a href={theme.socialLinks.facebook} className="rounded-full border border-line p-3 text-ink hover:border-primary hover:text-primary">
                    <Facebook className="h-5 w-5" />
                  </a>
                )}
                {theme.socialLinks.tiktok && (
                  <a href={theme.socialLinks.tiktok} className="rounded-full border border-line p-3 text-ink hover:border-primary hover:text-primary">
                    <Music2 className="h-5 w-5" />
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal className="mt-8 rounded-2xl bg-surface p-6 shadow-card" delay={100}>
              <p className="font-body text-xs uppercase tracking-eyebrow text-muted">Working Hours</p>
              <ul className="mt-4 space-y-2">
                {theme.hours.map((h) => (
                  <li key={h.day} className="flex justify-between font-body text-sm text-ink">
                    <span className="text-muted">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {theme.branches && theme.branches.length > 0 && (
              <Reveal className="mt-8 space-y-3" delay={150}>
                <p className="font-body text-xs uppercase tracking-eyebrow text-muted">Our Branches</p>
                {theme.branches.map((branch) => (
                  <div key={branch.name} className="rounded-2xl border border-line p-5">
                    <p className="font-heading text-base text-ink">{branch.name}</p>
                    <p className="mt-1 font-body text-sm text-muted">{branch.address}</p>
                    <p className="mt-1 font-body text-sm text-muted">{branch.phone}</p>
                  </div>
                ))}
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
            <Reveal className="mt-8 overflow-hidden rounded-salon shadow-card" delay={100}>
              <iframe
                src={theme.contact.mapEmbedUrl}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio location map"
              />
            </Reveal>
            <div className="mt-8 flex justify-center">
              <Button href="/booking" size="lg">
                Book an Appointment Instead
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <SectionTitle eyebrow="Questions" title="Frequently Asked" align="center" className="mx-auto" />
          <div className="mx-auto mt-14 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
