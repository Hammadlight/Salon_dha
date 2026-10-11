import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedServices from "@/components/sections/FeaturedServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import OurStory from "@/components/sections/OurStory";
import CategoryShowcase from "@/components/sections/CategoryShowcase";
import Stats from "@/components/sections/Stats";
import MeetExperts from "@/components/sections/MeetExperts";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import InstagramFeed from "@/components/sections/InstagramFeed";
import LatestTrends from "@/components/sections/LatestTrends";
import CTA from "@/components/sections/CTA";
import BookingTeaser from "@/components/sections/BookingTeaser";
import Newsletter from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <OurStory />
      <CategoryShowcase
        category="Makeup"
        eyebrow="Featured Makeup"
        title="Makeup, built to hold"
        description="From HD to airbrush, every application is matched to your skin and the light you'll be photographed in."
        ctaHref="/makeup"
        ctaLabel="View Makeup Catalogue"
      />
      <CategoryShowcase
        category="Bridal"
        eyebrow="Bridal"
        title="Bridal Packages"
        description="Trial, wedding day, and touch-ups — coordinated around your getting-ready timeline."
        ctaHref="/services?category=Bridal"
        ctaLabel="View Bridal Services"
        reverse
      />
      <CategoryShowcase
        category="Hair"
        eyebrow="Hair"
        title="Hair Services"
        description="Cut, color, and treatment plans built around how your hair actually behaves day to day."
        ctaHref="/services?category=Hair"
        ctaLabel="View Hair Services"
      />
      <Stats />
      <MeetExperts />
      <GalleryPreview />
      <Testimonials />
      <InstagramFeed />
      <LatestTrends />
      <CTA />
      <BookingTeaser />
      <section className="bg-ink py-4">
        <div className="mx-auto max-w-content px-6">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
