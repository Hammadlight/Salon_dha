import Link from "next/link";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { theme } from "@/config/theme";

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/makeup", label: "Makeup Catalogue" },
  { href: "/pricing", label: "Pricing" },
  { href: "/booking", label: "Book Appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-secondary">
      <div className="mx-auto max-w-content px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <p className="font-heading text-2xl italic text-background">{theme.salonName}</p>
            <p className="mt-3 text-sm leading-relaxed text-secondary/70">{theme.tagline}</p>
            <div className="mt-6 flex gap-3">
              {theme.socialLinks.instagram && (
                <a href={theme.socialLinks.instagram} aria-label="Instagram" className="rounded-full border border-secondary/25 p-2 transition-colors hover:border-accent hover:text-accent">
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {theme.socialLinks.facebook && (
                <a href={theme.socialLinks.facebook} aria-label="Facebook" className="rounded-full border border-secondary/25 p-2 transition-colors hover:border-accent hover:text-accent">
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {theme.socialLinks.youtube && (
                <a href={theme.socialLinks.youtube} aria-label="YouTube" className="rounded-full border border-secondary/25 p-2 transition-colors hover:border-accent hover:text-accent">
                  <Youtube className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="eyebrow !text-accent">Quick Links</p>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-secondary/80 hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-accent">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-secondary/80">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${theme.contact.phone}`}>{theme.contact.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${theme.contact.email}`}>{theme.contact.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{theme.contact.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-accent">Working Hours</p>
            <ul className="mt-4 space-y-3 text-sm text-secondary/80">
              {theme.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-background/80">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-secondary/15 pt-8 text-xs text-secondary/60 md:flex-row">
          <p>© {new Date().getFullYear()} {theme.salonName}. All rights reserved.</p>
          <p>Crafted with care for every client who walks through our door.</p>
        </div>
      </div>
    </footer>
  );
}
