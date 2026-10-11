import galleryData from "@/data/gallery.json";
import type { GalleryItem } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";
import GalleryGrid from "./GalleryGrid";
import Button from "@/components/ui/Button";

const gallery = galleryData as GalleryItem[];

export default function GalleryPreview() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Studio Gallery"
            title="Recent Work"
            description="A glimpse from the chair — hair, skin, makeup, and the studio in between appointments."
          />
          <Button href="/gallery" variant="ghost">
            View Full Gallery
          </Button>
        </div>
        <div className="mt-14">
          <GalleryGrid items={gallery} limit={6} />
        </div>
      </div>
    </section>
  );
}
