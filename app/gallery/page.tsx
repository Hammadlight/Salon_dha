import type { Metadata } from "next";
import galleryData from "@/data/gallery.json";
import type { GalleryItem } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import GalleryGrid from "@/components/sections/GalleryGrid";

const gallery = galleryData as GalleryItem[];

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our studio gallery — bridal, hair, makeup, salon interiors, and events.",
};

export default function GalleryPage() {
  return (
    <div className="bg-background pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-content px-6">
        <SectionTitle
          eyebrow="Gallery"
          title="A look inside the studio"
          description="Bridal, hair, makeup, and the studio itself — filter by category or click any image to view it full-size."
        />
        <div className="mt-14">
          <GalleryGrid items={gallery} showFilters />
        </div>
      </div>
    </div>
  );
}
