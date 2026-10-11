import Image from "next/image";
import { theme } from "@/config/theme";
import Button from "@/components/ui/Button";
import IndexTag from "@/components/ui/IndexTag";

export default function Hero() {
  // Splits the salon name so the last word is the colored "signature" word
  // on its own line (e.g. "Fusion by" / "Madiha"). Works for any salonName
  // set in config/theme.ts without needing to touch this component again.
  const words = theme.salonName.split(" ");
  const signatureWord = words[words.length - 1];
  const leadWords = words.slice(0, -1).join(" ");

  return (
    <section className="relative overflow-hidden bg-background pb-10 pt-32 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-content px-6">
        <div className="lg:col-span-6 lg:pr-6 animate-fadeUp">
          <h1 className="font-heading text-5xl italic leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            {leadWords}
            <br />
            <span className="not-italic text-primary">{signatureWord}</span>
          </h1>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-top gap-14 px-6 lg:grid-cols-12">
        <div className="mt-7 lg:col-span-6 lg:pr-6 animate-fadeUp">
          <IndexTag code="01" label="Est. Seattle" />
          <h2 className="mt-4 font-heading text-4xl italic leading-[1.1] text-ink md:text-5xl">
            Beauty is a
            <br />
            <span className="not-italic text-primary">quiet</span> ritual,
            <br />
            composed with you.
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-muted">
            {theme.salonName} is a private studio for hair, skin, and makeup —
            unhurried appointments, considered detail, and results built to
            last well past the mirror.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/booking" size="lg">
              Reserve Your Visit
            </Button>
            <Button href="/services" variant="outline" size="lg" showArrow={false}>
              Explore Services
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6 -translate-y-24">
          <div className="relative">
            <div className="img-zoom relative aspect-[4/5] w-full overflow-hidden rounded-salon shadow-soft animate-fadeIn">
              <Image
                src="/images/saloni.jpg"
                alt="Stylist finishing a client's hair in a sunlit studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden w-56 rounded-3xl bg-surface p-6 shadow-card md:block">
              <p className="font-heading text-3xl italic text-primary">4.8/5</p>
              <div className="gold-divider my-3" />
              <p className="font-body text-xs leading-relaxed text-muted">
                Average client rating across 24+ Google reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
