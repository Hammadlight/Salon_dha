# Luxe Salon — Reusable Luxury Beauty Salon Website

A premium, fully reusable Next.js website template for high-end beauty
salons — hair, skin, bridal, makeup, spa, and more. Rebrand it for a new
salon by editing **one config file and a handful of JSON files** — no
component code needs to change.

---

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens driven by CSS variables)
- **Framer-Motion-free** scroll reveals (lightweight `IntersectionObserver`-based `Reveal` component — no extra animation dependency required at runtime, though `framer-motion` is installed if you want to extend animations further)
- **Lucide** icons
- Image galleries, lightbox, filters, forms — all built from scratch, dependency-light

---

## Getting Started

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**.

To build for production:

```bash
npm run build
npm run start
```

---

## Rebranding for a New Salon (no code changes required)

### 1. Edit `config/theme.ts`

This is the single source of truth for branding. Change:

- `salonName`, `tagline`
- `logo` (swap in your own files under `public/logos/`)
- `colors.primary` / `secondary` / `accent` / `background` / `surface` / `text`
- `fonts` (see step 2 if you want different Google Fonts)
- `contact` (phone, email, WhatsApp number, address, Google Maps embed URL)
- `hours`, `socialLinks`, `branches`

Every page reads from this file automatically — colors re-theme the entire
site because they're injected as CSS variables by
`components/layout/ThemeProvider.tsx`.

### 2. (Optional) Change fonts

Fonts are loaded in `app/layout.tsx` via `next/font/google`. Swap
`Cormorant_Garamond` / `Manrope` for any other Google Font, update the
`variable` names to match `config/theme.ts` if you rename them.

### 3. Edit the JSON content files in `/data`

| File | Powers |
|---|---|
| `services.json` | Services page + homepage service sections |
| `makeup.json` | Makeup Catalogue page |
| `team.json` | Team page + homepage "Meet the Team" |
| `testimonials.json` | Testimonials page + homepage reviews |
| `gallery.json` | Gallery page + homepage gallery preview |
| `faq.json` | FAQ page + Contact page FAQ section |
| `pricing.json` | Pricing page |
| `blog.json` | Journal (blog) page |

Add, remove, or edit entries freely — pages render however many items exist.
Each `service`/`makeup` item includes a two-letter `code` (e.g. `HR`, `BR`,
`MU`) used by the site's signature "index tag" — the small pill badge shown
on cards and the hero. If you add a new category, give it a short, sensible
code.

### 4. Swap images

Replace the Unsplash placeholder URLs in the JSON files and section
components with your own photography (or add files to `public/images/` and
reference them as `/images/your-photo.jpg`). All images use `next/image`
for automatic optimization and lazy loading.

### 5. Logo

Drop your logo files into `public/logos/` and point `config/theme.ts ->
logo.light / logo.dark` at them. The Navbar currently renders the salon
name as styled text (`theme.salonName`) for simplicity — swap in an
`<Image>` referencing `theme.logo.light` in `components/layout/Navbar.tsx`
if you'd rather show a logo mark.

---

## Wiring Up Real Backends

Two forms are UI-complete but intentionally left backend-agnostic:

- **`components/sections/BookingForm.tsx`** — the `/booking` page and
  `?service=` deep links from service/makeup cards. Replace the
  `setTimeout` in `handleSubmit` with a real request to your booking
  system (Cal.com, a CRM, or your own API route).
- **`components/sections/ContactForm.tsx`** — the Contact page form.
  Same pattern — wire `handleSubmit` to your email/CRM endpoint.
- **`components/sections/Newsletter.tsx`** — wire up to Mailchimp,
  Klaviyo, or your provider of choice.

---

## Project Structure

```
app/                  Next.js App Router pages (one folder per route)
components/
  layout/              Navbar, Footer, ThemeProvider
  sections/            Full page sections (Hero, CTA, GalleryGrid, etc.)
  ui/                  Small reusable building blocks (Button, Card, Reveal, etc.)
config/theme.ts        <-- Single branding config file
data/*.json             <-- Editable content, no code changes needed
lib/utils.ts            Shared helpers (cn, WhatsApp link builder)
types/index.ts           Shared TypeScript types for all JSON content
public/images, public/logos   Static assets
```

---

## Pages Included

Home · About · Services (filterable) · Makeup Catalogue (filterable,
before/after, wishlist) · Gallery (masonry, filterable, lightbox) ·
Pricing · Team · Testimonials · FAQ · Blog/Journal · Contact (map, hours,
branches, form) · Booking (full appointment form)

---

## Design Notes

- Colors, spacing, and radii are defined as CSS variables and Tailwind
  tokens — see `app/globals.css` and `tailwind.config.ts`.
- The signature visual device is the **index tag** (`components/ui/IndexTag.tsx`)
  — a two-letter category code in a pill, echoing a magazine contents page,
  used instead of generic "01 / 02 / 03" numbering throughout the site.
- Animations are intentionally restrained: fade-up reveals on scroll, image
  zoom on hover, and smooth hover states on buttons and cards. Reduced-motion
  preferences are respected (`prefers-reduced-motion` in `globals.css`).
- Fully responsive from mobile through desktop; test breakpoints at 375px,
  768px, 1024px, and 1440px.

---

## Notes on Production Readiness

- Update `app/sitemap.ts` and `app/robots.ts` with your real production
  domain before deploying.
- Replace the Google Maps embed URL in `config/theme.ts` with your salon's
  actual location.
- Replace Unsplash placeholder photography before launch — it's licensed
  for placeholder use only.
